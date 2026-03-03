import { supabase } from './supabase';

/**
 * Generates a unique attendee ID.
 * Format: first 3 letters of name (uppercased) + dash + 4 random digits
 * Example: "Amaka Okafor" → "AMA-7432"
 * Example: "George" → "GEO-1829"
 */
export const generateID = (name: string): string => {
  const prefix = name.trim().slice(0, 3).toUpperCase().padEnd(3, 'X');
  const suffix = Math.floor(1000 + Math.random() * 9000);
  return `${prefix}-${suffix}`;
};

/**
 * Keeps regenerating an ID until it's unique in the database.
 * Collision chance is very low but this guarantees safety.
 */
export const ensureUniqueID = async (name: string): Promise<string> => {
  let unique_id = generateID(name);

  let { data: clash } = await supabase
    .from('attendees')
    .select('id')
    .eq('unique_id', unique_id)
    .single();

  while (clash) {
    unique_id = generateID(name);
    ({ data: clash } = await supabase
      .from('attendees')
      .select('id')
      .eq('unique_id', unique_id)
      .single());
  }

  return unique_id;
};

/**
 * Formats a number as Nigerian Naira
 * Example: 5000 → "₦5,000"
 */
export const formatNaira = (amount: number): string => {
  return `₦${Number(amount).toLocaleString()}`;
};

/**
 * Formats a date string into a readable format
 * Example: "2026-03-03T12:00:00Z" → "3 Mar 2026"
 */
export const formatDate = (dateStr: string): string => {
  return new Date(dateStr).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
};