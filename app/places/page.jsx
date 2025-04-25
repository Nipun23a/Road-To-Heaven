'use client'
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ChevronRight, ChevronLeft, MapPin, Star, Users, Info, Search, Filter, Calendar, Clock, Award, ArrowRight } from 'lucide-react';
import { montserrat, whisper } from "@/app/layout";
import placesData from '@/data/json/places.json';
import experiencesData from '@/data/json/experiences.json';

export default function Places(){
    const [mounted, setMounted] = useState(false)
    const [activeCategory, setActiveCategory] = useState('all');
    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredPlaces, setFilteredPlaces] = useState([]);
    const [visibleExperience, setVisibleExperience] = useState(null);

    const placesPerPage = 6;

    useEffect(() => {
        setMounted(true);
        setFilteredPlaces(placesData);
    }, []);

    useEffect(() => {
        // Filter places based on category and search query
        let result = placesData;

        if (activeCategory !== 'all') {
            result = result.filter(place => place.category === activeCategory);
        }

        if (searchQuery.trim() !== '') {
            const query = searchQuery.toLowerCase();
            result = result.filter(place =>
                place.name.toLowerCase().includes(query) ||
                place.location.toLowerCase().includes(query) ||
                place.description.toLowerCase().includes(query)
            );
        }

        setFilteredPlaces(result);
        setCurrentPage(1); // Reset to first page when filters change
    }, [activeCategory, searchQuery]);

    const categories = [
        { id: 'all', name: 'All Places' },
        { id: 'beaches', name: 'Beaches' },
        { id: 'heritage', name: 'Heritage' },
        { id: 'wildlife', name: 'Wildlife' },
        { id: 'adventure', name: 'Adventure' }
    ];

    // Calculate pagination data
    const indexOfLastPlace = currentPage * placesPerPage;
    const indexOfFirstPlace = indexOfLastPlace - placesPerPage;
    const currentPlaces = filteredPlaces.slice(indexOfFirstPlace, indexOfLastPlace);
    const totalPages = Math.ceil(filteredPlaces.length / placesPerPage);

    // Animation variants
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

    const tabUnderlineVariants = {
        hidden: { width: 0 },
        visible: {
            width: '90%',
            transition: {
                duration: 0.3
            }
        }
    };

    // Pagination controls
    const goToPage = (pageNumber) => {
        if (pageNumber > 0 && pageNumber <= totalPages) {
            setCurrentPage(pageNumber);
            window.scrollTo({
                top: document.getElementById('places-grid').offsetTop - 100,
                behavior: 'smooth'
            });
        }
    };

    if (!mounted) return null;
    return(
        <>
            {/* Hero Section */}
            <div className="relative w-full h-[60vh] overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0">
                    <Image
                        src="/images/sigiriya.jpg"
                        alt="Sri Lanka landscapes"
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
                        className={`${whisper.className} text-7xl md:text-8xl lg:text-9xl text-white mb-6`}
                    >
                        Discover Sri Lanka
                    </motion.h1>

                    <motion.p
                        initial={{opacity: 0, y: 30}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.8, delay: 0.2}}
                        className={`${montserrat.className} text-xl md:text-2xl text-white/90 max-w-3xl mb-8`}
                    >
                        Explore our handpicked collection of breathtaking destinations across the island
                    </motion.p>

                    <motion.div
                        initial={{opacity: 0, y: 30}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.8, delay: 0.4}}
                        className="relative max-w-xl w-full"
                    >
                        <div className="flex items-center bg-white bg-opacity-20 backdrop-blur-md rounded-full p-2 border border-white/30">
                            <Search className="ml-3 h-5 w-5 text-white" />
                            <input
                                type="text"
                                placeholder="Search for destinations..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className={`${montserrat.className} bg-transparent border-none text-white placeholder-white/80 focus:ring-0 flex-grow pl-3 pr-4 py-2`}
                            />
                            <button className="bg-teal-500 hover:bg-teal-600 text-white px-5 py-2 rounded-full font-medium transition-all duration-300">
                                Search
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Main Content */}
            <section className="py-16 bg-gradient-to-b from-teal-50 to-white">
                <div className="container mx-auto px-4 md:px-8">
                    {/* Categories tabs */}
                    <div className="flex flex-wrap justify-center mb-12 overflow-x-auto py-4">
                        {categories.map((category) => (
                            <div key={category.id} className="relative mb-2">
                                <button
                                    onClick={() => setActiveCategory(category.id)}
                                    className={`${montserrat.className} px-6 py-3 mx-2 text-lg font-medium transition-colors duration-300 ${
                                        activeCategory === category.id ? 'text-teal-600' : 'text-gray-500 hover:text-gray-800'
                                    }`}
                                >
                                    {category.name}
                                </button>
                                {activeCategory === category.id && (
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

                    {/* Filter Stats */}
                    <div className="flex justify-between items-center mb-8">
                        <p className={`${montserrat.className} text-gray-600`}>
                            Showing {filteredPlaces.length} places{activeCategory !== 'all' ? ` in ${categories.find(c => c.id === activeCategory)?.name}` : ''}
                        </p>

                        <div className="flex items-center">
                            <Filter className="h-5 w-5 text-gray-500 mr-2" />
                            <span className={`${montserrat.className} text-gray-600`}>Filters</span>
                        </div>
                    </div>

                    {/* Places grid */}
                    <div id="places-grid">
                        {filteredPlaces.length > 0 ? (
                            <motion.div
                                key={`${activeCategory}-${currentPage}`}
                                variants={containerVariants}
                                initial="hidden"
                                animate="visible"
                                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                            >
                                {currentPlaces.map((place) => (
                                    <motion.div
                                        key={place.id}
                                        variants={itemVariants}
                                        className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group"
                                    >
                                        <div className="relative h-64 overflow-hidden">
                                            <Image
                                                src={place.image}
                                                alt={place.name}
                                                fill
                                                className="object-cover group-hover:scale-110 transition-transform duration-500"
                                            />
                                            <div className="absolute top-4 right-4 bg-teal-500 text-white text-xs uppercase font-bold py-1 px-2 rounded">
                                                {place.category}
                                            </div>
                                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                                                <div className="flex items-center text-white mb-1">
                                                    <MapPin size={16} className="mr-1" />
                                                    <span className={`${montserrat.className} text-sm`}>{place.location}</span>
                                                </div>
                                                <h3 className={`${montserrat.className} text-xl font-bold text-white`}>{place.name}</h3>
                                            </div>
                                        </div>
                                        <div className="p-6">
                                            <div className="flex justify-between items-center mb-4">
                                                <div className="flex items-center">
                                                    <Star size={18} className="text-yellow-500 mr-1" />
                                                    <span className={`${montserrat.className} font-medium`}>{place.rating}</span>
                                                </div>
                                                <div className="flex items-center">
                                                    <Calendar size={18} className="text-gray-500 mr-1" />
                                                    <span className={`${montserrat.className} text-sm text-gray-500`}>Best: {place.bestTime}</span>
                                                </div>
                                            </div>
                                            <p className={`${montserrat.className} text-gray-600 mb-6 h-20 overflow-hidden`}>
                                                {place.description.split(' ').slice(0, 10).join(' ')}...
                                            </p>
                                            <div className="flex justify-between items-center">
                                                <div className="flex items-center">
                                                    <Users size={18} className="text-gray-500 mr-1" />
                                                    <span className={`${montserrat.className} text-sm text-gray-500`}>{place.popularity} Traffic</span>
                                                </div>
                                                <button className={`${montserrat.className} flex items-center text-teal-600 font-medium hover:text-teal-800 transition-colors`}>
                                                    View Details
                                                    <ChevronRight size={18} className="ml-1 transition-transform group-hover:translate-x-1" />
                                                </button>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        ) : (
                            <div className="text-center py-12">
                                <Info size={48} className="mx-auto text-gray-400 mb-4" />
                                <h3 className={`${montserrat.className} text-xl font-semibold text-gray-700 mb-2`}>No places found</h3>
                                <p className={`${montserrat.className} text-gray-500`}>
                                    Try adjusting your search or filter criteria
                                </p>
                            </div>
                        )}
                    </div>

                    {/* Pagination */}
                    {totalPages > 1 && (
                        <div className="flex justify-center items-center mt-12 space-x-2">
                            <button
                                onClick={() => goToPage(currentPage - 1)}
                                disabled={currentPage === 1}
                                className={`${montserrat.className} flex items-center justify-center h-10 w-10 rounded-full ${
                                    currentPage === 1
                                        ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                                        : 'bg-white text-teal-600 hover:bg-teal-50 shadow-md'
                                }`}
                            >
                                <ChevronLeft size={20} />
                            </button>

                            {Array.from({ length: totalPages }, (_, i) => i + 1).map(pageNumber => (
                                <button
                                    key={pageNumber}
                                    onClick={() => goToPage(pageNumber)}
                                    className={`${montserrat.className} flex items-center justify-center h-10 w-10 rounded-full font-medium ${
                                        currentPage === pageNumber
                                            ? 'bg-teal-500 text-white'
                                            : 'bg-white text-gray-700 hover:bg-teal-50 shadow-md'
                                    }`}
                                >
                                    {pageNumber}
                                </button>
                            ))}

                            <button
                                onClick={() => goToPage(currentPage + 1)}
                                disabled={currentPage === totalPages}
                                className={`${montserrat.className} flex items-center justify-center h-10 w-10 rounded-full ${
                                    currentPage === totalPages
                                        ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                                        : 'bg-white text-teal-600 hover:bg-teal-50 shadow-md'
                                }`}
                            >
                                <ChevronRight size={20} />
                            </button>
                        </div>
                    )}
                </div>
            </section>

            {/* Featured Experiences */}
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
                            Enhance Your Visit
                        </motion.h3>
                        <motion.h2
                            initial={{ opacity: 0, y: -20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            viewport={{ once: true }}
                            className={`${montserrat.className} text-3xl md:text-4xl font-bold text-gray-800 mb-4`}
                        >
                            Featured Experiences
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
                            Make your Sri Lankan adventure unforgettable with these authentic cultural and natural experiences
                        </motion.p>
                    </div>

                    {/* Experiences grid */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-8"
                    >
                        {experiencesData.map((experience) => (
                            <motion.div
                                key={experience.id}
                                variants={itemVariants}
                                onMouseEnter={() => setVisibleExperience(experience.id)}
                                onMouseLeave={() => setVisibleExperience(null)}
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
                                        animate={{ opacity: visibleExperience === experience.id ? 1 : 0.8 }}
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

                    {/* View all experiences button */}
                    <div className="text-center mt-12">
                        <button className={`${montserrat.className} border-2 border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 flex items-center mx-auto`}>
                            View All Experiences
                            <ChevronRight size={20} className="ml-1" />
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
}