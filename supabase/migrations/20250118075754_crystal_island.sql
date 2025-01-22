/*
  # Initial Schema Setup for FacilitiEase

  1. New Tables
    - `profiles`
      - `id` (uuid, primary key, references auth.users)
      - `name` (text)
      - `role` (text)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)
    - `spaces`
      - `id` (uuid, primary key)
      - `incubator_id` (uuid, references profiles)
      - `name` (text)
      - `description` (text)
      - `capacity` (integer)
      - `price_per_day` (numeric)
      - `location` (text)
      - `facilities` (text[])
      - `images` (text[])
      - `available` (boolean)
      - `created_at` (timestamp)
    - `bookings`
      - `id` (uuid, primary key)
      - `space_id` (uuid, references spaces)
      - `user_id` (uuid, references profiles)
      - `start_date` (date)
      - `end_date` (date)
      - `total_price` (numeric)
      - `status` (text)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users
*/

-- Create profiles table
CREATE TABLE IF NOT EXISTS profiles (
  id uuid PRIMARY KEY REFERENCES auth.users ON DELETE CASCADE,
  name text NOT NULL,
  role text NOT NULL CHECK (role IN ('super_admin', 'incubator', 'user')),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their own profile"
  ON profiles
  FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Users can update their own profile"
  ON profiles
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = id);

-- Create spaces table
CREATE TABLE IF NOT EXISTS spaces (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  incubator_id uuid REFERENCES profiles NOT NULL,
  name text NOT NULL,
  description text,
  capacity integer NOT NULL,
  price_per_day numeric NOT NULL,
  location text NOT NULL,
  facilities text[] DEFAULT '{}',
  images text[] DEFAULT '{}',
  available boolean DEFAULT true,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE spaces ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view available spaces"
  ON spaces
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Incubators can manage their own spaces"
  ON spaces
  FOR ALL
  TO authenticated
  USING (auth.uid() = incubator_id);

-- Create bookings table
CREATE TABLE IF NOT EXISTS bookings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  space_id uuid REFERENCES spaces NOT NULL,
  user_id uuid REFERENCES profiles NOT NULL,
  start_date date NOT NULL,
  end_date date NOT NULL,
  total_price numeric NOT NULL,
  status text NOT NULL CHECK (status IN ('pending', 'confirmed', 'cancelled')),
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

-- Create function to handle user creation
CREATE OR REPLACE FUNCTION handle_new_user()
RETURNS trigger AS $$
BEGIN
  INSERT INTO profiles (id, name, role)
  VALUES (
    new.id,
    COALESCE(new.raw_user_meta_data->>'name', split_part(new.email, '@', 1)),
    COALESCE(new.raw_user_meta_data->>'role', 'user')
  );
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY definer;

-- Create trigger for new user creation
CREATE OR REPLACE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION handle_new_user();