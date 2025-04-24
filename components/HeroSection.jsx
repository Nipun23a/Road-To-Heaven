'use client'
import { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination, Navigation, EffectCube, EffectCoverflow } from "swiper/modules";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import {montserrat, whisper} from "@/app/layout";
import { motion, AnimatePresence } from "framer-motion";

export default function HeroSection() {
    const [mounted, setMounted] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);
    const swiperRef = useRef(null);

    useEffect(() => {
        setMounted(true);
    }, []);

    const sriLankaSlides = [
        {
            id: 1,
            image: '/images/beach.jpg',
            title: 'Pristine Beaches',
            description: 'Discover the untouched golden shores of Sri Lanka'
        },
        {
            id: 2,
            image: '/images/temple.jpg',
            title: 'Ancient Temples',
            description: 'Explore sacred temples dating back thousands of years'
        },
        {
            id: 3,
            image: '/images/tea-plantation.jpg',
            title: 'Tea Plantations',
            description: 'Wander through lush green tea estates in the highlands'
        },
        {
            id: 4,
            image: '/images/wild-safari.jpg',
            title: 'Wildlife Safari',
            description: 'Encounter exotic wildlife in natural habitats'
        }
    ];

    const slideVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        },
        exit: {
            opacity: 0,
            y: -50,
            transition: {
                duration: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -20 }
    };

    if (!mounted) return null;

    return (
        <div className="relative h-screen w-full overflow-hidden">
            {/* Swiper Component */}
            <Swiper
                ref={swiperRef}
                modules={[Autoplay, EffectFade, EffectCube, EffectCoverflow, Pagination, Navigation]}
                effect="fade"
                speed={1500}
                pagination={{
                    clickable: true,
                    dynamicBullets: true,
                }}
                navigation={true}
                autoplay={{
                    delay: 6000,
                    disableOnInteraction: false,
                }}
                loop={true}
                className="w-full h-full"
                onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            >
                {sriLankaSlides.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <div className="relative w-full h-full bg-black">
                            {/* Background Image with Ken Burns effect */}
                            <div className="absolute inset-0 overflow-hidden">
                                <Image
                                    src={slide.image}
                                    alt={slide.title}
                                    fill
                                    priority
                                    className={`object-cover brightness-50 transform scale-110 transition-transform duration-10000 ${
                                        activeIndex === sriLankaSlides.indexOf(slide) ? "animate-kenburns" : ""
                                    }`}
                                />
                            </div>

                            {/* Animated overlay gradient */}
                            <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/70 animate-pulse-slow"></div>

                            {/* Content above overlay */}
                            <AnimatePresence mode="wait">
                                {activeIndex === sriLankaSlides.indexOf(slide) && (
                                    <motion.div
                                        key={slide.id}
                                        initial="hidden"
                                        animate="visible"
                                        exit="exit"
                                        variants={slideVariants}
                                        className="absolute inset-0 flex items-center justify-center z-20"
                                    >
                                        <div className="text-center px-4 max-w-4xl">
                                            <motion.h2
                                                variants={itemVariants}
                                                className={`${whisper.className} text-8xl md:text-8xl lg:text-8xl font-whisper text-white mb-4`}
                                            >
                                                {slide.title}
                                            </motion.h2>

                                            <motion.p
                                                variants={itemVariants}
                                                className={`${montserrat.className} text-xl md:text-2xl text-white mb-8 max-w-2xl mx-auto`}
                                            >
                                                {slide.description}
                                            </motion.p>

                                            <motion.div
                                                variants={itemVariants}
                                                className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6"
                                            >
                                                <motion.button
                                                    whileHover={{ scale: 1.05 }}
                                                    whileTap={{ scale: 0.95 }}
                                                    className={`${montserrat.className} bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-full text-lg font-semibold flex items-center transition-all duration-300 hover:shadow-lg`}
                                                >
                                                    Plan Your Sri Lanka Trip
                                                    <ArrowRight className="ml-2 h-5 w-5"/>
                                                </motion.button>

                                                <motion.button
                                                    whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.9)', color: '#0d9488' }}
                                                    whileTap={{ scale: 0.95 }}
                                                    className={`${montserrat.className} bg-transparent border-2 border-white text-white hover:bg-white hover:text-teal-600 px-6 py-3 rounded-full text-lg font-semibold transition-all duration-300`}
                                                >
                                                    Explore Destinations
                                                </motion.button>
                                            </motion.div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Decorative floating elements */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-10 overflow-hidden">
                <div className="floating-element w-24 h-24 bg-teal-500/10 rounded-full absolute top-1/4 left-1/4 animate-float-slow"></div>
                <div className="floating-element w-16 h-16 bg-white/10 rounded-full absolute top-2/3 right-1/4 animate-float"></div>
                <div className="floating-element w-32 h-32 bg-teal-300/10 rounded-full absolute bottom-1/4 right-1/3 animate-float-reverse"></div>
            </div>

            {/* Scroll indicator with animation */}
            <motion.div
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
            >
                <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
                    <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
                </div>
            </motion.div>

            {/* Custom progress indicators */}
            <div className="absolute bottom-8 right-8 z-20 hidden md:block">
                {sriLankaSlides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => swiperRef.current.swiper.slideTo(index)}
                        className={`w-3 h-3 rounded-full mx-1 transition-all duration-300 ${
                            activeIndex === index ? "bg-teal-500 scale-150" : "bg-white/50 hover:bg-white"
                        }`}
                    />
                ))}
            </div>
        </div>
    );
}