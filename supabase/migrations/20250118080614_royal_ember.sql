/*
  # Authentication and Profile System Update

  1. Changes
    - Temporarily drop dependent foreign keys
    - Update profiles table structure
    - Recreate foreign key constraints
    - Update trigger function for user creation

  2. Security
    - Enable RLS on profiles table
    - Add policies for user access
*/

-- First, drop the foreign key constraints that depend on profiles
ALTER TABLE spaces DROP CONSTRAINT IF EXISTS spaces_incubator_id_fkey;
ALTER TABLE bookings DROP CONSTRAINT IF EXISTS bookings_user_id_fkey;

-- Drop existing trigger
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
DROP FUNCTION IF EXISTS handle_new_user();

-- Update profiles table
DO $$ 
BEGIN
  -- Create a temporary table to store existing profiles
  CREATE TEMP TABLE temp_profiles AS SELECT * FROM profiles;
  
  -- Drop and recreate the profiles table
  DROP TABLE profiles;
  CREATE TABLE profiles (
    id uuid PRIMARY KEY REFERENCES auth.users ON DELETE CASCADE,
    name text NOT NULL,
    role text NOT NULL DEFAULT 'user' CHECK (role IN ('super_admin', 'incubator', 'user')),
    created_at timestamptz DEFAULT now(),
    updated_at timestamptz DEFAULT now()
  );

  -- Restore existing profiles data if any exists
  INSERT INTO profiles (id, name, role, created_at, updated_at)
  SELECT id, name, role, created_at, updated_at
  FROM temp_profiles;
  
  -- Drop temporary table
  DROP TABLE temp_profiles;
EXCEPTION
  WHEN undefined_table THEN
    -- Profiles table didn't exist, just create it
    NULL;
END $$;

-- Enable RLS
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Public profiles are viewable by everyone"
  ON profiles FOR SELECT
  USING (true);

CREATE POLICY "Users can update own profile"
  ON profiles FOR UPDATE
  USING (auth.uid() = id);

-- Create improved user creation function
CREATE OR REPLACE FUNCTION handle_new_user()
RETURNS trigger AS $$
BEGIN
  INSERT INTO public.profiles (id, name, role)
  VALUES (
    NEW.id,
    COALESCE(NEW.raw_user_meta_data->>'name', split_part(NEW.email, '@', 1)),
    COALESCE(NEW.raw_user_meta_data->>'role', 'user')
  );
  RETURN NEW;
END;
$$ language plpgsql security definer;

-- Create trigger for new user creation
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION handle_new_user();

-- Recreate the foreign key constraints
ALTER TABLE spaces 
  ADD CONSTRAINT spaces_incubator_id_fkey 
  FOREIGN KEY (incubator_id) REFERENCES profiles(id);

ALTER TABLE bookings 
  ADD CONSTRAINT bookings_user_id_fkey 
  FOREIGN KEY (user_id) REFERENCES profiles(id);