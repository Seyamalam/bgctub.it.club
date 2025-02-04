import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { NextResponse } from "next/server";
import { z } from "zod";

// Schema for request validation
const memberSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  studentId: z.string().length(9),
  phone: z.string().min(11),
  semester: z.string(),
  department: z.string(),
});

export async function POST(request: Request) {
  try {
    // Parse request body
    let body;
    try {
      body = await request.json();
      console.log('Received request body:', body);
    } catch (e) {
      console.error('JSON parse error:', e);
      return NextResponse.json(
        { error: "Invalid JSON in request body" },
        { status: 400 }
      );
    }

    if (!body) {
      console.error('Empty request body');
      return NextResponse.json(
        { error: "Request body is empty" },
        { status: 400 }
      );
    }

    // Validate request data
    const validatedData = memberSchema.safeParse(body);
    
    if (!validatedData.success) {
      console.error('Validation errors:', validatedData.error.errors);
      return NextResponse.json(
        { 
          error: "Validation failed",
          details: validatedData.error.errors
        },
        { status: 400 }
      );
    }

    const supabase = createRouteHandlerClient({ cookies });

    // Check if member with this email or student ID already exists
    const { data: existingMember, error: searchError } = await supabase
      .from('members')
      .select()
      .or(`email.eq."${validatedData.data.email}",student_id.eq."${validatedData.data.studentId}"`)
      .single();

    if (searchError && searchError.code !== 'PGRST116') {
      console.error('Search error:', searchError);
      return NextResponse.json(
        { error: "Failed to check for existing member" },
        { status: 500 }
      );
    }

    if (existingMember) {
      console.log('Duplicate member found:', existingMember);
      return NextResponse.json(
        { error: "A member with this email or student ID already exists" },
        { status: 409 }
      );
    }

    // Create new member
    const { data: member, error: insertError } = await supabase
      .from('members')
      .insert([{
        name: validatedData.data.name,
        email: validatedData.data.email,
        student_id: validatedData.data.studentId,
        phone: validatedData.data.phone,
        semester: validatedData.data.semester,
        department: validatedData.data.department,
        status: "pending",
      }])
      .select()
      .single();

    if (insertError) {
      console.error('Insert error:', insertError);
      return NextResponse.json(
        { error: insertError.message },
        { status: 500 }
      );
    }

    console.log('Member created successfully:', member);

    return NextResponse.json({ 
      success: true,
      message: "Member registered successfully",
      data: member 
    });

  } catch (error) {
    console.error("Member registration error:", error);
    
    return NextResponse.json(
      { 
        success: false,
        error: error instanceof Error ? error.message : "Failed to process registration"
      },
      { status: 500 }
    );
  }
} 