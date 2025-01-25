import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface DashboardCardProps {
  title: string;
  value: string | number;
  trend?: number;
  className?: string;
}

export const DashboardCard: React.FC<DashboardCardProps> = ({
  title,
  value,
  trend,
  className = '',
}) => {
  return (
    <div className={`rounded-lg p-6 shadow-sm ${className}`}>
      <h3 className="text-sm text-gray-600 mb-2">{title}</h3>
      <div className="flex items-center justify-between">
        <span className="text-2xl font-semibold">{value}</span>
        {trend && (
          <div className="flex items-center text-green-600">
            <ArrowUpRight className="h-4 w-4" />
            <span className="text-sm">{trend}%</span>
          </div>
        )}
      </div>
    </div>
  );
};