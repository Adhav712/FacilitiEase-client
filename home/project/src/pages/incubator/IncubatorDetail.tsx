import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
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

// Sample space data for development
const SAMPLE_SPACE: Space = {
  id: "550e8400-e29b-41d4-a716-446655440000", // Example UUID
  name: "Sathyabama Technology Business Incubator",
  description: "A state-of-the-art business incubator facility",
  location: "Jeppiaar Nagar, Rajiv Gandhi Road, Chennai, Tamil Nadu, 600119, India",
  price_per_month: 14000,
  images: [
    "https://images.unsplash.com/photo-1497366754035-5f381699e765",
    "https://images.unsplash.com/photo-1497366216548-37526070297c",
    "https://images.unsplash.com/photo-1497366412874-3415097a27e7",
    "https://images.unsplash.com/photo-1497366811353-6870744d04b2"
  ]
};

export const IncubatorDetail: React.FC = () => {
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [space, setSpace] = useState<Space | null>(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSpace = async () => {
      try {
        // For development, use sample data if ID is "1"
        if (id === "1") {
          setSpace(SAMPLE_SPACE);
          setLoading(false);
          return;
        }

        // Validate UUID format
        const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
        if (!uuidRegex.test(id || '')) {
          navigate('/404');
          return;
        }

        const { data, error } = await supabase
          .from('spaces')
          .select('*')
          .eq('id', id)
          .single();

        if (error) throw error;
        if (!data) {
          navigate('/404');
          return;
        }
        
        setSpace(data);
      } catch (error) {
        console.error('Error fetching space:', error);
        navigate('/404');
      } finally {
        setLoading(false);
      }
    };

    fetchSpace();
  }, [id, navigate]);

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

      {/* Main Content */}
      <div className="pt-16">
        {/* Header Section */}
        <div className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
              <div>
                <div className="flex items-center space-x-2 text-sm text-gray-600 mb-2">
                  <span>OffiEase</span>
                  <span>/</span>
                  <span>{space.location}</span>
                </div>
                <h1 className="text-3xl font-bold text-gray-900 mb-4">
                  {space.name}
                </h1>
                <div className="flex items-center space-x-4 text-sm">
                  <span className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1 text-gray-400" />
                    Parking
                  </span>
                  <span className="flex items-center">
                    <Globe className="h-4 w-4 mr-1 text-gray-400" />
                    Beverages
                  </span>
                  <span className="flex items-center">
                    <Phone className="h-4 w-4 mr-1 text-gray-400" />
                    3+ More
                  </span>
                </div>
              </div>
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
            </div>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="relative h-96">
              <img
                src={space.images[0]}
                alt="Main view"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              {space.images.slice(1, 5).map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Interior ${index + 1}`}
                  className="w-full h-44 object-cover rounded-lg"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Rest of your existing JSX */}
        {/* ... */}

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
    </div>
  );
};