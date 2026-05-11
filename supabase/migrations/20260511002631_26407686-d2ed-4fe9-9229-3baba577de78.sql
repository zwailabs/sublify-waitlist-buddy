
CREATE TABLE public.waitlist (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name text NOT NULL CHECK (char_length(name) BETWEEN 1 AND 22),
  email text NOT NULL UNIQUE,
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE public.waitlist ENABLE ROW LEVEL SECURITY;

-- Anyone (anon + authenticated) can join the waitlist
CREATE POLICY "Anyone can join the waitlist"
  ON public.waitlist
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (
    char_length(trim(name)) BETWEEN 1 AND 22
    AND email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'
  );

-- No SELECT policy => no public reads (emails stay private)

-- Public count function (security definer so it can read past RLS)
CREATE OR REPLACE FUNCTION public.get_waitlist_count()
RETURNS integer
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT COUNT(*)::int FROM public.waitlist;
$$;

GRANT EXECUTE ON FUNCTION public.get_waitlist_count() TO anon, authenticated;
