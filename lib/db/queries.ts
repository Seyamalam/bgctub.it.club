import { supabase } from '@/lib/supabase'
import type { Member } from './schema'

export const createMember = async (data: Omit<Member, 'id' | 'created_at' | 'updated_at'>) => {
  const { data: member, error } = await supabase
    .from('members')
    .insert([{
      student_id: data.student_id,
      name: data.name,
      email: data.email,
      phone: data.phone,
      department: data.department,
      semester: data.semester,
      experience: data.experience,
      why_join: data.why_join,
      about_yourself: data.about_yourself,
      cv_link: data.cv_link,
      status: data.status || 'pending'
    }])
    .select()
    .single()

  if (error) throw error
  return member
}

export const getMemberByEmail = async (email: string) => {
  const { data: member, error } = await supabase
    .from('members')
    .select()
    .eq('email', email)
    .single()

  if (error && error.code !== 'PGRST116') throw error
  return member
}

export const getMemberByStudentId = async (studentId: string) => {
  const { data: member, error } = await supabase
    .from('members')
    .select()
    .eq('student_id', studentId)
    .single()

  if (error && error.code !== 'PGRST116') throw error
  return member
}

export const updateMemberStatus = async (id: string, status: Member['status']) => {
  const { data: member, error } = await supabase
    .from('members')
    .update({ status })
    .eq('id', id)
    .select()
    .single()

  if (error) throw error
  return member
}

export const getAllMembers = async () => {
  const { data: members, error } = await supabase
    .from('members')
    .select()
    .order('created_at', { ascending: false })

  if (error) throw error
  return members
}

export const getMembersByDepartment = async (department: string) => {
  const { data: members, error } = await supabase
    .from('members')
    .select()
    .eq('department', department)
    .order('created_at', { ascending: false })

  if (error) throw error
  return members
}

export const getMembersByStatus = async (status: Member['status']) => {
  const { data: members, error } = await supabase
    .from('members')
    .select()
    .eq('status', status)
    .order('created_at', { ascending: false })

  if (error) throw error
  return members
} 