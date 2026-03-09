import asyncstorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';
import { Platform } from 'react-native';
import 'react-native-url-polyfill/auto';


// Use the correct IP for your environment
const supabaseUrl = Platform.select({
  ios: 'http://127.0.0.1:54321',
  android: 'http://10.0.2.2:54321',
  default: 'http://YOUR_LAN_IP:54321', // For physical devices
});

const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    // Local development often uses expo-sqlite for session persistence
    storage: asyncstorage, 
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});