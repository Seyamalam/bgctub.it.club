import { InstallationCeremony } from "@/components/installation-ceremony"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Installation Ceremony | BGCTUB IT Club",
  description: "Join us for the Installation Ceremony of BGCTUB IT Club on December 19th, 2024",
}

export default function InstallationPage() {
  return (
    <div className="container py-12">
      <InstallationCeremony />
    </div>
  )
} 