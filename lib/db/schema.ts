export type Member = {
  id: string
  student_id: string
  name: string
  email: string
  phone: string
  department: string
  semester: string
  status: 'pending' | 'approved' | 'rejected'
  created_at: string
  updated_at: string
}

export type Database = {
  public: {
    Tables: {
      members: {
        Row: Member
        Insert: Omit<Member, 'id' | 'created_at' | 'updated_at'>
        Update: Partial<Omit<Member, 'id' | 'created_at' | 'updated_at'>>
      }
    }
  }
} 