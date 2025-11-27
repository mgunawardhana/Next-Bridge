import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

// Validate environment variables
if (!supabaseUrl || !supabaseAnonKey) {
    console.error(
        '⚠️  Supabase environment variables are not configured!\n' +
        'Please create a .env.local file with:\n' +
        '  NEXT_PUBLIC_SUPABASE_URL=your-project-url\n' +
        '  NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key\n' +
        'See .env.local.example for reference.'
    );
}

// Create client with fallback values to prevent crashes
// The app will still function but auth features won't work until configured
export const supabase = createClient(
    supabaseUrl || 'https://placeholder.supabase.co',
    supabaseAnonKey || 'placeholder-key'
);
