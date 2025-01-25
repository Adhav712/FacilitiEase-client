import React, { useState } from 'react';
import { SearchBar } from '../components/home/SearchBar';
import { FacilityCard } from '../components/home/FacilityCard';
import { FeatureCard } from '../components/home/FeatureCard';
import { TestimonialCard } from '../components/home/TestimonialCard';
import { FeaturedFacility } from '../components/home/FeaturedFacility';
import { FacilitiesFinder } from '../components/home/FacilitiesFinder';
import { TrustedBy } from '../components/home/TrustedBy';
import { ContactSection } from '../components/home/ContactSection';
import {
  Monitor,
  Clock,
  Sprout,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

export const Home: React.FC = () => {
  const [currentTestimonialSlide, setCurrentTestimonialSlide] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  const featuredFacilities = [
    {
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c',
      title: 'Vignan Technology Business Incubator',
      location: 'Vadlamudi, Guntur, Andhra Pradesh, 522213',
      price: 14000,
    },
    {
      image: 'https://images.unsplash.com/photo-1497366412874-3415097a27e7',
      title: 'SSN Incubation Foundation',
      location: 'Park Gandhi Sale (Om), Chennai - 603110',
      price: 14000,
    },
    {
      image: 'https://images.unsplash.com/photo-1497366754035-5f381699e765',
      title: 'Edii Tiruchirapalli Agribusiness',
      location: 'Navalkuttaippattu Tiruchirapalli - 620027',
      price: 14000,
    },
    {
      image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2',
      title: 'Sathyabama Technology Business Incubator',
      location: 'Jeppiar Nagar, Chennai, Tamil Nadu, 600119',
      price: 14000,
    },
  ];

  const finderFeatures = [
    { text: 'Find remarkable facilities' },
    { text: 'Friendly host & Quick support' },
    { text: 'At affordable rates' },
    { text: 'Long-term support & Guidance' },
  ];

  const facilities = [
    {
      title: 'Co-working Space',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c',
      available: 22,
    },
    {
      title: 'Private Cabins',
      image: 'https://images.unsplash.com/photo-1497366412874-3415097a27e7',
      available: 7,
    },
    {
      title: 'Meeting Rooms',
      image: 'https://images.unsplash.com/photo-1497366754035-5f381699e765',
      available: 10,
    },
    {
      title: 'Training Halls',
      image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2',
      available: 15,
    },
    {
      title: 'Labs',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c',
      available: 22,
    },
    {
      title: 'Equipments',
      image: 'https://images.unsplash.com/photo-1497366754035-5f381699e765',
      available: 135,
    },
    {
      title: 'Validation & Analysis',
      image: 'https://images.unsplash.com/photo-1497366412874-3415097a27e7',
      available: 3,
    },
  ];

  const testimonials = [
    {
      logo: 'https://via.placeholder.com/100',
      startupName: 'Weebsite Studio',
      businessType: 'Creative Agency',
      testimonial:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eleifend dolor vel odio sollicitudin sodales. Etiam quis magna quis neque dictum tempus. Praesent sodales purus et lacus condimentum scelerisque.',
      rating: 4.5,
    },
    {
      logo: 'https://via.placeholder.com/100',
      startupName: 'Design Studio',
      businessType: 'Design Agency',
      testimonial:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eleifend dolor vel odio sollicitudin sodales. Etiam quis magna quis neque dictum tempus. Praesent sodales purus et lacus condimentum scelerisque.',
      rating: 5.0,
    },
    {
      logo: 'https://via.placeholder.com/100',
      startupName: 'Tech Innovators',
      businessType: 'Technology',
      testimonial:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eleifend dolor vel odio sollicitudin sodales. Etiam quis magna quis neque dictum tempus. Praesent sodales purus et lacus condimentum scelerisque.',
      rating: 4.8,
    },
    {
      logo: 'https://via.placeholder.com/100',
      startupName: 'Growth Labs',
      businessType: 'Business Development',
      testimonial:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eleifend dolor vel odio sollicitudin sodales. Etiam quis magna quis neque dictum tempus. Praesent sodales purus et lacus condimentum scelerisque.',
      rating: 4.9,
    },
  ];

  const trustedByLogos = [
    { src: 'https://via.placeholder.com/150x50', alt: 'Weebsite Studio' },
    {
      src: 'https://via.placeholder.com/150x50',
      alt: 'Creative Poster Designer',
    },
    { src: 'https://via.placeholder.com/150x50', alt: 'Artlex' },
    { src: 'https://via.placeholder.com/150x50', alt: 'Madrasi Buddha' },
    { src: 'https://via.placeholder.com/150x50', alt: 'Proud' },
    { src: 'https://via.placeholder.com/150x50', alt: 'Man & Rani' },
    { src: 'https://via.placeholder.com/150x50', alt: 'College' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div
        className="relative min-h-[600px] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-12">
            <p className="text-green-400 text-sm font-semibold uppercase tracking-wider mb-3">
              AN INTEGRATED & PLATFORM FOR STARTUPS
            </p>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Find Your Dream Space With{' '}
              <span className="text-green-400">Ease</span>
            </h1>
            <p className="text-xl text-white mb-8">
              We've more than 100,000 Workspaces, Research facilities, Day
              Passes & Access to Other Amenities
            </p>
          </div>
          <SearchBar onSearch={(query) => console.log(query)} />
        </div>
      </div>

      {/* Facilities Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Explore Facilitiease Features
            </h2>
            <p className="text-gray-600">
              Get some idea from 50+ facilitiease types
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {facilities.map((facility) => (
              <FacilityCard
                key={facility.title}
                title={facility.title}
                image={facility.image}
                available={facility.available}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              See How FacilitiEase Can Support the{' '}
              <span className="text-green-600">Startups!</span>
            </h2>
            <p className="text-gray-600">We are strong together..!!</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Monitor className="h-12 w-12 text-green-600" />}
              title="Flexible, Tailored Workspace Solutions"
              description="Provides startups with flexible workspace options designed to meet their unique needs, allowing them to scale efficiently without getting stuck in long-term leases."
            />
            <FeatureCard
              icon={<Clock className="h-12 w-12 text-green-600" />}
              title="Productivity-Boosting Environment"
              description="Startups benefit from a collaborative and well-equipped workspace environment minimizing distractions and enhancing focus on core business activities."
            />
            <FeatureCard
              icon={<Sprout className="h-12 w-12 text-green-600" />}
              title="Long-Term Partnerships for Growth & Support"
              description="By partnering with FACILITIEASE, startups gain access to valuable resources, potential investment opportunities, and strategic guidance to support their growth journey."
            />
          </div>
        </div>
      </div>

      {/* Featured Facilities Section */}
      <div className="mb-16">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              Discover Our Featured Facilitiease
            </h2>
            <p className="text-gray-600">Top-picked facilitiease for you</p>
          </div>
          <a
            href="#"
            className="text-sm text-gray-700 hover:text-gray-900 flex items-center"
          >
            See All Facilitiease
            <ChevronRight className="h-4 w-4 ml-1" />
          </a>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredFacilities.map((facility, index) => (
              <FeaturedFacility key={index} {...facility} isFeatured />
            ))}
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {[0, 1, 2].map((dot) => (
              <button
                key={dot}
                onClick={() => setCurrentSlide(dot)}
                className={`h-2 w-2 rounded-full ${
                  currentSlide === dot ? 'bg-gray-800' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

            {/* Facilities Finder Section */}
      <div className="bg-white rounded-lg p-8">
        <FacilitiesFinder features={finderFeatures} />
      </div>

      {/* Testimonials Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">
                See Why Startups Love FacilitiEase
              </h2>
              <p className="text-gray-600 mt-2">
                Hear What Our Clients Have to Say About FacilitiEase
              </p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() =>
                  setCurrentTestimonialSlide((prev) => Math.max(0, prev - 1))
                }
                className="p-2 rounded-full border border-gray-300 hover:bg-gray-100"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={() =>
                  setCurrentTestimonialSlide((prev) =>
                    Math.min(testimonials.length - 4, prev + 1)
                  )
                }
                className="p-2 rounded-full border border-gray-300 hover:bg-gray-100"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials
              .slice(currentTestimonialSlide, currentTestimonialSlide + 4)
              .map((testimonial, index) => (
                <TestimonialCard key={index} {...testimonial} />
              ))}
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {[0, 1, 2, 3].map((dot) => (
              <button
                key={dot}
                onClick={() => setCurrentTestimonialSlide(dot)}
                className={`h-2 w-2 rounded-full transition-colors ${
                  currentTestimonialSlide === dot
                    ? 'bg-gray-800'
                    : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>



      {/* Trusted By Section */}
      <TrustedBy logos={trustedByLogos} />

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
};
