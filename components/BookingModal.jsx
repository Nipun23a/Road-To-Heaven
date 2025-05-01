'use client'

import {loadStripe} from "@stripe/stripe-js";
import { CardElement, Elements, useStripe, useElements } from '@stripe/react-stripe-js';
import {montserrat} from "@/app/layout";
import { Calendar as CalendarIcon, Clock, UserCircle, X, Check, ChevronDown, CreditCard } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import {useState,useEffect} from "react";
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)

const PaymentForm = ({ amount, onPaymentSuccess, onPaymentError }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [isProcessing, setIsProcessing] = useState(false);
    const [cardError, setCardError] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        setIsProcessing(true);
        setCardError(null);

        try {
            const response = await fetch('/api/create-payment-intent', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    amount: amount * 100, // Stripe expects amount in cents
                }),
            });

            if (!response.ok) {
                throw new Error('Payment setup failed');
            }

            const { clientSecret } = await response.json();

            // Complete payment with Stripe
            const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                    card: elements.getElement(CardElement),
                },
            });

            if (error) {
                setCardError(error.message);
                onPaymentError(error.message);
            } else if (paymentIntent.status === 'succeeded') {
                onPaymentSuccess(paymentIntent);
            }
        } catch (err) {
            setCardError('An error occurred while processing your payment.');
            onPaymentError(err.message);
        } finally {
            setIsProcessing(false);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-6">
                <label className={`${montserrat?.className || ''} block text-sm font-medium text-gray-700 mb-2`}>
                    Card Details
                </label>
                <div className="p-4 border border-gray-300 rounded-lg">
                    <CardElement
                        options={{
                            style: {
                                base: {
                                    fontSize: '16px',
                                    color: '#424770',
                                    '::placeholder': {
                                        color: '#aab7c4',
                                    },
                                },
                                invalid: {
                                    color: '#9e2146',
                                },
                            },
                        }}
                    />
                </div>
                {cardError && (
                    <div className="mt-2 text-sm text-red-600">
                        {cardError}
                    </div>
                )}
            </div>

            <button
                type="submit"
                disabled={!stripe || isProcessing}
                className={`${montserrat?.className || ''} w-full px-5 py-3 rounded-lg flex items-center justify-center bg-teal-500 text-white hover:bg-teal-600 transition-colors duration-200 disabled:bg-gray-300 disabled:cursor-not-allowed`}
            >
                {isProcessing ? (
                    <>Processing...</>
                ) : (
                    <>
                        <CreditCard size={18} className="mr-2" />
                        Pay ${amount}
                    </>
                )}
            </button>
        </form>
    );
};

