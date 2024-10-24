DO $$
BEGIN
   IF NOT EXISTS (
      SELECT FROM pg_database
      WHERE datname = 'subscribers'
   ) THEN
      PERFORM dblink_exec('dbname=postgres', 'CREATE DATABASE subscribers');
   END IF;
END
$$;