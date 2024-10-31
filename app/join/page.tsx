"use client";

import { zodResolver } from "@hookform/resolvers/zod";

import { useForm } from "react-hook-form";

import * as z from "zod";

import { Button } from "@/components/ui/button";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";

import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { toast } from "sonner";

import { Card, CardContent, CardHeader } from "@/components/ui/card";

import confetti from "canvas-confetti";

const departments = [
  "CSE",

  "EEE",

  "Civil Engineering",

  "English",

  "BBA",

  "Economics",

  "Law",

  "Islamic Studies",
] as const;

const positions = [
  "Technical Team",

  "Event Management",

  "Content Writing",

  "Graphics Design",

  "Public Relations",

  "Marketing",

  "Social Media",
] as const;

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),

  studentId: z.string().min(5, "Student ID must be at least 5 characters"),

  semester: z.string().min(1, "Please select your semester"),

  department: z.enum(departments, {
    required_error: "Please select your department",
  }),

  email: z.string().email("Invalid email address"),

  phone: z.string().min(11, "Phone number must be at least 11 digits"),

  position: z.enum(positions, {
    required_error: "Please select your preferred position",
  }),

  experience: z
    .string()
    .min(50, "Please provide more details about your experience"),

  whyJoin: z.string().min(100, "Please elaborate on why you want to join"),

  aboutYourself: z.string().min(100, "Please tell us more about yourself"),

  cvLink: z
    .string()
    .url(
      "Please provide a valid link to your CV (Google Drive, Dropbox, etc.)"
    ),
});

export default function JoinPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),

    defaultValues: {
      name: "",

      studentId: "",

      semester: "",

      email: "",

      phone: "",

      experience: "",

      whyJoin: "",

      aboutYourself: "",

      cvLink: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      // Here you would typically send the data to your backend

      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulated API call

      // Trigger confetti effect

      confetti({
        particleCount: 100,

        spread: 70,

        origin: { y: 0.6 },
      });

      toast.success("Application submitted successfully!");

      form.reset();
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="container py-12">
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="mb-4 text-4xl font-bold animate-fade-down">
          Join BGCTUB IT Club
        </h1>

        <p className="mb-8 text-lg text-muted-foreground animate-fade-up">
          Fill out the form below to become a member of our community
        </p>
      </div>

      <Card className="mx-auto max-w-2xl animate-fade-up glass-effect">
        <CardHeader>
          <h2 className="text-2xl font-semibold">Membership Application</h2>
        </CardHeader>

        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                {/* Form fields that should be side by side */}
              </div>

              <div className="space-y-6">
                {/* Full width form fields */}
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
