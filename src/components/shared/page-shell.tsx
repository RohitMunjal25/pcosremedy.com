'use client'

import type { ReactNode } from 'react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { cn } from '@/lib/utils'

export function PageShell({
  title,
  description,
  actions,
  children,
}: {
  title: string
  description?: string
  actions?: ReactNode
  children?: ReactNode
}) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <NavbarShell />
      <main>
        <section
          className={cn(
            'relative border-b border-[#76A13B]/20 bg-gradient-to-br from-[#e8f2e0] via-white to-[#e0f4fa]',
            'after:pointer-events-none after:absolute after:inset-0 after:bg-[radial-gradient(ellipse_80%_50%_at_100%_0%,rgba(26,170,209,0.12),transparent)]',
          )}
        >
          <div className="relative mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
            <div className="flex max-w-3xl flex-col gap-5 sm:max-w-none sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#5a7d2d]">SBM profile</p>
                <h1 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">{title}</h1>
                {description && (
                  <p className="mt-2 max-w-2xl text-base text-muted-foreground sm:text-lg">{description}</p>
                )}
              </div>
              {actions && <div className="flex flex-wrap gap-3">{actions}</div>}
            </div>
          </div>
        </section>
        <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
          {children}
        </section>
      </main>
      <Footer />
    </div>
  )
}
