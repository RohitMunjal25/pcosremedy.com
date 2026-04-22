import { Footer } from '@/components/shared/footer'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { SbmProfileHomeClient } from '@/components/sbm/sbm-profile-home-client'

export const HOME_PAGE_OVERRIDE_ENABLED = true

export function HomePageOverride() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <NavbarShell />
      <SbmProfileHomeClient />
      <Footer />
    </div>
  )
}
