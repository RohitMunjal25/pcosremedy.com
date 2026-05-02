import Link from "next/link"
import { PageShell } from "@/components/shared/page-shell"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { SITE_CONFIG } from "@/lib/site-config"
import { Bookmark, ShieldCheck, Layers3 } from "lucide-react"

const highlights = [
  { label: "Core section", value: "Social Bookmarking" },
  { label: "Site purpose", value: "Saved resources" },
  { label: "Platform focus", value: "Trust and discovery" },
]

const values = [
  {
    title: "Organized resource collections",
    description: "The website is built to keep links, references, and useful materials grouped into cleaner collections that are easier to revisit and share.",
  },
  {
    title: "Structured bookmarking experience",
    description: "Instead of leaving saved links scattered across tools, the platform brings bookmarking into one interface with clearer shelves, better grouping, and calmer browsing.",
  },
  {
    title: "Credibility and discovery",
    description: "The overall design supports trust, visibility, and repeat use by combining saved resources, structured pages, and simple navigation in one product.",
  },
]

export default function AboutPage() {
  return (
    <PageShell
      title={`About ${SITE_CONFIG.name}`}
      description={`${SITE_CONFIG.name} is a social bookmarking and resource discovery website built to organize saved links, useful materials, and credibility-focused content in one place.`}
      actions={
        <>
          <Button variant="outline" className="border-[#76A13B] text-[#2d3a28] hover:bg-[#e8f2e0]/80" asChild>
            <Link href="/contact">Contact</Link>
          </Button>
          <Button className="bg-[#76A13B] text-white shadow-sm hover:bg-[#658d34]" asChild>
            <Link href="/sbm">Social Bookmarking</Link>
          </Button>
        </>
      }
    >
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <Card className="border border-[#76A13B]/20 bg-white shadow-sm">
          <CardContent className="space-y-4 p-6 sm:p-8">
            <Badge className="border border-[#1AAAD1]/30 bg-[#e0f4fa] text-[#0a6b82]">Platform overview</Badge>
            <h2 className="text-2xl font-semibold tracking-tight text-foreground">
              A focused website for social bookmarking and resource discovery.
            </h2>
            <p className="text-sm text-muted-foreground sm:text-base">
              {SITE_CONFIG.name} is built around bookmarking, saved collections, and structured resources that help visitors keep important links organized and easy to access.
            </p>
            <p className="text-sm text-muted-foreground sm:text-base">
              The goal of the website is to make discovery, organization, and trust feel connected. Instead of looking like a generic content site, the experience is shaped around useful collections and repeatable resource browsing.
            </p>
            <div className="grid gap-3 sm:grid-cols-3">
              {highlights.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-border bg-gradient-to-b from-white to-[#e8f2e0]/40 p-4 text-center"
                >
                  <div className="text-base font-semibold text-[#76A13B]">{item.value}</div>
                  <div className="mt-1 text-xs text-muted-foreground">{item.label}</div>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-3 text-sm text-[#0a6b82]">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[#1AAAD1]/20 bg-white px-3 py-1">
                <Bookmark className="h-3.5 w-3.5" /> Bookmark collections and shelves
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[#1AAAD1]/20 bg-white px-3 py-1">
                <Layers3 className="h-3.5 w-3.5" /> Structured resource pages
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[#1AAAD1]/20 bg-white px-3 py-1">
                <ShieldCheck className="h-3.5 w-3.5" /> Reputation-focused layout
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
