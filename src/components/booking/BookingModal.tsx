import React, { useState } from 'react';
import { X } from 'lucide-react';
import { supabase } from '../../lib/supabase';
import { useAuthStore } from '../../store/authStore';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  spaceId: string;
  spaceName: string;
  spaceImage: string;
  location: string;
  pricePerMonth: number;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  spaceId,
  spaceName,
  spaceImage,
  location,
  pricePerMonth,
}) => {
  const { user } = useAuthStore();
  const [selectedDate, setSelectedDate] = useState<string>(
    new Date().toISOString().split('T')[0]
  );
  const [bookingType, setBookingType] = useState<'day' | 'month' | 'year'>('month');
  const [contactNumber, setContactNumber] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const calculateEndDate = (startDate: string, type: 'day' | 'month' | 'year'): string => {
    const date = new Date(startDate);
    switch (type) {
      case 'day':
        date.setDate(date.getDate() + 1);
        break;
      case 'month':
        date.setMonth(date.getMonth() + 1);
        break;
      case 'year':
        date.setFullYear(date.getFullYear() + 1);
        break;
    }
    return date.toISOString().split('T')[0];
  };

  const calculateTotalPrice = (): number => {
    switch (bookingType) {
      case 'day':
        return pricePerMonth / 30;
      case 'month':
        return pricePerMonth;
      case 'year':
        return pricePerMonth * 12;
      default:
        return 0;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) {
      setError('Please login to book a space');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const { error: bookingError } = await supabase.from('bookings').insert({
        space_id: spaceId,
        user_id: user.id,
        start_date: selectedDate,
        end_date: calculateEndDate(selectedDate, bookingType),
        total_price: calculateTotalPrice(),
        status: 'pending',
        contact_number: contactNumber,
        booking_type: bookingType,
      });

      if (bookingError) throw bookingError;

      onClose();
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg max-w-4xl w-full mx-4 overflow-hidden">
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-2xl font-bold">Book Your Space</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
          {/* Left side - Space details */}
          <div>
            <img
              src={spaceImage}
              alt={spaceName}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{spaceName}</h3>
            <p className="text-gray-600 mb-4">{location}</p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Booking Details</h4>
              <p className="text-sm text-gray-600">
                Price per month: ₹{pricePerMonth.toLocaleString()}
              </p>
            </div>
          </div>

          {/* Right side - Booking form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm">
                {error}
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select Date
              </label>
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                min={new Date().toISOString().split('T')[0]}
                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-green-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Booking Period
              </label>
              <div className="grid grid-cols-3 gap-4">
                {(['day', 'month', 'year'] as const).map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setBookingType(type)}
                    className={`p-2 text-sm rounded-lg border ${
                      bookingType === type
                        ? 'bg-green-500 text-white border-green-500'
                        : 'border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Contact Number
              </label>
              <input
                type="tel"
                value={contactNumber}
                onChange={(e) => setContactNumber(e.target.value)}
                placeholder="Enter your contact number"
                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-green-500"
                required
              />
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Total Amount</span>
                <span className="font-semibold">₹{calculateTotalPrice().toLocaleString()}</span>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 disabled:opacity-50"
            >
              {loading ? 'Processing...' : 'Proceed to Pay'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};