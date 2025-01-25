import React from 'react';
import { Phone } from 'lucide-react';

export const ContactSection: React.FC = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 md:mb-0">
            Need help? Talk to our experts.
          </h2>
          <div className="flex gap-4">
            <a
              href="/contact"
              className="inline-flex items-center px-6 py-3 border border-gray-300 shadow-sm text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
            >
              Contact Us
              <span className="ml-2">→</span>
            </a>
            <a
              href="tel:+917845955939"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-black hover:bg-gray-900"
            >
              <Phone className="h-5 w-5 mr-2" />
              78459 55939
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};