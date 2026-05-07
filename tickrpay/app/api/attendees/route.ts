import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { ensureUniqueID } from "@/lib/utils";


// GET - Fetch all attendees, newest first

export async function GET() {
    // pulling two properties from the attendees table - data and error
    const { data, error } = await supabase
    // get it from attendees table
    .from ("attendees"),
    // pick the data we want to return - all columns
    select ("*"),
    // sorts the results by the paid_at column in descending order (newest first)
    .order('paid_at', {ascending: false});

    // If there's an error, return a JSON response with the error message and a 500 status code. Otherwise return the data as a JSON response.
    if (error) return NextResponse.json({error: error.Message}, {status: 500});
    // If there's no error, we return the data as a JSOn response. This will be an array of attendee objects, each containing all the columns from the attendees table. The data is sorted by the paid_at column in descending order, so the most recently paid attendees will appear first in the array.
    return NextResponse.json(data);
}