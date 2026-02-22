"use client";

import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Link as LinkIcon,
  BarChart3,
  Zap,
  Share2,
  QrCode,
  Lock,
  ArrowRight,
} from "lucide-react";

export default function Home() {
  const { isSignedIn } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (isSignedIn) router.push("/dashboard");
  }, [isSignedIn, router]);

  const features = [
    {
      icon: Zap,
      title: "Instant Link Shortening",
      description:
        "Convert long URLs into short, memorable links in seconds. Share them anywhere with confidence.",
    },
    {
      icon: BarChart3,
      title: "Real-time Analytics",
      description:
        "Track every click, view detailed analytics, and understand your audience with comprehensive reports.",
    },
    {
      icon: QrCode,
      title: "QR Code Generation",
      description:
        "Generate custom QR codes for your shortened links. Perfect for print and digital campaigns.",
    },
    {
      icon: Share2,
      title: "Easy Sharing",
      description:
        "One-click copy to clipboard. Share your links instantly across all platforms and channels.",
    },
    {
      icon: Lock,
      title: "Secure & Reliable",
      description:
        "Your links are protected with industry-standard security. Never lose your data with our reliable infrastructure.",
    },
    {
      icon: LinkIcon,
      title: "Custom Short Codes",
      description:
        "Create branded URLs with custom short codes that reflect your brand identity.",
    },
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-black via-gray-900 to-black text-white">
      {/* Hero Section */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
                Shorten Your Links,{" "}
                <span className="bg-linear-to-r from-[#6c47ff] to-purple-400 bg-clip-text text-transparent">
                  Amplify Your Reach
                </span>
              </h1>
              <p className="text-xl sm:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                Create short, shareable links. Track performance in real-time.
                Make every click count with our powerful link management platform.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Button
                onClick={() => router.push("/auth/sign-up")}
                size="lg"
                className="bg-[#6c47ff] hover:bg-[#5a3fd6] focus-visible:ring-offset-2 focus-visible:ring-[#6c47ff]/50"
              >
                Get Started <ArrowRight className="w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-gray-600 text-gray-200 hover:bg-gray-800 hover:border-gray-500 focus-visible:ring-offset-2"
                onClick={() => document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })}
              >
                Learn More
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 py-12 border-t border-gray-800 pt-12">
              <div>
                <div className="text-3xl font-bold text-[#6c47ff]">10M+</div>
                <p className="text-gray-400">Links Created</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#6c47ff]">100M+</div>
                <p className="text-gray-400">Clicks Tracked</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#6c47ff]">99.9%</div>
                <p className="text-gray-400">Uptime</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        className="px-4 py-20 sm:px-6 lg:px-8 bg-linear-to-b from-transparent to-gray-950"
      >
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl sm:text-5xl font-bold">Powerful Features</h2>
            <p className="text-xl text-gray-400">
              Everything you need to manage and optimize your links
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="group bg-gray-900/50 border border-gray-800 rounded-lg p-8 hover:border-[#6c47ff]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#6c47ff]/10"
                >
                  <div className="mb-4 inline-block p-3 bg-linear-to-br from-[#6c47ff]/20 to-purple-600/20 rounded-lg group-hover:from-[#6c47ff]/30 group-hover:to-purple-600/30 transition-all">
                    <Icon className="w-6 h-6 text-[#6c47ff]" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="bg-linear-to-r from-[#6c47ff] to-purple-600 rounded-2xl p-12 text-center space-y-6">
            <h2 className="text-4xl font-bold">Ready to Get Started?</h2>
            <p className="text-lg text-white/90">
              Join thousands of users who are already shortening links and tracking
              their performance.
            </p>
            <Button
              onClick={() => router.push("/auth/sign-up")}
              className="bg-white text-[#6c47ff] hover:bg-gray-100 px-8 py-3 text-lg rounded-lg font-semibold"
            >
              Create Your First Link Now
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl text-center text-gray-400">
          <p>&copy; 2026 LinkShortener. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