export default function BookingModal ({isOpen,onClose,experience}) {
    const [bookingStep, setBookingStep] = useState(1);
    const [bookingDate, setBookingDate] = useState('');
    const [bookingTime, setBookingTime] = useState('');
    const [participants, setParticipants] = useState(1);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [specialRequests, setSpecialRequests] = useState('');
    const [bookingReference, setBookingReference] = useState('');
    const [paymentError, setPaymentError] = useState(null);

    // Available time slots - in a real app, these would probably be fetched based on date
    const availableTimes = ['9:00 AM', '11:00 AM', '2:00 PM', '4:00 PM'];

    // Price calculation
    const basePrice = 89;
    const serviceFee = 15;
    const totalPrice = (basePrice * participants) + serviceFee;

    // Animation variants
    const overlayVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.3 } }
    };

    const modalVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
        exit: { opacity: 0, y: 50, transition: { duration: 0.2 } }
    };

    // Check availability when date changes
    useEffect(() => {
        if (bookingDate) {
            checkAvailability(bookingDate);
        }
    }, [bookingDate]);

    const checkAvailability = async (date) => {
        try {
            const response = await fetch(`/api/availability?date=${date}&experienceId=${experience?.id}`);
            if (response.ok) {
                // Update available times based on response
                // For this example, we'll keep using the static list
            }
        } catch (error) {
            console.error('Error checking availability:', error);
        }
    };

    // Form validation
    const isDateTimeValid = bookingDate && bookingTime;
    const isPersonalInfoValid = name && email && phone;

    const handleContinue = () => {
        if (bookingStep === 1 && isDateTimeValid) {
            setBookingStep(2);
        } else if (bookingStep === 2 && isPersonalInfoValid) {
            setBookingStep(3);
        }
    };

    const handlePaymentSuccess = async (paymentIntent) => {
        try {
            // Create booking in database
            const response = await fetch('/api/bookings', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    experienceId: experience?.id,
                    experienceTitle: experience?.title,
                    bookingDate,
                    bookingTime,
                    participants,
                    customer: {
                        name,
                        email,
                        phone
                    },
                    specialRequests,
                    payment: {
                        amount: totalPrice,
                        paymentIntentId: paymentIntent.id,
                        status: paymentIntent.status
                    }
                }),
            });

            if (!response.ok) {
                throw new Error('Failed to save booking');
            }

            const bookingData = await response.json();
            setBookingReference(bookingData.bookingReference);

            // Move to success step
            setBookingStep(4);

            // Reset form after delay when modal closes
            setTimeout(() => {
                if (!isOpen) {
                    resetForm();
                }
            }, 300);
        } catch (error) {
            console.error('Error saving booking:', error);
            setPaymentError('Your payment was successful, but we had trouble saving your booking. Please contact support.');
        }
    };

    const handlePaymentError = (errorMessage) => {
        setPaymentError(errorMessage);
    };

    const resetForm = () => {
        setBookingStep(1);
        setBookingDate('');
        setBookingTime('');
        setParticipants(1);
        setName('');
        setEmail('');
        setPhone('');
        setSpecialRequests('');
        setBookingReference('');
        setPaymentError(null);
    };

    const handleClose = () => {
        onClose();
        // Don't reset immediately to allow animations to complete
        setTimeout(resetForm, 300);
    };

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50"
                    variants={overlayVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    onClick={handleClose}
                >
                    <motion.div
                        className="bg-white rounded-xl shadow-2xl w-full max-w-md overflow-hidden"
                        variants={modalVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        onClick={e => e.stopPropagation()}
                    >
                        {/* Header */}
                        <div className="relative p-6 bg-gradient-to-r from-teal-500 to-teal-600">
                            <button
                                onClick={handleClose}
                                className="absolute top-4 right-4 text-white hover:bg-white hover:bg-opacity-20 rounded-full p-1 transition-colors duration-200"
                            >
                                <X size={24} />
                            </button>

                            <h2 className={`${montserrat?.className || ''} text-2xl font-bold text-white`}>
                                {bookingStep === 4 ? 'Booking Confirmed!' : `Book ${experience?.title || 'Experience'}`}
                            </h2>

                            {bookingStep !== 4 && (
                                <div className="flex mt-6 mb-2">
                                    <div className="flex items-center">
                                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${bookingStep >= 1 ? 'bg-white text-teal-600' : 'bg-white bg-opacity-30 text-white'}`}>
                                            1
                                        </div>
                                        <span className={`ml-2 text-sm ${bookingStep >= 1 ? 'text-white' : 'text-white text-opacity-70'}`}>Date & Time</span>
                                    </div>
                                    <div className="mx-1 border-t border-white border-opacity-30 h-0 flex-grow self-center"></div>
                                    <div className="flex items-center">
                                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${bookingStep >= 2 ? 'bg-white text-teal-600' : 'bg-white bg-opacity-30 text-white'}`}>
                                            2
                                        </div>
                                        <span className={`ml-2 text-sm ${bookingStep >= 2 ? 'text-white' : 'text-white text-opacity-70'}`}>Details</span>
                                    </div>
                                    <div className="mx-1 border-t border-white border-opacity-30 h-0 flex-grow self-center"></div>
                                    <div className="flex items-center">
                                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${bookingStep >= 3 ? 'bg-white text-teal-600' : 'bg-white bg-opacity-30 text-white'}`}>
                                            3
                                        </div>
                                        <span className={`ml-2 text-sm ${bookingStep >= 3 ? 'text-white' : 'text-white text-opacity-70'}`}>Payment</span>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Content */}
                        <div className="p-6">
                            {bookingStep === 1 && (
                                <div className="space-y-4">
                                    {/* Date Selection */}
                                    <div>
                                        <label className={`${montserrat?.className || ''} block text-sm font-medium text-gray-700 mb-1`}>
                                            Select Date
                                        </label>
                                        <div className="relative">
                                            <input
                                                type="date"
                                                value={bookingDate}
                                                onChange={(e) => setBookingDate(e.target.value)}
                                                min={new Date().toISOString().split('T')[0]}
                                                className="block w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-teal-500 focus:ring-teal-500"
                                            />
                                            <CalendarIcon className="pointer-events-none absolute right-4 top-3.5 h-5 w-5 text-gray-400" />
                                        </div>
                                    </div>

                                    {/* Time Selection */}
                                    <div>
                                        <label className={`${montserrat?.className || ''} block text-sm font-medium text-gray-700 mb-1`}>
                                            Select Time
                                        </label>
                                        <div className="grid grid-cols-2 gap-2">
                                            {availableTimes.map((time) => (
                                                <button
                                                    key={time}
                                                    type="button"
                                                    onClick={() => setBookingTime(time)}
                                                    className={`flex items-center justify-center rounded-lg border px-4 py-2 ${
                                                        bookingTime === time
                                                            ? 'bg-teal-50 border-teal-500 text-teal-700'
                                                            : 'border-gray-300 hover:bg-gray-50 text-gray-700'
                                                    }`}
                                                >
                                                    <Clock size={16} className="mr-2" />
                                                    {time}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Participants */}
                                    <div>
                                        <label className={`${montserrat?.className || ''} block text-sm font-medium text-gray-700 mb-1`}>
                                            Number of Participants
                                        </label>
                                        <div className="relative">
                                            <select
                                                value={participants}
                                                onChange={(e) => setParticipants(Number(e.target.value))}
                                                className="block w-full appearance-none rounded-lg border border-gray-300 px-4 py-3 pr-10 focus:border-teal-500 focus:ring-teal-500"
                                            >
                                                {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                                                    <option key={num} value={num}>
                                                        {num} {num === 1 ? 'Person' : 'People'}
                                                    </option>
                                                ))}
                                            </select>
                                            <ChevronDown className="pointer-events-none absolute right-4 top-3.5 h-5 w-5 text-gray-400" />
                                        </div>
                                    </div>

                                    {/* Price Estimation */}
                                    {bookingDate && bookingTime && (
                                        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                                            <h3 className={`${montserrat?.className || ''} font-medium text-gray-900`}>Estimated Price</h3>
                                            <div className="mt-2 flex justify-between text-sm">
                                                <span className="text-gray-500">Experience fee × {participants}</span>
                                                <span className="font-medium text-gray-900">${(basePrice * participants).toFixed(2)}</span>
                                            </div>
                                            <div className="mt-1 flex justify-between text-sm">
                                                <span className="text-gray-500">Service fee</span>
                                                <span className="font-medium text-gray-900">${serviceFee.toFixed(2)}</span>
                                            </div>
                                            <div className="mt-3 pt-3 border-t border-gray-200 flex justify-between">
                                                <span className={`${montserrat?.className || ''} font-medium text-gray-900`}>Total</span>
                                                <span className={`${montserrat?.className || ''} font-bold text-teal-600`}>
                          ${totalPrice.toFixed(2)}
                        </span>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            )}

                            {bookingStep === 2 && (
                                <div className="space-y-4">
                                    {/* Booking Summary */}
                                    <div className="flex items-center p-3 bg-gray-50 rounded-lg mb-4">
                                        <div className="mr-3 bg-teal-100 p-2 rounded-md">
                                            <CalendarIcon className="h-5 w-5 text-teal-600" />
                                        </div>
                                        <div>
                                            <p className={`${montserrat?.className || ''} text-sm font-medium text-gray-900`}>
                                                {new Date(bookingDate).toLocaleDateString('en-US', {
                                                    weekday: 'long',
                                                    month: 'long',
                                                    day: 'numeric'
                                                })}
                                            </p>
                                            <p className="text-xs text-gray-500">{bookingTime} • {participants} {participants === 1 ? 'Person' : 'People'}</p>
                                        </div>
                                    </div>

                                    {/* Personal Information */}
                                    <div>
                                        <label className={`${montserrat?.className || ''} block text-sm font-medium text-gray-700 mb-1`}>
                                            Your Name
                                        </label>
                                        <input
                                            type="text"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            placeholder="Full Name"
                                            className="block w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-teal-500 focus:ring-teal-500"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label className={`${montserrat?.className || ''} block text-sm font-medium text-gray-700 mb-1`}>
                                            Email Address
                                        </label>
                                        <input
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="your@email.com"
                                            className="block w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-teal-500 focus:ring-teal-500"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label className={`${montserrat?.className || ''} block text-sm font-medium text-gray-700 mb-1`}>
                                            Phone Number
                                        </label>
                                        <input
                                            type="tel"
                                            value={phone}
                                            onChange={(e) => setPhone(e.target.value)}
                                            placeholder="+1 (555) 123-4567"
                                            className="block w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-teal-500 focus:ring-teal-500"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label className={`${montserrat?.className || ''} block text-sm font-medium text-gray-700 mb-1`}>
                                            Special Requests (Optional)
                                        </label>
                                        <textarea
                                            value={specialRequests}
                                            onChange={(e) => setSpecialRequests(e.target.value)}
                                            placeholder="Any dietary requirements or special accommodations..."
                                            rows={3}
                                            className="block w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-teal-500 focus:ring-teal-500"
                                        />
                                    </div>
                                </div>
                            )}

                            {bookingStep === 3 && (
                                <div className="space-y-4">
                                    {/* Payment Summary */}
                                    <div className="p-4 bg-gray-50 rounded-lg mb-4">
                                        <h3 className={`${montserrat?.className || ''} font-medium text-gray-900 mb-3`}>Booking Summary</h3>

                                        <div className="flex items-center mb-3">
                                            <div className="mr-3 bg-teal-100 p-2 rounded-md">
                                                <CalendarIcon className="h-5 w-5 text-teal-600" />
                                            </div>
                                            <div>
                                                <p className={`${montserrat?.className || ''} text-sm font-medium text-gray-900`}>
                                                    {new Date(bookingDate).toLocaleDateString('en-US', {
                                                        weekday: 'long',
                                                        month: 'long',
                                                        day: 'numeric'
                                                    })}
                                                </p>
                                                <p className="text-xs text-gray-500">{bookingTime} • {participants} {participants === 1 ? 'Person' : 'People'}</p>
                                            </div>
                                        </div>

                                        <div className="border-t border-gray-200 pt-3">
                                            <div className="flex justify-between text-sm mb-1">
                                                <span className="text-gray-500">Experience fee × {participants}</span>
                                                <span className="font-medium text-gray-900">${(basePrice * participants).toFixed(2)}</span>
                                            </div>
                                            <div className="flex justify-between text-sm">
                                                <span className="text-gray-500">Service fee</span>
                                                <span className="font-medium text-gray-900">${serviceFee.toFixed(2)}</span>
                                            </div>
                                            <div className="mt-3 pt-3 border-t border-gray-200 flex justify-between">
                                                <span className={`${montserrat?.className || ''} font-medium text-gray-900`}>Total</span>
                                                <span className={`${montserrat?.className || ''} font-bold text-teal-600`}>
                          ${totalPrice.toFixed(2)}
                        </span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Stripe Payment Form */}
                                    <div>
                                        <h3 className={`${montserrat?.className || ''} text-lg font-medium text-gray-900 mb-4`}>Payment Details</h3>
                                        <Elements stripe={stripePromise}>
                                            <PaymentForm
                                                amount={totalPrice}
                                                onPaymentSuccess={handlePaymentSuccess}
                                                onPaymentError={handlePaymentError}
                                            />
                                        </Elements>

                                        {paymentError && (
                                            <div className="mt-4 p-3 bg-red-50 border border-red-200 text-red-700 rounded-lg text-sm">
                                                {paymentError}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}

                            {bookingStep === 4 && (
                                <div className="text-center py-6">
                                    <div className="mx-auto w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                                        <Check size={32} className="text-teal-600" />
                                    </div>
                                    <h3 className={`${montserrat?.className || ''} text-xl font-bold text-gray-900 mb-2`}>
                                        Booking Confirmed!
                                    </h3>
                                    <p className="text-gray-600 mb-4">
                                        We've sent a confirmation email to {email} with all the details.
                                    </p>
                                    <div className="text-sm text-gray-500">
                                        Booking reference: <span className="font-mono font-medium">{bookingReference || `BK-${Math.random().toString(36).substring(2, 10).toUpperCase()}`}</span>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Footer */}
                        {bookingStep !== 3 && bookingStep !== 4 && (
                            <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 flex justify-between">
                                {bookingStep === 1 ? (
                                    <button
                                        onClick={handleClose}
                                        className={`${montserrat?.className || ''} px-5 py-2 text-gray-700 hover:text-gray-900 transition-colors duration-200`}
                                    >
                                        Cancel
                                    </button>
                                ) : (
                                    <button
                                        onClick={() => setBookingStep(bookingStep - 1)}
                                        className={`${montserrat?.className || ''} px-5 py-2 text-gray-700 hover:text-gray-900 transition-colors duration-200`}
                                    >
                                        Back
                                    </button>
                                )}
                                <button
                                    onClick={handleContinue}
                                    disabled={(bookingStep === 1 && !isDateTimeValid) || (bookingStep === 2 && !isPersonalInfoValid)}
                                    className={`${montserrat?.className || ''} px-5 py-2 rounded-lg bg-teal-500 text-white hover:bg-teal-600 transition-colors duration-200 disabled:bg-gray-300 disabled:cursor-not-allowed`}
                                >
                                    Continue
                                </button>
                            </div>
                        )}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}