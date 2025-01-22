import React from 'react';
import { Heart, Car, Coffee, Plus } from 'lucide-react';

interface FeaturedFacilityProps {
  image: string;
  title: string;
  location: string;
  price: number;
  isFeatured?: boolean;
}

export const FeaturedFacility: React.FC<FeaturedFacilityProps> = ({
  image,
  title,
  location,
  price,
  isFeatured = false,
}) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm">
      <div className="relative">
        {isFeatured && (
          <div className="absolute top-3 left-3 bg-green-500 text-white text-xs px-2 py-1 rounded-full flex items-center">
            <span className="mr-1">✦</span>
            FEATURED
          </div>
        )}
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover"
        />
        <button className="absolute top-3 right-3 p-1.5 bg-white rounded-full hover:bg-gray-100">
          <Heart className="h-5 w-5 text-gray-600" />
        </button>
        <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm text-gray-900 px-2 py-1 rounded text-sm">
          ₹{price.toLocaleString()}/mo
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 mb-1">{title}</h3>
        <p className="text-sm text-gray-600 mb-3">{location}</p>
        <div className="flex items-center space-x-3 text-sm text-gray-600 mb-3">
          <div className="flex items-center">
            <Car className="h-4 w-4 mr-1" />
            <span>Parking</span>
          </div>
          <div className="flex items-center">
            <Coffee className="h-4 w-4 mr-1" />
            <span>Beverages</span>
          </div>
          <div className="flex items-center">
            <Plus className="h-4 w-4 mr-1" />
            <span>3+ More</span>
          </div>
        </div>
        <button className="w-full flex items-center justify-between text-sm hover:text-green-600">
          <span>Facilities For Rent</span>
          <Heart className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}