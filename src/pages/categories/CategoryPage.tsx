import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Search, SlidersHorizontal } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Facility {
  id: string;
  title: string;
  location: string;
  price: number;
  image: string;
  features: string[];
  isFeatured?: boolean;
}

export const CategoryPage: React.FC = () => {
  const { category } = useParams<{ category: string }>();
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 100000]);
  const [selectedFilters, setSelectedFilters] = useState({
    listingStatus: 'all',
    propertyType: [] as string[],
    location: 'all',
  });

  const facilities: Facility[] = [
    {
      id: '1',
      title: 'Vignan Technology Business Incubator',
      location: 'Vadlamudi, Guntur, Andhra Pradesh, 522213',
      price: 14000,
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c',
      features: ['Parking', 'Beverages', '3+ More'],
      isFeatured: true,
    },
    {
      id: '2',
      title: 'SSN Incubation Foundation',
      location: 'Park Gandhi Sale (Om), Chennai - 603110',
      price: 14000,
      image: 'https://images.unsplash.com/photo-1497366412874-3415097a27e7',
      features: ['Parking', 'Beverages', '3+ More'],
      isFeatured: true,
    },
    // Add more facilities as needed
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">
          We got some great deals
        </h1>
        <div className="flex items-center text-sm text-gray-500">
          <span>{category}</span>
          <span className="mx-2">/</span>
          <span>Coworking</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Filters */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="mb-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="What are you looking for?"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
            </div>

            {/* Listing Status */}
            <div className="mb-6">
              <h3 className="font-semibold mb-3">Listing Status</h3>
              <div className="space-y-2">
                {[
                  'All',
                  'Monthly Rent',
                  'Yearly Rent',
                  'Hourly Rent',
                  'Day Pass',
                ].map((status) => (
                  <label key={status} className="flex items-center">
                    <input
                      type="radio"
                      name="listingStatus"
                      value={status.toLowerCase()}
                      className="h-4 w-4 text-green-600 focus:ring-green-500"
                    />
                    <span className="ml-2 text-sm text-gray-700">{status}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Property Type */}
            <div className="mb-6">
              <h3 className="font-semibold mb-3">Property Type</h3>
              <div className="space-y-2">
                {[
                  'College',
                  'Office',
                  'Mall Complex',
                  'Co-working space',
                  'Incubation',
                ].map((type) => (
                  <label key={type} className="flex items-center">
                    <input
                      type="checkbox"
                      className="h-4 w-4 text-green-600 focus:ring-green-500 rounded"
                    />
                    <span className="ml-2 text-sm text-gray-700">{type}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Price Range */}
            <div className="mb-6">
              <h3 className="font-semibold mb-3">Price Range</h3>
              <input
                type="range"
                min="0"
                max="100000"
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between mt-2">
                <span className="text-sm text-gray-600">₹0</span>
                <span className="text-sm text-gray-600">₹100000</span>
              </div>
            </div>

            {/* Meeting Rooms */}
            <div className="mb-6">
              <h3 className="font-semibold mb-3">Meeting Rooms</h3>
              <div className="flex gap-2">
                {['any', '1+', '2+', '3+', '4+', '5+'].map((count) => (
                  <button
                    key={count}
                    className="px-3 py-1 border border-gray-300 rounded-md text-sm hover:bg-gray-50"
                  >
                    {count}
                  </button>
                ))}
              </div>
            </div>

            {/* Location */}
            <div className="mb-6">
              <h3 className="font-semibold mb-3">Location</h3>
              <select className="w-full p-2 border border-gray-300 rounded-md">
                <option>All Cities</option>
                {/* Add more cities */}
              </select>
            </div>

            {/* Square Feet */}
            <div className="mb-6">
              <h3 className="font-semibold mb-3">Square Feet</h3>
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="number"
                  placeholder="Min"
                  className="p-2 border border-gray-300 rounded-md"
                />
                <input
                  type="number"
                  placeholder="Max"
                  className="p-2 border border-gray-300 rounded-md"
                />
              </div>
            </div>

            {/* Other Features */}
            <div className="mb-6">
              <button className="w-full flex items-center justify-between p-2 border border-gray-300 rounded-md">
                <span>Other Features</span>
                <SlidersHorizontal className="h-5 w-5" />
              </button>
            </div>

            <button className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700">
              Search
            </button>
            <button className="w-full text-gray-600 py-2 mt-2 text-sm">
              Reset all filters
            </button>
          </div>
        </div>

        {/* Results */}
        <div className="lg:col-span-3">
          <div className="flex justify-between items-center mb-6">
            <p className="text-sm text-gray-600">Showing 1-8 of 25 results</p>
            <select className="p-2 border border-gray-300 rounded-md">
              <option>Newest</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {facilities.map((facility) => (
              <div
                key={facility.id}
                className="bg-white rounded-lg shadow-sm overflow-hidden"
              >
                <div className="relative">
                  <img
                    src={facility.image}
                    alt={facility.title}
                    className="w-full h-48 object-cover"
                  />
                  {facility.isFeatured && (
                    <div className="absolute top-3 left-3 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                      FEATURED
                    </div>
                  )}
                  <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm text-gray-900 px-2 py-1 rounded text-sm">
                    ₹{facility.price}/mo
                  </div>
                </div>
                <div className="p-4">
                  <Link to="/incubator/1">
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {facility.title}
                    </h3>
                  </Link>
                  <p className="text-sm text-gray-600 mb-3">
                    {facility.location}
                  </p>
                  <div className="flex items-center space-x-3 text-sm text-gray-600">
                    {facility.features.map((feature, index) => (
                      <div key={index} className="flex items-center">
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-8 space-x-2">
            {[1, 2, 3].map((page) => (
              <button
                key={page}
                className={`px-4 py-2 rounded-md ${
                  page === 1
                    ? 'bg-green-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                }`}
              >
                {page}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
