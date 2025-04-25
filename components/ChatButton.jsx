'use client'
import { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Send } from 'lucide-react';
import {montserrat} from "@/app/layout";

export default function ChatbotButton() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        {
            role: 'assistant',
            content: 'Hello! I\'m your Sri Lanka travel assistant. Ask me anything about traveling in Sri Lanka - from beaches to cultural sites, hotels, transportation, or local cuisine!'
        }
    ]);
    const [inputMessage, setInputMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef(null);
    const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;

    const toggleChat = () => {
        setIsOpen(!isOpen);
    };

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const sendMessage = async (e) => {
        e.preventDefault();
        if (!inputMessage.trim()) return;

        const userMessage = {
            role: 'user',
            content: inputMessage
        };

        setMessages(prev => [...prev, userMessage]);
        setInputMessage('');
        setIsLoading(true);

        try {
            const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    contents: [
                        {
                            parts: [
                                {
                                    text: `You are a helpful Sri Lanka travel officer and tourism expert. The user is asking: ${inputMessage}. 
                  Provide specific, accurate, and helpful information about travel in Sri Lanka. 
                  If you don't know something specific about Sri Lanka, be honest and suggest general travel advice instead.`
                                }
                            ]
                        }
                    ]
                })
            });

            const data = await response.json();

            if (data.candidates && data.candidates[0].content) {
                const botResponse = {
                    role: 'assistant',
                    content: data.candidates[0].content.parts[0].text
                };
                setMessages(prev => [...prev, botResponse]);
            } else {
                throw new Error('Invalid response format');
            }
        } catch (error) {
            console.error('Error calling Gemini API:', error);
            setMessages(prev => [...prev, {
                role: 'assistant',
                content: 'Sorry, I encountered an error. Please check your API key or try again later.'
            }]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className={`${montserrat.className} fixed bottom-6 right-6 z-50`}>
            {isOpen && (
                <div className="bg-white rounded-lg shadow-xl mb-4 w-80 sm:w-100 max-h-180 flex flex-col border border-gray-200">
                    <div className="bg-teal-500 text-white p-3 rounded-t-lg flex justify-between items-center">
                        <h3 className={`${montserrat.className} font-semibold`}>Sri Lanka Travel Assistant</h3>
                        <button onClick={toggleChat} className={`${montserrat.className} text-white hover:text-gray-200`}>
                            <X size={20} />
                        </button>
                    </div>

                    <div className="flex-1 overflow-y-auto p-3 max-h-100">
                        {messages.map((msg, index) => (
                            <div
                                key={index}
                                className={`mb-3 ${msg.role === 'user' ? 'text-right' : ''}`}
                            >
                                <div
                                    className={`p-2 rounded-lg inline-block max-w-[85%] ${
                                        msg.role === 'user'
                                            ? 'bg-teal-100 text-gray-800'
                                            : 'bg-gray-100 text-gray-800'
                                    }`}
                                >
                                    {msg.content}
                                </div>
                            </div>
                        ))}
                        {isLoading && (
                            <div className="text-center py-2">
                                <div className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-solid border-teal-600 border-r-transparent"></div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    <form onSubmit={sendMessage} className="border-t border-gray-200 p-3 flex">
                        <input
                            type="text"
                            value={inputMessage}
                            onChange={(e) => setInputMessage(e.target.value)}
                            placeholder="Ask about Sri Lanka travel..."
                            className="flex-1 border border-gray-300 rounded-l-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <button
                            type="submit"
                            className="bg-teal-600 text-white px-4 py-2 rounded-r-lg hover:bg-teal-700 flex items-center justify-center"
                            disabled={isLoading}
                        >
                            <Send size={18} />
                        </button>
                    </form>
                </div>
            )}

            <button
                onClick={toggleChat}
                className="bg-teal-500 hover:bg-teal-600 text-white p-3 mr-13 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-105"
            >
                <MessageSquare size={24} />
            </button>
        </div>
    );
}