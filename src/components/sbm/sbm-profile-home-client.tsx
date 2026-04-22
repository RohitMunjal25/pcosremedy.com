'use client'

import Link from 'next/link'
import {
  Award,
  BarChart3,
  Link2,
  Pencil,
  Send,
  Share2,
  Shield,
  Sparkles,
  Twitter,
} from 'lucide-react'
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from 'recharts'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { useAuth } from '@/lib/auth-context'
import { cn } from '@/lib/utils'

const radarData = [
  { subject: 'Clarity', score: 82, full: 100 },
  { subject: 'SBM index', score: 74, full: 100 },
  { subject: 'Community', score: 88, full: 100 },
  { subject: 'Outreach', score: 70, full: 100 },
  { subject: 'Stability', score: 90, full: 100 },
]

const metricRows = [
  { icon: Shield, label: 'Verified profile', sub: '10% boost max', status: '+3% applied', ok: true },
  { icon: BarChart3, label: 'Impact signals', sub: '10% boost max', status: 'Up to 2% boost', ok: false },
  { icon: Twitter, label: 'X (Twitter)', sub: '8% boost max', status: '+1% applied', ok: true },
  { icon: Send, label: 'Direct channels', sub: '6% boost max', status: 'Connect to unlock', ok: false },
]

const milestones = [
  {
    title: 'Resource library',
    desc: 'Curate references your clients and partners can return to with confidence.',
    cta: '1.2k rep pts',
    detail: '6 published shelves this season',
    icon: Sparkles,
  },
  {
    title: 'Wins & outcomes',
    desc: 'Log measurable outcomes to reinforce trust on your public profile.',
    cta: '400 pts',
    detail: '3 key milestones logged',
    icon: Award,
  },
  {
    title: 'Outreach cadence',
    desc: 'Keep introductions and follow-ups visible without losing context.',
    cta: '250 pts',
    detail: '2 sprints on track',
    icon: Share2,
  },
]

