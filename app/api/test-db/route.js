// app/api/test-db/route.js

import { connectToDatabase } from '@/lib/mongodb';

export async function GET() {
    try {
        // Try to connect to the database
        await connectToDatabase();

        // If successful, return a success message
        return new Response(
            JSON.stringify({ message: 'MongoDB is connected successfully!' }),
            { status: 200, headers: { 'Content-Type': 'application/json' } }
        );
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);

        // If there's an error, return an error message
        return new Response(
            JSON.stringify({ error: 'Failed to connect to MongoDB' }),
            { status: 500, headers: { 'Content-Type': 'application/json' } }
        );
    }
}
