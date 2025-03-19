"use client"

import type React from "react"

import { useState } from "react"
import { Send } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/hooks/use-toast"

export function EmailSignupForm() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email) return

    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      setEmail("")
      toast({
        title: "Success!",
        description: "You've been added to our waiting list.",
      })
    }, 1000)

    // In a real implementation, you would send the email to your API
    // try {
    //   const response = await fetch('/api/subscribe', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ email }),
    //   })
    //   const data = await response.json()
    //   // Handle response
    // } catch (error) {
    //   // Handle error
    // } finally {
    //   setIsLoading(false)
    // }
  }

  return (
    <form onSubmit={handleSubmit} className="flex w-full flex-col space-y-2">
      <Input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="w-full"
      />
      <Button type="submit" disabled={isLoading} className="w-full">
        {isLoading ? (
          "Signing up..."
        ) : (
          <>
            Notify me <Send className="ml-2 h-4 w-4" />
          </>
        )}
      </Button>
    </form>
  )
}

