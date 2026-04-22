import { PageShell } from "@/components/shared/page-shell"
import { Card, CardContent } from "@/components/ui/card"
import { Scale } from "lucide-react"
import { SITE_CONFIG } from "@/lib/site-config"

const sections = [
  { title: "Account responsibility", body: "Keep credentials private. You are responsible for SBM content you publish and links you promote from your profile." },
  { title: "Content & rights", body: "You own what you create. By posting, you allow the service to store, display, and share it in line with these terms." },
  { title: "Respect & safety", body: "No spam, hate, harassment, or law-breaking use of the SBM system. We may limit accounts that break this bar." },
]

export default function TermsPage() {
  return (
    <PageShell
      title="Terms of use"
      description={`The agreement that covers access to ${SITE_CONFIG.name} — the SBM profile, library surfaces, and related tools in this workspace.`}
    >
      <Card className="border border-border bg-white shadow-sm">
        <CardContent className="space-y-4 p-6 sm:p-8">
          <p className="inline-flex items-center gap-2 text-xs text-muted-foreground">
            <Scale className="h-4 w-4 text-[#1AAAD1]" />
            Last updated: April 22, 2026
          </p>
          {sections.map((section) => (
            <div key={section.title} className="rounded-2xl border border-border p-5">
              <h3 className="text-sm font-semibold text-foreground">{section.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{section.body}</p>
            </div>
          ))}
        </CardContent>
      </Card>
    </PageShell>
  );
}
