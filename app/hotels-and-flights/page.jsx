'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search, Calendar, MapPin, Star, ArrowRight, Check, PlaneIcon, ArrowUpDown, Filter } from 'lucide-react';
import Image from 'next/image';
import {montserrat,whisper} from "@/app/layout";


const fetchFlights = async (from, to, departureDate) => {
        // In a real implementation, this would call the flight API
        // For example: return await axios.get(`https://api.example.com/flights?from=${from}&to=${to}&date=${departureDate}`);

        // Placeholder data
        const currentDate = new Date();
        const tomorrow = new Date(currentDate);
        tomorrow.setDate(currentDate.getDate() + 1);

        const formatDate = (date) => {
            return date.toISOString().split('T')[0];
        };

        const formatTime = (hours, minutes) => {
            return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
        };

        const generateRandomPrice = () => {
            return Math.floor(Math.random() * (1200 - 350) + 350);
        };

        const airlines = [
            'Sri Lankan Airlines', 'Emirates', 'Qatar Airways',
            'Singapore Airlines', 'Etihad Airways', 'Air India',
            'Thai Airways', 'Malaysia Airlines', 'Cathay Pacific',
            'Turkish Airlines'
        ];

        const airports = {
            'LHR': 'London Heathrow',
            'JFK': 'New York JFK',
            'DXB': 'Dubai International',
            'SIN': 'Singapore Changi',
            'HKG': 'Hong Kong International',
            'CDG': 'Paris Charles de Gaulle',
            'FRA': 'Frankfurt Airport',
            'AMS': 'Amsterdam Schiphol',
            'SYD': 'Sydney International',
            'DEL': 'Delhi International'
        };

        const randomAirports = Object.keys(airports);

        // Generate 10 flights for today
        const todayFlights = Array.from({ length: 5 }, (_, i) => {
            const departureHour = Math.floor(Math.random() * 12) + 7; // 7 AM to 7 PM
            const departureMins = Math.floor(Math.random() * 60);
            const flightDuration = Math.floor(Math.random() * 6) + 10; // 10-16 hours
            const arrivalHour = (departureHour + flightDuration) % 24;
            const airportIndex = Math.floor(Math.random() * randomAirports.length);
            const departureAirport = randomAirports[airportIndex];

            return {
                id: `TF-${i + 1}`,
                airline: airlines[Math.floor(Math.random() * airlines.length)],
                flightNumber: `${['UL', 'EK', 'QR', 'SQ', 'EY'][Math.floor(Math.random() * 5)]}${Math.floor(Math.random() * 1000) + 100}`,
                departure: {
                    airport: departureAirport,
                    city: airports[departureAirport],
                    date: formatDate(currentDate),
                    time: formatTime(departureHour, departureMins)
                },
                arrival: {
                    airport: 'CMB',
                    city: 'Colombo, Sri Lanka',
                    date: formatDate(currentDate),
                    time: formatTime(arrivalHour, departureMins)
                },
                duration: `${flightDuration}h ${Math.floor(Math.random() * 60)}m`,
                price: generateRandomPrice(),
                seats: Math.floor(Math.random() * 20) + 1
            };
        });

        // Generate 5 flights for tomorrow
    const tomorrowFlights = Array.from({ length: 5 }, (_, i) => {
            const departureHour = Math.floor(Math.random() * 12) + 7; // 7 AM to 7 PM
            const departureMins = Math.floor(Math.random() * 60);
            const flightDuration = Math.floor(Math.random() * 6) + 10; // 10-16 hours
            const arrivalHour = (departureHour + flightDuration) % 24;
            const airportIndex = Math.floor(Math.random() * randomAirports.length);
            const departureAirport = randomAirports[airportIndex];

            return {
                id: `TMF-${i + 1}`,
                airline: airlines[Math.floor(Math.random() * airlines.length)],
                flightNumber: `${['UL', 'EK', 'QR', 'SQ', 'EY'][Math.floor(Math.random() * 5)]}${Math.floor(Math.random() * 1000) + 100}`,
                departure: {
                    airport: departureAirport,
                    city: airports[departureAirport],
                    date: formatDate(tomorrow),
                    time: formatTime(departureHour, departureMins)
                },
                arrival: {
                    airport: 'CMB',
                    city: 'Colombo, Sri Lanka',
                    date: formatDate(tomorrow),
                    time: formatTime(arrivalHour, departureMins)
                },
                duration: `${flightDuration}h ${Math.floor(Math.random() * 60)}m`,
                price: generateRandomPrice(),
                seats: Math.floor(Math.random() * 20) + 1
            };
        });

        return [...todayFlights, ...tomorrowFlights];
    };

    export default function SrilankaBooking(){
        const [flights, setFlights] = useState([]);
        const [flightDate, setFlightDate] = useState('today'); // 'today' or 'tomorrow'
        const [departureLocation, setDepartureLocation] = useState('');
        const [isLoadingFlights, setIsLoadingFlights] = useState(true);

        // State for hotels
        const [hotels, setHotels] = useState([]);
        const [priceRange, setPriceRange] = useState([50, 500]); // Default price range
        const [sortOption, setSortOption] = useState('recommended');
        const [isLoadingHotels, setIsLoadingHotels] = useState(true);

        // Tab state
        const [activeTab, setActiveTab] = useState('flights'); // 'flights' or 'hotels'

        // Effect to fetch initial data
        useEffect(() => {
            const loadInitialData = async () => {
                if (activeTab === 'flights') {
                    setIsLoadingFlights(true);
                    try {
                        const flightData = await fetchFlights('any', 'CMB', new Date());
                        setFlights(flightData);
                    } catch (error) {
                        console.error('Error fetching flights:', error);
                    } finally {
                        setIsLoadingFlights(false);
                    }
                } else {
                    setIsLoadingHotels(true);
                    try {
                        const hotelData = await fetchHotels('Sri Lanka', new Date(), new Date(), priceRange[0], priceRange[1]);
                        setHotels(hotelData);
                    } catch (error) {
                        console.error('Error fetching hotels:', error);
                    } finally {
                        setIsLoadingHotels(false);
                    }
                }
            };

            loadInitialData();
        }, [activeTab, priceRange]);

        // Filter flights by date
        const filteredFlights = flights.filter(flight => {
            const today = new Date().toISOString().split('T')[0];
            const tomorrow = new Date();
            tomorrow.setDate(tomorrow.getDate() + 1);
            const tomorrowStr = tomorrow.toISOString().split('T')[0];

            if (flightDate === 'today') {
                return flight.departure.date === today;
            } else {
                return flight.departure.date === tomorrowStr;
            }
        });

        // Sort hotels
        const sortedHotels = [...hotels].sort((a, b) => {
            switch (sortOption) {
                case 'price-low':
                    return a.price - b.price;
                case 'price-high':
                    return b.price - a.price;
                case 'rating':
                    return b.rating - a.rating;
                default: // recommended
                    // Higher rating and lower price is better
                    return (b.rating * 20 - b.price/100) - (a.rating * 20 - a.price/100);
            }
        });

        const handlePriceRangeChange = (e, index) => {
            const newPriceRange = [...priceRange];
            newPriceRange[index] = parseInt(e.target.value);
            setPriceRange(newPriceRange);
        };

        const containerVariants = {
            hidden: { opacity: 0 },
            visible: {
                opacity: 1,
                transition: {
                    staggerChildren: 0.1
                }
            }
        };

        const itemVariants = {
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
        };
        return(
            <div className="bg-gray-50 min-h-screen">
                {/* Hero Section */}
                <div className="relative w-full h-[60vh] overflow-hidden">
                    {/* Background Image */}
                    <div className="absolute inset-0">
                        <Image
                            src="/images/sigiriya.jpg"
                            alt="Sri Lanka travel"
                            fill
                            priority
                            className="object-cover brightness-75"
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
                            className={`${whisper.className} text-5xl md:text-6xl lg:text-7xl text-white mb-4`}
                        >
                            Plan Your Sri Lankan Journey
                        </motion.h1>

                        <motion.p
                            initial={{opacity: 0, y: 30}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.8, delay: 0.2}}
                            className={`${montserrat.className} text-lg md:text-xl text-white/90 max-w-3xl mb-8`}
                        >
                            Find the perfect flights and accommodations for your dream trip to Sri Lanka
                        </motion.p>
                    </div>
                </div>

                {/* Main Content */}
                <div className="mt-10"></div>
                <div className="container mx-auto px-4 py-8 -mt-8">
                    <div className="bg-white rounded-xl shadow-lg p-6">
                        {/* Tabs */}
                        <div className="flex border-b border-gray-200 mb-6">
                            <button
                                onClick={() => setActiveTab('flights')}
                                className={`${montserrat.className} flex items-center px-6 py-3 font-medium text-lg transition-colors duration-300 border-b-2 ${
                                    activeTab === 'flights'
                                        ? 'border-teal-500 text-teal-600'
                                        : 'border-transparent text-gray-500 hover:text-gray-800'
                                }`}
                            >
                                <PlaneIcon className="w-5 h-5 mr-2"/>
                                Flights to Sri Lanka
                            </button>
                            <button
                                onClick={() => setActiveTab('hotels')}
                                className={`${montserrat.className} flex items-center px-6 py-3 font-medium text-lg transition-colors duration-300 border-b-2 ${
                                    activeTab === 'hotels'
                                        ? 'border-teal-500 text-teal-600'
                                        : 'border-transparent text-gray-500 hover:text-gray-800'
                                }`}
                            >
                                <MapPin className="w-5 h-5 mr-2"/>
                                Hotels
                            </button>
                        </div>

                        {/* Flights Content */}
                        {activeTab === 'flights' && (
                            <div>
                                {/* Search Tools */}
                                <div className="mb-8">
                                    <div className="flex flex-col md:flex-row gap-4 mb-4">
                                        <div className="flex-1">
                                            <label
                                                className={`${montserrat.className} block text-sm font-medium text-gray-700 mb-1`}>
                                                From
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="Departure city or airport"
                                                value={departureLocation}
                                                onChange={(e) => setDepartureLocation(e.target.value)}
                                                className={`${montserrat.className} w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent`}
                                            />
                                        </div>
                                        <div className="flex-1">
                                            <label
                                                className={`${montserrat.className} block text-sm font-medium text-gray-700 mb-1`}>
                                                To
                                            </label>
                                            <input
                                                type="text"
                                                value="Colombo, Sri Lanka (CMB)"
                                                disabled
                                                className={`${montserrat.className} w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50`}
                                            />
                                        </div>
                                        <div>
                                            <label
                                                className={`${montserrat.className} block text-sm font-medium text-gray-700 mb-1`}>
                                                Date
                                            </label>
                                            <div className="flex border border-gray-300 rounded-lg overflow-hidden">
                                                <button
                                                    onClick={() => setFlightDate('today')}
                                                    className={`px-4 py-2 ${
                                                        flightDate === 'today'
                                                            ? 'bg-teal-500 text-white'
                                                            : 'bg-white text-gray-700 hover:bg-gray-100'
                                                    }`}
                                                >
                                                    Today
                                                </button>
                                                <button
                                                    onClick={() => setFlightDate('tomorrow')}
                                                    className={`px-4 py-2 ${
                                                        flightDate === 'tomorrow'
                                                            ? 'bg-teal-500 text-white'
                                                            : 'bg-white text-gray-700 hover:bg-gray-100'
                                                    }`}
                                                >
                                                    Tomorrow
                                                </button>
                                            </div>
                                        </div>
                                        <div>
                                            <label
                                                className={`${montserrat.className} invisible block text-sm font-medium text-gray-700 mb-1`}>
                                                Search
                                            </label>
                                            <button
                                                className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 flex items-center">
                                                <Search className="w-4 h-4 mr-2"/>
                                                Search Flights
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                {/* Flight Results */}
                                {isLoadingFlights ? (
                                    <div className="flex justify-center py-12">
                                        <div
                                            className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-500"></div>
                                    </div>
                                ) : filteredFlights.length > 0 ? (
                                    <motion.div
                                        variants={containerVariants}
                                        initial="hidden"
                                        animate="visible"
                                        className="space-y-6"
                                    >
                                        <p className={`${montserrat.className} text-gray-600 mb-2`}>
                                            Showing {filteredFlights.length} flights to Colombo, Sri Lanka
                                            on {flightDate === 'today' ? 'today' : 'tomorrow'}
                                        </p>

                                        {filteredFlights.map((flight) => (
                                            <motion.div
                                                key={flight.id}
                                                variants={itemVariants}
                                                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-300"
                                            >
                                                <div
                                                    className="flex flex-col md:flex-row justify-between items-start md:items-center">
                                                    <div className="flex items-center mb-4 md:mb-0">
                                                        <div
                                                            className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mr-4">
                                                            <span
                                                                className="font-bold text-gray-700">{flight.flightNumber.substring(0, 2)}</span>
                                                        </div>
                                                        <div>
                                                            <h3 className={`${montserrat.className} font-semibold text-lg`}>{flight.airline}</h3>
                                                            <p className={`${montserrat.className} text-gray-500 text-sm`}>Flight {flight.flightNumber}</p>
                                                        </div>
                                                    </div>

                                                    <div
                                                        className="flex flex-1 justify-center items-center space-x-4 mb-4 md:mb-0">
                                                        <div className="text-center">
                                                            <p className={`${montserrat.className} font-bold text-xl`}>{flight.departure.time}</p>
                                                            <p className={`${montserrat.className} text-gray-500`}>{flight.departure.airport}</p>
                                                        </div>

                                                        <div className="flex flex-col items-center px-4">
                                                            <p className={`${montserrat.className} text-gray-500 text-sm`}>{flight.duration}</p>
                                                            <div className="relative w-24 md:w-32">
                                                                <div
                                                                    className="absolute top-1/2 w-full h-px bg-gray-300"></div>
                                                                <div
                                                                    className="absolute left-0 -top-1 w-2 h-2 rounded-full bg-gray-500"></div>
                                                                <div
                                                                    className="absolute right-0 -top-1 w-2 h-2 rounded-full bg-teal-500"></div>
                                                            </div>
                                                            <p className={`${montserrat.className} text-gray-500 text-xs mt-1`}>Direct</p>
                                                        </div>

                                                        <div className="text-center">
                                                            <p className={`${montserrat.className} font-bold text-xl`}>{flight.arrival.time}</p>
                                                            <p className={`${montserrat.className} text-gray-500`}>{flight.arrival.airport}</p>
                                                        </div>
                                                    </div>

                                                    <div className="text-right">
                                                        <p className={`${montserrat.className} text-gray-500 text-sm`}>From</p>
                                                        <p className={`${montserrat.className} font-bold text-2xl text-teal-600`}>${flight.price}</p>
                                                        <p className={`${montserrat.className} text-gray-500 text-sm`}>{flight.seats} seats
                                                            left</p>
                                                    </div>
                                                </div>

                                                <div
                                                    className="mt-4 pt-4 border-t border-gray-200 flex justify-between items-center">
                                                    <div className="flex items-center">
                                                        <p className={`${montserrat.className} text-sm text-gray-600`}>
                                                            {flight.departure.city} → {flight.arrival.city}
                                                        </p>
                                                    </div>
                                                    <button
                                                        className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-lg font-medium text-sm transition-colors duration-300">
                                                        Select Flight
                                                    </button>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </motion.div>
                                ) : (
                                    <div className="text-center py-12">
                                        <div className="text-5xl mb-4">✈️</div>
                                        <h3 className={`${montserrat.className} text-xl font-semibold text-gray-700 mb-2`}>No
                                            flights found</h3>
                                        <p className={`${montserrat.className} text-gray-500`}>
                                            Try changing your search criteria
                                        </p>
                                    </div>
                                )}
                            </div>
                        )}

                        {/* Hotels Content */}
                        {activeTab === 'hotels' && (
                            <div>
                                {/* Search Tools */}
                                <div className="mb-8">
                                    <div className="flex flex-wrap gap-4">
                                        <div className="flex-1 min-w-[200px]">
                                            <label
                                                className={`${montserrat.className} block text-sm font-medium text-gray-700 mb-1`}>
                                                Destination
                                            </label>
                                            <input
                                                type="text"
                                                value="Sri Lanka"
                                                className={`${montserrat.className} w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent`}
                                            />
                                        </div>

                                        <div className="w-full md:w-auto">
                                            <label
                                                className={`${montserrat.className} block text-sm font-medium text-gray-700 mb-1`}>
                                                Price Range ($ per night)
                                            </label>
                                            <div className="flex items-center space-x-2">
                                                <input
                                                    type="number"
                                                    value={priceRange[0]}
                                                    onChange={(e) => handlePriceRangeChange(e, 0)}
                                                    min="0"
                                                    max={priceRange[1]}
                                                    className={`${montserrat.className} w-20 px-2 py-2 border border-gray-300 rounded-lg text-center`}
                                                />
                                                <span>to</span>
                                                <input
                                                    type="number"
                                                    value={priceRange[1]}
                                                    onChange={(e) => handlePriceRangeChange(e, 1)}
                                                    min={priceRange[0]}
                                                    className={`${montserrat.className} w-20 px-2 py-2 border border-gray-300 rounded-lg text-center`}
                                                />
                                            </div>
                                        </div>

                                        <div className="w-full md:w-auto">
                                            <label
                                                className={`${montserrat.className} block text-sm font-medium text-gray-700 mb-1`}>
                                                Sort By
                                            </label>
                                            <select
                                                value={sortOption}
                                                onChange={(e) => setSortOption(e.target.value)}
                                                className={`${montserrat.className} px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent`}
                                            >
                                                <option value="recommended">Recommended</option>
                                                <option value="price-low">Price: Low to High</option>
                                                <option value="price-high">Price: High to Low</option>
                                                <option value="rating">Rating</option>
                                            </select>
                                        </div>

                                        <div className="flex items-end">
                                            <button
                                                className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 flex items-center">
                                                <Filter className="w-4 h-4 mr-2"/>
                                                Apply Filters
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                {/* Hotel Results */}
                                {isLoadingHotels ? (
                                    <div className="flex justify-center py-12">
                                        <div
                                            className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-500"></div>
                                    </div>
                                ) : (
                                    <>
                                        <p className={`${montserrat.className} text-gray-600 mb-4`}>
                                            Showing {sortedHotels.length} hotels in Sri Lanka • ${priceRange[0]} -
                                            ${priceRange[1]} per night
                                        </p>

                                        <motion.div
                                            variants={containerVariants}
                                            initial="hidden"
                                            animate="visible"
                                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                                        >
                                            {sortedHotels.map((hotel) => (
                                                <motion.div
                                                    key={hotel.id}
                                                    variants={itemVariants}
                                                    className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col"
                                                >
                                                    <div className="relative h-48">
                                                        <Image
                                                            src={hotel.image}
                                                            alt={hotel.name}
                                                            fill
                                                            className="object-cover"
                                                        />
                                                        {hotel.discountPercent > 0 && (
                                                            <div
                                                                className="absolute top-4 right-4 bg-red-500 text-white text-xs font-bold py-1 px-2 rounded">
                                                                {hotel.discountPercent}% OFF
                                                            </div>
                                                        )}
                                                    </div>

                                                    <div className="p-4 flex-grow">
                                                        <div className="flex justify-between items-start mb-2">
                                                            <h3 className={`${montserrat.className} font-bold text-lg`}>{hotel.name}</h3>
                                                            <div
                                                                className="flex items-center bg-teal-50 text-teal-700 px-2 py-1 rounded">
                                                                <Star size={16} className="text-yellow-500 mr-1"/>
                                                                <span className="font-semibold">{hotel.rating}</span>
                                                            </div>
                                                        </div>

                                                        <div className="flex items-center mb-3 text-gray-600">
                                                            <MapPin size={16} className="mr-1"/>
                                                            <span
                                                                className={`${montserrat.className} text-sm`}>{hotel.location}, Sri Lanka</span>
                                                        </div>

                                                        <p className={`${montserrat.className} text-gray-600 text-sm mb-4 line-clamp-2`}>
                                                            {hotel.description}
                                                        </p>
                                                        <div className="flex flex-wrap gap-2 mb-4">
                                                            {hotel.amenities.slice(0, 4).map((amenity, index) => (
                                                                <div key={index}
                                                                     className="flex items-center bg-gray-100 rounded-full px-2 py-1 text-xs">
                                                                    <Check size={12} className="text-teal-500 mr-1"/>
                                                                    <span>{amenity}</span>
                                                                </div>
                                                            ))}
                                                            <div className="bg-gray-100 rounded-full px-2 py-1 text-xs">
                                                                +{hotel.amenities.length - 4} more
                                                            </div>
                                                            )
                                                        </div>
                                                    </div>

                                                    <div className="p-4 bg-gray-50 border-t border-gray-200">
                                                        <div className="flex justify-between items-center">
                                                            <div>
                                                                <p className={`${montserrat.className} text-sm text-gray-500`}>Per
                                                                    night</p>
                                                                <div className="flex items-center">
                                                                    {hotel.discountPercent > 0 && (
                                                                        <span
                                                                            className={`${montserrat.className} text-gray-400 line-through text-sm mr-2`}>
                                        ${Math.round(hotel.price * (1 + hotel.discountPercent / 100))}
                                      </span>
                                                                    )}
                                                                    <span
                                                                        className={`${montserrat.className} text-teal-600 font-bold text-xl`}>
                                      ${hotel.price}
                                    </span>
                                                                </div>
                                                            </div>

                                                            <button
                                                                className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center">
                                                                Book Now
                                                                <ArrowRight size={16} className="ml-2"/>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </motion.div>
                                            ))}
                                        </motion.div>

                                        {/* Load More Button */}
                                        {sortedHotels.length > 0 && (
                                            <div className="flex justify-center mt-8">
                                                <button
                                                    className="bg-white border border-teal-500 hover:bg-teal-50 text-teal-600 px-6 py-3 rounded-lg font-medium transition-all duration-300">
                                                    Show More Hotels
                                                </button>
                                            </div>
                                        )}
                                    </>
                                )}
                            </div>
                        )}
                    </div>
                </div>

                {/* Featured Destinations */}
                <div className="container mx-auto px-4 py-16">
                    <div className="text-center mb-12">
                        <h2 className={`${whisper.className} text-4xl text-teal-600 mb-2`}>
                            Popular Destinations
                        </h2>
                        <p className={`${montserrat.className} text-gray-600 max-w-xl mx-auto`}>
                            Discover the best places to visit in Sri Lanka, from pristine beaches to ancient temples
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            {
                                name: 'Sigiriya Rock Fortress',
                                image: '/images/sigiriya.jpg',
                                description: 'Ancient rock fortress with frescoes and panoramic views',
                                location: 'Central Province'
                            },
                            {
                                name: 'Galle Fort',
                                image: '/images/unawatuna.jpg',
                                description: 'UNESCO World Heritage site with colonial architecture',
                                location: 'Southern Province'
                            },
                            {
                                name: 'Ella Train Journey',
                                image: '/images/ella-rock.jpg',
                                description: 'Scenic train route through tea plantations and mountains',
                                location: 'Uva Province'
                            }
                        ].map((destination, index) => (
                            <motion.div
                                key={index}
                                whileHover={{y: -5}}
                                className="overflow-hidden rounded-xl shadow-md"
                            >
                                <div className="relative h-52">
                                    <Image
                                        src={destination.image}
                                        alt={destination.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="p-4 bg-white">
                                    <h3 className={`${montserrat.className} font-bold text-lg mb-1`}>{destination.name}</h3>
                                    <div className="flex items-center text-gray-500 text-sm mb-2">
                                        <MapPin size={14} className="mr-1"/>
                                        <span>{destination.location}</span>
                                    </div>
                                    <p className={`${montserrat.className} text-gray-600 text-sm`}>
                                        {destination.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }