'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from '@react-google-maps/api';
import {
    MapPin, Calendar, Star, Users,
    ChevronRight, Info, ArrowLeft,
    Camera, Bookmark, Share, Clock,
    Navigation, AlertTriangle
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

export default function PlaceDetails({ params }) {
    const [place, setPlace] = useState(null);
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

    // This would typically come from URL params but we're simulating it with a fixed ID
    const placeId = params?.id || "15"; // Defaulting to Wilpattu National Park for this example



    useEffect(() => {
        const fetchPlaceData = async () => {
            try {
                // In a real app, you'd fetch this from an API
                // For now, we'll simulate finding it in the JSON data
                const foundPlace = placesData.find(p => p.id.toString() === placeId);

                if (!foundPlace) {
                    console.error("Place not found");
                    setLoading(false);
                    return;
                }

                setPlace(foundPlace);

                // Set map center based on place coordinates
                if (foundPlace.latitude && foundPlace.longitude) {
                    setMapCenter({
                        lat: foundPlace.latitude,
                        lng: foundPlace.longitude
                    });
                }

                // Find related places (same category, excluding current)
                const related = placesData
                    .filter(p => p.category === foundPlace.category && p.id !== foundPlace.id)
                    .slice(0, 3);

                setRelatedPlaces(related);

                // Find experiences that might be related to this place
                const experiences = experiencesData.slice(0, 2); // Just get first two for demo
                setRelatedExperiences(experiences);

                setLoading(false);
            } catch (error) {
                console.error("Error fetching place data:", error);
                setLoading(false);
            }
        };

        fetchPlaceData();
    }, [placeId]);

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
            AlertTriangle: <AlertTriangle size={size} />
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

    if (!place) {
        return (
            <div className="flex flex-col items-center justify-center h-screen">
                <h1 className="text-3xl font-bold text-red-500 mb-4">Place Not Found</h1>
                <p>The place you're looking for doesn't exist or has been removed.</p>
                <a href="/places" className="mt-6 bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-full transition-all duration-300 flex items-center">
                    <ArrowLeft size={18} className="mr-2" />
                    Back to All Places
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
                        src={place.image}
                        alt={place.name}
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
                        {place.name}
                    </motion.h1>

                    <motion.div
                        initial={{opacity: 0, y: 30}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.8, delay: 0.2}}
                        className="flex flex-wrap items-center gap-4 md:gap-8 text-white"
                    >
                        <div className="flex items-center">
                            <MapPin size={18} className="mr-1" />
                            <span className={`${montserrat.className}`}>{place.location}</span>
                        </div>
                        <div className="flex items-center">
                            <Calendar size={18} className="mr-1" />
                            <span className={`${montserrat.className}`}>Best time: {place.bestTime}</span>
                        </div>
                        <div className="flex items-center">
                            <Users size={18} className="mr-1" />
                            <span className={`${montserrat.className} capitalize`}>{place.popularity} Traffic</span>
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
                                    <h2 className="text-2xl text-gray-800 font-bold mb-4">About {place.name}</h2>

                                    <div
                                        className={`text-gray-700 ${showFullDescription ? '' : 'max-h-28 overflow-hidden relative'}`}>
                                        <p className="mb-4">{place.description}</p>

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

                                {/* Highlights Section */}
                                <HighlightSection highlights={place.highlights} fadeInUp={fadeInUp}/>

                                {/* Tips Section */}
                                <VisitorTipsSection fadeInUp={fadeInUp} visitorTips={place.visitorTips}/>

                                {/* Related Places */}
                                <motion.div
                                    variants={fadeInUp}
                                    className="mb-8"
                                >
                                    <div className="flex justify-between items-center mb-6">
                                        <h2 className="text-2xl text-gray-800 font-bold">Similar Places</h2>
                                        <a href="/places"
                                           className="text-teal-600 font-medium hover:text-teal-800 flex items-center">
                                            View All
                                            <ChevronRight size={18} className="ml-1"/>
                                        </a>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                        {relatedPlaces.map((relatedPlace) => (
                                            <div
                                                key={relatedPlace.id}
                                                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 group"
                                            >
                                                <div className="relative h-48 overflow-hidden">
                                                    <Image
                                                        src={relatedPlace.image}
                                                        alt={relatedPlace.name}
                                                        fill
                                                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                                                    />
                                                    <div
                                                        className="absolute top-3 right-3 bg-teal-500 text-white text-xs uppercase font-bold py-1 px-2 rounded">
                                                        {relatedPlace.category}
                                                    </div>
                                                </div>
                                                <div className="p-4">
                                                    <div className="flex items-center text-gray-600 mb-1">
                                                        <MapPin size={16} className="mr-1"/>
                                                        <span className="text-sm">{relatedPlace.location}</span>
                                                    </div>
                                                    <h3 className="font-bold text-lg mb-2">{relatedPlace.name}</h3>
                                                    <div className="flex justify-between items-center">
                                                        <div className="flex items-center">
                                                            <Star size={16} className="text-yellow-500 mr-1"/>
                                                            <span
                                                                className="text-sm font-medium">{relatedPlace.rating}</span>
                                                        </div>
                                                        <a
                                                            href={`/places/${relatedPlace.id}`}
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

                        {/* Sidebar - Map and Additional Info */}
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
                                                            <p className="font-bold">{place.name}</p>
                                                            <p className="text-sm text-gray-600">{place.location}</p>
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
                                            href={`https://www.google.com/maps/search/?api=1&query=${place.latitude},${place.longitude}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-teal-600 font-medium hover:text-teal-800 flex items-center justify-center"
                                        >
                                            Get Directions
                                            <Navigation size={16} className="ml-2" />
                                        </a>
                                    </div>
                                </motion.div>

                                <QuickInfoSection quickInfo={place.quickInfo} fadeInUp={fadeInUp} />

                                {/* Related Experiences */}
                                <motion.div
                                    variants={fadeInUp}
                                    className="bg-white rounded-lg shadow-lg p-5"
                                >
                                    <h2 className="text-xl text-gray-800 font-bold mb-4">Related Experiences</h2>

                                    <div className="space-y-4">
                                        {relatedExperiences.map((exp) => (
                                            <div key={exp.id} className="group">
                                                <div className="relative h-32 mb-3 overflow-hidden rounded-lg">
                                                    <Image
                                                        src={exp.image}
                                                        alt={exp.title}
                                                        fill
                                                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                                                    />
                                                    <div className={`absolute inset-0 bg-gradient-to-t ${exp.color} opacity-60`}></div>
                                                    <h3 className="absolute bottom-0 left-0 right-0 text-white font-bold p-3 text-center">{exp.title}</h3>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>

                    {/* Call to Action */}
                    <div className="mt-12">
                        <motion.div
                            variants={fadeInUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="bg-teal-50 border border-teal-100 rounded-lg p-8 text-center"
                        >
                            <h2 className={`${whisper.className} text-4xl text-teal-600 mb-2`}>Plan Your Visit</h2>
                            <h3 className="text-2xl font-bold text-gray-800 mb-4">Ready to experience {place.name}?</h3>
                            <p className="text-gray-600 max-w-2xl mx-auto mb-6">
                                Add this destination to your customized Sri Lanka itinerary and make the most of your visit.
                            </p>
                            <div className="flex flex-wrap justify-center gap-4">
                                <a
                                    href="/plan-trip"
                                    className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-full font-medium transition-all duration-300"
                                >
                                    Add to Itinerary
                                </a>
                                <a
                                    href="/places"
                                    className="border-2 border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white px-6 py-3 rounded-full font-medium transition-all duration-300"
                                >
                                    Explore Experiences
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
}