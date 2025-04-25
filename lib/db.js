import {PrismaClient} from '@prisma/client';

const prisma = new PrismaClient();
export async function saveUserInput(data) {

    return prisma.userInput.create({
        data: {
            tripType : data.tripType,
            budget: data.budget,
            budgetType : data.budgetType,
            arrivalDate : new Date(data.arrivalDate),
            departureDate : new Date(data.departureDate),
            nights: parseInt(data.nights),
            originCountry:data.originCountry,
            includeFlights: data.includeFlights,
            includeHotels: data.includeHotels,
            activities: data.activities || [],
        },
    });
}

export async function saveGeminiResponse(userInputId, plan) {
    return prisma.geminiResponse.create({
        data: {
            userInputId,
            plan,
        },
    });
}