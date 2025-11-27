# Supabase Authentication Setup Guide

This project now includes full Supabase authentication with email/password and Google OAuth support.

## Quick Start

### 1. Create a Supabase Project

1. Go to [supabase.com](https://supabase.com) and create a free account
2. Click "New Project"
3. Fill in your project details:
   - **Name**: Choose any name (e.g., "Next-Bridge")
   - **Database Password**: Create a strong password (save this!)
   - **Region**: Choose the closest region to your users
4. Click "Create new project" and wait for setup to complete (~2 minutes)

### 2. Get Your API Credentials

1. In your Supabase project dashboard, click on the **Settings** icon (⚙️) in the sidebar
2. Go to **API** section
3. You'll see two important values:
   - **Project URL** (looks like: `https://xxxxx.supabase.co`)
   - **anon/public key** (a long string starting with `eyJ...`)

### 3. Configure Environment Variables

1. Create a file named `.env.local` in the root of your project (same level as `package.json`)
2. Copy the contents from `.env.local.example` and replace with your actual values:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
```

**Important**: Never commit `.env.local` to git - it's already in `.gitignore`

### 4. Enable Email Authentication

1. In your Supabase dashboard, go to **Authentication** → **Providers**
2. **Email** should be enabled by default
3. Configure email settings:
   - Go to **Authentication** → **Email Templates** to customize confirmation emails
   - For development, you can disable email confirmation in **Authentication** → **Settings** → **Email Auth** → Turn off "Confirm email"

### 5. Enable Google OAuth (Optional)

1. Go to **Authentication** → **Providers** in Supabase
2. Find **Google** and click to configure
3. You'll need to create OAuth credentials in Google Cloud Console:
   - Go to [Google Cloud Console](https://console.cloud.google.com)
   - Create a new project or select existing
   - Enable Google+ API
   - Go to **Credentials** → **Create Credentials** → **OAuth 2.0 Client ID**
   - Set **Authorized redirect URIs** to: `https://your-project-id.supabase.co/auth/v1/callback`
   - Copy the **Client ID** and **Client Secret**
4. Paste these values in Supabase Google provider settings
5. Click **Save**

### 6. Test Your Setup

1. Start your development server:
   ```bash
   pnpm run dev
   ```

2. Navigate to `http://localhost:3000/signup`

3. Create a test account with your email

4. Check your email for confirmation (if enabled)

5. Try signing in at `http://localhost:3000/signin`

6. Access the protected dashboard at `http://localhost:3000/dashboard`

## Features Implemented

✅ **Email/Password Authentication**
- Sign up with email and password
- Sign in with existing credentials
- Password reset via email
- Email confirmation flow

✅ **Google OAuth**
- One-click sign in with Google
- Automatic account creation
- Seamless authentication flow

✅ **Protected Routes**
- Dashboard page requires authentication
- Automatic redirect to sign-in for unauthenticated users
- Session persistence across page refreshes

✅ **User Management**
- User metadata storage (name, company)
- Session management
- Sign out functionality

## Available Pages

- `/signin` - Sign in page
- `/signup` - Sign up page
- `/reset-password` - Password reset page
- `/dashboard` - Protected dashboard (requires authentication)

## Troubleshooting

### "supabaseUrl is required" Error

This means your `.env.local` file is not configured. Follow steps 2-3 above.

### Email Confirmation Not Working

1. Check your Supabase email settings in **Authentication** → **Email Templates**
2. For development, you can disable email confirmation temporarily
3. Check your spam folder

### Google OAuth Not Working

1. Verify your Google OAuth credentials in Supabase
2. Make sure the redirect URI is correctly set in Google Cloud Console
3. Check that the Google provider is enabled in Supabase

### Session Not Persisting

1. Clear your browser cookies and try again
2. Check browser console for errors
3. Verify your Supabase URL and anon key are correct

## Security Notes

- Never commit `.env.local` to version control
- The `NEXT_PUBLIC_SUPABASE_ANON_KEY` is safe to expose in client-side code
- Supabase handles all password hashing and security
- Row Level Security (RLS) policies should be configured in Supabase for database access

## Next Steps

1. Configure Row Level Security (RLS) policies in Supabase for your database tables
2. Customize email templates in Supabase dashboard
3. Add user profile management features
4. Implement role-based access control if needed
5. Set up production environment variables for deployment

## Resources

- [Supabase Documentation](https://supabase.com/docs)
- [Supabase Auth Documentation](https://supabase.com/docs/guides/auth)
- [Next.js Documentation](https://nextjs.org/docs)
