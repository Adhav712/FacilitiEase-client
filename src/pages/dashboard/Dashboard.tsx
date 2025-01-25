import React, { useState } from 'react';
import { useAuthStore } from '../../store/authStore';
import { DashboardCard } from '../../components/dashboard/DashboardCard';
import { DashboardChart } from '../../components/dashboard/DashboardChart';
import { NotificationItem } from '../../components/dashboard/NotificationItem';

export const Dashboard: React.FC = () => {
  const { user } = useAuthStore();
  const [activeTab, setActiveTab] = useState<'Monthly Payouts' | 'No. Of Startups' | 'Comparison'>('Monthly Payouts');

  const stats = {
    totalFacilities: 10,
    thisMonthFacilities: 3,
    totalBookings: 583,
    thisMonthEarnings: '50k',
    totalEarnings: '4.5L',
  };

  const monthlyData = [
    { month: 'Jan 24', amount: 4000 },
    { month: 'Feb 24', amount: 22000 },
    { month: 'Mar 24', amount: 500 },
    { month: 'Apr 24', amount: 7500 },
    { month: 'May 24', amount: 88000 },
    { month: 'June 24', amount: 0 },
    { month: 'July 24', amount: 0 },
    { month: 'Aug 24', amount: 0 },
    { month: 'Sept 24', amount: 0 },
  ];

  const notifications = [
    { id: 1, message: 'Weebsitestudio book a coworking space on 08.11.2024' },
    { id: 2, message: 'Weebsitestudio book a coworking space on 08.11.2024' },
    { id: 3, message: 'Weebsitestudio book a coworking space on 08.11.2024' },
    { id: 4, message: 'Weebsitestudio book a coworking space on 08.11.2024' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8 bg-gray-100">
      <div className="mb-6 sm:mb-8">
        <h1 className="text-xl sm:text-2xl font-semibold text-gray-900">
          Hello, {user?.name}!
        </h1>
        <p className="text-sm sm:text-base text-gray-600">We are glad to see you again</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-6 sm:mb-8">
        <DashboardCard
          title="Total Facilities"
          value={stats.totalFacilities}
          className="bg-white"
        />
        <DashboardCard
          title="This Month"
          value={stats.thisMonthFacilities}
          className="bg-white"
        />
        <DashboardCard
          title="Total Bookings"
          value={stats.totalBookings}
          className="bg-white"
        />
        <DashboardCard
          title="This Month"
          value={stats.thisMonthEarnings}
          className="bg-white sm:col-span-1"
        />
        <DashboardCard
          title="Total Earnings"
          value={stats.totalEarnings}
          trend={25}
          className="bg-white sm:col-span-1"
        />
      </div>

      {/* Chart and Notifications Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
        {/* Chart Section */}
        <div className="lg:col-span-2 bg-white rounded-lg p-4 sm:p-6 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 space-y-4 sm:space-y-0">
            <h2 className="text-lg sm:text-xl font-semibold">Monthly Payouts</h2>
            <div className="flex flex-wrap gap-2">
              {['Monthly Payouts', 'No. Of Startups', 'Comparison'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab as typeof activeTab)}
                  className={`px-3 sm:px-4 py-1 rounded-full text-sm ${activeTab === tab
                    ? 'bg-black text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                    }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
          <div className="overflow-x-auto">
            <div className="min-w-[500px]">
              <DashboardChart data={monthlyData} />
            </div>
          </div>
        </div>

        {/* Notifications Section */}
        <div className="bg-white rounded-lg p-4 sm:p-6 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg sm:text-xl font-semibold">Quick updates</h2>
          </div>
          <div className="space-y-4">
            {notifications.map((notification) => (
              <NotificationItem
                key={notification.id}
                message={notification.message}
              />
            ))}
          </div>
          <button className="w-full mt-6 bg-black text-white py-2 sm:py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-900">
            View More <span className="text-lg">→</span>
          </button>
        </div>
      </div>
    </div>
  );
};