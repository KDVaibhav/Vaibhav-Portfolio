"use client"

import React from "react"
import { Timeline } from "@/components/ui/ModernTimeline"
import { timelineData } from "@/data"
import { FloatingNav } from "@/components/ui/FloatingNav"
import { navItems } from "@/data"
import Link from "next/link"
import { FaArrowLeft, FaDownload } from "react-icons/fa"
import MagicButton from "@/components/ui/MagicButton"

export default function TimelinePage() {
  return (
    <main className="relative bg-black-100 min-h-screen">
      <FloatingNav navItems={navItems} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <header className="text-center py-16 px-6">
          <div className="flex justify-center mb-6">
            <Link href="/">
              <MagicButton
                title="Back to Home"
                icon={<FaArrowLeft />}
                position="left"
              />
            </Link>
          </div>
          
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            My <span className="text-purple">Development Journey</span>
          </h1>
          <p className="text-xl text-white-200 max-w-3xl mx-auto leading-relaxed">
            From learning the basics to mastering modern web technologies. 
            Follow my journey of growth, challenges, and achievements in the world of web development.
          </p>
        </header>

        {/* Timeline Section */}
        <section className="pb-20">
          <Timeline
            items={timelineData.map(item => ({
              ...item,
              status: item.status as "completed" | "current" | "upcoming" | undefined,
            }))}
          />
        </section>

        {/* Footer CTA */}
        <footer className="text-center py-12 px-6 border-t border-white/10">
          <p className="text-white-200 mb-6 text-lg">
            Interested in working together? Let&apos;s build something amazing!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/#contact">
              <MagicButton
                title="Get In Touch"
                icon={<FaDownload />}
                position="right"
              />
            </Link>
            <Link href="/#projects">
              <MagicButton
                title="View My Work"
                icon={<FaDownload />}
                position="right"
              />
            </Link>
          </div>
        </footer>
      </div>
    </main>
  )
}