"use client"

import { useState, useEffect } from 'react';
import { Menu, X, User, Map } from 'lucide-react';
import {Whisper} from "next/font/google";
import {montserrat} from "@/app/layout";


const whisper = Whisper({ subsets: ['latin'], weight: '400' });

export default function NavigationBar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    // Handle scroll effect for navbar
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${
            isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
        }`}>
            <div className="max-w-7xl mx-auto px-2 sm:px-3 lg:px-2">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <span className={`${whisper.className} text-5xl whisper ${isScrolled? 'text-black' : 'text-white'} font-bold transition-colors duration-300`}>
                          Road to Heaven
                        </span>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:block">
                        <div className={`ml-10 flex items-center space-x-8 ${montserrat.className} `}>
                            {['Home', 'About Us', 'Places', 'Hotels and Flights', 'Contact Us'].map((item) => (
                                <a
                                    key={item}
                                    href={`#${item.toLowerCase().replace(/ /g, '-')}`}
                                    className={`text-lg font-light ${isScrolled? 'text-black' : 'text-white'} transition-colors duration-300 hover:scale-105`}
                                >
                                    {item}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* CTA and User Profile */}
                    <div className="hidden md:flex items-center space-x-4">
                        <button className={`${montserrat.className} bg-teal-500 hover:bg-teal-600 text-white px-6 py-2 rounded-full text-lg font-semibold flex items-center transition-all duration-300 hover:shadow-lg transform hover:scale-105`}>
                            <Map className="mr-2 h-5 w-5" />
                            Plan My Trip
                        </button>
                        <button className="bg-white text-teal-600 p-2 rounded-full hover:bg-teal-100 transition-colors duration-300">
                            <User className="h-6 w-6" />
                        </button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className={`inline-flex items-center justify-center p-2 rounded-md text-black 
                             focus:outline-none transition-colors duration-300`}
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
                <div className={`px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg rounded-b-lg ${montserrat.className}`}>
                    {['Home', 'About Us', 'Places', 'Hotels and Flights', 'Contact Us'].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase().replace(/ /g, '-')}`}
                            className="text-gray-700 hover:bg-teal-50 hover:text-teal-600 block px-3 py-4 rounded-md text-lg font-medium border-b border-gray-100 transition-all duration-200"
                        >
                            {item}
                        </a>
                    ))}
                    <div className="flex flex-col space-y-3 mt-4 px-3 py-4">
                        <button className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-3 rounded-full text-lg font-semibold flex items-center justify-center transition-all duration-300">
                            <Map className="mr-2 h-5 w-5" />
                            Plan My Trip
                        </button>
                        <button className="border border-teal-500 text-teal-600 px-4 py-3 rounded-full text-lg font-medium flex items-center justify-center">
                            <User className="mr-2 h-5 w-5" />
                            Login
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}