export function SbmProfileHomeClient() {
  const { user, isAuthenticated } = useAuth()
  const displayName = isAuthenticated && user ? user.name : 'Your SBM profile'
  const shortEmail = user?.email?.split('@')[0] ?? 'profile'
  const avatarLetter = (user?.name || displayName).charAt(0).toUpperCase()

  return (
    <main className="text-foreground">
      <section className="relative overflow-hidden border-b border-[#76A13B]/20 bg-gradient-to-br from-white via-[#f4faf0] to-[#e8f2e0]">
        <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#1AAAD1]/10 blur-3xl" />
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-6">
              <div
                className="flex h-28 w-28 shrink-0 items-center justify-center rounded-full border-2 border-white bg-[#e8f2e0] text-3xl font-bold text-[#4a6b2a] shadow-md ring-2 ring-[#76A13B]/30"
                aria-hidden
              >
                {avatarLetter}
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h1 className="font-[family-name:var(--font-fraunces)] text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                    {displayName}
                  </h1>
                  <Button
                    size="icon"
                    variant="ghost"
                    className="h-8 w-8 rounded-full text-[#1AAAD1] hover:bg-[#1AAAD1]/10"
                    asChild
                  >
                    <Link href="/settings" aria-label="Edit profile">
                      <Pencil className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">
                  {isAuthenticated && user ? user.email : 'Sign in to sync this profile in your browser and unlock full metrics.'}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {[
                    { label: 'SBM@…C767', href: '/sbm' },
                    { label: `${shortEmail}.pro`, href: '/profile' },
                    { label: 'Network', href: '/team' },
                  ].map((tag) => (
                    <Link
                      key={tag.label}
                      href={tag.href}
                      className="inline-flex items-center gap-1.5 rounded-full border border-[#76A13B]/30 bg-white px-3 py-1 text-xs font-medium text-[#2d3a28] shadow-sm transition hover:border-[#1AAAD1]/50"
                    >
                      <Link2 className="h-3 w-3 text-[#1AAAD1]" />
                      {tag.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex flex-wrap items-start justify-end gap-3 lg:max-w-md">
              <div className="flex min-w-[120px] flex-col rounded-2xl border border-[#1AAAD1]/30 bg-white px-4 py-3 text-left shadow-sm">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#0a6b82]">Index</span>
                <span className="text-2xl font-bold text-[#1AAAD1]">4.2k</span>
              </div>
              <div className="min-w-[200px] rounded-2xl border border-[#76A13B]/30 bg-white px-5 py-4 shadow-sm">
                <p className="text-xs text-muted-foreground">Position</p>
                <p className="text-lg font-semibold text-foreground">4,332 reputation pts</p>
                <p className="text-xs text-muted-foreground">SBM board · this cycle</p>
              </div>
              <div className="flex min-w-[200px] flex-col items-center rounded-2xl border border-border bg-white px-5 py-4 text-center shadow-sm">
                <Award className="h-8 w-8 text-[#76A13B]" />
                <p className="mt-2 text-sm font-semibold">Growth tier</p>
                <p className="text-[11px] text-muted-foreground">6th program cycle</p>
                <Progress
                  value={66}
                  className="mt-3 h-1.5 w-full max-w-[180px] bg-[#e8f2e0] [&>div]:bg-gradient-to-r [&>div]:from-[#76A13B] [&>div]:to-[#1AAAD1]"
                />
                <p className="mt-1 text-xs text-[#0a6b82]">66% to next level</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="border-b border-[#76A13B]/20 bg-gradient-to-r from-white to-[#e0f4fa]/40 py-4">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#5a7d2d]">Current window</p>
          <p className="mt-0.5 text-lg font-semibold">SBM 2026 · Momentum & clarity</p>
          <p className="mt-1 max-w-2xl text-sm text-muted-foreground">
            Surface partner-ready evidence: SBM library depth, a tidy public profile, and steady outreach in one calm layout.
          </p>
        </div>
      </div>

      <section className="border-b border-border bg-white/70 py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs text-muted-foreground">Current tier</p>
              <p className="text-lg font-semibold text-[#76A13B]">Growth</p>
            </div>
            <div className="flex-1 px-0 sm:px-6">
              <div className="mb-1 flex items-center justify-between text-xs text-muted-foreground">
                <span>4,332 / 8,100 to Ambassador</span>
                <span className="rounded-full border border-[#1AAAD1]/30 bg-[#e0f4fa] px-2 py-0.5 text-[#0a6b82]">+63% multiplier</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-[#e8f2e0]">
                <div
                  className="h-full w-[54%] min-w-[8%] rounded-full bg-gradient-to-r from-[#76A13B] to-[#1AAAD1] shadow-sm"
                />
              </div>
            </div>
            <div className="text-right sm:text-left">
              <p className="text-xs text-muted-foreground">Next tier</p>
              <p className="text-lg font-semibold text-[#0a6b82]">Ambassador</p>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.95fr]">
          <div className="space-y-6">
            <div className="flex items-center justify-between gap-2">
              <h2 className="font-[family-name:var(--font-fraunces)] text-xl font-semibold">Profile balance</h2>
              <span className="rounded-full border border-[#76A13B]/30 bg-[#e8f2e0] px-3 py-1 text-xs font-medium text-[#3d5524]">Total +67% boost</span>
            </div>
            <ul className="space-y-3">
              {metricRows.map((row) => {
                const Icon = row.icon
                return (
                  <li
                    key={row.label}
                    className="flex items-center justify-between gap-3 rounded-2xl border border-border bg-card/90 p-4 shadow-sm"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#76A13B]/20 bg-[#f4faf0] text-[#2d3a28]">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-medium">{row.label}</p>
                        <p className="text-xs text-muted-foreground">{row.sub}</p>
                      </div>
                    </div>
                    <span
                      className={cn(
                        'shrink-0 rounded-full px-2.5 py-1 text-xs font-medium',
                        row.ok ? 'bg-[#e0f4fa] text-[#0a6b82]' : 'bg-muted text-muted-foreground',
                      )}
                    >
                      {row.status}
                    </span>
                  </li>
                )
              })}
            </ul>
            <div className="rounded-2xl border border-border bg-gradient-to-b from-white to-[#e8f2e0]/40 p-4 shadow-sm">
              <p className="text-center text-xs font-semibold uppercase tracking-widest text-muted-foreground">Balance view</p>
              <div className="mx-auto mt-4 h-[220px] max-w-[280px]">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart cx="50%" cy="50%" outerRadius="78%" data={radarData}>
                    <PolarGrid stroke="rgba(118,161,59,0.25)" />
                    <PolarAngleAxis dataKey="subject" tick={{ fill: 'rgb(63, 84, 50)', fontSize: 10 }} />
                    <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                    <Radar
                      name="Score"
                      dataKey="score"
                      stroke="rgb(26, 170, 209)"
                      fill="rgba(118, 161, 59, 0.28)"
                      fillOpacity={0.5}
                    />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="font-[family-name:var(--font-fraunces)] text-xl font-semibold">Milestones</h2>
            {milestones.map((m) => {
              const Icon = m.icon
              return (
                <div
                  key={m.title}
                  className="flex flex-col gap-3 rounded-2xl border border-border bg-white p-5 shadow-sm sm:flex-row sm:items-stretch"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#1AAAD1]/20 bg-[#e0f4fa]/60 text-[#0a6b82]">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-semibold text-foreground">{m.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{m.desc}</p>
                    <p className="mt-2 text-xs text-muted-foreground/90">{m.detail}</p>
                  </div>
                  <div className="flex shrink-0 items-center sm:flex-col sm:items-stretch sm:justify-center">
                    <span className="inline-flex w-full min-w-[140px] items-center justify-center rounded-xl border border-[#76A13B]/20 bg-[#f4faf0] px-4 py-2.5 text-center text-sm font-semibold text-[#3d5524]">
                      {m.cta}
                    </span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </main>
  )
}
