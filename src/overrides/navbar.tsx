'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X, Award, ChevronDown, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useAuth } from '@/lib/auth-context'
import { SITE_CONFIG } from '@/lib/site-config'
import { cn } from '@/lib/utils'
import dynamic from 'next/dynamic'

const NavbarAuthControls = dynamic(() => import('@/components/shared/navbar-auth-controls').then((m) => m.NavbarAuthControls), {
  ssr: false,
  loading: () => null,
})

export const NAVBAR_OVERRIDE_ENABLED = true

export function NavbarOverride() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const { isAuthenticated, user } = useAuth()

  const centerLinks = useMemo(() => {
    const base: { href: string; label: string }[] = [
      { href: '/about', label: 'About' },
      { href: '/careers', label: 'Careers' },
      { href: '/contact', label: 'Contact' },
    ]
    return base
  }, [])

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#76A13B]/25 bg-white/90 text-foreground shadow-sm backdrop-blur-xl">
      <nav className="mx-auto flex h-[4.25rem] max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex min-w-0 shrink-0 items-center gap-2.5">
          <span className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl border border-[#76A13B]/30 bg-white shadow-sm">
            <Image
              src="/favicon.png"
              alt=""
              width={40}
              height={40}
              className="h-9 w-9 object-contain"
              priority
            />
          </span>
          <span className="min-w-0">
            <span className="block truncate text-lg font-bold tracking-tight text-[#2d3a28]">{SITE_CONFIG.name}</span>
          </span>
        </Link>

        <div className="hidden items-center justify-center gap-7 md:flex">
          {centerLinks.map((item) => {
            const isExact = item.href === '/help' || item.href === '/about'
            const active =
              pathname === item.href || (!isExact && (item.href.length > 1 ? pathname.startsWith(item.href) : false))
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'text-sm font-semibold transition-colors',
                  active ? 'text-[#76A13B]' : 'text-muted-foreground hover:text-[#1AAAD1]',
                )}
              >
                {item.label}
              </Link>
            )
          })}
        </div>

        <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
          {isAuthenticated ? (
            <>
              <div
                className="hidden items-center gap-1.5 rounded-full border border-[#76A13B]/30 bg-[#e8f2e0] px-2.5 py-1.5 text-xs font-semibold text-[#4a6b2a] sm:flex"
                title="Wellness resources"
              >
                <Sparkles className="h-3.5 w-3.5 text-[#76A13B]" />
                Wellness hub
              </div>
              <div className="hidden items-center gap-1.5 rounded-full border border-[#1AAAD1]/30 bg-[#e0f4fa] px-2.5 py-1.5 text-xs font-medium text-[#0a7a96] md:flex">
                <Award className="h-3.5 w-3.5 text-[#1AAAD1]" />
                Pro
              </div>
              <NavbarAuthControls />
            </>
          ) : (
            <div className="flex items-center gap-2">
              <Button
                asChild
                size="sm"
                className="h-9 rounded-full border border-[#76A13B] bg-[#76A13B] px-4 text-sm font-semibold text-white shadow-sm hover:bg-[#658d34]"
              >
                <Link href="/login" className="inline-flex items-center gap-1">
                  Sign in
                  <ChevronDown className="h-3 w-3 opacity-50" />
                </Link>
              </Button>
            </div>
          )}

          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="rounded-full text-foreground md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-[#76A13B]/20 bg-white px-4 py-3 md:hidden">
          <p className="px-1 text-xs font-medium uppercase tracking-widest text-muted-foreground">Menu</p>
          <div className="mt-2 flex flex-col gap-1">
            {centerLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-2.5 text-sm font-semibold text-foreground hover:bg-[#e8f2e0]/80"
              >
                {item.label}
              </Link>
            ))}
            {user ? (
              <span className="px-3 py-2 text-xs text-muted-foreground">{user.email}</span>
            ) : (
              <Link
                href="/login"
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-2.5 text-sm font-semibold text-[#0a6b82] hover:bg-[#e0f4fa]/80"
              >
                Sign in
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  )
}
