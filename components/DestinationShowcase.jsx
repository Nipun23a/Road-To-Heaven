'use client'
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ChevronRight, MapPin, Star, Users, Info } from 'lucide-react';
import { montserrat, whisper } from "@/app/layout";

export default function DestinationsShowcase() {
    const [activeTab, setActiveTab] = useState('beaches');
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const categories = [
        { id: 'beaches', name: 'Beaches' },
        { id: 'heritage', name: 'Heritage' },
        { id: 'wildlife', name: 'Wildlife' },
        { id: 'adventure', name: 'Adventure' }
    ];

    const destinations = {
        beaches: [
            {
                id: 1,
                name: 'Unawatuna Beach',
                location: 'Southern Province',
                image: '/images/unawatuna.jpg',
                rating: 4.8,
                popularity: 'High',
                description: 'A picturesque horseshoe-shaped beach with golden sands and crystal-clear waters, perfect for swimming and snorkeling.'
            },
            {
                id: 2,
                name: 'Mirissa Beach',
                location: 'Southern Province',
                image: '/images/mirissa.jpg',
                rating: 4.7,
                popularity: 'Medium',
                description: 'Famous for whale watching and surfing, this crescent-shaped beach offers stunning sunsets and a relaxed atmosphere.'
            },
            {
                id: 3,
                name: 'Arugam Bay',
                location: 'Eastern Province',
                image: '/images/arugam-bay.jpg',
                rating: 4.9,
                popularity: 'High',
                description: 'One of the top surfing destinations in the world with perfect point breaks and laid-back beach vibes.'
            }
        ],
        heritage: [
            {
                id: 1,
                name: 'Sigiriya Rock Fortress',
                location: 'Central Province',
                image: '/images/sigiriya.jpg',
                rating: 4.9,
                popularity: 'High',
                description: 'Ancient rock fortress with stunning frescoes and panoramic views, often called the Eighth Wonder of the World.'
            },
            {
                id: 2,
                name: 'Temple of the Tooth',
                location: 'Kandy',
                image: '/images/temple-tooth.jpg',
                rating: 4.8,
                popularity: 'High',
                description: 'Sacred Buddhist temple housing the relic of the tooth of Buddha, a UNESCO World Heritage site.'
            },
            {
                id: 3,
                name: 'Anuradhapura',
                location: 'North Central Province',
                image: '/images/anuradhapura.jpg',
                rating: 4.7,
                popularity: 'Medium',
                description: 'Ancient city with well-preserved ruins of an ancient Sinhalese civilization, including dagobas and temples.'
            }
        ],
        wildlife: [
            {
                id: 1,
                name: 'Yala National Park',
                location: 'Southern Province',
                image: '/images/yala.jpg',
                rating: 4.8,
                popularity: 'High',
                description: 'Famous for having the highest leopard density in the world, with diverse ecosystems and abundant wildlife.'
            },
            {
                id: 2,
                name: 'Udawalawe National Park',
                location: 'Sabaragamuwa Province',
                image: '/images/udawalawe.jpg',
                rating: 4.7,
                popularity: 'Medium',
                description: 'Known for large elephant herds and bird watching, with open terrain making wildlife spotting easier.'
            },
            {
                id: 3,
                name: 'Minneriya National Park',
                location: 'North Central Province',
                image: '/images/minneriya.jpg',
                rating: 4.6,
                popularity: 'Medium',
                description: 'Famous for "The Gathering," where hundreds of elephants congregate around the Minneriya Tank.'
            }
        ],
        adventure: [
            {
                id: 1,
                name: 'Ella Rock',
                location: 'Uva Province',
                image: '/images/ella-rock.jpg',
                rating: 4.7,
                popularity: 'Medium',
                description: 'Challenging hike offering breathtaking views of the surrounding mountains and tea plantations.'
            },
            {
                id: 2,
                name: 'Kitulgala',
                location: 'Western Province',
                image: '/images/kitulgala.jpg',
                rating: 4.8,
                popularity: 'Medium',
                description: 'Premier white-water rafting location with rainforest canopy adventures and natural swimming pools.'
            },
            {
                id: 3,
                name: 'Knuckles Mountain Range',
                location: 'Central Province',
                image: '/images/knuckles.jpg',
                rating: 4.9,
                popularity: 'Low',
                description: 'UNESCO World Heritage site with diverse landscapes, perfect for trekking and experiencing cloud forests.'
            }
        ]
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { y: 50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6
            }
        }
    };

    const tabUnderlineVariants = {
        hidden: { width: 0 },
        visible: {
            width: '100%',
            transition: {
                duration: 0.3
            }
        }
    };

    if (!mounted) return null;

    return (
        <section className="py-20 bg-gradient-to-b from-teal-50 to-white">
            <div className="container mx-auto px-4 md:px-8">
                {/* Section heading */}
                <div className="text-center mb-12">
                    <motion.h3
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className={`${whisper.className} text-teal-600 text-4xl mb-2`}
                    >
                        Discover Sri Lanka
                    </motion.h3>
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                        className={`${montserrat.className} text-3xl md:text-4xl font-bold text-gray-800 mb-4`}
                    >
                        Popular Destinations
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
                        From pristine beaches to ancient temples, wildlife parks to breathtaking mountains, Sri Lanka offers diverse experiences in a compact island paradise.
                    </motion.p>
                </div>

                {/* Categories tabs */}
                <div className="flex flex-wrap justify-center mb-12">
                    {categories.map((category) => (
                        <div key={category.id} className="relative mb-2">
                            <button
                                onClick={() => setActiveTab(category.id)}
                                className={`${montserrat.className} px-6 py-3 mx-2 text-lg font-medium transition-colors duration-300 ${
                                    activeTab === category.id ? 'text-teal-600' : 'text-gray-500 hover:text-gray-800'
                                }`}
                            >
                                {category.name}
                            </button>
                            {activeTab === category.id && (
                                <motion.div
                                    className="absolute bottom-0 left-2 right-2 h-1 bg-teal-500"
                                    initial="hidden"
                                    animate="visible"
                                    variants={tabUnderlineVariants}
                                />
                            )}
                        </div>
                    ))}
                </div>

                {/* Destinations grid */}
                <motion.div
                    key={activeTab}
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {destinations[activeTab].map((destination) => (
                        <motion.div
                            key={destination.id}
                            variants={itemVariants}
                            className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group"
                        >
                            <div className="relative h-64 overflow-hidden">
                                <Image
                                    src={destination.image}
                                    alt={destination.name}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                                    <div className="flex items-center text-white mb-1">
                                        <MapPin size={16} className="mr-1" />
                                        <span className={`${montserrat.className} text-sm`}>{destination.location}</span>
                                    </div>
                                    <h3 className={`${montserrat.className} text-xl font-bold text-white`}>{destination.name}</h3>
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="flex justify-between items-center mb-4">
                                    <div className="flex items-center">
                                        <Star size={18} className="text-yellow-500 mr-1" />
                                        <span className={`${montserrat.className} font-medium`}>{destination.rating}</span>
                                    </div>
                                    <div className="flex items-center">
                                        <Users size={18} className="text-gray-500 mr-1" />
                                        <span className={`${montserrat.className} text-sm text-gray-500`}>{destination.popularity} Traffic</span>
                                    </div>
                                </div>
                                <p className={`${montserrat.className} text-gray-600 mb-4 line-clamp-3`}>
                                    {destination.description}
                                </p>
                                <button className={`${montserrat.className} flex items-center text-teal-600 font-medium hover:text-teal-800 transition-colors`}>
                                    Explore Destination
                                    <ChevronRight size={18} className="ml-1 transition-transform group-hover:translate-x-1" />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* View all button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="text-center mt-12"
                >
                    <button className={`${montserrat.className} bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 hover:shadow-lg transform hover:scale-105 flex items-center mx-auto`}>
                        View All Destinations
                        <ChevronRight size={20} className="ml-1" />
                    </button>
                </motion.div>
            </div>
        </section>
    );
}