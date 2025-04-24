'use client'
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Users, Heart, Award, MapPin,Bot } from "lucide-react";
import { montserrat, whisper } from "@/app/layout";

export default function AboutUs() {
    const [mounted, setMounted] = useState(false);

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

    if (!mounted) return null;

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
                <div
                    className="relative h-full flex flex-col items-center justify-center text-center px-4 max-w-6xl mx-auto">
                    <motion.h1
                        initial={{opacity: 0, y: 30}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.8}}
                        className={`${whisper.className} text-7xl md:text-8xl lg:text-9xl text-white mb-6`}
                    >
                        Our Story
                    </motion.h1>

                    <motion.p
                        initial={{opacity: 0, y: 30}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.8, delay: 0.2}}
                        className={`${montserrat.className} text-xl md:text-2xl text-white/90 max-w-3xl mb-8`}
                    >
                        Discover the passion and purpose behind our journey to share Sri Lanka's wonders with the world
                    </motion.p>

                    <motion.div
                        initial={{opacity: 0, y: 30}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.8, delay: 0.4}}
                    >
                        <button
                            className={`${montserrat.className} bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-full text-lg font-semibold flex items-center transition-all duration-300 hover:shadow-lg`}>
                            Meet Our Team
                            <ArrowRight className="ml-2 h-5 w-5"/>
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

            {/* Our Mission */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: true, margin: "-100px"}}
                        className="max-w-6xl mx-auto"
                    >
                        <motion.div variants={fadeInUp} className="text-center mb-16">
                            <h2 className={`${whisper.className} text-5xl md:text-6xl text-teal-600 mb-4`}>Our
                                Mission</h2>
                            <div className="w-20 h-1 bg-teal-500 mx-auto mb-8"></div>
                            <p className={`${montserrat.className} text-xl text-gray-700 max-w-3xl mx-auto`}>
                                We are dedicated to showcasing the authentic beauty of Sri Lanka while promoting
                                sustainable tourism that benefits local communities and preserves the island's natural
                                heritage.
                            </p>
                        </motion.div>

                        <motion.div
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{once: true, margin: "-100px"}}
                            className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
                        >
                            <motion.div variants={fadeInUp}
                                        className="relative h-96 rounded-lg overflow-hidden shadow-xl">
                                <Image
                                    src="/images/local-community.jpg"
                                    alt="Local community in Sri Lanka"
                                    fill
                                    className="object-cover"
                                />
                            </motion.div>

                            <motion.div variants={fadeInUp}>
                                <h3 className={`${montserrat.className} text-3xl font-bold text-gray-800 mb-6`}>Connecting
                                    Travelers with Culture</h3>
                                <p className={`${montserrat.className} text-lg text-gray-600 mb-6`}>
                                    Founded in 2018, our journey began with a simple vision: to create meaningful travel
                                    experiences that connect visitors with the heart and soul of Sri Lanka. What started
                                    as a passion project has grown into a dedicated team of local experts who share our
                                    love for this island paradise.
                                </p>
                                <p className={`${montserrat.className} text-lg text-gray-600 mb-8`}>
                                    We believe that travel should enrich both the visitor and the visited. Every
                                    itinerary we create is designed to immerse you in authentic experiences while
                                    supporting local communities and preserving Sri Lanka's cultural heritage.
                                </p>
                                <motion.button
                                    whileHover={{scale: 1.05}}
                                    whileTap={{scale: 0.95}}
                                    className={`${montserrat.className} border-2 border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white px-6 py-3 rounded-full text-lg font-medium transition-all duration-300`}
                                >
                                    Our Values
                                </motion.button>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Our Values */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: true}}
                        variants={staggerContainer}
                        className="max-w-6xl mx-auto"
                    >
                        <motion.div variants={fadeInUp} className="text-center mb-16">
                            <h2 className={`${whisper.className} text-5xl md:text-6xl text-teal-600 mb-4`}>Our
                                Values</h2>
                            <div className="w-20 h-1 bg-teal-500 mx-auto mb-8"></div>
                            <p className={`${montserrat.className} text-xl text-gray-700 max-w-3xl mx-auto`}>
                                These core principles guide everything we do as we share the wonders of Sri Lanka with
                                travelers from around the world.
                            </p>
                        </motion.div>

                        <motion.div variants={staggerContainer}
                                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {[
                                {
                                    icon: <Users className="h-10 w-10 text-teal-500"/>,
                                    title: "Community First",
                                    description: "We prioritize partnerships with local communities, ensuring tourism benefits those who call Sri Lanka home."
                                },
                                {
                                    icon: <Heart className="h-10 w-10 text-teal-500"/>,
                                    title: "Authentic Experiences",
                                    description: "Our AI Trip Planner curates personalized journeys that foster deep, authentic connections with Sri Lankan culture, people, and hidden gems beyond the typical tourist path."
                                },
                                {
                                    icon: <Award className="h-10 w-10 text-teal-500"/>,
                                    title: "Excellence",
                                    description: "We strive for the highest standards in service, knowledge, and attention to detail in every journey we craft."
                                },
                                {
                                    icon: <MapPin className="h-10 w-10 text-teal-500"/>,
                                    title: "Sustainability",
                                    description: "We promote responsible travel practices that protect Sri Lanka's natural beauty for generations to come."
                                },
                            ].map((value, index) => (
                                <motion.div
                                    key={index}
                                    variants={fadeInUp}
                                    className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                                >
                                    <div
                                        className="bg-teal-50 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                                        {value.icon}
                                    </div>
                                    <h3 className={`${montserrat.className} text-xl font-bold text-gray-800 mb-4`}>{value.title}</h3>
                                    <p className={`${montserrat.className} text-gray-600`}>{value.description}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Parallax Section */}
            <section className="relative h-96 bg-fixed bg-center bg-cover"
                     style={{backgroundImage: "url('/images/yala.jpg')"}}>
                <div className="absolute inset-0 bg-black/60"></div>
                <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
                    <motion.div
                        initial={{opacity: 0}}
                        whileInView={{opacity: 1}}
                        transition={{duration: 1}}
                        viewport={{once: true}}
                    >
                        <h2 className={`${whisper.className} text-5xl md:text-6xl text-white mb-6`}>Explore Sri Lanka
                            With Us</h2>
                        <p className={`${montserrat.className} text-xl text-white/90 max-w-2xl mx-auto mb-8`}>
                            From ancient temples to pristine beaches, our AI Trip Planner helps you discover Sri Lanka
                            in a smarter, more personalized way.
                        </p>
                        <motion.button
                            whileHover={{scale: 1.05}}
                            whileTap={{scale: 0.95}}
                            className={`${montserrat.className} bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-full text-lg font-semibold transition-all duration-300 hover:shadow-lg`}
                        >
                            Plan with AI
                        </motion.button>
                    </motion.div>
                </div>
            </section>


            {/* Our Team */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: true}}
                        variants={staggerContainer}
                        className="max-w-4xl mx-auto"
                    >
                        <motion.div variants={fadeInUp} className="text-center mb-16">
                            <h2 className={`${whisper.className} text-5xl md:text-6xl text-teal-600 mb-4`}>Our Team</h2>
                            <div className="w-20 h-1 bg-teal-500 mx-auto mb-8"></div>
                            <p className={`${montserrat.className} text-xl text-gray-700 max-w-3xl mx-auto`}>
                                Meet the passionate local expert who makes your Sri Lankan adventures unforgettable
                            </p>
                        </motion.div>

                        <motion.div
                            variants={fadeInUp}
                            className="max-w-md mx-auto"
                        >
                            <div className="group">
                                <div className="relative h-96 rounded-lg overflow-hidden shadow-lg mb-4">
                                    <Image
                                        src="/images/testimonial-2.jpg"
                                        alt="Amara Perera"
                                        fill
                                        className="object transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div
                                        className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-70"></div>
                                    <div className="absolute bottom-0 left-0 p-6">
                                        <h3 className={`${montserrat.className} text-2xl font-bold text-white`}>Amara
                                            Perera</h3>
                                        <p className={`${montserrat.className} text-teal-300`}>Founder & CEO</p>
                                    </div>
                                </div>
                                <p className={`${montserrat.className} text-gray-600`}>
                                    Born and raised in Colombo, Amara's deep love for Sri Lanka's culture and landscapes
                                    inspired her to create authentic travel experiences.
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

        </>
    );
}