import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { MapPin, Phone, Globe, Facebook, Instagram, Linkedin, Youtube, MessageCircle, Twitter } from 'lucide-react';
import { BookingModal } from '../../components/booking/BookingModal';
import { supabase } from '../../lib/supabase';

interface Space {
  id: string;
  name: string;
  description: string;
  location: string;
  price_per_month: number;
  images: string[];
}

export const IncubatorDetail: React.FC = () => {
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [space, setSpace] = useState<Space | null>(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchSpace = async () => {
      try {
        const { data, error } = await supabase
          .from('spaces')
          .select('*')
          .eq('id', id)
          .single();

        if (error) throw error;
        setSpace(data);
      } catch (error) {
        console.error('Error fetching space:', error);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchSpace();
    }
  }, [id]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsHeaderVisible(scrollPosition > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"></div>
      </div>
    );
  }

  if (!space) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-gray-600">Space not found</p>
      </div>
    );
  }

  return (
    <div className="relative">
      {/* Floating Header - Appears on Scroll */}
      <div
        className={`fixed top-0 left-0 right-0 bg-white shadow-md transform transition-transform duration-300 z-50 ${
          isHeaderVisible ? 'translate-y-0' : '-translate-y-full'
        }`}
        style={{ top: '64px' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <h2 className="text-lg font-semibold text-gray-900">
              {space.name}
            </h2>
            <div className="flex items-center text-sm text-gray-600">
              <MapPin className="h-4 w-4 mr-1" />
              <span>{space.location}</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-xl font-bold">₹{space.price_per_month.toLocaleString()}</span>
            <button
              onClick={() => setIsBookingModalOpen(true)}
              className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-900"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>

      {/* Rest of your existing JSX */}
      {/* ... */}

      {/* Add Book Now button in the header section */}
      <div className="mt-4 lg:mt-0 flex items-center space-x-4">
        <div className="text-right">
          <p className="text-sm text-gray-600">Per Month</p>
          <p className="text-3xl font-bold">₹{space.price_per_month.toLocaleString()}</p>
        </div>
        <button
          onClick={() => setIsBookingModalOpen(true)}
          className="bg-green-500 text-white px-8 py-3 rounded-lg hover:bg-green-600"
        >
          Book Now
        </button>
      </div>

      {/* Booking Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        spaceId={space.id}
        spaceName={space.name}
        spaceImage={space.images[0]}
        location={space.location}
        pricePerMonth={space.price_per_month}
      />
    </div>
  );
};