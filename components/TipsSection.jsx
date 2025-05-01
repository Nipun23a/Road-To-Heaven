import { motion } from 'framer-motion';
import {AlertTriangle} from 'lucide-react';
const VisitorTipsSection = ({ visitorTips,fadeInUp }) => {
    if (!visitorTips) return null;

    return (
        <motion.div
            variants={fadeInUp}
            className="bg-white rounded-lg shadow-lg p-6 mb-8"
        >
            <h2 className="text-2xl text-gray-800 font-bold mb-4">Visitor Tips</h2>

            {visitorTips.notice && (
                <div className="mb-4 p-4 bg-amber-50 border-l-4 border-amber-500 rounded">
                    <div className="flex items-start">
                        <AlertTriangle size={24} className="text-amber-500 mr-3 mt-1" />
                        <div>
                            <h3 className="font-bold text-amber-700">{visitorTips.notice.title}</h3>
                            <p className="text-amber-700">{visitorTips.notice.text}</p>
                        </div>
                    </div>
                </div>
            )}

            {visitorTips.tips && visitorTips.tips.length > 0 && (
                <ul className="space-y-3">
                    {visitorTips.tips.map((tip, index) => (
                        <li key={index} className="flex items-start">
                            <div className="min-w-6 text-teal-600 mr-2">•</div>
                            <p className="text-gray-700">{tip}</p>
                        </li>
                    ))}
                </ul>
            )}
        </motion.div>
    );
};

export default VisitorTipsSection;