import React from 'react';
import { Bell } from 'lucide-react';

interface NotificationItemProps {
  message: string;
}

export const NotificationItem: React.FC<NotificationItemProps> = ({ message }) => {
  return (
    <div className="flex items-center gap-3">
      <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
        <Bell className="h-4 w-4 text-green-600" />
      </div>
      <p className="text-sm text-gray-700">{message}</p>
    </div>
  );
};