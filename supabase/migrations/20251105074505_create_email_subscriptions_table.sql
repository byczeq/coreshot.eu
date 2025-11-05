/*
  # Create email subscriptions table

  1. New Tables
    - `email_subscriptions`
      - `id` (uuid, primary key) - Unique identifier for each subscription
      - `email` (text, unique, not null) - Subscriber's email address
      - `subscribed_at` (timestamptz, default now()) - Timestamp when user subscribed
      - `is_active` (boolean, default true) - Whether subscription is active
      - `locale` (text, default 'pl') - Language preference of subscriber
      - `ip_address` (text) - IP address for analytics and security
      - `user_agent` (text) - User agent for analytics

  2. Security
    - Enable RLS on `email_subscriptions` table
    - Add policy for public to insert their own subscriptions
    - Add policy for authenticated users to read subscriptions (admin access)

  3. Indexes
    - Create index on email for faster lookups
    - Create index on subscribed_at for date-based queries
*/

CREATE TABLE IF NOT EXISTS email_subscriptions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  subscribed_at timestamptz DEFAULT now(),
  is_active boolean DEFAULT true,
  locale text DEFAULT 'pl',
  ip_address text,
  user_agent text,
  CONSTRAINT email_subscriptions_email_check CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$')
);

ALTER TABLE email_subscriptions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can subscribe with their email"
  ON email_subscriptions
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view all subscriptions"
  ON email_subscriptions
  FOR SELECT
  TO authenticated
  USING (true);

CREATE INDEX IF NOT EXISTS idx_email_subscriptions_email ON email_subscriptions(email);
CREATE INDEX IF NOT EXISTS idx_email_subscriptions_subscribed_at ON email_subscriptions(subscribed_at DESC);
