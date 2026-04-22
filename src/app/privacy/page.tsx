import { PageShell } from '@/components/shared/page-shell'
import { Card, CardContent } from '@/components/ui/card'
import { Shield } from 'lucide-react'

const sections = [
  {
    title: 'Data we collect',
    body: 'Account basics, SBM library activity, profile fields you choose to publish, and limited technical logs to keep the product reliable.',
  },
  {
    title: 'How we use data',
    body: 'To show your SBM profile correctly, power search and balance metrics, and protect community members from abuse or fraud.',
  },
  {
    title: 'Your choices',
    body: 'You can update profile visibility, request export or deletion where applicable, and manage local sign-in from your browser settings.',
  },
]

export default function PrivacyPage() {
  return (
    <PageShell
      title="Privacy policy"
      description="How we treat information in the SBM profile experience, including local sign-in and the resource library you curate here."
    >
      <Card className="border border-border bg-white shadow-sm">
        <CardContent className="space-y-4 p-6 sm:p-8">
          <p className="inline-flex items-center gap-2 text-xs text-muted-foreground">
            <Shield className="h-4 w-4 text-[#76A13B]" />
            Last updated: April 22, 2026
          </p>
          {sections.map((section) => (
            <div key={section.title} className="rounded-2xl border border-border bg-gradient-to-b from-white to-[#e8f2e0]/30 p-5">
              <h3 className="text-sm font-semibold text-foreground">{section.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{section.body}</p>
            </div>
          ))}
        </CardContent>
      </Card>
    </PageShell>
  )
}
