/*
  # Add verification code to email subscriptions

  1. Changes
    - Add `verification_code` column to store secret code
    - Add `code_expires_at` column to track code expiration
    - Add index on verification_code for faster lookups

  2. Security
    - Verification code is required to prevent phishing
    - Code expires after a set time period for security
*/

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'email_subscriptions' AND column_name = 'verification_code'
  ) THEN
    ALTER TABLE email_subscriptions ADD COLUMN verification_code text;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'email_subscriptions' AND column_name = 'code_expires_at'
  ) THEN
    ALTER TABLE email_subscriptions ADD COLUMN code_expires_at timestamptz;
  END IF;
END $$;

CREATE INDEX IF NOT EXISTS idx_email_subscriptions_verification_code ON email_subscriptions(verification_code);
