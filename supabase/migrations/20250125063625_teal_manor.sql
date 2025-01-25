/*
  # Update bookings table and policies

  1. Changes:
    - Add contact_number and booking_type columns to bookings table if they don't exist
    - Ensure RLS is enabled
    - Create policies if they don't exist

  2. Security:
    - Maintain existing RLS policies
    - Add new policies only if they don't exist
*/

-- First check if the table exists, if not create it
DO $$ 
BEGIN
  IF NOT EXISTS (SELECT FROM pg_tables WHERE schemaname = 'public' AND tablename = 'bookings') THEN
    CREATE TABLE bookings (
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
  ELSE
    -- Add new columns if they don't exist
    IF NOT EXISTS (SELECT FROM information_schema.columns 
                  WHERE table_name = 'bookings' AND column_name = 'contact_number') THEN
      ALTER TABLE bookings ADD COLUMN contact_number text NOT NULL DEFAULT '';
    END IF;

    IF NOT EXISTS (SELECT FROM information_schema.columns 
                  WHERE table_name = 'bookings' AND column_name = 'booking_type') THEN
      ALTER TABLE bookings ADD COLUMN booking_type text NOT NULL DEFAULT 'month' 
        CHECK (booking_type IN ('day', 'month', 'year'));
    END IF;
  END IF;
END $$;

-- Create policies if they don't exist
DO $$ 
BEGIN
  IF NOT EXISTS (SELECT FROM pg_policies WHERE tablename = 'bookings' AND policyname = 'Users can view their own bookings') THEN
    CREATE POLICY "Users can view their own bookings"
      ON bookings
      FOR SELECT
      TO authenticated
      USING (auth.uid() = user_id);
  END IF;

  IF NOT EXISTS (SELECT FROM pg_policies WHERE tablename = 'bookings' AND policyname = 'Users can create bookings') THEN
    CREATE POLICY "Users can create bookings"
      ON bookings
      FOR INSERT
      TO authenticated
      WITH CHECK (auth.uid() = user_id);
  END IF;

  IF NOT EXISTS (SELECT FROM pg_policies WHERE tablename = 'bookings' AND policyname = 'Users can update their own bookings') THEN
    CREATE POLICY "Users can update their own bookings"
      ON bookings
      FOR UPDATE
      TO authenticated
      USING (auth.uid() = user_id);
  END IF;
END $$;