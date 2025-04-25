'use client'
import {useEffect, useState} from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users, DollarSign, Plane, Hotel, Clock, MapPin, Heart } from 'lucide-react';
import Image from 'next/image';
import {montserrat,whisper} from "@/app/layout";
import axios from "axios";
import { useRouter } from "next/navigation"; // Updated import for Next.js 13+

// Animation variants
const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const staggerContainer = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2
        }
    }
};

export default function TravelPlannerForm() {
    // Properly use the router hook at the top level of the component
    const router = useRouter();

    // Form state
    const [formData, setFormData] = useState({
        tripType: 'solo',
        budget: '',
        budgetType: 'standard',
        arrivalDate: '',
        departureDate: '',
        nights: '',
        originCountry: '',
        includeFlights: false,
        includeHotels: true,
        activities: []
    });

    const [currentStep, setCurrentStep] = useState(1);
    const totalSteps = 4;

    // Handle input changes
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    // Handle activity selection
    const handleActivityToggle = (activity) => {
        setFormData(prev => {
            if (prev.activities.includes(activity)) {
                return {
                    ...prev,
                    activities: prev.activities.filter(a => a !== activity)
                };
            } else {
                return {
                    ...prev,
                    activities: [...prev.activities, activity]
                };
            }
        });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Form data submitted:", formData);

        try {
            const response = await axios.post('/api/plan-trip', formData);
            alert("Thank you! We'll create your personalized Sri Lanka itinerary shortly.");

            const planData = {
                plan: response.data.plan,
                formData: formData
            };

            localStorage.setItem('tripPlan', JSON.stringify(planData));

            // Correctly navigate using the router
            router.push('/result');
        } catch (error) {
            console.error('Error: ', error);
            alert('Failed to generate the itinerary');
        }
    };

    // Function to go to next step
    const nextStep = () => {
        if (currentStep < totalSteps) {
            setCurrentStep(prev => prev + 1);
        }
    };

    // Function to go to previous step
    const prevStep = () => {
        if (currentStep > 1) {
            setCurrentStep(prev => prev - 1);
        }
    };

    return (
        <>
            {/* Hero Section */}
            <div className="relative w-full h-screen overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0">
                    <Image
                        src="/images/about-hero.jpg"
                        alt="Sri Lanka landscape"
                        fill
                        priority
                        className="object-cover brightness-50"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70"></div>
                </div>

                {/* Content */}
                <div className="relative h-full flex flex-col items-center justify-center text-center px-4 max-w-6xl mx-auto">
                    <motion.h1
                        initial={{opacity: 0, y: 30}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.8}}
                        className={`${whisper.className} text-7xl md:text-8xl lg:text-9xl text-white mb-6`}
                    >
                        Plan Your Sri Lanka Adventure
                    </motion.h1>

                    <motion.p
                        initial={{opacity: 0, y: 30}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.8, delay: 0.2}}
                        className={`${montserrat.className} text-xl md:text-2xl text-white/90 max-w-3xl mb-8`}
                    >
                        Let our AI Travel Planner create your perfect personalized itinerary based on your preferences and budget
                    </motion.p>

                    <motion.div
                        initial={{opacity: 0, y: 30}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.8, delay: 0.4}}
                    >
                        <button
                            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
                            className={`${montserrat.className} bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-full text-lg font-semibold flex items-center transition-all duration-300 hover:shadow-lg`}>
                            Start Planning
                            <Calendar className="ml-2 h-5 w-5"/>
                        </button>
                    </motion.div>
                </div>

                {/* Scroll indicator */}
                <motion.div
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{delay: 1, duration: 0.6}}
                >
                    <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
                        <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
                    </div>
                </motion.div>
            </div>

            {/* Form Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: true, margin: "-100px"}}
                        variants={staggerContainer}
                        className="max-w-4xl mx-auto"
                    >
                        <motion.div variants={fadeInUp} className="text-center mb-16">
                            <h2 className={`${whisper.className} text-5xl md:text-6xl text-teal-600 mb-4`}>
                                Your Sri Lanka Journey
                            </h2>
                            <div className="w-20 h-1 bg-teal-500 mx-auto mb-8"></div>
                            <p className={`${montserrat.className} text-xl text-gray-700 max-w-3xl mx-auto`}>
                                Tell us about your dream vacation, and our AI will craft the perfect itinerary just for you
                            </p>
                        </motion.div>

                        {/* Progress indicator */}
                        <motion.div variants={fadeInUp} className="mb-12">
                            <div className="flex items-center justify-between max-w-2xl mx-auto">
                                {[1, 2, 3, 4].map(step => (
                                    <div key={step} className="flex flex-col items-center">
                                        <div
                                            className={`w-10 h-10 rounded-full flex items-center justify-center text-white ${
                                                step === currentStep ? 'bg-teal-500' :
                                                    step < currentStep ? 'bg-teal-700' : 'bg-gray-300'
                                            }`}
                                        >
                                            {step < currentStep ? '✓' : step}
                                        </div>
                                        <div className={`text-sm mt-2 ${step === currentStep ? 'text-teal-500 font-medium' : 'text-gray-500'}`}>
                                            {step === 1 && 'Basics'}
                                            {step === 2 && 'Dates'}
                                            {step === 3 && 'Budget'}
                                            {step === 4 && 'Preferences'}
                                        </div>
                                    </div>
                                ))}

                                <div className="absolute left-0 right-0 h-1 top-5 -z-10">
                                    <div className="h-full bg-gray-200 mx-auto max-w-2xl">
                                        <div
                                            className="h-full bg-teal-500 transition-all duration-300"
                                            style={{ width: `${((currentStep - 1) / (totalSteps - 1)) * 100}%` }}
                                        ></div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Form */}
                        <motion.div variants={fadeInUp}>
                            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg">

                                {/* Step 1: Basic Information */}
                                {currentStep === 1 && (
                                    <div className="space-y-6">
                                        <h3 className={`${montserrat.className} text-2xl font-bold text-gray-800 mb-6`}>
                                            Tell us about yourself
                                        </h3>

                                        <div className="mb-6">
                                            <label className={`${montserrat.className} block text-gray-700 font-medium mb-2`}>
                                                Who are you traveling with?
                                            </label>
                                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                                {['solo', 'couple', 'family', 'friends', 'group'].map(type => (
                                                    <div
                                                        key={type}
                                                        onClick={() => setFormData(prev => ({ ...prev, tripType: type }))}
                                                        className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                                                            formData.tripType === type
                                                                ? 'border-teal-500 bg-teal-50'
                                                                : 'border-gray-200 hover:border-teal-200'
                                                        }`}
                                                    >
                                                        <Users className="h-6 w-6 mx-auto mb-2 text-teal-500" />
                                                        <div className="text-center capitalize">{type}</div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="mb-6">
                                            <label className={`${montserrat.className} block text-gray-700 font-medium mb-2`}>
                                                Where are you traveling from?
                                            </label>
                                            <input
                                                type="text"
                                                name="originCountry"
                                                value={formData.originCountry}
                                                onChange={handleChange}
                                                placeholder="Country of origin"
                                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                                                required
                                            />
                                        </div>

                                        <div className="mb-6">
                                            <label className={`${montserrat.className} block text-gray-700 font-medium mb-2`}>
                                                How many nights do you plan to stay?
                                            </label>
                                            <input
                                                type="number"
                                                name="nights"
                                                value={formData.nights}
                                                onChange={handleChange}
                                                min="1"
                                                max="30"
                                                placeholder="Number of nights"
                                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                                                required
                                            />
                                        </div>
                                    </div>
                                )}

                                {/* Step 2: Dates */}
                                {currentStep === 2 && (
                                    <div className="space-y-6">
                                        <h3 className={`${montserrat.className} text-2xl font-bold text-gray-800 mb-6`}>
                                            When are you planning to visit?
                                        </h3>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div>
                                                <label className={`${montserrat.className} block text-gray-700 font-medium mb-2`}>
                                                    Arrival Date
                                                </label>
                                                <div className="relative">
                                                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                                                    <input
                                                        type="date"
                                                        name="arrivalDate"
                                                        value={formData.arrivalDate}
                                                        onChange={handleChange}
                                                        className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                                                        required
                                                    />
                                                </div>
                                            </div>

                                            <div>
                                                <label className={`${montserrat.className} block text-gray-700 font-medium mb-2`}>
                                                    Departure Date
                                                </label>
                                                <div className="relative">
                                                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                                                    <input
                                                        type="date"
                                                        name="departureDate"
                                                        value={formData.departureDate}
                                                        onChange={handleChange}
                                                        className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                                                        required
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="pt-4">
                                            <p className={`${montserrat.className} text-sm text-gray-500 italic`}>
                                                Pro tip: Sri Lanka's dry season varies by region. The southwest experiences dry weather from December to March, while the northeast is driest from May to September.
                                            </p>
                                        </div>
                                    </div>
                                )}

                                {/* Step 3: Budget */}
                                {currentStep === 3 && (
                                    <div className="space-y-6">
                                        <h3 className={`${montserrat.className} text-2xl font-bold text-gray-800 mb-6`}>
                                            What's your budget?
                                        </h3>

                                        <div className="mb-6">
                                            <label className={`${montserrat.className} block text-gray-700 font-medium mb-2`}>
                                                Total budget for the trip (USD)
                                            </label>
                                            <div className="relative">
                                                <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                                                <input
                                                    type="number"
                                                    name="budget"
                                                    value={formData.budget}
                                                    onChange={handleChange}
                                                    placeholder="Enter your budget"
                                                    className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div className="mb-6">
                                            <label className={`${montserrat.className} block text-gray-700 font-medium mb-2`}>
                                                What type of travel experience do you prefer?
                                            </label>
                                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                                {['budget', 'standard', 'luxury'].map(type => (
                                                    <div
                                                        key={type}
                                                        onClick={() => setFormData(prev => ({ ...prev, budgetType: type }))}
                                                        className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                                                            formData.budgetType === type
                                                                ? 'border-teal-500 bg-teal-50'
                                                                : 'border-gray-200 hover:border-teal-200'
                                                        }`}
                                                    >
                                                        <DollarSign className="h-6 w-6 mx-auto mb-2 text-teal-500" />
                                                        <div className="text-center capitalize">{type}</div>
                                                        <div className="text-center text-xs text-gray-500 mt-1">
                                                            {type === 'budget' && 'Economical options'}
                                                            {type === 'standard' && 'Mid-range comfort'}
                                                            {type === 'luxury' && 'Premium experiences'}
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="mb-6 space-y-4">
                                            <label className={`${montserrat.className} block text-gray-700 font-medium mb-2`}>
                                                What would you like included in your package?
                                            </label>

                                            <div className="flex items-center">
                                                <input
                                                    type="checkbox"
                                                    id="includeFlights"
                                                    name="includeFlights"
                                                    checked={formData.includeFlights}
                                                    onChange={handleChange}
                                                    className="w-5 h-5 text-teal-500 border-gray-300 rounded focus:ring-teal-500"
                                                />
                                                <label htmlFor="includeFlights" className="ml-2 text-gray-700">
                                                    International flights
                                                </label>
                                            </div>

                                            <div className="flex items-center">
                                                <input
                                                    type="checkbox"
                                                    id="includeHotels"
                                                    name="includeHotels"
                                                    checked={formData.includeHotels}
                                                    onChange={handleChange}
                                                    className="w-5 h-5 text-teal-500 border-gray-300 rounded focus:ring-teal-500"
                                                />
                                                <label htmlFor="includeHotels" className="ml-2 text-gray-700">
                                                    Accommodations
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* Step 4: Preferences */}
                                {currentStep === 4 && (
                                    <div className="space-y-6">
                                        <h3 className={`${montserrat.className} text-2xl font-bold text-gray-800 mb-6`}>
                                            What are you interested in?
                                        </h3>

                                        <div className="mb-6">
                                            <label className={`${montserrat.className} block text-gray-700 font-medium mb-2`}>
                                                Select activities and experiences (choose all that apply)
                                            </label>
                                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                                {[
                                                    { name: 'beaches', icon: <MapPin className="h-5 w-5" /> },
                                                    { name: 'wildlife', icon: <Heart className="h-5 w-5" /> },
                                                    { name: 'culture', icon: <Users className="h-5 w-5" /> },
                                                    { name: 'hiking', icon: <MapPin className="h-5 w-5" /> },
                                                    { name: 'food', icon: <Heart className="h-5 w-5" /> },
                                                    { name: 'history', icon: <Clock className="h-5 w-5" /> },
                                                    { name: 'yoga', icon: <Heart className="h-5 w-5" /> },
                                                    { name: 'adventure', icon: <MapPin className="h-5 w-5" /> },
                                                    { name: 'relaxation', icon: <Heart className="h-5 w-5" /> }
                                                ].map(activity => (
                                                    <div
                                                        key={activity.name}
                                                        onClick={() => handleActivityToggle(activity.name)}
                                                        className={`p-3 border-2 rounded-lg cursor-pointer transition-all flex items-center ${
                                                            formData.activities.includes(activity.name)
                                                                ? 'border-teal-500 bg-teal-50'
                                                                : 'border-gray-200 hover:border-teal-200'
                                                        }`}
                                                    >
                                                        <div className="text-teal-500 mr-2">{activity.icon}</div>
                                                        <div className="capitalize">{activity.name}</div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="pt-4">
                                            <p className={`${montserrat.className} text-sm text-gray-700`}>
                                                By submitting this form, you'll receive a personalized Sri Lanka itinerary created by our AI planner based on your preferences. We'll email you the complete plan within 24 hours.
                                            </p>
                                        </div>
                                    </div>
                                )}

                                {/* Navigation buttons */}
                                <div className="mt-8 flex justify-between">
                                    {currentStep > 1 ? (
                                        <button
                                            type="button"
                                            onClick={prevStep}
                                            className={`${montserrat.className} px-6 py-3 border border-gray-300 rounded-full text-gray-700 hover:bg-gray-50 transition-all duration-300`}
                                        >
                                            Back
                                        </button>
                                    ) : (
                                        <div></div> // Empty div to maintain spacing
                                    )}

                                    {currentStep < totalSteps ? (
                                        <button
                                            type="button"
                                            onClick={nextStep}
                                            className={`${montserrat.className} bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 hover:shadow-lg`}
                                        >
                                            Continue
                                        </button>
                                    ) : (
                                        <button
                                            type="submit"
                                            className={`${montserrat.className} bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 hover:shadow-lg flex items-center`}
                                        >
                                            Create My Itinerary
                                            <Plane className="ml-2 h-5 w-5" />
                                        </button>
                                    )}
                                </div>

                            </form>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Testimonial Section - Optional */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                        className="max-w-6xl mx-auto"
                    >
                        <motion.div variants={fadeInUp} className="text-center mb-16">
                            <h2 className={`${whisper.className} text-5xl md:text-6xl text-teal-600 mb-4`}>
                                Happy Travelers
                            </h2>
                            <div className="w-20 h-1 bg-teal-500 mx-auto mb-8"></div>
                            <p className={`${montserrat.className} text-xl text-gray-700 max-w-3xl mx-auto`}>
                                See what others have experienced with our AI-powered travel planning
                            </p>
                        </motion.div>

                        <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[1, 2, 3].map(index => (
                                <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                                    <div className="flex items-center mb-4">
                                        <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden relative">
                                            <Image
                                                src={`/images/testimonial-${index}.jpg`}
                                                alt="Testimonial"
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <div className="ml-4">
                                            <h4 className="font-bold">Happy Traveler</h4>
                                            <div className="flex text-yellow-400">
                                                {[1, 2, 3, 4, 5].map(star => (
                                                    <span key={star}>★</span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <p className="text-gray-600">
                                        "The AI planner created the perfect itinerary for our family trip to Sri Lanka. It balanced beach time, cultural experiences, and wildlife adventures exactly as we wanted!"
                                    </p>
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </>
    );
}