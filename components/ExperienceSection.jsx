'use client'
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {Calendar, Clock, Award, ArrowRight, Map} from 'lucide-react';
import { montserrat, whisper } from "@/app/layout";

export default function ExperiencesSection() {
    const [mounted, setMounted] = useState(false);
    const [visibleCard, setVisibleCard] = useState(null);

    useEffect(() => {
        setMounted(true);
    }, []);

    const experiences = [
        {
            id: 1,
            title: 'Tea Plantation Tour',
            image: '/images/tea-experience.jpg',
            duration: '4 hours',
            availability: 'Year-round',
            highlight: 'Tea tasting included',
            description: 'Explore the lush tea plantations of Nuwara Eliya and learn about the tea-making process from leaf to cup. Enjoy panoramic views of rolling hills covered in tea bushes.',
            color: 'from-green-500/20 to-green-600/40'
        },
        {
            id: 2,
            title: 'Traditional Cooking Class',
            image: '/images/cooking-class.jpg',
            duration: '3 hours',
            availability: 'Daily',
            highlight: 'Market visit included',
            description: 'Learn to prepare authentic Sri Lankan curry, rice, and roti dishes with local spices. Visit a local market to select fresh ingredients before your hands-on cooking session.',
            color: 'from-orange-500/20 to-orange-600/40'
        },
        {
            id: 3,
            title: 'Elephant Safari',
            image: '/images/elephant-safari.jpg',
            duration: 'Half day',
            availability: 'Year-round',
            highlight: 'Ethical wildlife viewing',
            description: 'Observe majestic elephants in their natural habitat during a guided jeep safari in Udawalawe National Park, home to hundreds of wild elephants.',
            color: 'from-gray-500/20 to-gray-600/40'
        },
        {
            id: 4,
            title: 'Ancient City Cycling Tour',
            image: '/images/cycling-tour.jpg',
            duration: '5 hours',
            availability: 'Except monsoon season',
            highlight: 'Professional guides',
            description: 'Cycle through the ancient city of Polonnaruwa, exploring temple ruins, massive stone Buddhas, and royal palaces at a leisurely pace.',
            color: 'from-blue-500/20 to-blue-600/40'
        },
        {
            id: 5,
            title: 'Sunrise Adam\'s Peak Hike',
            image: '/images/adams-peak.jpg',
            duration: '6-7 hours',
            availability: 'December to May',
            highlight: 'Spiritual experience',
            description: 'Climb the sacred Adam\'s Peak by night to witness a spectacular sunrise from the summit, an important pilgrimage site for multiple religions.',
            color: 'from-purple-500/20 to-purple-600/40'
        },
        {
            id: 6,
            title: 'Ayurvedic Spa Retreat',
            image: '/images/ayurvedic-spa.jpg',
            duration: 'Flexible',
            availability: 'Year-round',
            highlight: 'Traditional treatments',
            description: 'Immerse yourself in ancient healing traditions with authentic Ayurvedic treatments using local herbs and oils at a specialized wellness retreat.',
            color: 'from-teal-500/20 to-teal-600/40'
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6
            }
        }
    };

    if (!mounted) return null;

    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 md:px-8">
                {/* Section heading */}
                <div className="text-center mb-16">
                    <motion.h3
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className={`${whisper.className} text-teal-600 text-4xl mb-2`}
                    >
                        Unforgettable Moments
                    </motion.h3>
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                        className={`${montserrat.className} text-3xl md:text-4xl font-bold text-gray-800 mb-4`}
                    >
                        Unique Sri Lankan Experiences
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, scaleX: 0 }}
                        whileInView={{ opacity: 1, scaleX: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="h-1 w-24 bg-teal-500 mx-auto mb-6"
                    ></motion.div>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        viewport={{ once: true }}
                        className={`${montserrat.className} text-gray-600 max-w-2xl mx-auto`}
                    >
                        Create lifelong memories with these authentic experiences that showcase the beauty, culture, and traditions of Sri Lanka.
                    </motion.p>
                </div>

                {/* Experiences grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {experiences.map((experience) => (
                        <motion.div
                            key={experience.id}
                            variants={itemVariants}
                            onMouseEnter={() => setVisibleCard(experience.id)}
                            onMouseLeave={() => setVisibleCard(null)}
                            className="rounded-xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-shadow duration-300 group"
                        >
                            <div className="relative h-56">
                                <Image
                                    src={experience.image}
                                    alt={experience.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className={`absolute inset-0 bg-gradient-to-t ${experience.color} opacity-60 group-hover:opacity-75 transition-opacity duration-300`}></div>

                                <div className="absolute inset-0 flex items-center justify-center">
                                    <h3 className={`${montserrat.className} text-2xl font-bold text-white text-center px-4 drop-shadow-lg`}>
                                        {experience.title}
                                    </h3>
                                </div>
                            </div>

                            <div className="p-6">
                                <div className="flex flex-wrap gap-3 mb-4">
                                    <div className="flex items-center bg-gray-100 rounded-full px-3 py-1">
                                        <Clock size={16} className="text-teal-600 mr-1" />
                                        <span className={`${montserrat.className} text-sm text-gray-700`}>{experience.duration}</span>
                                    </div>
                                    <div className="flex items-center bg-gray-100 rounded-full px-3 py-1">
                                        <Calendar size={16} className="text-teal-600 mr-1" />
                                        <span className={`${montserrat.className} text-sm text-gray-700`}>{experience.availability}</span>
                                    </div>
                                    <div className="flex items-center bg-teal-100 rounded-full px-3 py-1">
                                        <Award size={16} className="text-teal-600 mr-1" />
                                        <span className={`${montserrat.className} text-sm text-teal-700`}>{experience.highlight}</span>
                                    </div>
                                </div>

                                <p className={`${montserrat.className} text-gray-600 mb-5 line-clamp-3`}>
                                    {experience.description}
                                </p>

                                <motion.div
                                    initial={{ opacity: 0.8 }}
                                    animate={{ opacity: visibleCard === experience.id ? 1 : 0.8 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <button className={`${montserrat.className} flex items-center justify-center w-full bg-teal-500 hover:bg-teal-600 text-white py-3 px-4 rounded-lg transition-all duration-300 transform group-hover:scale-105`}>
                                        Book This Experience
                                        <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                                    </button>
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Feature callout */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="mt-16 bg-gradient-to-r from-teal-500 to-teal-700 rounded-2xl p-8 md:p-12 text-white shadow-xl"
                >
                    <div className="flex flex-col md:flex-row items-center justify-between">
                        <div className="mb-6 md:mb-0 md:mr-8">
                            <h3 className={`${whisper.className} text-3xl mb-2`}>Special Offer</h3>
                            <h4 className={`${montserrat.className} text-2xl md:text-3xl font-bold mb-4`}>Create Your Custom Experience</h4>
                            <p className={`${montserrat.className} text-teal-100 max-w-xl`}>
                                Want a truly personalized adventure? Our local experts can craft a custom itinerary combining multiple experiences tailored to your interests, timeframe, and budget.
                            </p>
                        </div>
                        <div className="flex-shrink-0">
                            <button className={`${montserrat.className} bg-white text-teal-600 hover:bg-teal-50 px-6 py-4 rounded-lg font-medium text-lg flex items-center shadow-lg hover:shadow-xl transition-all duration-300`}>
                                <Map size={20} className="mr-2" />
                                Plan Custom Trip
                            </button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}