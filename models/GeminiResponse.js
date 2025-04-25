import mongoose from 'mongoose';

// Define the GeminiResponse Schema
const geminiResponseSchema = new mongoose.Schema(
    {
        plan: { type: String, required: true },
        userInputId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'UserInput',  // Reference to the UserInput model
            unique: true,
            required: true
        },
        createdAt: { type: Date, default: Date.now },
    },
    { timestamps: true }
);

// Create the GeminiResponse model
const GeminiResponse = mongoose.models.GeminiResponse || mongoose.model('GeminiResponse', geminiResponseSchema);

export default GeminiResponse;
