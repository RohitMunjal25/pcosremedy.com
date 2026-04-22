import { PageShell } from '@/components/shared/page-shell'
import { Card, CardContent } from '@/components/ui/card'
import { Cookie } from 'lucide-react'

const sections = [
  { title: 'Essential cookies', body: 'Session, security, and account basics so the SBM profile and sign-in flow can function across visits.' },
  { title: 'Product analytics', body: 'Anonymized usage to see which help articles and SBM library paths actually help people move forward.' },
  { title: 'Preference cookies', body: 'Remembers light theme, layout density, and the quick links you pin on the home hero.' },
]

export default function CookiesPage() {
  return (
    <PageShell
      title="Cookie policy"
      description="Plain-language notice about the small set of browser cookies that support the SBM profile experience and local sign-in state."
    >
      <Card className="border border-border bg-white shadow-sm">
        <CardContent className="space-y-4 p-6 sm:p-8">
          <p className="inline-flex items-center gap-2 text-xs text-muted-foreground">
            <Cookie className="h-4 w-4 text-[#76A13B]" />
            Last updated: April 22, 2026
          </p>
          {sections.map((section) => (
            <div
              key={section.title}
              className="rounded-2xl border border-border bg-gradient-to-r from-white to-[#e0f4fa]/30 p-5"
            >
              <h3 className="text-sm font-semibold text-foreground">{section.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{section.body}</p>
            </div>
          ))}
        </CardContent>
      </Card>
    </PageShell>
  )
}
