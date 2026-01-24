"use client";

import { LayoutWrapper } from '@/components/layout-wrapper';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Facebook, Linkedin, Rocket } from "lucide-react";
import Link from "next/link";

export default function JoinPage() {
  return (
    <LayoutWrapper>
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto w-full flex items-center justify-center">
          <div className="w-full max-w-4xl py-12 md:py-24">
            <div className="relative text-center space-y-8">
              {/* Animated Background Elements */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] bg-primary/20 rounded-full blur-[100px] animate-pulse" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-purple-500/10 rounded-full blur-[120px] animate-pulse delay-1000" />

              <div className="relative z-10 space-y-6 animate-fade-in">
                <div className="inline-block p-4 rounded-full bg-primary/10 mb-4 animate-bounce">
                  <Rocket className="w-12 h-12 text-primary" />
                </div>
                
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
                  <span className="bg-gradient-to-r from-primary via-purple-500 to-primary bg-300% bg-clip-text text-transparent animate-gradient">
                    Something Big is Coming
                  </span>
                </h1>
                
                <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  We are preparing to recruit the next generation of leaders.
                  <br />
                  <span className="text-primary font-semibold">Executive & General Member</span> recruitment is starting soon!
                </p>

                <Card className="max-w-md mx-auto p-6 bg-background/50 backdrop-blur-sm border-primary/20 shadow-2xl hover:shadow-primary/10 transition-all duration-500">
                  <div className="space-y-4">
                    <p className="text-lg font-medium">
                      Applications will be collected via <span className="text-blue-500 font-bold">Google Forms</span>
                    </p>
                    <p className="text-muted-foreground">
                      Stay tuned to our social media channels for the official announcement and application link.
                    </p>
                  </div>
                </Card>

                <div className="flex flex-col items-center gap-4 pt-8">
                  <span className="text-sm font-medium uppercase tracking-widest text-muted-foreground">Follow us for updates</span>
                  <div className="flex gap-4">
                    <Link 
                      href="https://facebook.com/bgctub.it" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-background border border-input hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300 hover:scale-110 shadow-sm"
                    >
                      <Facebook className="w-6 h-6" />
                      <span className="sr-only">Facebook</span>
                    </Link>
                    <Link 
                      href="https://linkedin.com/company/bgctub-it-club" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-background border border-input hover:bg-blue-700 hover:text-white hover:border-blue-700 transition-all duration-300 hover:scale-110 shadow-sm"
                    >
                      <Linkedin className="w-6 h-6" />
                      <span className="sr-only">LinkedIn</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </LayoutWrapper>
  );
}
