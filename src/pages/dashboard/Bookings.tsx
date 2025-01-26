import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '../../lib/supabase';
import { useAuthStore } from '../../store/authStore';

interface Booking {
  id: string;
  space: {
    name: string;
    location: string;
    images: string[];
    price_per_day: number;
  };
  start_date: string;
  end_date: string;
  status: 'pending' | 'approved' | 'rejected';
}

export const Bookings: React.FC = () => {
  const { user } = useAuthStore();


  const bookings: Booking[] = [
    {
      id: "1",
      space: {
        name: "Vignan Technology Business Incubator",
        location: "Vadlamudi, Guntur, Andhra Pradesh, 522213",
        images: [
          "https://via.placeholder.com/150", // Replace with real image URL
        ],
        price_per_day: 14000,
      },
      start_date: "2024-12-12",
      end_date: "2025-01-12",
      status: "approved",
    },
    {
      id: "2",
      space: {
        name: "Vignan Technology Business Incubator",
        location: "Vadlamudi, Guntur, Andhra Pradesh, 522213",
        images: [
          "https://via.placeholder.com/150", // Replace with real image URL
        ],
        price_per_day: 14000,
      },
      start_date: "2024-11-21",
      end_date: "2025-01-12",
      status: "approved",
    },
    {
      id: "3",
      space: {
        name: "Vignan Technology Business Incubator",
        location: "Vadlamudi, Guntur, Andhra Pradesh, 522213",
        images: [
          "https://via.placeholder.com/150", // Replace with real image URL
        ],
        price_per_day: 14000,
      },
      start_date: "2024-11-15",
      end_date: "2025-01-12",
      status: "rejected",
    },
  ];

  const isLoading = false;

  

//   const { data: bookings, isLoading } = useQuery({
//     queryKey: ['bookings', user?.id],
//     queryFn: async () => {
//       const { data, error } = await supabase
//         .from('bookings')
//         .select(`
//           id,
//           space:space_id (
//             name,
//             location,
//             images,
//             price_per_day
//           ),
//           start_date,
//           end_date,
//           status
//         `)
//         .eq('user_id', user?.id)
//         .order('created_at', { ascending: false });

//       if (error) throw error;
//       return data as Booking[];
//     },
//     enabled: !!user,
//   });

return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">View all booking status</h1>
        <p className="text-sm text-gray-600">We are glad to see you again</p>
      </div>

      <div className="bg-white rounded-lg shadow">
        {/* Header */}
        <div className="grid grid-cols-12 gap-4 p-4 bg-gray-50 rounded-t-lg">
          <div className="col-span-6 text-sm font-medium text-gray-500">Startup Details</div>
          <div className="col-span-2 text-sm font-medium text-gray-500">Booked On</div>
          <div className="col-span-2 text-sm font-medium text-gray-500">Validity Till</div>
          <div className="col-span-2 text-sm font-medium text-gray-500">Status</div>
        </div>

        {/* Bookings List */}
        <div className="divide-y divide-gray-200">
          {bookings.map((booking) => (
            <div
              key={booking.id}
              className="grid grid-cols-12 gap-4 p-4 items-center"
            >
              {/* Startup Details */}
              <div className="col-span-6 flex items-center space-x-4">
                <img
                  src={booking.space.images[0]}
                  alt={booking.space.name}
                  className="w-24 h-16 object-cover rounded"
                />
                <div>
                  <h3 className="font-medium text-gray-900">{booking.space.name}</h3>
                  <p className="text-sm text-gray-500">{booking.space.location}</p>
                  <div className="mt-2 inline-block px-3 py-1 border rounded-lg text-sm text-gray-900 bg-gray-100">
                    ₹{booking.space.price_per_day.toLocaleString()} / mo
                  </div>
                </div>
              </div>

              {/* Booked On */}
              <div className="col-span-2 text-sm text-gray-900">
                {new Date(booking.start_date).toLocaleDateString("en-GB", {
                  day: "2-digit",
                  month: "2-digit",
                  year: "numeric",
                })}
              </div>

              {/* Validity Till */}
              <div className="col-span-2 text-sm text-gray-900">
                {new Date(booking.end_date).toLocaleDateString("en-GB", {
                  day: "2-digit",
                  month: "2-digit",
                  year: "numeric",
                })}
              </div>

              {/* Status */}
              <div className="col-span-2">
                <span
                  className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium
                    ${booking.status === "approved" ? "bg-green-100 text-green-800" :
                    booking.status === "rejected" ? "bg-red-100 text-red-800" :
                    "bg-yellow-100 text-yellow-800"
                  }`}
                >
                  {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};