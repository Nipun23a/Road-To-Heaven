'use client';

// Importing the necessary components and hooks
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
     Users,Waves,Droplet,Mountain,UtensilsCrossed,
     Info,
    Camera,  Clock,
    Navigation, AlertTriangle,
} from 'lucide-react';


// Helper function to get icon component by name
const getIconByName = (iconName, size = 20) => {
    const icons = {
        Camera: <Camera size={size} />,
        Clock: <Clock size={size} />,
        Navigation: <Navigation size={size} />,
        Users: <Users size={size} />,
        AlertTriangle: <AlertTriangle size={size} />,
        Snorkeling: <Waves size={size} />,               // For Snorkeling
        Swimming: <Droplet size={size} />,           // For Swimming
        Hiking: <Mountain size={size} />,         // For Hiking
        UtensilsCrossed: <UtensilsCrossed size={size} /> // For Beachfront Dining
    };

    return icons[iconName] || <Info size={size} />; // Default to Info icon if not found
};

// Highlights Component
const HighlightsSection = ({ highlights,fadeInUp }) => {
    if (!highlights || highlights.length === 0) return null;

    return (
        <motion.div
            variants={fadeInUp}
            className="bg-white rounded-lg shadow-lg p-6 mb-8"
        >
            <h2 className="text-2xl text-gray-800 font-bold mb-4">Highlights</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {highlights.map((highlight, index) => (
                    <div key={index} className="flex items-start">
                        <div className="p-2 bg-teal-100 rounded-lg text-teal-600 mr-3">
                            {getIconByName(highlight.icon)}
                        </div>
                        <div>
                            <h3 className="font-semibold mb-1">{highlight.title}</h3>
                            <p className="text-gray-600 text-sm">{highlight.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </motion.div>
    );
};

export default HighlightsSection;