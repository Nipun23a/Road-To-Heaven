"use client"

import { useEffect, useState } from 'react';
import { whisper } from "@/app/layout";
import { montserrat } from "@/app/layout";
import { MapPin, Plane, Compass, Globe } from 'lucide-react';

export default function Preloader() {
    const [loading, setLoading] = useState(true);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const progressSteps = [20, 40, 60, 80, 100];
        let currentStep = 0;

        const stepInterval = 2000;

        const timer = setInterval(() => {
            setProgress(progressSteps[currentStep]);
            currentStep++;

            if (currentStep >= progressSteps.length) {
                clearInterval(timer);
                setTimeout(() => {
                    setLoading(false);
                }, 500); // short delay before removing preloader
            }
        }, stepInterval);

        const handleLoad = () => {
            clearInterval(timer);
            setProgress(100);
            setTimeout(() => {
                setLoading(false);
            }, 500);
        };

        window.addEventListener('load', handleLoad);

        return () => {
            clearInterval(timer);
            window.removeEventListener('load', handleLoad);
        };
    }, []);

    if (!loading) return null;

    return (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-b from-teal-600 to-teal-800">
            {/* Logo and Animation Container */}
            <div className="relative flex flex-col items-center">
                {/* Animated icons */}
                <div className="absolute">
                    <div className="relative w-32 h-32">
                        {/* Animated globe */}
                        <div className="absolute inset-0 flex items-center justify-center animate-pulse">
                            <Globe className="text-teal-200 w-20 h-20 opacity-30" />
                        </div>

                        {/* Rotating compass */}
                        <div className="absolute inset-0 flex items-center justify-center animate-spin" style={{ animationDuration: '10s' }}>
                            <Compass className="text-white w-16 h-16 opacity-20" />
                        </div>

                        {/* Flying plane */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="animate-bounce" style={{ animationDuration: '2s' }}>
                                <Plane className="text-white w-8 h-8 transform -rotate-45" />
                            </div>
                        </div>

                        {/* Pulsing pin */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="animate-ping" style={{ animationDuration: '1.5s' }}>
                                <MapPin className="text-teal-300 w-3 h-3" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Brand name */}
                <div className="mt-32">
          <span className={`${whisper.className} text-6xl text-white font-bold`}>
            Road to Heaven
          </span>
                </div>
            </div>

            {/* Loading bar */}
            <div className="w-64 h-1 bg-teal-800/50 rounded-full mt-8 overflow-hidden">
                <div
                    className="h-full bg-white rounded-full transition-all duration-300 ease-out"
                    style={{ width: `${progress}%` }}
                />
            </div>

            {/* Loading text */}
            <div className="mt-4 text-center">
                <p className={`${montserrat.className} text-sm text-teal-100`}>
                    {progress < 100 ? 'Preparing your journey...' : 'Ready for takeoff!'}
                </p>
                <p className={`${montserrat.className} text-xs text-teal-200 mt-1`}>
                    {progress}%
                </p>
            </div>
        </div>
    );
}