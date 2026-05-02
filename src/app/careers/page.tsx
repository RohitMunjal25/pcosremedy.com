import Link from "next/link"
import { PageShell } from "@/components/shared/page-shell"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { BriefcaseBusiness, Heart, MessageSquareText, Sparkles } from "lucide-react"
import { SITE_CONFIG } from "@/lib/site-config"

const inquiryLanes = [
  {
    title: "General career queries",
    description: "Use this page to ask about future roles, collaboration possibilities, and team fit instead of browsing static openings.",
    icon: MessageSquareText,
  },
  {
    title: "Partnership and contributor interest",
    description: "If you want to contribute skills, suggest collaboration, or explore adjacent work, send your details through the contact flow.",
    icon: Sparkles,
  },
  {
    title: "Current role availability",
    description: "Openings are handled through direct inquiry, so the careers page now routes visitors to conversation first instead of individual post pages.",
    icon: BriefcaseBusiness,
  },
] as const

const notes = [
  "Career interest is handled through direct queries rather than separate opening posts.",
  "This keeps the page current even when active hiring needs change.",
  "Visitors can share their background, role interest, and availability through the contact page.",
] as const

export default function CareersPage() {
  return (
    <PageShell
      title="Careers"
      description={`Reach out to ${SITE_CONFIG.name} with a career query, contributor interest, or hiring conversation instead of browsing job post cards.`}
      actions={
        <Button asChild className="bg-[#76A13B] text-white shadow-sm hover:bg-[#658d34]">
          <Link href="/contact">Send a career query</Link>
        </Button>
      }
    >
      <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <Card className="border border-[#76A13B]/20 bg-white shadow-sm">
          <CardContent className="space-y-4 p-6 sm:p-8">
            <Badge className="border border-[#1AAAD1]/30 bg-[#e0f4fa] text-[#0a6b82]">Career inquiries</Badge>
            <h2 className="text-2xl font-semibold tracking-tight text-foreground">
              This page now routes people to a query-based career conversation.
            </h2>
            <p className="text-sm text-muted-foreground sm:text-base">
              Instead of listing opening posts that can go outdated, the careers page now works as a direct inquiry page. Visitors can contact the team, share their background, and ask about relevant opportunities.
            </p>
            <div className="grid gap-4">
              {inquiryLanes.map((lane) => (
                <div key={lane.title} className="rounded-2xl border border-border bg-gradient-to-b from-white to-[#e8f2e0]/35 p-5">
                  <lane.icon className="h-5 w-5 text-[#76A13B]" />
                  <h3 className="mt-3 text-lg font-semibold text-foreground">{lane.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-muted-foreground">{lane.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="h-fit border border-dashed border-[#76A13B]/30 bg-gradient-to-b from-white to-[#e8f2e0]/40">
          <CardContent className="p-6">
            <h3 className="inline-flex items-center gap-2 text-lg font-semibold">
              <Heart className="h-5 w-5 text-[#1AAAD1]" />
              Why contact first
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              This approach makes the careers section lighter, easier to maintain, and better aligned with the current website structure.
            </p>
            <div className="mt-4 space-y-2 text-sm text-foreground/90">
              {notes.map((note) => (
                <div
                  key={note}
                  className="rounded-2xl border border-white/50 bg-white/60 px-3 py-2 shadow-sm"
                >
                  {note}
                </div>
              ))}
            </div>
            <Button asChild className="mt-5 w-full bg-[#76A13B] text-white shadow-sm hover:bg-[#658d34]">
              <Link href="/contact">Open contact page</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </PageShell>
  )
}
