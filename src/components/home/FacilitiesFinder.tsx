import React from 'react';
import { ArrowRight } from 'lucide-react';

interface FeaturePoint {
  text: string;
}

interface FacilitiesFinderProps {
  features: FeaturePoint[];
}

export const FacilitiesFinder: React.FC<FacilitiesFinderProps> = ({ features }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Let's find the right<br />Facilities for your startup
        </h2>
        <div className="space-y-4 mb-8">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center space-x-3">
              <div className="h-6 w-6 rounded-full bg-amber-400 flex items-center justify-center text-white">
                {index + 1}
              </div>
              <span className="text-gray-700">{feature.text}</span>
            </div>
          ))}
        </div>
        <button className="inline-flex items-center px-6 py-3 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors">
          Book Now
          <ArrowRight className="ml-2 h-4 w-4" />
        </button>
      </div>
      <div className="relative">
        <div className="relative z-10 bg-white rounded-lg shadow-lg overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1497366754035-5f381699e765"
            alt="Facility interior"
            className="w-full h-64 object-cover"
          />
        </div>
        <div className="absolute bottom-0 right-0 translate-y-1/2 translate-x-1/4 z-20">
          <div className="bg-white rounded-lg shadow-lg p-4">
            <h3 className="font-semibold mb-2">10k+ Exclusive Facilities</h3>
            <div className="flex -space-x-2">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c"
                alt="Facility 1"
                className="w-8 h-8 rounded-full border-2 border-white"
              />
              <img
                src="https://images.unsplash.com/photo-1497366412874-3415097a27e7"
                alt="Facility 2"
                className="w-8 h-8 rounded-full border-2 border-white"
              />
              <img
                src="https://images.unsplash.com/photo-1497366754035-5f381699e765"
                alt="Facility 3"
                className="w-8 h-8 rounded-full border-2 border-white"
              />
              <div className="w-8 h-8 rounded-full bg-amber-400 text-white flex items-center justify-center text-sm border-2 border-white">
                +
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}