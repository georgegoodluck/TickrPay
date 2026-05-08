// The shape of a single attendee record from the database
export interface Attendee {
  id: string;
  name: string;
  unique_id: string;
  amount: number;
  paid_at: string;
}

// A single row from a CSV upload
export interface BatchRow {
  name: string;
  amount: string | number;
  Name?: string;
  Amount?: string | number;
}

// The result after processing a batch upload
export interface BatchResult {
  success: Attendee[];
  failed: { name: string; reason: string }[];
}

// What the registration form submits
export interface RegisterPayload {
  name: string;
  amount: number;
}