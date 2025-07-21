import { NextResponse } from "next/server";
import { supabase } from "@/libs/supabaseClient";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const { error } = await supabase.from("reservations").insert([data]);
    if (error) {
      console.error(error);
      return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, error: "Unexpected error" }, { status: 500 });
  }
}
