import { createMember, getMemberByEmail, getMemberByStudentId } from '@/lib/db/queries'
import { NextResponse } from 'next/server'
import { z } from 'zod'

const membershipSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  studentId: z.string().min(5, "Student ID must be at least 5 characters"),
  semester: z.string(),
  department: z.string(),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(11, "Phone number must be at least 11 digits"),
})

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const validatedData = membershipSchema.parse(body)

    // Check if member already exists with same email or student ID
    const [existingEmail, existingStudentId] = await Promise.all([
      getMemberByEmail(validatedData.email),
      getMemberByStudentId(validatedData.studentId)
    ])

    if (existingEmail) {
      return NextResponse.json(
        { error: 'A member with this email already exists' },
        { status: 400 }
      )
    }

    if (existingStudentId) {
      return NextResponse.json(
        { error: 'A member with this student ID already exists' },
        { status: 400 }
      )
    }

    // Create new member
    const member = await createMember({
      student_id: validatedData.studentId,
      name: validatedData.name,
      email: validatedData.email,
      phone: validatedData.phone,
      department: validatedData.department,
      semester: validatedData.semester,
      status: 'pending'
    })

    return NextResponse.json(member)
  } catch (error) {
    console.error('Membership submission error:', error)
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Invalid form data', details: error.errors },
        { status: 400 }
      )
    }
    return NextResponse.json(
      { error: 'Failed to submit application' },
      { status: 500 }
    )
  }
} 