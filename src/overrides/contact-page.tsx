'use client'

import Image from 'next/image'
import { Mail, MessageCircle, Phone } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { SITE_CONFIG } from '@/lib/site-config'

export const CONTACT_PAGE_OVERRIDE_ENABLED = true

const lanes = [
  {
    icon: Mail,
    title: 'Profile & SBM support',
    body: 'Ask about your public profile, SBM resource shelves, boosts, and how to present proof of work to partners.',
  },
  {
    icon: MessageCircle,
    title: 'Partnerships & programs',
    body: 'We respond to co-marketing, educator outreach, and pilot programs that align with growth and well-being focused profiles.',
  },
  {
    icon: Phone,
    title: 'Coverage & access',
    body: 'Request regional coverage, priority onboarding, or accessibility improvements for your team’s workspace.',
  },
]

export function ContactPageOverride() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <NavbarShell />
      <main>
        <section className="border-b border-[#76A13B]/20 bg-gradient-to-br from-[#e8f2e0] via-white to-[#e0f4fa]">
          <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
            <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-6">
              <div className="overflow-hidden rounded-2xl border border-[#76A13B]/20 bg-white p-2 shadow-sm">
                <Image
                  src="/favicon.png"
                  width={72}
                  height={72}
                  className="h-16 w-16 object-contain"
                  alt=""
                />
              </div>
              <div>
                <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">We’re here to help your SBM profile</h1>
                <p className="mt-2 max-w-2xl text-muted-foreground sm:text-lg">
                  Reach the {SITE_CONFIG.name} team for profile setup, SBM library questions, or program partnerships — we
                  aim to reply within two business days.
                </p>
              </div>
            </div>
          </div>
        </section>
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-3">
            {lanes.map((l) => {
              const I = l.icon
              return (
                <Card key={l.title} className="border border-[#76A13B]/20 bg-card shadow-sm transition hover:border-[#1AAAD1]/30">
                  <CardContent className="p-6">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#1AAAD1]/25 bg-[#e0f4fa]">
                      <I className="h-5 w-5 text-[#0a6b82]" />
                    </div>
                    <h2 className="mt-4 text-lg font-semibold text-foreground">{l.title}</h2>
                    <p className="mt-2 text-sm text-muted-foreground">{l.body}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <Card className="border border-border bg-white shadow-sm">
              <CardContent className="p-6">
                <h2 className="text-lg font-semibold">Send a message</h2>
                <p className="mt-1 text-sm text-muted-foreground">Tell us the best email to reach you and a short subject line.</p>
                <form className="mt-4 grid gap-3" onSubmit={(e) => e.preventDefault()}>
                  <input
                    className="h-12 rounded-xl border border-border bg-background px-4 text-sm"
                    placeholder="Your name"
                  />
                  <input
                    className="h-12 rounded-xl border border-border bg-background px-4 text-sm"
                    placeholder="Email"
                    type="email"
                  />
                  <textarea
                    className="min-h-28 rounded-xl border border-border bg-background px-4 py-3 text-sm"
                    placeholder="How can we help?"
                  />
                  <Button type="submit" className="h-12 rounded-full bg-[#76A13B] text-white hover:bg-[#658d34]">
                    Submit
                  </Button>
                </form>
              </CardContent>
            </Card>
            <Card className="border border-dashed border-[#1AAAD1]/30 bg-gradient-to-b from-white to-[#e0f4fa]/30">
              <CardContent className="flex h-full flex-col justify-center p-6">
                <h3 className="text-lg font-semibold">Prefer the Help Center first?</h3>
                <p className="mt-2 text-sm text-muted-foreground">Self-serve articles cover account recovery, SBM library tips, and profile boosts.</p>
                <Button variant="outline" asChild className="mt-6 w-fit border-[#76A13B] text-[#4a6b2a] hover:bg-[#e8f2e0]">
                  <a href="/help">Open Help</a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
