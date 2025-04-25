// lib/mongodb.js

import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

// Get MongoDB URI from environment variables
const MONGODB_URI = process.env.MONGODB_URI;

export const connectToDatabase = async () => {
    if (mongoose.connection.readyState >= 1) {
        return mongoose.connection.db;
    }

    // Connect to MongoDB
    return mongoose.connect(MONGODB_URI).then(() => mongoose.connection.db);
};
