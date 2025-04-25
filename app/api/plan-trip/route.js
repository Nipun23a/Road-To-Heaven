import {connectToDatabase} from "@/lib/mongodb";
import UserInput from "@/models/UserInput";
import axios from "axios";
import GeminiResponse from "@/models/GeminiResponse";

export async function POST(req) {
    try {
        // Step 1: Connect to the database
        await connectToDatabase();

        // Step 2: Extract form data from the request
        const { tripType, budget, budgetType, arrivalDate, departureDate, nights, originCountry, includeFlights, includeHotels, activities } = await req.json();

        // Step 3: Store form data in MongoDB (UserInput)
        const userInput = new UserInput({
            tripType,
            budget,
            budgetType,
            arrivalDate,
            departureDate,
            nights,
            originCountry,
            includeFlights,
            includeHotels,
            activities
        });
        await userInput.save();

        // Step 4: Create a prompt for Gemini
        const prompt = `Plan a ${tripType} trip to Sri Lanka with a budget of ${budget} ${budgetType}. 
        Arrival date: ${arrivalDate}, Departure date: ${departureDate}, Total nights: ${nights}. 
        Origin country: ${originCountry}.
        ${includeFlights ? 'Include flight recommendations from ' + originCountry + ' to Sri Lanka.' : ''}
        ${includeHotels ? 'Include hotel recommendations in Sri Lanka.' : ''}
        Activities interests: ${activities.join(', ')}.
        
        Please provide your response in the following structured JSON format:
        {
          "itinerary": [
            {
              "day": 1,
              "date": "YYYY-MM-DD",
              "locations": [
                {
                  "name": "Location name",
                  "description": "Brief description",
                  "coordinates": {
                    "latitude": 0.0000,
                    "longitude": 0.0000
                  },
                  "activities": ["Activity 1", "Activity 2"]
                }
              ],
              "accommodation": {
                "name": "Hotel name",
                "location": "City/Area",
                "priceRange": "$-$$$"
              },
              "meals": ["Recommended restaurants or food experiences"]
            }
          ],
          "transportation": {
            "flights": {
              "arrival": {
                "from": "Origin airport",
                "to": "Sri Lanka airport",
                "estimatedCost": "$$$"
              },
              "departure": {
                "from": "Sri Lanka airport",
                "to": "Origin airport",
                "estimatedCost": "$$$"
              }
            },
            "localTransport": ["Options and estimated costs"]
          },
          "totalDistanceCovered": "X km",
          "budgetBreakdown": {
            "accommodation": "$$$",
            "transportation": "$$$",
            "food": "$$$",
            "activities": "$$$",
            "miscellaneous": "$$$",
            "total": "$$$"
          }
        }
        
        Ensure all locations have accurate coordinates (latitude and longitude) for Sri Lanka destinations, and calculate the approximate total distance covered during the trip in kilometers.`;

        // Step 5: Send data to Gemini API using the correct endpoint structure
        const geminiApiKey = process.env.GEMINI_API_KEY;
        const geminiResponse = await axios.post(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${geminiApiKey}`,
            {
                contents: [{
                    parts: [{ text: prompt }]
                }]
            },
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        );
        const plan = geminiResponse.data.candidates?.[0]?.content?.parts?.[0]?.text || 'No plan generated';
        const responseFromGemini = new GeminiResponse({
            plan: plan,
            userInputId: userInput._id
        });
        await responseFromGemini.save();
        return new Response(
            JSON.stringify({ plan }),
            { status: 200, headers: { 'Content-Type': 'application/json' } }
        );
    } catch (error) {
        console.error('Error in processing the request:', error);
        return new Response(
            JSON.stringify({
                message: 'Something went wrong',
                error: error.message
            }),
            { status: 500, headers: { 'Content-Type': 'application/json' } }
        );
    }
}

export async function GET() {
    try {
        await connectToDatabase();
        const userInputs = await UserInput.find();
        return new Response(
            JSON.stringify({
                userInputs,
            }),
            { status: 200, headers: { 'Content-Type': 'application/json' } }
        );
    } catch (error) {
        console.error('Error fetching user inputs:', error);
        return new Response(
            JSON.stringify({ error: 'Failed to fetch user inputs' }),
            { status: 500, headers: { 'Content-Type': 'application/json' } }
        );
    }
}