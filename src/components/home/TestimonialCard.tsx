import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  logo: string;
  startupName: string;
  businessType: string;
  testimonial: string;
  rating: number;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  logo,
  startupName,
  businessType,
  testimonial,
  rating,
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="flex items-center mb-4">
        <img src={logo} alt={startupName} className="w-12 h-12 rounded-full" />
        <div className="ml-3">
          <h3 className="font-semibold text-gray-900">{startupName}</h3>
          <p className="text-sm text-gray-600">{businessType}</p>
        </div>
      </div>
      <p className="text-gray-700 mb-4">{testimonial}</p>
      <div className="flex items-center justify-between">
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-5 h-5 ${
                i < rating ? 'text-green-500 fill-current' : 'text-gray-300'
              }`}
            />
          ))}
        </div>
        <span className="text-sm text-gray-600">{rating.toFixed(1)} Rating</span>
      </div>
    </div>
  );
};