"use client"

import { useState } from 'react';
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, Map, ArrowUp } from 'lucide-react';
import { whisper } from "@/app/layout";
import { montserrat } from "@/app/layout";

export default function Footer() {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle newsletter subscription
        alert(`Thank you for subscribing with ${email}!`);
        setEmail('');
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <footer className="bg-gradient-to-b from-teal-600 to-teal-800 text-white">
            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Brand Section */}
                    <div className="flex flex-col space-y-4">
            <span className={`${whisper.className} text-4xl text-white font-bold`}>
              Road to Heaven
            </span>
                        <p className={`${montserrat.className} text-sm font-light text-teal-100 mt-2`}>
                            Discover the world's most breathtaking destinations with our expertly curated travel experiences.
                        </p>
                        <div className="flex space-x-4 mt-4">
                            <a href="#" className="text-white hover:text-teal-200 transition-colors">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="text-white hover:text-teal-200 transition-colors">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="text-white hover:text-teal-200 transition-colors">
                                <Twitter size={20} />
                            </a>
                            <a href="#" className="text-white hover:text-teal-200 transition-colors">
                                <Youtube size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="flex flex-col space-y-3">
                        <h3 className={`${montserrat.className} text-lg font-semibold mb-2`}>Quick Links</h3>
                        {['Home', 'About Us', 'Places', 'Hotels and Flights', 'Contact Us'].map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase().replace(/ /g, '-')}`}
                                className={`${montserrat.className} text-sm text-teal-100 hover:text-white transition-colors duration-200`}
                            >
                                {item}
                            </a>
                        ))}
                    </div>

                    {/* Contact Info */}
                    <div className="flex flex-col space-y-3">
                        <h3 className={`${montserrat.className} text-lg font-semibold mb-2`}>Contact Us</h3>
                        <div className="flex items-center space-x-2">
                            <Mail size={16} className="text-teal-200" />
                            <a href="mailto:info@roadtoheaven.com" className={`${montserrat.className} text-sm text-teal-100 hover:text-white transition-colors`}>info@roadtoheaven.com</a>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Phone size={16} className="text-teal-200" />
                            <a href="tel:+1234567890" className={`${montserrat.className} text-sm text-teal-100 hover:text-white transition-colors`}>+1 (234) 567-890</a>
                        </div>
                        <div className="flex items-start space-x-2">
                            <Map size={16} className="text-teal-200 mt-1 flex-shrink-0" />
                            <span className={`${montserrat.className} text-sm text-teal-100`}>
                123 Travel Street, Paradise City,<br />
                Wonderland, 54321
              </span>
                        </div>
                    </div>

                    {/* Newsletter */}
                    <div className="flex flex-col space-y-3">
                        <h3 className={`${montserrat.className} text-lg font-semibold mb-2`}>Join Our Newsletter</h3>
                        <p className={`${montserrat.className} text-sm text-teal-100`}>
                            Subscribe to receive special offers and travel inspiration.
                        </p>
                        <form onSubmit={handleSubmit} className="mt-2">
                            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Your email"
                                    required
                                    className={`${montserrat.className} px-4 py-2 bg-teal-700 text-white placeholder-teal-300 border border-teal-500 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400`}
                                />
                                <button
                                    type="submit"
                                    className="bg-white text-teal-700 px-4 py-2 rounded-md hover:bg-teal-100 transition-colors duration-300 font-medium"
                                >
                                    Subscribe
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            {/* Copyright Section */}
            <div className="border-t border-teal-500">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center">
                    <p className={`${montserrat.className} text-sm text-teal-200`}>
                        &copy; {new Date().getFullYear()} Road to Heaven. All rights reserved.
                    </p>
                    <div className="flex space-x-4 mt-4 md:mt-0">
                        <a href="#" className={`${montserrat.className} text-sm text-teal-200 hover:text-white transition-colors`}>Terms & Conditions</a>
                        <a href="#" className={`${montserrat.className} text-sm text-teal-200 hover:text-white transition-colors`}>Privacy Policy</a>
                        <a href="#" className={`${montserrat.className} text-sm text-teal-200 hover:text-white transition-colors`}>Cookie Policy</a>
                    </div>
                </div>
            </div>

            {/* Scroll to top button */}
            <button
                onClick={scrollToTop}
                className="fixed bottom-6 right-6 bg-teal-500 hover:bg-teal-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 focus:outline-none"
            >
                <ArrowUp size={20} />
            </button>
        </footer>
    );
}