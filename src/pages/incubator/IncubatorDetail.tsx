import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { MapPin, Phone, Globe, Facebook, Instagram, Linkedin, Youtube, Twitter } from 'lucide-react';
import { BookingModal } from '../../components/booking/BookingModal';
import { supabase } from '../../lib/supabase';

interface Space {
  id: string;
  name: string;
  description: string;
  location: string;
  price_per_day: number;
  images: string[];
  facilities: string[];
  established_year: number;
  sector: string;
  sqft: number;
  capacity: number;
  type: string;
  amenities: string[];
  services: string[];
  social_media: {
    facebook?: string;
    instagram?: string;
    linkedin?: string;
    youtube?: string;
    twitter?: string;
    website?: string;
  };
  address_details: {
    street: string;
    city: string;
    state: string;
    country: string;
    pincode: string;
    place: string;
    coordinates: {
      latitude: number;
      longitude: number;
    };
  };
}

export const IncubatorDetail: React.FC = () => {
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

  const { address_details, social_media } = space;
  const fullAddress = `${address_details.street}, ${address_details.city}, ${address_details.state}, ${address_details.pincode}, ${address_details.country}`;
  const mapUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.5!2d${address_details.coordinates.longitude}!3d${address_details.coordinates.latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDAwJzAwLjAiTiA4MMKwMTInMDAuMCJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin`;

  return (
    <div className="relative">
      {/* Floating Header */}
      {/* <div
        className={`fixed top-0 left-0 right-0 bg-white shadow-md transform transition-transform duration-300 z-50 ${isHeaderVisible ? 'translate-y-0' : '-translate-y-full'
          }`}
        style={{ top: '64px' }}
      > */}
      {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <h2 className="text-lg font-semibold text-gray-900">{space?.name}</h2>
          <div className="flex items-center text-sm text-gray-600">
            <MapPin className="h-4 w-4 mr-1" />
            <span>{address_details.city}</span>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <span className="text-xl font-bold">₹{space?.price_per_day.toLocaleString()}</span>
          <button
            onClick={() => setIsBookingModalOpen(true)}
            className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-900"
          >
            Book Now
          </button>
        </div>
      </div> */}
      {/* </div> */}

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
                  <span>{fullAddress}</span>
                </div>
                <h1 className="text-3xl font-bold text-gray-900 mb-4">{space?.name}</h1>
                <div className="flex items-center space-x-4 text-sm">
                  {space?.amenities.slice(0, 3).map((facility, index) => (
                    <span key={index} className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1 text-gray-400" />
                      {facility}
                    </span>
                  ))}
                  {space?.amenities.length > 3 && (
                    <span className="flex items-center">
                      <Phone className="h-4 w-4 mr-1 text-gray-400" />
                      {space?.amenities.length - 3}+ More
                    </span>
                  )}
                </div>
              </div>
              <div className="mt-4 lg:mt-0 flex items-center space-x-4">
                <div className="text-right">
                  <p className="text-sm text-gray-600">Per Month</p>
                  <p className="text-3xl font-bold">₹{space?.price_per_day.toLocaleString()}</p>
                </div>
                <button
                  onClick={() => setIsBookingModalOpen(true)}
                  className={`${space?.capacity ? "bg-FYellow" : "bg-green-500"} text-white px-8 py-2 font-bold rounded-lg hover:bg-green-600`}
                >
                  {space?.capacity ? (
                    <>
                      {space.capacity} Spaces
                      <br />
                      available
                    </>
                  ) : (
                    "Book Now"
                  )}
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
                src={space?.images[0]}
                alt="Main view"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              {space?.images.slice(1, 5).map((image, index) => (
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

        {/* Available Services */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex space-x-4 overflow-x-auto pb-4">
            {space?.services.map((service) => (
              <span
                key={service}
                className="px-4 py-2 bg-green-50 text-green-600 rounded-full whitespace-nowrap"
              >
                {service}
              </span>
            ))}
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-8">
              <section>
                <h2 className="text-2xl font-bold mb-4">Co-working Description</h2>
                <p className="text-gray-600">{space?.description}</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Facility Details</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-600">Facility Details ID</p>
                    <p className="font-semibold">{space?.id}</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-600">Established</p>
                    <p className="font-semibold">{space?.established_year}</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-600">Price</p>
                    <p className="font-semibold">{space?.price_per_day.toLocaleString()}</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-600">Sector</p>
                    <p className="font-semibold">{space?.sector}</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-600">Sqft</p>
                    <p className="font-semibold">{space?.sqft} sqft</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-600">Type</p>
                    <p className="font-semibold">{space?.type}</p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Features & Amenities</h2>
                <div className="grid grid-cols-2 gap-4">
                  {space?.amenities.map((amenity) => (
                    <div key={amenity} className="flex items-center space-x-2">
                      <div className="h-2 w-2 bg-green-500 rounded-full" />
                      <span className="text-gray-600">{amenity}</span>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              <section className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-xl font-bold mb-4">Address</h2>
                <div className="space-y-4">
                  <p className="text-gray-600">{fullAddress}</p>
                  <div className="space-y-2">
                    <div>
                      <p className="text-sm text-gray-600">Place</p>
                      <p className="font-semibold">{address_details.place}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">City</p>
                      <p className="font-semibold">{address_details.city}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Pincode</p>
                      <p className="font-semibold">{address_details.pincode}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">State</p>
                      <p className="font-semibold">{address_details.state}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Country</p>
                      <p className="font-semibold">{address_details.country}</p>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <div className="bg-gray-100 h-64 rounded-lg">
                  <div className="w-full h-full rounded-lg overflow-hidden">
                    <iframe
                      src={mapUrl}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                    />
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h2 className="text-2xl font-bold mb-6">Follow us on social media</h2>
          <div className="flex space-x-6">
            {[
              { icon: Facebook, href: social_media.facebook, label: 'Facebook' },
              { icon: Instagram, href: social_media.instagram, label: 'Instagram' },
              { icon: Linkedin, href: social_media.linkedin, label: 'LinkedIn' },
              { icon: Youtube, href: social_media.youtube, label: 'YouTube' },
              { icon: Twitter, href: social_media.twitter, label: 'Twitter' },
              { icon: Globe, href: social_media.website, label: 'Website' },
            ].filter(item => item.href).map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-200 hover:bg-gray-50 transition-colors"
                aria-label={label}
              >
                <Icon className="h-5 w-5 text-gray-600" />
              </a>
            ))}
          </div>
        </div>

        {/* Booking Modal */}
        <BookingModal
          isOpen={isBookingModalOpen}
          onClose={() => setIsBookingModalOpen(false)}
          spaceId={space?.id}
          spaceName={space?.name}
          spaceImage={space?.images[0]}
          location={fullAddress}
          pricePerMonth={space?.price_per_day}
        />
      </div>
    </div>
  );
};