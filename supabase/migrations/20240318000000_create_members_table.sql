-- Enable the required extensions
CREATE EXTENSION IF NOT EXISTS "moddatetime";

-- Create enum for member status
CREATE TYPE member_status AS ENUM ('pending', 'approved', 'rejected');

-- Create members table
CREATE TABLE members (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  student_id TEXT NOT NULL UNIQUE,
  name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  phone TEXT NOT NULL,
  department TEXT NOT NULL,
  semester TEXT NOT NULL,
  status member_status NOT NULL DEFAULT 'pending',
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Create index for faster lookups
CREATE INDEX members_student_id_idx ON members(student_id);
CREATE INDEX members_email_idx ON members(email);
CREATE INDEX members_status_idx ON members(status);

-- Add row level security policies
ALTER TABLE members ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Enable insert for all users" ON members;
DROP POLICY IF EXISTS "Enable read access for authenticated users" ON members;
DROP POLICY IF EXISTS "Enable read own application" ON members;

-- Create policy for inserting new members (anyone can apply)
CREATE POLICY "Enable insert for all users" ON members
  FOR INSERT WITH CHECK (true);

-- Create policy for users to read their own application
CREATE POLICY "Enable read own application" ON members
  FOR SELECT
  USING (auth.uid()::text = (
    SELECT auth.uid()::text 
    FROM auth.users 
    WHERE email = members.email 
    LIMIT 1
  ));

-- Create policy for admins to read all applications
CREATE POLICY "Enable admin read all" ON members
  FOR ALL
  USING (
    auth.jwt() ->> 'role' = 'admin'
  );

-- Create trigger for updating timestamps
CREATE TRIGGER set_timestamp
  BEFORE UPDATE ON members
  FOR EACH ROW
  EXECUTE FUNCTION moddatetime(); 