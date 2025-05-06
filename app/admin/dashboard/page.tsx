'use client';

import { Toaster } from '@/components/ui/toaster';
import { LayoutWrapper } from '@/components/layout-wrapper';
import { Sidebar, SidebarProvider, SidebarContent, SidebarMenu, SidebarMenuItem, SidebarMenuButton } from '@/components/ui/sidebar';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { Loader2 } from 'lucide-react';
import Link from 'next/link';
export default function AdminDashboardPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'loading') return;
    if (!session || (session.user as any)?.role !== 'admin') {
      router.replace('/login');
    }
  }, [session, status, router]);

  if (status === 'loading' || !session || (session.user as any)?.role !== 'admin') {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <Loader2 className="animate-spin w-8 h-8 text-primary" />
        <span className="ml-2 text-muted-foreground">Checking admin access...</span>
      </div>
    );
  }

  return (
    <LayoutWrapper>
      <div className="flex min-h-screen flex-col">
        <div className="flex flex-1 w-full">
          <SidebarProvider className="min-h-screen">
            <Sidebar>
              <SidebarContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton isActive>Overview</SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton>Users</SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton>Posts</SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton>Events</SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton>Settings</SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton>Logout</SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarContent>
            </Sidebar>
            <main className="flex-1 p-6 bg-background">
              <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>
              <p className="text-muted-foreground mb-8">Welcome to the admin dashboard. Use the sidebar to navigate.</p>
              {/* Dashboard Widgets */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="rounded-lg bg-card p-6 shadow flex flex-col items-start">
                  <span className="text-sm text-muted-foreground">Total Users</span>
                  <span className="text-2xl font-bold mt-2">1,234</span>
                </div>
                <div className="rounded-lg bg-card p-6 shadow flex flex-col items-start">
                  <span className="text-sm text-muted-foreground">Recent Signups</span>
                  <span className="text-2xl font-bold mt-2">12</span>
                </div>
                <div className="rounded-lg bg-card p-6 shadow flex flex-col items-start">
                  <span className="text-sm text-muted-foreground">System Status</span>
                  <span className="text-2xl font-bold mt-2 text-green-600">Online</span>
                </div>
                <div className="rounded-lg bg-card p-6 shadow flex flex-col items-start">
                  <span className="text-sm text-muted-foreground">Quick Links</span>
                  <ul className="mt-2 space-y-1 text-primary">
                    <li><Link href="/" className="hover:underline">Home</Link></li>
                    <li><Link href="/events" className="hover:underline">Events</Link></li>
                    <li><Link href="/members" className="hover:underline">Members</Link></li>
                  </ul>
                </div>
              </div>
              {/* Add more dashboard content here */}
            </main>
          </SidebarProvider>
        </div>
      </div>
      <Toaster />
    </LayoutWrapper>
  );
} 