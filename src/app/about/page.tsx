import Link from "next/link"
import { PageShell } from "@/components/shared/page-shell"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { SITE_CONFIG } from "@/lib/site-config"
import { Leaf, Sparkles } from "lucide-react"

const highlights = [
  { label: "Resource shelves live", value: "12k+" },
  { label: "Active SBM members", value: "180k" },
  { label: "Profile milestones logged", value: "8.6k" },
]

const values = [
  {
    title: "People-first clarity",
    description: "The interface is built to reduce noise so visitors see who you are and what you stand behind — fast.",
  },
  { title: "Reputable by design", description: "SBM index, boosts, and public profile signals stay aligned, not buried in a generic feed." },
  { title: "Built to grow with you", description: "Milestones and SBM library shelves scale from solo work to team programs without a redesign." },
]

export default function AboutPage() {
  return (
    <PageShell
      title={`Why ${SITE_CONFIG.name}`}
      description={`A calm, white-space-forward home for your SBM profile, reputation, and the resources you want partners to find first.`}
      actions={
        <>
          <Button variant="outline" className="border-[#76A13B] text-[#2d3a28] hover:bg-[#e8f2e0]/80" asChild>
            <Link href="/team">People & orgs</Link>
          </Button>
          <Button className="bg-[#76A13B] text-white shadow-sm hover:bg-[#658d34]" asChild>
            <Link href="/contact">Contact</Link>
          </Button>
        </>
      }
    >
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <Card className="border border-[#76A13B]/20 bg-white shadow-sm">
          <CardContent className="space-y-4 p-6 sm:p-8">
            <Badge className="border border-[#1AAAD1]/30 bg-[#e0f4fa] text-[#0a6b82]">Our story</Badge>
            <h2 className="text-2xl font-semibold tracking-tight text-foreground">
              Growth, wellness, and professionalism — in one SBM home.
            </h2>
            <p className="text-sm text-muted-foreground sm:text-base">
              {SITE_CONFIG.name} was shaped around a simple idea: your public profile, saved resources, and outreach rhythm
              should read as one credible narrative — not a pile of legacy products stitched together.
            </p>
            <div className="grid gap-3 sm:grid-cols-3">
              {highlights.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-border bg-gradient-to-b from-white to-[#e8f2e0]/40 p-4 text-center"
                >
                  <div className="text-2xl font-semibold text-[#76A13B]">{item.value}</div>
                  <div className="text-xs text-muted-foreground">{item.label}</div>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-3 text-sm text-[#0a6b82]">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[#1AAAD1]/20 bg-white px-3 py-1">
                <Leaf className="h-3.5 w-3.5" /> Green brand · calm cadence
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[#1AAAD1]/20 bg-white px-3 py-1">
                <Sparkles className="h-3.5 w-3.5" /> Cyan highlights · people & proof
              </span>
            </div>
          </CardContent>
        </Card>
        <div className="space-y-4">
          {values.map((value) => (
            <Card key={value.title} className="border border-border bg-white shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-foreground">{value.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

    </PageShell>
  )
}
