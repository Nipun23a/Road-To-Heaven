import mongoose from 'mongoose';

// Define the UserInput Schema
const userInputSchema = new mongoose.Schema(
    {
        tripType: { type: String, required: true },
        budget: { type: String, required: true },
        budgetType: { type: String, required: true },
        arrivalDate: { type: Date, required: true },
        departureDate: { type: Date, required: true },
        nights: { type: Number, required: true },
        originCountry: { type: String, required: true },
        includeFlights: { type: Boolean, required: true },
        includeHotels: { type: Boolean, required: true },
        activities: { type: [String], required: true },
        createdAt: { type: Date, default: Date.now },
        response: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'GeminiResponse',  // Reference to the GeminiResponse model
        },
    },
    { timestamps: true }
);

// Create the UserInput model
const UserInput = mongoose.models.UserInput || mongoose.model('UserInput', userInputSchema);

export default UserInput;
