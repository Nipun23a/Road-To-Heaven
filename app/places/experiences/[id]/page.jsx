'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from '@react-google-maps/api';
import {
    MapPin, Calendar, Star, Users,
    ChevronRight, Info, ArrowLeft,
    Camera, Bookmark, Share, Clock,
    Navigation, AlertTriangle, DollarSign
} from 'lucide-react';
import { montserrat, whisper } from "@/app/layout";
import placesData from '@/data/json/places.json';
import experiencesData from '@/data/json/experiences.json';
import HighlightSection from "@/components/HighlightSection";
import VisitorTipsSection from "@/components/TipsSection";
import QuickInfoSection from "@/components/QuickInfoSection";

// Animation variants
const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2
        }
    }
};

export default function ExperienceDetails({ params }) {
    const [experience, setExperience] = useState(null);
    const [relatedPlaces, setRelatedPlaces] = useState([]);
    const [relatedExperiences, setRelatedExperiences] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showFullDescription, setShowFullDescription] = useState(false);
    const [isBookmarked, setIsBookmarked] = useState(false);
    const [mapCenter, setMapCenter] = useState(null);
    const [showInfoWindow, setShowInfoWindow] = useState(false);
    const [activeImage, setActiveImage] = useState(0);

    // Google Maps integration
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
    });

    // Get experience ID from params
    const experienceId = params?.id || "3"; // Defaulting to Elephant Safari

    useEffect(() => {
        const fetchExperienceData = async () => {
            try {
                // Find the experience in the JSON data
                const foundExperience = experiencesData.find(e => e.id.toString() === experienceId);

                if (!foundExperience) {
                    console.error("Experience not found");
                    setLoading(false);
                    return;
                }

                setExperience(foundExperience);

                // Set map center based on experience coordinates
                if (foundExperience.latitude && foundExperience.longitude) {
                    setMapCenter({
                        lat: foundExperience.latitude,
                        lng: foundExperience.longitude
                    });
                }

                // Find related places that might be relevant to this experience
                const related = placesData.slice(0, 3); // Get first three for demo
                setRelatedPlaces(related);

                // Find related experiences (excluding current)
                const relatedExps = experiencesData
                    .filter(e => e.id !== foundExperience.id)
                    .slice(0, 2);
                setRelatedExperiences(relatedExps);

                setLoading(false);
            } catch (error) {
                console.error("Error fetching experience data:", error);
                setLoading(false);
            }
        };

        fetchExperienceData();
    }, [experienceId]);

    const toggleDescription = () => {
        setShowFullDescription(!showFullDescription);
    };

    const toggleBookmark = () => {
        setIsBookmarked(!isBookmarked);
    };

    const getIconByName = (iconName, size = 20) => {
        const icons = {
            Camera: <Camera size={size} />,
            Clock: <Clock size={size} />,
            Navigation: <Navigation size={size} />,
            Users: <Users size={size} />,
            AlertTriangle: <AlertTriangle size={size} />,
            DollarSign: <DollarSign size={size} />
        };

        return icons[iconName] || <Info size={size} />; // Default to Info icon if not found
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center h-screen">
                <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-teal-500"></div>
            </div>
        );
    }

    if (!experience) {
        return (
            <div className="flex flex-col items-center justify-center h-screen">
                <h1 className="text-3xl font-bold text-red-500 mb-4">Experience Not Found</h1>
                <p>The experience you're looking for doesn't exist or has been removed.</p>
                <a href="/places/experiences" className="mt-6 bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-full transition-all duration-300 flex items-center">
                    <ArrowLeft size={18} className="mr-2" />
                    Back to All Experiences
                </a>
            </div>
        );
    }

    return (
        <div className="bg-white min-h-screen">
            {/* Hero Section with Gallery */}
            <div className="relative w-full h-[60vh] overflow-hidden">
                {/* Main Image */}
                <div className="absolute inset-0">
                    <Image
                        src={experience.image}
                        alt={experience.title}
                        fill
                        priority
                        className="object-cover brightness-75 transition-opacity duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60"></div>
                </div>
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
                    <motion.h1
                        initial={{opacity: 0, y: 30}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.8}}
                        className={`${whisper.className} text-6xl md:text-7xl text-white mb-2`}
                    >
                        {experience.title}
                    </motion.h1>

                    <motion.div
                        initial={{opacity: 0, y: 30}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.8, delay: 0.2}}
                        className="flex flex-wrap items-center gap-4 md:gap-8 text-white"
                    >
                        <div className="flex items-center">
                            <Clock size={18} className="mr-1" />
                            <span className={`${montserrat.className}`}>{experience.duration}</span>
                        </div>
                        <div className="flex items-center">
                            <Calendar size={18} className="mr-1" />
                            <span className={`${montserrat.className}`}>Available: {experience.availability}</span>
                        </div>
                        <div className="flex items-center">
                            <DollarSign size={18} className="mr-1" />
                            <span className={`${montserrat.className}`}>${experience.price} USD per person</span>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Main Content */}
            <div className={`${montserrat.className} container mx-auto px-4 py-12`}>
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                        {/* Main Content - Description and Details */}
                        <div className="lg:col-span-2">
                            <motion.div
                                initial="hidden"
                                animate="visible"
                                variants={staggerContainer}
                            >
                                {/* Description Section */}
                                <motion.div
                                    variants={fadeInUp}
                                    className="bg-white rounded-lg shadow-lg p-6 mb-8"
                                >
                                    <h2 className="text-2xl text-gray-800 font-bold mb-4">About This Experience</h2>

                                    <div
                                        className={`text-gray-700 ${showFullDescription ? '' : 'max-h-28 overflow-hidden relative'}`}>
                                        <p className="mb-4">{experience.description}</p>

                                        {!showFullDescription && (
                                            <div
                                                className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
                                        )}
                                    </div>

                                    <button
                                        onClick={toggleDescription}
                                        className="mt-3 text-teal-600 font-medium hover:text-teal-800 flex items-center transition-colors"
                                    >
                                        {showFullDescription ? 'Show Less' : 'Read More'}
                                        <ChevronRight size={18}
                                                      className={`ml-1 transition-transform duration-300 ${showFullDescription ? 'rotate-90' : ''}`}/>
                                    </button>
                                </motion.div>

                                {/* Highlight Section */}
                                <motion.div
                                    variants={fadeInUp}
                                    className="bg-white rounded-lg shadow-lg p-6 mb-8"
                                >
                                    <h2 className="text-2xl text-gray-800 font-bold mb-4">Experience Highlights</h2>
                                    <div className="flex flex-col space-y-4">
                                        <div className="flex items-start">
                                            <div className="bg-teal-100 rounded-full p-2 mr-4 mt-1">
                                                <Star size={20} className="text-teal-600" />
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-lg text-gray-800">{experience.highlight}</h3>
                                                <p className="text-gray-600">
                                                    Our most popular feature that guests love about this experience.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-start">
                                            <div className="bg-teal-100 rounded-full p-2 mr-4 mt-1">
                                                <Users size={20} className="text-teal-600" />
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-lg text-gray-800">Expert Local Guide</h3>
                                                <p className="text-gray-600">
                                                    Led by {experience.instructor.name}, a local expert with intimate knowledge of the area.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-start">
                                            <div className="bg-teal-100 rounded-full p-2 mr-4 mt-1">
                                                <Camera size={20} className="text-teal-600" />
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-lg text-gray-800">Photo Opportunities</h3>
                                                <p className="text-gray-600">
                                                    Plenty of chances to capture stunning moments and scenery.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Guest Experience */}
                                <motion.div
                                    variants={fadeInUp}
                                    className="bg-white rounded-lg shadow-lg p-6 mb-8"
                                >
                                    <h2 className="text-2xl text-gray-800 font-bold mb-4">Guest Experience</h2>
                                    <div className="bg-gray-50 p-5 rounded-lg italic text-gray-700 border-l-4 border-teal-500">
                                        <p className="mb-3">{experience.experience}</p>
                                        <p className="text-right font-medium">— Previous Guest</p>
                                    </div>
                                </motion.div>

                                {/* Related Places */}
                                <motion.div
                                    variants={fadeInUp}
                                    className="mb-8"
                                >
                                    <div className="flex justify-between items-center mb-6">
                                        <h2 className="text-2xl text-gray-800 font-bold">Nearby Places</h2>
                                        <a href="/places"
                                           className="text-teal-600 font-medium hover:text-teal-800 flex items-center">
                                            View All Places
                                            <ChevronRight size={18} className="ml-1"/>
                                        </a>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                        {relatedPlaces.map((place) => (
                                            <div
                                                key={place.id}
                                                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 group"
                                            >
                                                <div className="relative h-48 overflow-hidden">
                                                    <Image
                                                        src={place.image}
                                                        alt={place.name}
                                                        fill
                                                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                                                    />
                                                    <div
                                                        className="absolute top-3 right-3 bg-teal-500 text-white text-xs uppercase font-bold py-1 px-2 rounded">
                                                        {place.category}
                                                    </div>
                                                </div>
                                                <div className="p-4">
                                                    <div className="flex items-center text-gray-600 mb-1">
                                                        <MapPin size={16} className="mr-1"/>
                                                        <span className="text-sm">{place.location}</span>
                                                    </div>
                                                    <h3 className="font-bold text-lg mb-2">{place.name}</h3>
                                                    <div className="flex justify-between items-center">
                                                        <div className="flex items-center">
                                                            <Star size={16} className="text-yellow-500 mr-1"/>
                                                            <span className="text-sm font-medium">{place.rating}</span>
                                                        </div>
                                                        <a
                                                            href={`/places/${place.id}`}
                                                            className="text-teal-600 font-medium hover:text-teal-800 flex items-center"
                                                        >
                                                            View Details
                                                            <ChevronRight size={16} className="ml-1"/>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            </motion.div>
                        </div>

                        {/* Sidebar - Booking, Map and Additional Info */}
                        <div className="lg:col-span-1">
                            <motion.div
                                initial="hidden"
                                animate="visible"
                                variants={staggerContainer}
                                className="space-y-8"
                            >
                                {/* Map */}
                                <motion.div
                                    variants={fadeInUp}
                                    className="bg-white rounded-lg shadow-lg overflow-hidden"
                                >
                                    <h2 className="text-xl text-gray-800 font-bold p-4 border-b">Location</h2>
                                    <div className="h-64">
                                        {isLoaded && mapCenter ? (
                                            <GoogleMap
                                                mapContainerStyle={{ width: '100%', height: '100%' }}
                                                center={mapCenter}
                                                zoom={10}
                                            >
                                                <Marker
                                                    position={mapCenter}
                                                    onClick={() => setShowInfoWindow(!showInfoWindow)}
                                                    icon={{
                                                        path: 'M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z',
                                                        fillColor: '#14b8a6',
                                                        fillOpacity: 1,
                                                        strokeColor: '#FFFFFF',
                                                        strokeWeight: 2,
                                                        scale: 1.8,
                                                        anchor: { x: 12, y: 24 },
                                                    }}
                                                />
                                                {showInfoWindow && (
                                                    <InfoWindow
                                                        position={mapCenter}
                                                        onCloseClick={() => setShowInfoWindow(false)}
                                                    >
                                                        <div className="p-2">
                                                            <p className="font-bold">{experience.title}</p>
                                                            <p className="text-sm text-gray-600">Experience Location</p>
                                                        </div>
                                                    </InfoWindow>
                                                )}
                                            </GoogleMap>
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center bg-gray-100">
                                                <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-teal-500"></div>
                                            </div>
                                        )}
                                    </div>
                                    <div className="p-4 border-t">
                                        <a
                                            href={`https://www.google.com/maps/search/?api=1&query=${experience.latitude},${experience.longitude}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-teal-600 font-medium hover:text-teal-800 flex items-center justify-center"
                                        >
                                            Get Directions
                                            <Navigation size={16} className="ml-2" />
                                        </a>
                                    </div>
                                </motion.div>

                                {/* Guide Info */}
                                <motion.div
                                    variants={fadeInUp}
                                    className="bg-white rounded-lg shadow-lg p-5"
                                >
                                    <h2 className="text-xl text-gray-800 font-bold mb-4">Your Guide</h2>
                                    <div className="flex items-center mb-4">
                                        <div className="w-14 h-14 rounded-full bg-teal-100 flex items-center justify-center text-teal-600 mr-3">
                                            <Users size={24} />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-lg">{experience.instructor.name}</h3>
                                            <p className="text-gray-600 text-sm">Local Expert</p>
                                        </div>
                                    </div>
                                    <div className="space-y-2 text-sm">
                                        <div className="flex items-center text-gray-700">
                                            <span className="font-medium w-20">Contact:</span>
                                            <span>{experience.instructor.contact}</span>
                                        </div>
                                        <div className="flex items-center text-gray-700">
                                            <span className="font-medium w-20">Email:</span>
                                            <span>{experience.instructor.email}</span>
                                        </div>
                                    </div>
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}