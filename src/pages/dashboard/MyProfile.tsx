import React, { useState } from 'react';

export const MyProfile: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'profile' | 'social'>('profile');


  const SocialMediaForm = () => (
    <div className="p-6">
      <h2 className="text-lg font-bold text-gray-900 mb-1">Social Media Links</h2>
      <p className="text-sm text-gray-600 mb-6">Please provide your social media links</p>

      <form className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div>
            <label htmlFor="facebook" className="block text-sm font-medium text-gray-700">
              Facebook
            </label>
            <input
              type="url"
              id="facebook"
              placeholder="Enter your input"
              className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-gray-900"
            />
          </div>
          <div>
            <label htmlFor="instagram" className="block text-sm font-medium text-gray-700">
              Instagram
            </label>
            <input
              type="url"
              id="instagram"
              placeholder="Enter your input"
              className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-gray-900"
            />
          </div>
          <div>
            <label htmlFor="linkedin" className="block text-sm font-medium text-gray-700">
              LinkedIn
            </label>
            <input
              type="url"
              id="linkedin"
              placeholder="Enter your input"
              className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-gray-900"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div>
            <label htmlFor="youtube" className="block text-sm font-medium text-gray-700">
              YouTube
            </label>
            <input
              type="url"
              id="youtube"
              placeholder="Enter your input"
              className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-gray-900"
            />
          </div>
          <div>
            <label htmlFor="whatsappBusiness" className="block text-sm font-medium text-gray-700">
              WhatsApp
            </label>
            <input
              type="text"
              id="whatsappBusiness"
              placeholder="Enter your input"
              className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-gray-900"
            />
          </div>
          <div>
            <label htmlFor="twitter" className="block text-sm font-medium text-gray-700">
              Twitter
            </label>
            <input
              type="url"
              id="twitter"
              placeholder="Enter your input"
              className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-gray-900"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="googleBusiness" className="block text-sm font-medium text-gray-700">
              Google Business Profile
            </label>
            <input
              type="url"
              id="googleBusiness"
              placeholder="Enter your input"
              className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-gray-900"
            />
          </div>
          <div>
            <label htmlFor="businessWebsite" className="block text-sm font-medium text-gray-700">
              Website
            </label>
            <input
              type="url"
              id="businessWebsite"
              placeholder="Enter your input"
              className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-gray-900"
            />
          </div>
        </div>
      </form>
    </div>
  );


  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Let us know about you :)</h1>
        <p className="text-sm text-gray-600">We are glad to see you again</p>
      </div>

      <div className="bg-white rounded-lg shadow">
        {/* Tabs Header */}
        <div className="border-b border-gray-200">
          <nav className="flex space-x-4 p-4">
          <button
              onClick={() => setActiveTab('profile')}
              className={`text-sm font-medium ${
                activeTab === 'profile'
                  ? 'text-gray-900 border-b-2 border-gray-900'
                  : 'text-gray-500'
              } pb-2`}
            >
              1. My Profile
            </button>
            <button
              onClick={() => setActiveTab('social')}
              className={`text-sm font-medium ${
                activeTab === 'social'
                  ? 'text-gray-900 border-b-2 border-gray-900'
                  : 'text-gray-500'
              } pb-2`}
            >
              2. Social Media Links (*optional)
            </button>
          </nav>
        </div>

        {/* Form Section */}
        {activeTab === 'profile' ? (
        <div className="p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-1">My Profile</h2>
          <p className="text-sm text-gray-600 mb-6">Please provide your social links</p>

          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div>
                <label htmlFor="startupName" className="block text-sm font-medium text-gray-700">
                  Startup Name
                </label>
                <input
                  type="text"
                  id="startupName"
                  placeholder="Enter your input"
                  className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-gray-900"
                />
              </div>
              <div>
                <label htmlFor="contactPerson" className="block text-sm font-medium text-gray-700">
                  Name of Contact Person & Position
                </label>
                <input
                  type="text"
                  id="contactPerson"
                  placeholder="Enter your input"
                  className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-gray-900"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your input"
                  className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-gray-900"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div>
                <label htmlFor="contactNumber" className="block text-sm font-medium text-gray-700">
                  #1 Contact Number
                </label>
                <input
                  type="text"
                  id="contactNumber"
                  placeholder="Enter your input"
                  className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-gray-900"
                />
              </div>
              <div>
                <label htmlFor="whatsapp" className="block text-sm font-medium text-gray-700">
                  #2 WhatsApp
                </label>
                <input
                  type="text"
                  id="whatsapp"
                  placeholder="Enter your input"
                  className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-gray-900"
                />
              </div>
              <div>
                <label htmlFor="website" className="block text-sm font-medium text-gray-700">
                  Website
                </label>
                <input
                  type="url"
                  id="website"
                  placeholder="Enter your input"
                  className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-gray-900"
                />
              </div>
            </div>

            <div>
              <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                Address (Including city, district, and state)
              </label>
              <textarea
                id="address"
                placeholder="Enter your input"
                className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-gray-900"
                rows={3}
              />
            </div>
          </form>
        </div>
        ):(
          <SocialMediaForm/>
        )}
      </div>
    </div>
  );
};
