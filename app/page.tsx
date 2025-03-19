import { Headphones } from "lucide-react"
import Link from "next/link"

import { EmailSignupForm } from "@/components/email-signup-form"

export default function ComingSoonPage() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-blue-50 to-blue-100">
      <header className="container mx-auto px-4 py-6">
        <div className="flex items-center gap-2">
          <Headphones className="h-6 w-6 text-blue-600" />
          <span className="text-xl font-bold text-blue-600">EnglishByEar</span>
        </div>
      </header>

      <main className="container mx-auto flex flex-1 flex-col items-center justify-center px-4 text-center">
        <div className="max-w-3xl space-y-6">
          <div className="space-y-2">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl text-black">
              Learn English <span className="text-blue-600">by Ear</span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-gray-600 sm:text-xl">
              A new way to master English through immersive audio learning. Improve your listening skills and
              pronunciation naturally.
            </p>
          </div>

          <div className="mx-auto flex max-w-sm flex-col items-center space-y-4 rounded-xl bg-white p-6 shadow-lg">
            <div className="rounded-full bg-blue-100 p-3">
              <Headphones className="h-8 w-8 text-blue-600" />
            </div>
            <h2 className="text-2xl font-bold">Coming Soon</h2>
            <p className="text-gray-600">
              We're working hard to bring you the best audio-based English learning platform. Sign up to be notified
              when we launch!
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 pt-8">
            <div className="flex flex-col items-center rounded-lg bg-white p-4 shadow-md">
              <h3 className="font-bold text-black">Native Speakers</h3>
              <p className="text-sm text-gray-600">Learn from authentic accents</p>
            </div>
            <div className="flex flex-col items-center rounded-lg bg-white p-4 shadow-md">
              <h3 className="font-bold text-black">Daily Practice</h3>
              <p className="text-sm text-gray-600">Short, effective lessons</p>
            </div>
            <div className="flex flex-col items-center rounded-lg bg-white p-4 shadow-md">
              <h3 className="font-bold text-black">Personalized</h3>
              <p className="text-sm text-gray-600">Adapts to your level</p>
            </div>
          </div>
        </div>
      </main>

      <footer className="container mx-auto px-4 py-6">
        <div className="flex flex-col items-center justify-between gap-4 border-t border-gray-200 pt-6 text-sm text-gray-600 md:flex-row">
          <p>© {new Date().getFullYear()} EnglishByEar. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-blue-600">
              Privacy
            </Link>
            <Link href="#" className="hover:text-blue-600">
              Terms
            </Link>
            <Link href="#" className="hover:text-blue-600">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

