/*
  # Create bookings table

  1. New Tables
    - `bookings`
      - `id` (uuid, primary key)
      - `space_id` (uuid, references spaces)
      - `user_id` (uuid, references profiles)
      - `start_date` (date)
      - `end_date` (date)
      - `total_price` (numeric)
      - `status` (text)
      - `contact_number` (text)
      - `booking_type` (text)
      - `created_at` (timestamptz)

  2. Security
    - Enable RLS on `bookings` table
    - Add policies for users to manage their bookings
*/

CREATE TABLE IF NOT EXISTS bookings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  space_id uuid REFERENCES spaces NOT NULL,
  user_id uuid REFERENCES profiles NOT NULL,
  start_date date NOT NULL,
  end_date date NOT NULL,
  total_price numeric NOT NULL,
  status text NOT NULL CHECK (status IN ('pending', 'confirmed', 'cancelled')),
  contact_number text NOT NULL,
  booking_type text NOT NULL CHECK (booking_type IN ('day', 'month', 'year')),
  created_at timestamptz DEFAULT now()
);

ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their own bookings"
  ON bookings
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create bookings"
  ON bookings
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own bookings"
  ON bookings
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id);