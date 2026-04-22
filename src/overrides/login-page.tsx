'use client'

import { useState, FormEvent } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Lock, Mail, Sparkles, Leaf } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { useAuth } from '@/lib/auth-context'
import { SITE_CONFIG } from '@/lib/site-config'

export const LOGIN_PAGE_OVERRIDE_ENABLED = true

export function LoginPageOverride() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <NavbarShell />
      <LoginSbmForm />
      <Footer />
    </div>
  )
}

function LoginSbmForm() {
  const { login, isLoading } = useAuth()
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function onSubmit(e: FormEvent) {
    e.preventDefault()
    if (!email.trim() || !password) return
    await login(email.trim(), password)
    router.push('/')
    router.refresh()
  }

  return (
    <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch lg:gap-12">
        <section className="relative overflow-hidden rounded-[1.75rem] border border-[#76A13B]/30 bg-gradient-to-br from-[#e8f2e0] via-white to-[#e0f4fa] p-8 shadow-sm">
          <div className="mb-6 flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl border border-[#76A13B]/30 bg-white shadow-sm">
              <Image
                src="/favicon.png"
                width={40}
                height={40}
                className="h-10 w-10 object-contain"
                alt=""
                priority
              />
            </span>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#5a7d2d]">SBM access</p>
              <h1 className="mt-0.5 font-[family-name:var(--font-fraunces)] text-2xl font-semibold text-foreground">
                Welcome to {SITE_CONFIG.name}
              </h1>
            </div>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
            Sign in to open your SBM profile in this browser. The same local session keeps your profile header, points,
            and quick links consistent when you return.
          </p>
          <ul className="mt-8 space-y-3 text-sm text-foreground/80">
            <li className="flex items-center gap-2">
              <Leaf className="h-4 w-4 text-[#76A13B]" />
              A calm, growth-oriented workspace for your reputation and resource shelves
            </li>
            <li className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-[#1AAAD1]" />
              Milestones, boosts, and balance — aligned with the profile home
            </li>
          </ul>
        </section>

        <section className="flex flex-col justify-center rounded-[1.75rem] border border-border bg-card/80 p-8 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">Credentials</p>
          <h2 className="mt-2 text-xl font-semibold">Sign in</h2>
          <p className="mt-1 text-sm text-muted-foreground">Enter an email and password. Both are required to continue.</p>
          <form onSubmit={onSubmit} className="mt-8 space-y-5">
            <div className="space-y-2">
              <Label htmlFor="sbm-email">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  id="sbm-email"
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-12 border-border bg-background pl-10"
                  placeholder="you@example.com"
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="sbm-password">Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  id="sbm-password"
                  type="password"
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="h-12 border-border bg-background pl-10"
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>
            <Button
              type="submit"
              disabled={isLoading}
              className="h-12 w-full rounded-full border border-[#5a7d2d] bg-[#76A13B] text-base font-semibold text-white shadow-sm hover:bg-[#658d34] disabled:opacity-60"
            >
              {isLoading ? 'Signing in…' : 'Enter SBM profile'}
            </Button>
            <div className="flex flex-wrap items-center justify-between gap-2 text-sm text-muted-foreground">
              <Link href="/forgot-password" className="text-[#0a6b82] hover:underline">
                Forgot password?
              </Link>
              <Link href="/register" className="font-medium text-[#76A13B] hover:underline">
                Create account
              </Link>
            </div>
          </form>
        </section>
      </div>
    </main>
  )
}
