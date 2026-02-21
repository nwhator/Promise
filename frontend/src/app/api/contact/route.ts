import { type NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { name, email, subject, message } = body as {
            name: string;
            email: string;
            subject: string;
            message: string;
        };

        if (!name || !email || !subject || !message) {
            return NextResponse.json(
                { error: "All fields are required." },
                { status: 400 }
            );
        }

        // Use service role key if available so RLS doesn't block inserts
        const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
        const serviceKey =
            process.env.SUPABASE_SERVICE_ROLE_KEY ??
            process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

        const client = createClient(supabaseUrl, serviceKey, {
            auth: { persistSession: false },
        });

        const { error } = await client.from("contact_messages").insert({
            name: name.trim(),
            email: email.trim().toLowerCase(),
            subject: subject.trim(),
            message: message.trim(),
            is_read: false,
        });

        if (error) {
            console.error("[/api/contact] Supabase error:", error.message);
            return NextResponse.json(
                { error: "Failed to save message. Please try again." },
                { status: 500 }
            );
        }

        return NextResponse.json({ success: true });
    } catch (err) {
        console.error("[/api/contact] Unexpected error:", err);
        return NextResponse.json(
            { error: "An unexpected error occurred." },
            { status: 500 }
        );
    }
}
