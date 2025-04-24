'use client'
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote, Camera, Instagram } from 'lucide-react';
import { montserrat, whisper } from "@/app/layout";

export default function TestimonialsGallerySection() {
    const [mounted, setMounted] = useState(false);
    const [currentTestimonial, setCurrentTestimonial] = useState(0);
    const [selectedImage, setSelectedImage] = useState(null);
    const testimonialsRef = useRef(null);

    useEffect(() => {
        setMounted(true);
    }, []);

    const testimonials = [
        {
            id: 1,
            name: "Sarah Johnson",
            from: "United Kingdom",
            image: "/images/testimonial-1.jpg",
            text: "Our trip to Sri Lanka was absolutely magical! From the pristine beaches to the incredible wildlife, every moment was breathtaking. The local guides were knowledgeable and friendly, making our experience authentic and memorable.",
            rating: 5
        },
        {
            id: 2,
            name: "David Chen",
            from: "Australia",
            image: "/images/testimonial-2.jpg",
            text: "The cultural heritage of Sri Lanka blew me away. Exploring ancient temples and learning about the rich history was fascinating. The food was incredible too - I'm still dreaming about those hoppers and curries!",
            rating: 5
        },
        {
            id: 3,
            name: "Emma Rodriguez",
            from: "Canada",
            image: "/images/testimonial-3.jpg",
            text: "As a solo traveler, I felt safe and welcomed throughout my Sri Lanka adventure. The diverse landscapes allowed me to experience beaches, mountains, and jungles all in one trip. I'll definitely be returning!",
            rating: 5
        }
    ];

    const galleryImages = [
        {
            id: 1,
            src: "/images/unawatuna.jpg",
            alt: "Scenic beach sunset in Mirissa",
            location: "Mirissa Beach"
        },
        {
            id: 2,
            src: "/images/tea-plantation.jpg",
            alt: "Tea plantations in Nuwara Eliya",
            location: "Nuwara Eliya"
        },
        {
            id: 3,
            src: "/images/sigiriya.jpg",
            alt: "Sigiriya Rock Fortress",
            location: "Sigiriya"
        },
        {
            id: 4,
            src: "/images/dancer.jpg",
            alt: "Traditional Sri Lankan dancer",
            location: "Kandy"
        },
        {
            id: 5,
            src: "/images/minneriya.jpg",
            alt: "Wild elephants in Minneriya",
            location: "Minneriya"
        },
        {
            id: 6,
            src: "/images/cruisine.jpg",
            alt: "Traditional Sri Lankan cuisine",
            location: "Colombo"
        }
    ];

    const nextTestimonial = () => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const openLightbox = (image) => {
        setSelectedImage(image);
        document.body.style.overflow = 'hidden';
    };

    const closeLightbox = () => {
        setSelectedImage(null);
        document.body.style.overflow = 'auto';
    };

    if (!mounted) return null;

    return (
        <section className="pt-16 pb-24 bg-gradient-to-b from-white to-teal-50">
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
                        Memories & Moments
                    </motion.h3>
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                        className={`${montserrat.className} text-3xl md:text-4xl font-bold text-gray-800 mb-4`}
                    >
                        What Our Travelers Say
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, scaleX: 0 }}
                        whileInView={{ opacity: 1, scaleX: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="h-1 w-24 bg-teal-500 mx-auto mb-6"
                    ></motion.div>
                </div>

                {/* Testimonials Carousel */}
                <div className="mb-20 relative" ref={testimonialsRef}>
                    <motion.div
                        key={currentTestimonial}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                        className="flex flex-col md:flex-row items-center bg-white rounded-2xl shadow-xl overflow-hidden"
                    >
                        <div className="relative w-full md:w-1/3 h-64 md:h-96">
                            <Image
                                src={testimonials[currentTestimonial].image}
                                alt={testimonials[currentTestimonial].name}
                                fill
                                className="cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                            <div className="absolute bottom-4 left-4 right-4 text-white">
                                <h4 className={`${montserrat.className} text-xl font-bold`}>{testimonials[currentTestimonial].name}</h4>
                                <p className={`${montserrat.className} text-sm text-gray-200`}>from {testimonials[currentTestimonial].from}</p>
                            </div>
                        </div>

                        <div className="w-full md:w-2/3 p-6 md:p-12 relative">
                            <Quote size={48} className="text-teal-200 absolute top-6 left-6 opacity-50" />

                            <div className="relative z-10">
                                <div className="flex mb-4">
                                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                                        <svg key={i} className="w-5 h-5 text-yellow-500 fill-current" viewBox="0 0 24 24">
                                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                        </svg>
                                    ))}
                                </div>

                                <p className={`${montserrat.className} text-gray-700 text-lg mb-6 italic`}>
                                    "{testimonials[currentTestimonial].text}"
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Navigation buttons */}
                    <button
                        onClick={prevTestimonial}
                        className="absolute top-1/2 -left-4 md:-left-6 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
                        aria-label="Previous testimonial"
                    >
                        <ChevronLeft size={24} className="text-teal-600" />
                    </button>

                    <button
                        onClick={nextTestimonial}
                        className="absolute top-1/2 -right-4 md:-right-6 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
                        aria-label="Next testimonial"
                    >
                        <ChevronRight size={24} className="text-teal-600" />
                    </button>

                    {/* Indicators */}
                    <div className="flex justify-center mt-6 gap-2">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentTestimonial(index)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                    currentTestimonial === index ? 'bg-teal-600 w-6' : 'bg-gray-300'
                                }`}
                                aria-label={`Go to testimonial ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>

                {/* Photo Gallery */}
                <div>
                    <div className="text-center mb-10">
                        <motion.h3
                            initial={{ opacity: 0, y: -20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            className={`${whisper.className} text-teal-600 text-4xl mb-2`}
                        >
                            Capture Paradise
                        </motion.h3>
                        <motion.h2
                            initial={{ opacity: 0, y: -20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            viewport={{ once: true }}
                            className={`${montserrat.className} text-3xl md:text-4xl font-bold text-gray-800 mb-4`}
                        >
                            Sri Lanka Photo Gallery
                        </motion.h2>
                        <motion.div
                            initial={{ opacity: 0, scaleX: 0 }}
                            whileInView={{ opacity: 1, scaleX: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="h-1 w-24 bg-teal-500 mx-auto mb-6"
                        ></motion.div>
                    </div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        variants={{
                            hidden: { opacity: 0 },
                            visible: {
                                opacity: 1,
                                transition: {
                                    staggerChildren: 0.1
                                }
                            }
                        }}
                        className="grid grid-cols-2 md:grid-cols-3 gap-4"
                    >
                        {galleryImages.map((image) => (
                            <motion.div
                                key={image.id}
                                variants={{
                                    hidden: { opacity: 0, scale: 0.8 },
                                    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
                                }}
                                className="relative overflow-hidden rounded-lg aspect-square cursor-pointer group"
                                onClick={() => openLightbox(image)}
                            >
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                                    <Camera size={24} className="text-white mb-2" />
                                    <p className={`${montserrat.className} text-white font-medium`}>{image.location}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Instagram feed link */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="mt-10 text-center"
                    >
                        <a href="#" className={`${montserrat.className} inline-flex items-center bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full font-medium hover:shadow-lg transition-shadow duration-300`}>
                            <Instagram size={20} className="mr-2" />
                            Follow Our Instagram For More
                        </a>
                    </motion.div>
                </div>
            </div>

            {/* Lightbox */}
            {selectedImage && (
                <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={closeLightbox}>
                    <button
                        className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
                        onClick={closeLightbox}
                        aria-label="Close"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    <div className="relative max-w-5xl max-h-[80vh] w-full" onClick={(e) => e.stopPropagation()}>
                        <div className="relative aspect-[4/3] w-full">
                            <Image
                                src={selectedImage.src}
                                alt={selectedImage.alt}
                                fill
                                className="object-contain"
                            />
                        </div>
                        <div className="mt-4 text-white text-center">
                            <h4 className={`${montserrat.className} text-xl font-medium`}>{selectedImage.location}</h4>
                            <p className={`${montserrat.className} text-gray-300`}>{selectedImage.alt}</p>
                        </div>
                    </div>

                    <button
                        className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/30 hover:bg-black/50 p-2 rounded-full text-white transition-colors"
                        onClick={(e) => {
                            e.stopPropagation();
                            const currentIndex = galleryImages.findIndex(img => img.id === selectedImage.id);
                            const prevIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
                            setSelectedImage(galleryImages[prevIndex]);
                        }}
                        aria-label="Previous image"
                    >
                        <ChevronLeft size={28} />
                    </button>

                    <button
                        className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/30 hover:bg-black/50 p-2 rounded-full text-white transition-colors"
                        onClick={(e) => {
                            e.stopPropagation();
                            const currentIndex = galleryImages.findIndex(img => img.id === selectedImage.id);
                            const nextIndex = (currentIndex + 1) % galleryImages.length;
                            setSelectedImage(galleryImages[nextIndex]);
                        }}
                        aria-label="Next image"
                    >
                        <ChevronRight size={28} />
                    </button>
                </div>
            )}
        </section>
    );
}