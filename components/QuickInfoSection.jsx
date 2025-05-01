'use client';

// Importing the necessary components and hooks
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const QuickInfoSection = ({ quickInfo,fadeInUp }) => {
    if (!quickInfo) return null;

    return (
        <motion.div
            variants={fadeInUp}
            className="bg-white rounded-lg shadow-lg p-5"
        >
            <h2 className="text-xl text-gray-800 font-bold mb-4">Quick Information</h2>

            <div className="space-y-4">
                {quickInfo.entryFee && (
                    <div>
                        <h3 className="font-semibold text-gray-700">Entry Fee</h3>
                        <p className="text-gray-600">
                            {quickInfo.entryFee.foreigners && `Foreigners: ${quickInfo.entryFee.foreigners}`}
                            {quickInfo.entryFee.foreigners && quickInfo.entryFee.locals && <br />}
                            {quickInfo.entryFee.locals && `Locals: ${quickInfo.entryFee.locals}`}
                        </p>
                    </div>
                )}

                {quickInfo.openingHours && (
                    <div>
                        <h3 className="font-semibold text-gray-700">Opening Hours</h3>
                        <p className="text-gray-600">{quickInfo.openingHours}</p>
                    </div>
                )}

                {quickInfo.bestFor && quickInfo.bestFor.length > 0 && (
                    <div>
                        <h3 className="font-semibold text-gray-700">Best For</h3>
                        <div className="flex flex-wrap gap-2 mt-1">
                            {quickInfo.bestFor.map((tag, index) => (
                                <span key={index} className="bg-teal-50 text-teal-700 px-2 py-1 rounded-md text-sm">
                  {tag}
                </span>
                            ))}
                        </div>
                    </div>
                )}

                {quickInfo.contact && (
                    <div>
                        <h3 className="font-semibold text-gray-700">Contact</h3>
                        <p className="text-gray-600">
                            {quickInfo.contact.department}
                            {quickInfo.contact.department && quickInfo.contact.phone && <br />}
                            {quickInfo.contact.phone}
                        </p>
                    </div>
                )}
            </div>
        </motion.div>
    );
};

export default QuickInfoSection