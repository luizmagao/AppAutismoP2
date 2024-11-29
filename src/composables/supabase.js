import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
const supabase = createClient(
  'https://ujjhczdkmxmykohloofw.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVqamhjemRrbXhteWtvaGxvb2Z3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzIwMTcyMjksImV4cCI6MjA0NzU5MzIyOX0.HXwbEz8tWkxFsMYxJFr7aNagPC9BtNNM0uNHf1IIiE8'
)

export default supabase;
