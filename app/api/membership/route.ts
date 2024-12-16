import { NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { z } from 'zod'
import { Prisma } from '@prisma/client'

const membershipSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  studentId: z.string().min(5, "Student ID must be at least 5 characters"),
  semester: z.string(),
  department: z.string(),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(11, "Phone number must be at least 11 digits"),
  experience: z.string().min(50, "Please provide more details about your experience"),
  whyJoin: z.string().min(100, "Please elaborate on why you want to join"),
  aboutYourself: z.string().min(100, "Please tell us more about yourself"),
  cvLink: z.string().url().optional(),
})

export async function POST(req: Request) {
  try {
    const body = await req.json()
    console.log('Received data:', body)

    try {
      const validatedData = membershipSchema.parse(body)
      console.log('Validated data:', validatedData)

      // Check if student ID or email already exists
      const existingMember = await prisma.member.findFirst({
        where: {
          OR: [
            { studentId: validatedData.studentId },
            { email: validatedData.email }
          ]
        }
      })

      if (existingMember) {
        console.log('Existing member found:', existingMember)
        return NextResponse.json(
          { error: "A membership application with this student ID or email already exists" },
          { status: 400 }
        )
      }

      // Create new member with PostgreSQL-specific handling
      const member = await prisma.member.create({
        data: {
          ...validatedData,
          cvLink: validatedData.cvLink || null,
        }
      }).catch((e) => {
        if (e instanceof Prisma.PrismaClientKnownRequestError) {
          // Handle unique constraint violations
          if (e.code === 'P2002') {
            throw new Error('This student ID or email is already registered')
          }
        }
        throw e
      })

      console.log('Created member:', member)

      return NextResponse.json({
        success: true,
        message: "Application submitted successfully",
        member
      })

    } catch (validationError) {
      console.error('Validation error:', validationError)
      if (validationError instanceof z.ZodError) {
        return NextResponse.json(
          { error: validationError.errors.map(e => e.message).join(', ') },
          { status: 400 }
        )
      }
      throw validationError
    }

  } catch (error) {
    console.error('Server error:', error)
    return NextResponse.json(
      { 
        error: "Server error occurred", 
        details: error instanceof Error ? error.message : "Unknown error"
      },
      { status: 500 }
    )
  }
} 