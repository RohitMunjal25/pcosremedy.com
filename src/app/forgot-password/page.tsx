"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Mail, ArrowLeft, CheckCircle, Leaf } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { NavbarShell } from "@/components/shared/navbar-shell"
import { Footer } from "@/components/shared/footer"

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setTimeout(() => {
      setIsSubmitted(true)
      setIsLoading(false)
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <NavbarShell />
      <div className="border-b border-[#76A13B]/20 bg-gradient-to-r from-white via-[#e8f2e0]/40 to-[#e0f4fa]/40">
        <div className="mx-auto max-w-lg px-4 py-10 text-center sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#5a7d2d]">Account recovery</p>
          <h1 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">Let’s reset your access</h1>
          <p className="mt-2 text-sm text-muted-foreground sm:text-base">
            Same sign-in system as the SBM profile home — you’ll return here once your email is verified.
          </p>
        </div>
      </div>
      <div className="mx-auto max-w-md px-4 py-10 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Link
            href="/login"
            className="mb-8 inline-flex items-center gap-2 text-sm text-[#0a6b82] hover:underline"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to sign in
          </Link>

          {!isSubmitted ? (
            <>
              <h2 className="text-2xl font-bold text-foreground">Reset your password</h2>
              <p className="mt-2 text-muted-foreground">We’ll only use this to send a secure reset link — no extra marketing.</p>
              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="forgot-email">Work email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#1AAAD1]" />
                    <Input
                      id="forgot-email"
                      type="email"
                      placeholder="name@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="h-12 border-border pl-10"
                      required
                    />
                  </div>
                </div>
                <Button type="submit" className="h-12 w-full rounded-full bg-[#76A13B] text-white hover:bg-[#658d34]" disabled={isLoading}>
                  {isLoading ? "Preparing link…" : "Send secure link"}
                </Button>
              </form>
            </>
          ) : (
            <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-[#76A13B]/20 bg-[#e8f2e0]">
                <CheckCircle className="h-8 w-8 text-[#76A13B]" />
              </div>
              <h2 className="mt-6 text-2xl font-bold">Look in your inbox</h2>
              <p className="mt-2 text-muted-foreground">
                A reset message is heading to <strong className="text-foreground">{email}</strong>
              </p>
              <Button asChild className="mt-8 w-full rounded-full" variant="outline">
                <Link href="/login">Back to SBM sign in</Link>
              </Button>
              <p className="mt-6 text-sm text-muted-foreground">
                Not seeing it?{" "}
                <button type="button" onClick={() => setIsSubmitted(false)} className="font-medium text-[#0a6b82] hover:underline">
                  Try a different address
                </button>
              </p>
            </motion.div>
          )}
        </motion.div>
        <p className="mt-8 flex items-center justify-center gap-1 text-center text-xs text-muted-foreground">
          <Leaf className="h-3.5 w-3.5 text-[#76A13B]" />
          The same calm palette you see on the SBM home.
        </p>
      </div>
      <Footer />
    </div>
  )
}
