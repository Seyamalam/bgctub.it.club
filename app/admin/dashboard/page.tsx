import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { Toaster } from '@/components/ui/toaster';
import { LayoutWrapper } from '@/components/layout-wrapper';
import { Sidebar, SidebarProvider, SidebarContent, SidebarMenu, SidebarMenuItem, SidebarMenuButton } from '@/components/ui/sidebar';

export default function AdminDashboardPage() {
  return (
    <LayoutWrapper>
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <div className="flex flex-1 w-full">
          <SidebarProvider className="min-h-screen">
            <Sidebar>
              <SidebarContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton isActive>Dashboard</SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton>Users</SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton>Settings</SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarContent>
            </Sidebar>
            <main className="flex-1 p-6 bg-background">
              <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>
              <p className="text-muted-foreground mb-8">Welcome to the admin dashboard. Use the sidebar to navigate.</p>
              {/* Add dashboard widgets or content here */}
            </main>
          </SidebarProvider>
        </div>
        <Footer />
      </div>
      <Toaster />
    </LayoutWrapper>
  );
} 