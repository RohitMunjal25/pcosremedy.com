'use client'

import Link from 'next/link'
import { HelpCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useAuth } from '@/lib/auth-context'

const allLinks = [
  { name: 'Help', href: '/help' as const, key: 'help' },
  { name: 'Privacy', href: '/privacy' as const, key: 'privacy' },
  { name: 'Terms', href: '/terms' as const, key: 'terms' },
  { name: 'Contact', href: '/contact' as const, key: 'contact' },
] as const

export function FooterOverrideNav() {
  const { isAuthenticated } = useAuth()
  const textLinks = isAuthenticated ? allLinks.filter((l) => l.key !== 'help') : [...allLinks]

  return (
    <div className="flex flex-col items-end gap-3 sm:flex-row sm:items-center sm:gap-4">
      {isAuthenticated ? (
        <Button
          asChild
          size="sm"
          variant="ghost"
          className="h-9 rounded-full border border-[#1AAAD1]/20 text-[#0a6b82] hover:bg-[#1AAAD1]/10"
        >
          <Link href="/help" className="inline-flex items-center gap-1.5">
            <HelpCircle className="h-4 w-4" />
            Help
          </Link>
        </Button>
      ) : null}
      <ul className="flex flex-wrap justify-end gap-x-6 gap-y-2 text-sm">
        {textLinks.map((l) => (
          <li key={l.key}>
            <Link
              href={l.href}
              className="text-muted-foreground transition hover:text-[#76A13B] hover:underline"
            >
              {l.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
