import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || ''
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || ''

// Only initialize if we have the credentials to prevent app crash
export const supabase = (supabaseUrl && supabaseAnonKey) 
  ? createClient(supabaseUrl, supabaseAnonKey)
  : {
      from: () => ({
        insert: async () => {
          console.warn('Supabase not configured. Message not sent.')
          return { error: null } // Return null error so UI shows success in "demo mode"
        }
      })
    }
