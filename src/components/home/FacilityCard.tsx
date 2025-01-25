import React from 'react';

interface FacilityCardProps {
  image: string;
  title: string;
  available: number;
}

export const FacilityCard: React.FC<FacilityCardProps> = ({ image, title, available }) => {
  return (
    <div className="group cursor-pointer">
      <div className="relative overflow-hidden rounded-lg">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-opacity" />
      </div>
      <h3 className="mt-3 text-lg font-semibold text-gray-900">{title}</h3>
      <p className="text-sm text-gray-600">{available} Available</p>
    </div>
  );
};