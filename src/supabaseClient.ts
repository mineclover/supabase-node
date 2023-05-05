import { createClient } from '@supabase/supabase-js'
import { Database } from './types/supabase'
import * as dotenv from 'dotenv'

dotenv.config()

const supabaseUrl = process.env.SUPABASE_URL
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing SUPABASE_URL or SUPABASE_ANON_KEY')
}

const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey)

export { supabase }
