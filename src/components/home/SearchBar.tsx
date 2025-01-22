import React, { useState } from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState('OffiEase');

  const facilityTypes = ['OffiEase', 'BioEridge', 'EngiEridge', 'ProtoEridge'];

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="flex space-x-2 p-2 border-b">
          {facilityTypes.map((type) => (
            <button
              key={type}
              onClick={() => setSelectedType(type)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                selectedType === type
                  ? 'bg-green-50 text-green-600'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              {type}
            </button>
          ))}
        </div>
        <div className="flex items-center p-2">
          <Search className="h-5 w-5 text-gray-400 ml-2" />
          <input
            type="text"
            placeholder="Enter a keyword, facilities, city, or ZIP code for Quick Search"
            className="flex-1 px-4 py-2 text-gray-700 focus:outline-none"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              onSearch(e.target.value);
            }}
          />
          <button className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-md">
            <SlidersHorizontal className="h-5 w-5 mr-2" />
            Advanced
          </button>
          <button
            onClick={() => onSearch(searchQuery)}
            className="ml-2 bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition-colors"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};