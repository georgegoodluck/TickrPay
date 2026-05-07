import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { ensureUniqueID } from "@/lib/utils";

// GET - Fetch all attendees, newest first

export async function GET() {
  // pulling two properties from the attendees table - data and error
  const { data, error } = await supabase
    // get it from attendees table
    .from("attendees")
    // pick the data we want to return - all columns
    .select("*")
    // sorts the results by the paid_at column in descending order (newest first)
    .order("paid_at", { ascending: false });

  // If there's an error, return a JSON response with the error message and a 500 status code. Otherwise return the data as a JSON response.
  if (error)
    return NextResponse.json({ error: error.message }, { status: 500 });
  // If there's no error, we return the data as a JSON response. This will be an array of attendee objects, each containing all the columns from the attendees table. The data is sorted by the paid_at column in descending order, so the most recently paid attendees will appear first in the array.
  return NextResponse.json(data);
}

// POST - register a single attendee
export async function POST(req: NextRequest) {
  // Extract the name and amount from the request which is expected to be in JSON format. The req.json() method is used to parse the JSON body of the request and extract the name and amount properties.

  // Validation process
  const { name, amount } = await req.json();
  // if there's no name(after cleaning up spaces) or amount, return a JSON respose with error message and a 404 status code.
  if (!name?.trim() || !amount) {
    return NextResponse.json(
      { error: "Name and amount are required" },
      { status: 400 },
    );
  }

  // Block duplicates
  const { data: existing } = await supabase
    .from("attendees")
    .select("id")
    // look for name duplicates but ignore capital letters
    .ilike("name", name.trim())
    // fetch sinle row instead of arrays
    .single();

  if (existing) {
    return NextResponse.json(
      { error: `${name.trim()} is already registered`, existing },
      { status: 409 },
    );
  }

  // Generate a guaranteed unique ID
  const unique_id = ensureUniqueID(name);

  const { data, error } = await supabase
    .from("attendees")
    .insert([{ name: name.trim(), unique_id, amount }])
    .select()
    .single();

  if (error)
    return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data, { status: 201 });
}
