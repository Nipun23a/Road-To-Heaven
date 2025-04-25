'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import {
    MapPin, Calendar, DollarSign, Users, Heart, Clock,
    Plane, ChevronDown, ChevronUp, Navigation,
    Coffee, Utensils, MapPinned
} from 'lucide-react';
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from '@react-google-maps/api';
import { montserrat, whisper } from "@/app/layout";

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

export default function ItineraryResults() {
    const [itineraryData, setItineraryData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [selectedMarker, setSelectedMarker] = useState(null);
    const [expandedDay, setExpandedDay] = useState(1);
    const [mapCenter, setMapCenter] = useState({ lat: 7.8731, lng: 80.7718 }); // Sri Lanka center coordinates
    const router = useRouter();

    // Google Maps integration
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
    });

    useEffect(() => {
        const fetchItineraryData = async () => {
            try {
                // Retrieve the stored plan from localStorage
                const planData = localStorage.getItem('tripPlan');

                if (!planData) {
                    console.error("No itinerary data found in localStorage");
                    setLoading(false);
                    return;
                }

                // Parse the JSON string from localStorage
                const parsedPlanData = JSON.parse(planData);

                // Check if we received the plan property from the API response
                let formattedData;

                if (typeof parsedPlanData.plan === 'string') {
                    // The plan is a JSON string, parse it
                    try {
                        // Extract JSON from the text response (in case there's extra text)
                        const jsonMatch = parsedPlanData.plan.match(/\{[\s\S]*\}/);
                        if (jsonMatch) {
                            const jsonString = jsonMatch[0];
                            const parsedPlan = JSON.parse(jsonString);

                            // Combine with the original form data
                            formattedData = {
                                tripDetails: parsedPlanData.formData || {},
                                ...parsedPlan
                            };
                        } else {
                            throw new Error("Could not extract JSON from response");
                        }
                    } catch (parseError) {
                        console.error("Error parsing plan JSON:", parseError);
                        setLoading(false);
                        return;
                    }
                } else if (typeof parsedPlanData === 'object') {
                    // The plan is already an object
                    formattedData = parsedPlanData;
                } else {
                    console.error("Unexpected plan data format");
                    setLoading(false);
                    return;
                }

                setItineraryData(formattedData);
                setLoading(false);

            } catch (error) {
                console.error("Error fetching itinerary data:", error);
                setLoading(false);
            }
        };

        fetchItineraryData();
    }, []);

    const handleDayClick = (day) => {
        setExpandedDay(expandedDay === day ? null : day);

        // Center map on the selected day's location
        if (itineraryData && itineraryData.itinerary) {
            const dayData = itineraryData.itinerary.find(item => item.day === day);
            if (dayData && dayData.locations && dayData.locations.length > 0) {
                setMapCenter({
                    lat: dayData.locations[0].coordinates.latitude,
                    lng: dayData.locations[0].coordinates.longitude
                });
            }
        }
    };

    const handleMarkerClick = (location) => {
        setSelectedMarker(location);
        setMapCenter({
            lat: location.coordinates.latitude,
            lng: location.coordinates.longitude
        });
    };

    const handleReturnToPlanning = () => {
        router.push('/plan');
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center h-screen">
                <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-teal-500"></div>
            </div>
        );
    }

    if (!itineraryData) {
        return (
            <div className="flex flex-col items-center justify-center h-screen">
                <h1 className="text-3xl font-bold text-red-500 mb-4">Error Loading Itinerary</h1>
                <p>Unable to load your travel plan. Please try again.</p>
                <button
                    onClick={handleReturnToPlanning}
                    className="mt-6 bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-full transition-all duration-300"
                >
                    Back to Planning
                </button>
            </div>
        );
    }

    // All markers for the map
    const allMarkers = itineraryData.itinerary.flatMap(day =>
        day.locations.map(loc => ({
            ...loc,
            day: day.day,
            date: day.date
        }))
    );

    // Define marker colors based on the day
    const getMarkerColor = (day) => {
        const colors = [
            '#14b8a6', // teal-500
            '#0d9488', // teal-600
            '#0f766e', // teal-700
            '#0891b2', // cyan-600
            '#0e7490', // cyan-700
            '#1d4ed8', // blue-700
            '#4f46e5'  // indigo-600
        ];
        return colors[(day - 1) % colors.length];
    };

    return (
        <div className="bg-white min-h-screen">
            {/* Hero Section */}
            <div className="relative w-full h-64 md:h-96 overflow-hidden">
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
                        className={`${whisper.className} text-5xl md:text-6xl text-white mb-2`}
                    >
                        Your Sri Lanka Adventure
                    </motion.h1>

                    <motion.p
                        initial={{opacity: 0, y: 30}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.8, delay: 0.2}}
                        className={`${montserrat.className} text-xl md:text-2xl text-white/90 max-w-3xl`}
                    >
                        {itineraryData.tripDetails.arrivalDate} - {itineraryData.tripDetails.departureDate} • {itineraryData.tripDetails.nights} nights
                    </motion.p>
                </div>
            </div>

            {/* Main Content */}
            <div className={`${montserrat.className} container mx-auto px-4 py-12`}>
                <div className="max-w-6xl mx-auto">

                    {/* Trip Summary */}
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                        className="mb-12"
                    >
                        <motion.div variants={fadeInUp} className="bg-white rounded-lg shadow-lg p-6 mb-8">
                            <h2 className="text-3xl text-teal-600 mb-4">Trip Overview</h2>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                                <div className="flex items-start">
                                    <Users className="h-6 w-6 mr-3 text-teal-500 mt-1" />
                                    <div>
                                        <h3 className="font-bold mb-1">Trip Type</h3>
                                        <p className="capitalize">{itineraryData.tripDetails.tripType} trip</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <Calendar className="h-6 w-6 mr-3 text-teal-500 mt-1" />
                                    <div>
                                        <h3 className="font-bold mb-1">Duration</h3>
                                        <p>{itineraryData.tripDetails.nights} nights in Sri Lanka</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <Navigation className="h-6 w-6 mr-3 text-teal-500 mt-1" />
                                    <div>
                                        <h3 className="font-bold mb-1">Distance</h3>
                                        <p>{itineraryData.totalDistanceCovered} total</p>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <h3 className="font-bold text-lg mb-3">Your Preferences</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {itineraryData.tripDetails.activities.map((activity, index) => (
                                            <span key={index} className="bg-teal-50 text-teal-700 px-3 py-1 rounded-full border border-teal-200 capitalize">
                                                {activity}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <h3 className="font-bold text-lg mb-3">Budget</h3>
                                    <p className="mb-2"><span className="font-medium">Total:</span> {itineraryData.budgetBreakdown.total}</p>
                                    <p className="text-sm text-gray-600 capitalize">
                                        {itineraryData.tripDetails.budgetType} travel experience
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Interactive Map and Itinerary */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

                        {/* Map Section */}
                        <motion.div
                            variants={fadeInUp}
                            initial="hidden"
                            animate="visible"
                            className="lg:col-span-6 bg-white rounded-lg shadow-lg overflow-hidden h-[500px] sticky top-4"
                        >
                            {isLoaded ? (
                                <GoogleMap
                                    mapContainerStyle={{ width: '100%', height: '100%' }}
                                    center={mapCenter}
                                    zoom={8}
                                    options={{
                                        styles: [
                                            {
                                                featureType: "all",
                                                elementType: "labels.text.fill",
                                                stylers: [{ color: "#7c93a3" }]
                                            },
                                            {
                                                featureType: "administrative.country",
                                                elementType: "geometry",
                                                stylers: [{ visibility: "on" }]
                                            },
                                            // Add more custom styling as needed
                                        ]
                                    }}
                                >
                                    {allMarkers.map((location, index) => (
                                        <Marker
                                            key={index}
                                            position={{
                                                lat: location.coordinates.latitude,
                                                lng: location.coordinates.longitude
                                            }}
                                            onClick={() => handleMarkerClick(location)}
                                            // Using SVG marker instead of image
                                            icon={{
                                                path: 'M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z',
                                                fillColor: getMarkerColor(location.day),
                                                fillOpacity: 1,
                                                strokeColor: '#FFFFFF',
                                                strokeWeight: 2,
                                                scale: 2,
                                                anchor: { x: 12, y: 24 },
                                                labelOrigin: { x: 12, y: 12 }
                                            }}
                                            label={{
                                                text: `${location.day}`,
                                                color: '#FFFFFF',
                                                fontSize: '12px',
                                                fontWeight: 'bold'
                                            }}
                                        />
                                    ))}

                                    {selectedMarker && (
                                        <InfoWindow
                                            position={{
                                                lat: selectedMarker.coordinates.latitude,
                                                lng: selectedMarker.coordinates.longitude
                                            }}
                                            onCloseClick={() => setSelectedMarker(null)}
                                        >
                                            <div className="p-2 max-w-xs">
                                                <h3 className="font-bold text-base">Day {selectedMarker.day}: {selectedMarker.name}</h3>
                                                <p className="text-sm text-gray-600 mb-2">{selectedMarker.date}</p>
                                                <p className="text-sm">{selectedMarker.description}</p>
                                            </div>
                                        </InfoWindow>
                                    )}
                                </GoogleMap>
                            ) : (
                                <div className="flex items-center justify-center h-full bg-gray-100">
                                    <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-teal-500"></div>
                                </div>
                            )}
                        </motion.div>

                        {/* Itinerary Details */}
                        <motion.div
                            variants={fadeInUp}
                            initial="hidden"
                            animate="visible"
                            className="lg:col-span-6"
                        >
                            <h2 className="text-3xl text-teal-600 mb-6">Your Itinerary</h2>

                            <div className="space-y-4">
                                {itineraryData.itinerary.map((day) => (
                                    <div
                                        key={day.day}
                                        className={`bg-white rounded-lg shadow border-l-4 ${
                                            expandedDay === day.day ? 'border-teal-500' : 'border-gray-200'
                                        } transition-all duration-300`}
                                    >
                                        <div
                                            className="p-4 flex justify-between items-center cursor-pointer"
                                            onClick={() => handleDayClick(day.day)}
                                        >
                                            <div className="flex items-center">
                                                <div className="bg-teal-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mr-4">
                                                    {day.day}
                                                </div>
                                                <div>
                                                    <h3 className="font-bold text-lg">{day.locations[0].name}</h3>
                                                    <p className="text-gray-600 text-sm">{day.date}</p>
                                                </div>
                                            </div>
                                            {expandedDay === day.day ? (
                                                <ChevronUp className="h-6 w-6 text-teal-500" />
                                            ) : (
                                                <ChevronDown className="h-6 w-6 text-gray-400" />
                                            )}
                                        </div>

                                        {expandedDay === day.day && (
                                            <div className="p-4 pt-0 border-t border-gray-100">
                                                {day.locations.map((location, index) => (
                                                    <div key={index} className="mb-4">
                                                        <h4 className="font-medium text-lg flex items-center">
                                                            <MapPinned className="h-5 w-5 text-teal-500 mr-2" />
                                                            {location.name}
                                                        </h4>
                                                        <p className="text-gray-600 ml-7 mb-3">{location.description}</p>

                                                        <div className="ml-7 mb-4">
                                                            <h5 className="font-medium mb-2">Activities:</h5>
                                                            <ul className="list-disc list-inside text-gray-700 pl-2 space-y-1">
                                                                {location.activities.map((activity, idx) => (
                                                                    <li key={idx}>{activity}</li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    </div>
                                                ))}

                                                <div className="border-t border-gray-100 pt-4 mt-4">
                                                    <div className="mb-4">
                                                        <h4 className="font-medium flex items-center">
                                                            <Heart className="h-5 w-5 text-teal-500 mr-2" />
                                                            Accommodation
                                                        </h4>
                                                        <div className="ml-7">
                                                            <p className="font-medium">{day.accommodation.name}</p>
                                                            <p className="text-gray-600">{day.accommodation.location} • {day.accommodation.priceRange}</p>
                                                        </div>
                                                    </div>

                                                    <div>
                                                        <h4 className="font-medium flex items-center">
                                                            <Utensils className="h-5 w-5 text-teal-500 mr-2" />
                                                            Meals
                                                        </h4>
                                                        <ul className="list-disc list-inside text-gray-700 pl-9 space-y-1 mt-1">
                                                            {day.meals.map((meal, idx) => (
                                                                <li key={idx}>{meal}</li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Transportation and Budget Details */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">

                        {/* Transportation */}
                        <motion.div
                            variants={fadeInUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="bg-white rounded-lg shadow-lg p-6"
                        >
                            <h2 className="text-2xl text-teal-600 mb-4">Transportation</h2>

                            {itineraryData.tripDetails.includeFlights && (
                                <div className="mb-6">
                                    <h3 className="font-bold text-lg mb-3">Flights</h3>

                                    <div className="mb-4">
                                        <div className="flex items-start mb-2">
                                            <Plane className="h-5 w-5 text-teal-500 mr-3 mt-1" />
                                            <div>
                                                <p className="font-medium">Arrival</p>
                                                <p className="text-gray-600">
                                                    {itineraryData.transportation.flights.arrival.from} → {itineraryData.transportation.flights.arrival.to}
                                                </p>
                                                <p className="text-sm text-gray-500">Estimated: {itineraryData.transportation.flights.arrival.estimatedCost}</p>
                                            </div>
                                        </div>

                                        <div className="flex items-start">
                                            <Plane className="h-5 w-5 text-teal-500 mr-3 mt-1 transform rotate-180" />
                                            <div>
                                                <p className="font-medium">Departure</p>
                                                <p className="text-gray-600">
                                                    {itineraryData.transportation.flights.departure.from} → {itineraryData.transportation.flights.departure.to}
                                                </p>
                                                <p className="text-sm text-gray-500">Estimated: {itineraryData.transportation.flights.departure.estimatedCost}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            <div>
                                <h3 className="font-bold text-lg mb-3">Local Transportation</h3>
                                <ul className="space-y-2">
                                    {itineraryData.transportation.localTransport.map((item, index) => (
                                        <li key={index} className="flex items-start">
                                            <Navigation className="h-5 w-5 text-teal-500 mr-3 mt-1" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>

                        {/* Budget Breakdown */}
                        <motion.div
                            variants={fadeInUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="bg-white rounded-lg shadow-lg p-6"
                        >
                            <h2 className="text-2xl text-teal-600 mb-4">Budget Breakdown</h2>

                            <div className="mb-6 space-y-3">
                                {Object.entries(itineraryData.budgetBreakdown).map(([category, amount], index) => {
                                    if (category === 'total') return null;

                                    // Calculate percentage for visualization
                                    const totalAmount = itineraryData.budgetBreakdown.total.replace(/[^0-9]/g, '');
                                    const categoryAmount = amount.replace(/[^0-9]/g, '');
                                    const percentage = (parseInt(categoryAmount) / parseInt(totalAmount)) * 100;

                                    return (
                                        <div key={index}>
                                            <div className="flex justify-between items-center mb-1">
                                                <span className="capitalize">{category}</span>
                                                <span className="font-medium">{amount}</span>
                                            </div>
                                            <div className="w-full bg-gray-200 rounded-full h-2.5">
                                                <div
                                                    className="bg-teal-500 h-2.5 rounded-full"
                                                    style={{ width: `${percentage}%` }}
                                                ></div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            <div className="pt-4 border-t border-gray-200">
                                <div className="flex justify-between items-center">
                                    <span className="text-lg font-bold">Total Budget</span>
                                    <span className="text-lg font-bold text-teal-600">{itineraryData.budgetBreakdown.total}</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Call to Action */}
                    <div className="mt-12 text-center">
                        <motion.div
                            variants={fadeInUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <button className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:shadow-lg flex items-center mx-auto">
                                Save & Download Itinerary
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                                    <path fillRule="evenodd" d="M10 3a1 1 0 011 1v9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 111.414-1.414L9 13.586V4a1 1 0 011-1z" clipRule="evenodd" />
                                </svg>
                            </button>
                            <p className="text-gray-600 mt-4">
                                Want to customize this itinerary? <a href="/contact" className="text-teal-600 underline">Contact us</a> for personalized assistance.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
}