import React from 'react';
import { Menu, Building2 } from 'lucide-react';

interface MobileHeaderProps {
  onMenuClick: () => void;
}

export const MobileHeader: React.FC<MobileHeaderProps> = ({ onMenuClick }) => {
  return (
    <div className="bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between lg:hidden">
      <div className="flex items-center">
        <Building2 className="h-8 w-8 text-green-600" />
        <span className="ml-2 text-xl font-bold text-gray-900">FacilitiEase</span>
      </div>
      <button
        onClick={onMenuClick}
        className="p-2 rounded-lg text-gray-600 hover:bg-gray-100"
      >
        <Menu className="h-6 w-6" />
      </button>
    </div>
  );
};