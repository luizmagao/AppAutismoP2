
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ujjhczdkmxmykohloofw.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVqamhjemRrbXhteWtvaGxvb2Z3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzIwMTcyMjksImV4cCI6MjA0NzU5MzIyOX0.HXwbEz8tWkxFsMYxJFr7aNagPC9BtNNM0uNHf1IIiE8'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;
