import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://mdkyqmjqbxxuxmufyius.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1ka3lxbWpxYnh4dXhtdWZ5aXVzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjkxMjM1ODUsImV4cCI6MTk4NDY5OTU4NX0.NCnvrmEkJ-YGTlkVKfMleCVZ-WX5aZDJ_Z11QYnQ1Zc'
export const supabase = createClient(supabaseUrl, supabaseKey)
