import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthStore } from '../../store/authStore';
import { Building2 } from 'lucide-react';

export const Navbar: React.FC = () => {
  const { user, isAuthenticated, logout } = useAuthStore();

  return (
    <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Building2 className="h-8 w-8 text-green-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">FacilitiEase</span>
            </Link>
            <div className="hidden md:flex ml-10 space-x-8">
              <Link to="/" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                Home
              </Link>
              <Link to="/offiease" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                OffiEase
              </Link>
              <Link to="/biobridge" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                BioEridge
              </Link>
              <Link to="/engieridge" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                EngiEridge
              </Link>
              <Link to="/protoeridge" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                ProtoEridge
              </Link>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            {isAuthenticated ? (
              <>
                <Link
                  to="/dashboard"
                  className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium"
                >
                  Dashboard
                </Link>
                <button
                  onClick={logout}
                  className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium"
                >
                  Login / Register
                </Link>
                <Link
                  to="/book-now"
                  className="bg-green-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-green-700 transition-colors"
                >
                  Book Now
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};