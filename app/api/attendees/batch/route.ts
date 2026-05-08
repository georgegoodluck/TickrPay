import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { ensureUniqueID } from "@/lib/utils";
import { Attendee, BatchRow, BatchResult } from "@/types/index";

export async function POST(req: NextRequest) {
  // Extract data from request
  const { rows }: { rows: BatchRow[] } = await req.json();
  // Create an object to track which registration succeeded and which failed
  const results: BatchResult = { success: [], failed: [] };

  // loop through every row in the uploaded batch data
  for (const row of rows) {
    // Extract name and handle different possible field names
    const name = String(row.name || row.Name || "").trim();
    // Extracts amount
    const amount = parseFloat(String(row.amount || row.Amount || ""));

    // Validate row
    if (!name || isNaN(amount)) {
      results.failed.push({
        name: name || "Unknown",
        reason: "Missing name or amount.",
      });
      continue;
    }
    // Check duplicate
    const { data: existing } = await supabase
      .from("attendees")
      .select("unique_id")
      .ilike("name", name)
      .maybeSingle();
    if (existing) {
      results.failed.push({ name, reason: "Already registered." });
      continue;
    }

    // Generate ID and insert
    const unique_id = await ensureUniqueID(name);
    const { data, error } = await supabase
      .from("attendees")
      .insert({ name, unique_id, amount })
      .select()
      .single();

    if (error) results.failed.push({ name, reason: error.message });
    else results.success.push(data as Attendee);
  }
  return NextResponse.json(results);
}
