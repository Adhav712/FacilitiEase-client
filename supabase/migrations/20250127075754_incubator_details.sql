-- Add new columns to spaces table
ALTER TABLE spaces
ADD COLUMN IF NOT EXISTS established_year integer,
ADD COLUMN IF NOT EXISTS sector text,
ADD COLUMN IF NOT EXISTS sqft integer,
ADD COLUMN IF NOT EXISTS type text,
ADD COLUMN IF NOT EXISTS amenities text[] DEFAULT '{}',
ADD COLUMN IF NOT EXISTS services text[] DEFAULT '{}',
ADD COLUMN IF NOT EXISTS social_media jsonb DEFAULT '{
  "facebook": null,
  "instagram": null,
  "linkedin": null,
  "youtube": null,
  "twitter": null,
  "website": null
}';

-- Create or update the address details
ALTER TABLE spaces
ADD COLUMN IF NOT EXISTS address_details jsonb DEFAULT '{
  "street": null,
  "city": null,
  "state": null,
  "country": null,
  "pincode": null,
  "place": null,
  "coordinates": {
    "latitude": null,
    "longitude": null
  }
}';