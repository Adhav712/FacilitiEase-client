export type UserRole = 'super_admin' | 'incubator' | 'user';

export interface User {
  id: string;
  email: string;
  role: UserRole;
  name: string;
  created_at: string;
}

export interface Space {
  id: string;
  incubator_id: string;
  name: string;
  description: string;
  capacity: number;
  price_per_month: number;
  location: string;
  facilities: string[];
  images: string[];
  available: boolean;
  created_at: string;
}

export interface Booking {
  id: string;
  space_id: string;
  user_id: string;
  start_date: string;
  end_date: string;
  total_price: number;
  status: 'pending' | 'confirmed' | 'cancelled';
  contact_number: string;
  booking_type: 'day' | 'month' | 'year';
  created_at: string;
}