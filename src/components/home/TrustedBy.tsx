import React from 'react';

interface TrustedByProps {
  logos: Array<{
    src: string;
    alt: string;
  }>;
}

export const TrustedBy: React.FC<TrustedByProps> = ({ logos }) => {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-center text-gray-600 text-sm font-medium mb-8">
          Trusted by the world's best
        </h3>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {logos.map((logo, index) => (
            <img
              key={index}
              src={logo.src}
              alt={logo.alt}
              className="h-8 md:h-12 object-contain grayscale hover:grayscale-0 transition-all"
            />
          ))}
        </div>
      </div>
    </div>
  );
};