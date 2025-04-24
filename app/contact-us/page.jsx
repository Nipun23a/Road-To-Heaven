'use client'
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Mail, Phone, MapPin, Clock, Send, MessageSquare } from "lucide-react";
import { montserrat, whisper } from "@/app/layout";

export default function ContactUs() {
    const [mounted, setMounted] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formSuccess, setFormSuccess] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const fadeInUp = {
        hidden: { opacity: 0, y: 60 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8 }
        }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3
            }
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        setTimeout(() => {
            setIsSubmitting(false);
            setFormSuccess(true);
            setFormData({ name: '', email: '', subject: '', message: '' });

            // Reset success message after 5 seconds
            setTimeout(() => {
                setFormSuccess(false);
            }, 5000);
        }, 1500);
    };

    if (!mounted) return null;

    return (
        <>
            {/* Hero Section */}
            <div className="relative w-full h-[60vh] overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0">
                    <Image
                        src="/images/contact-hero.jpg"
                        alt="Sri Lanka landscape"
                        fill
                        priority
                        className="object-cover object-center brightness-50"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/70"></div>
                </div>

                {/* Content */}
                <div className="relative h-full flex flex-col items-center justify-center text-center px-4 max-w-6xl mx-auto">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className={`${whisper.className} text-7xl md:text-8xl text-white mb-6`}
                    >
                        Get In Touch
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className={`${montserrat.className} text-xl md:text-2xl text-white/90 max-w-3xl mb-6`}
                    >
                        We're here to help plan your perfect Sri Lankan adventure
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="flex gap-4"
                    >
                        <a href="#contact-form" className={`${montserrat.className} bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-full text-lg font-semibold flex items-center transition-all duration-300 hover:shadow-lg`}>
                            Contact Form
                            <MessageSquare className="ml-2 h-5 w-5" />
                        </a>

                        <a href="#location" className={`${montserrat.className} bg-transparent border-2 border-white text-white hover:bg-white hover:text-teal-600 px-6 py-3 rounded-full text-lg font-semibold transition-all duration-300`}>
                            Find Us
                        </a>
                    </motion.div>
                </div>

                {/* Decorative floating elements */}
                <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
                    <div className="floating-element w-24 h-24 bg-teal-500/10 rounded-full absolute top-1/4 left-1/4 animate-float-slow"></div>
                    <div className="floating-element w-16 h-16 bg-white/10 rounded-full absolute top-2/3 right-1/4 animate-float"></div>
                </div>
            </div>

            {/* Contact Information Cards */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={staggerContainer}
                        className="max-w-6xl mx-auto"
                    >
                        <motion.div variants={fadeInUp} className="text-center mb-16">
                            <h2 className={`${whisper.className} text-5xl md:text-6xl text-teal-600 mb-4`}>Reach Out To Us</h2>
                            <div className="w-20 h-1 bg-teal-500 mx-auto mb-8"></div>
                            <p className={`${montserrat.className} text-xl text-gray-700 max-w-3xl mx-auto`}>
                                Our team of Sri Lanka experts is ready to answer your questions and help you plan your perfect journey
                            </p>
                        </motion.div>

                        <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                {
                                    icon: <Mail className="h-8 w-8 text-teal-500" />,
                                    title: "Email Us",
                                    details: [
                                        "info@srilankatravel.com",
                                        "bookings@srilankatravel.com"
                                    ],
                                    description: "We aim to respond to all inquiries within 24 hours."
                                },
                                {
                                    icon: <Phone className="h-8 w-8 text-teal-500" />,
                                    title: "Call Us",
                                    details: [
                                        "+94 11 234 5678",
                                        "+94 77 890 1234"
                                    ],
                                    description: "Available Monday-Friday, 9:00 AM - 6:00 PM (Sri Lanka Time)."
                                },
                                {
                                    icon: <MapPin className="h-8 w-8 text-teal-500" />,
                                    title: "Visit Us",
                                    details: [
                                        "Pitipana - Thalagala Rd, Homagama,",
                                        "Sri Lanka"
                                    ],
                                    description: "Our office is located in the heart of Colombo."
                                }
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    variants={fadeInUp}
                                    className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl border border-gray-100 transition-all duration-300"
                                >
                                    <div className="bg-teal-50 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                                        {item.icon}
                                    </div>
                                    <h3 className={`${montserrat.className} text-2xl font-bold text-gray-800 mb-4`}>{item.title}</h3>
                                    {item.details.map((detail, idx) => (
                                        <p key={idx} className={`${montserrat.className} text-lg text-gray-700 mb-1`}>{detail}</p>
                                    ))}
                                    <p className={`${montserrat.className} text-gray-500 mt-4`}>{item.description}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Contact Form & Map */}
            <section id="contact-form" className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                        className="max-w-6xl mx-auto"
                    >
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                            {/* Contact Form */}
                            <motion.div variants={fadeInUp}>
                                <h2 className={`${whisper.className} text-4xl md:text-5xl text-teal-600 mb-6`}>Send Us A Message</h2>
                                <p className={`${montserrat.className} text-lg text-gray-700 mb-8`}>
                                    Whether you have questions about destinations, tours, or need help planning your trip, we'd love to hear from you.
                                </p>

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="name" className={`${montserrat.className} block text-gray-700 font-medium mb-2`}>Your Name</label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
                                                placeholder="John Doe"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="email" className={`${montserrat.className} block text-gray-700 font-medium mb-2`}>Email Address</label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
                                                placeholder="you@example.com"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="subject" className={`${montserrat.className} block text-gray-700 font-medium mb-2`}>Subject</label>
                                        <input
                                            type="text"
                                            id="subject"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
                                            placeholder="Trip Inquiry"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="message" className={`${montserrat.className} block text-gray-700 font-medium mb-2`}>Your Message</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            rows="5"
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
                                            placeholder="Tell us about your travel plans or questions..."
                                        ></textarea>
                                    </div>

                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        type="submit"
                                        disabled={isSubmitting}
                                        className={`${montserrat.className} bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-full text-lg font-semibold flex items-center justify-center transition-all duration-300 hover:shadow-lg w-full md:w-auto`}
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                </svg>
                                                Sending...
                                            </>
                                        ) : (
                                            <>
                                                Send Message
                                                <Send className="ml-2 h-5 w-5" />
                                            </>
                                        )}
                                    </motion.button>

                                    {formSuccess && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg mt-4"
                                        >
                                            Your message has been sent successfully! We'll be in touch soon.
                                        </motion.div>
                                    )}
                                </form>
                            </motion.div>

                            {/* Map & Office Hours */}
                            <motion.div variants={fadeInUp} id="location">
                                <div className="relative h-64 md:h-[30rem] rounded-lg overflow-hidden shadow-lg mb-8">
                                    {/* Replace with actual map or image of your location */}
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.5758403132254!2d80.04157289999999!3d6.8213291!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2523b05555555%3A0x546c34cd99f6f488!2sNSBM%20Green%20University!5e0!3m2!1sen!2slk!4v1745526481057!5m2!1sen!2slk"
                                        className="w-full h-full border-0"
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                    ></iframe>
                                </div>

                                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                                    <h3 className={`${montserrat.className} text-2xl font-bold text-gray-800 mb-4 flex items-center`}>
                                        <Clock className="h-6 w-6 mr-2 text-teal-500"/>
                                        Office Hours
                                    </h3>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div>
                                            <p className={`${montserrat.className} font-medium text-gray-700`}>Monday - Friday</p>
                                            <p className={`${montserrat.className} text-gray-600`}>9:00 AM - 6:00 PM</p>
                                        </div>
                                        <div>
                                            <p className={`${montserrat.className} font-medium text-gray-700`}>Saturday</p>
                                            <p className={`${montserrat.className} text-gray-600`}>10:00 AM - 2:00 PM</p>
                                        </div>
                                        <div>
                                            <p className={`${montserrat.className} font-medium text-gray-700`}>Sunday</p>
                                            <p className={`${montserrat.className} text-gray-600`}>Closed</p>
                                        </div>
                                        <div>
                                            <p className={`${montserrat.className} font-medium text-gray-700`}>Public Holidays</p>
                                            <p className={`${montserrat.className} text-gray-600`}>Closed</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                        className="max-w-4xl mx-auto"
                    >
                        <motion.div variants={fadeInUp} className="text-center mb-16">
                            <h2 className={`${whisper.className} text-5xl md:text-6xl text-teal-600 mb-4`}>Frequently Asked Questions</h2>
                            <div className="w-20 h-1 bg-teal-500 mx-auto mb-8"></div>
                            <p className={`${montserrat.className} text-xl text-gray-700 max-w-3xl mx-auto`}>
                                Find quick answers to common questions about traveling in Sri Lanka
                            </p>
                        </motion.div>

                        <motion.div variants={staggerContainer} className="space-y-6">
                            {[
                                {
                                    question: "Does the AI Trip Planner consider my budget?",
                                    answer: "Yes, the AI Trip Planner takes your budget into account when creating itineraries. It suggests destinations, activities, and accommodations within your price range, ensuring that you can have a memorable trip without overspending."
                                },
                                {
                                    question: "What is the best time to visit Sri Lanka?",
                                    answer: "Sri Lanka has two monsoon seasons affecting different parts of the island. The best time to visit the west and south coasts is from December to March, while the east coast is best from April to September. However, Sri Lanka can be visited year-round with proper planning."
                                },
                                {
                                    question: "Do I need a visa to visit Sri Lanka?",
                                    answer: "Most visitors to Sri Lanka require an Electronic Travel Authorization (ETA) before arrival. This can be obtained online through the official Sri Lanka ETA website. Some countries are exempt, so we recommend checking the latest requirements for your nationality."
                                },
                                {
                                    question: "How many days do I need to explore Sri Lanka?",
                                    answer: "For a comprehensive experience of Sri Lanka's diverse attractions, we recommend 10-14 days. However, shorter trips of 5-7 days can cover specific regions. Our team can help you design an itinerary that maximizes your available time."
                                },
                                {
                                    question: "What's the currency used in Sri Lanka?",
                                    answer: "The Sri Lankan Rupee (LKR) is the official currency. ATMs are widely available in cities and tourist areas. Major hotels and some restaurants accept credit cards, but it's advisable to carry cash for smaller establishments and rural areas."
                                },
                                {
                                    question: "What is an AI Trip Planner?",
                                    answer: "An AI Trip Planner is a smart tool that uses artificial intelligence to create personalized travel itineraries based on your preferences, budget, and interests. It analyzes a wide range of travel data to provide you with optimized travel plans."
                                },
                                {
                                    question: "How does the AI Trip Planner help me plan my trip?",
                                    answer: "The AI Trip Planner uses your input, such as destination preferences, travel dates, and activity interests, to suggest destinations, attractions, accommodations, and activities that fit your needs. It can save you time and help you discover hidden gems."
                                },
                                {
                                    question: "Can I customize my AI-generated itinerary?",
                                    answer: "Yes, the AI Trip Planner allows you to customize the itinerary it generates. You can adjust dates, activities, and destinations to match your preferences. The planner also provides recommendations that can be added or removed easily."
                                },
                                {
                                    question: "Is the AI Trip Planner suitable for first-time travelers?",
                                    answer: "Absolutely! The AI Trip Planner is designed to assist all types of travelers, including first-timers. It takes the guesswork out of travel planning, ensuring you have a well-organized and enjoyable trip, even if it's your first time visiting a destination."
                                },

                            ].map((faq, index) => (
                                <motion.div
                                    key={index}
                                    variants={fadeInUp}
                                    className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
                                >
                                    <h3 className={`${montserrat.className} text-xl font-bold text-gray-800 mb-3`}>{faq.question}</h3>
                                    <p className={`${montserrat.className} text-gray-600`}>{faq.answer}</p>
                                </motion.div>
                            ))}
                        </motion.div>

                        <motion.div variants={fadeInUp} className="text-center mt-12">
                            <p className={`${montserrat.className} text-lg text-gray-700 mb-6`}>
                                Can't find the answer you're looking for? Contact us directly.
                            </p>
                            <a href="#contact-form" className={`${montserrat.className} bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-full text-lg font-semibold inline-block transition-all duration-300 hover:shadow-lg`}>
                                Ask Your Question
                            </a>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-16 bg-teal-600">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <h2 className={`${whisper.className} text-5xl md:text-6xl text-white mb-6`}>Ready To Explore Sri Lanka?</h2>
                        <p className={`${montserrat.className} text-xl text-white/90 max-w-3xl mx-auto mb-8`}>
                            Let's start planning your dream journey with AI Trip Planner to the Pearl of the Indian Ocean
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className={`${montserrat.className} bg-white text-teal-600 hover:bg-gray-100 px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 hover:shadow-lg`}
                            >
                                Plan My Trip
                            </motion.button>

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className={`${montserrat.className} bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300`}
                            >
                                View Destinations
                            </motion.button>
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    );
}