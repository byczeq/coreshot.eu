/*
  # Fix RLS policy for email subscriptions

  1. Changes
    - Drop existing INSERT policy
    - Create new INSERT policy that allows both anon and authenticated users
    - Ensure public access for newsletter subscriptions

  2. Security
    - Policy allows anyone to insert their own email subscription
    - Maintains read restrictions to authenticated users only
*/

DROP POLICY IF EXISTS "Anyone can subscribe with their email" ON email_subscriptions;

CREATE POLICY "Public can subscribe with email"
  ON email_subscriptions
  FOR INSERT
  TO public
  WITH CHECK (true);
