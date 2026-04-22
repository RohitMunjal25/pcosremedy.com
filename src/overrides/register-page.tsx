'use client'

import { useState, FormEvent } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Leaf, Lock, Mail, User } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useAuth } from '@/lib/auth-context'
import { SITE_CONFIG } from '@/lib/site-config'

export const REGISTER_PAGE_OVERRIDE_ENABLED = true

const bullets = [
  'A single profile surface for SBM points, resource shelves, and public credibility',
  'Clear milestones that mirror the home dashboard — no noisy legacy feeds',
  'Optional channels and boosts, explained in the Help Center',
]

export function RegisterPageOverride() {
  const { signup, isLoading } = useAuth()
  const router = useRouter()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function onSubmit(e: FormEvent) {
    e.preventDefault()
    if (!name.trim() || !email.trim() || !password) return
    await signup(name.trim(), email.trim(), password)
    router.push('/')
    router.refresh()
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <NavbarShell />
      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <section className="rounded-[1.75rem] border border-[#1AAAD1]/25 bg-gradient-to-b from-[#e0f4fa]/80 to-white p-8 shadow-sm">
            <div className="mb-4 flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl border border-white bg-white">
              <Image src="/favicon.png" width={40} height={40} className="h-9 w-9 object-contain" alt="" />
            </div>
            <h1 className="text-3xl font-bold tracking-tight">Create your SBM profile</h1>
            <p className="mt-3 text-sm text-muted-foreground sm:text-base">
              Join {SITE_CONFIG.name} with a focused onboarding flow that lines up with the home dashboard, Help Center, and
              SBM library.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-foreground/85">
              {bullets.map((b) => (
                <li key={b} className="flex gap-2">
                  <Leaf className="mt-0.5 h-4 w-4 shrink-0 text-[#76A13B]" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </section>
          <section className="rounded-[1.75rem] border border-border bg-card p-8 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">New account</p>
            <h2 className="mt-1 text-2xl font-semibold">Your details</h2>
            <p className="mt-1 text-sm text-muted-foreground">We keep the form short so you can reach the profile home faster.</p>
            <form onSubmit={onSubmit} className="mt-6 space-y-4">
              <div>
                <Label htmlFor="reg-name">Name</Label>
                <div className="relative mt-1.5">
                  <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    id="reg-name"
                    className="h-12 pl-9"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Full name"
                    required
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="reg-email">Email</Label>
                <div className="relative mt-1.5">
                  <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    id="reg-email"
                    type="email"
                    className="h-12 pl-9"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    required
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="reg-pw">Password</Label>
                <div className="relative mt-1.5">
                  <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    id="reg-pw"
                    type="password"
                    className="h-12 pl-9"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
              </div>
              <Button
                type="submit"
                disabled={isLoading}
                className="h-12 w-full rounded-full border border-[#5a7d2d] bg-[#76A13B] text-white shadow-sm hover:bg-[#658d34]"
              >
                {isLoading ? 'Creating account…' : 'Create account'}
              </Button>
            </form>
            <p className="mt-4 text-sm text-muted-foreground">
              Already on board?{' '}
              <Link href="/login" className="font-semibold text-[#0a6b82] hover:underline">
                Sign in
              </Link>
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}
