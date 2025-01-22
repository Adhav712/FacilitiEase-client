import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  LayoutGrid,
  Calendar,
  PlusCircle,
  Building2,
  HelpCircle,
  User,
  CreditCard,
  LogOut,
  X,
} from 'lucide-react';
import { useAuthStore } from '../../store/authStore';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const location = useLocation();
  const { logout } = useAuthStore();

  const mainMenuItems = [
    { icon: LayoutGrid, label: 'Dashboard', path: '/dashboard' },
    { icon: Calendar, label: 'Bookings', path: '/dashboard/bookings' },
    { icon: PlusCircle, label: 'Add New Facilities', path: '/dashboard/add-facility' },
    { icon: Building2, label: 'My Services & facilities', path: '/dashboard/services' },
    { icon: HelpCircle, label: 'Support Center', path: '/dashboard/support' },
  ];

  const accountMenuItems = [
    { icon: User, label: 'My Profile', path: '/dashboard/profile' },
    { icon: CreditCard, label: 'Startups Virtual ID', path: '/dashboard/virtual-id' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed lg:static inset-y-0 left-0 w-64 bg-white border-r border-gray-200 transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 transition-transform duration-200 ease-in-out z-30`}
      >
        <div className="h-full px-3 py-4 flex flex-col">
          {/* Close button - mobile only */}
          <button
            onClick={onClose}
            className="lg:hidden self-end p-2 rounded-lg text-gray-600 hover:bg-gray-100"
          >
            <X className="h-6 w-6" />
          </button>

          <div className="space-y-6">
            <div>
              <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-3">
                MAIN
              </h2>
              <nav className="mt-2 space-y-1">
                {mainMenuItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={onClose}
                    className={`flex items-center px-3 py-2 text-sm font-medium rounded-lg ${
                      isActive(item.path)
                        ? 'bg-green-500 text-white'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <item.icon className="h-5 w-5 mr-3" />
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>

            <div>
              <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-3">
                MANAGE ACCOUNT
              </h2>
              <nav className="mt-2 space-y-1">
                {accountMenuItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={onClose}
                    className={`flex items-center px-3 py-2 text-sm font-medium rounded-lg ${
                      isActive(item.path)
                        ? 'bg-green-500 text-white'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <item.icon className="h-5 w-5 mr-3" />
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
          </div>

          <button
            onClick={() => {
              onClose();
              logout();
            }}
            className="mt-auto flex items-center px-3 py-2 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-100"
          >
            <LogOut className="h-5 w-5 mr-3" />
            Logout
          </button>
        </div>
      </aside>
    </>
  );
};