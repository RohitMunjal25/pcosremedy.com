import Link from "next/link"
import { PageShell } from "@/components/shared/page-shell"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Heart } from "lucide-react"
import { SITE_CONFIG } from "@/lib/site-config"

const roles = [
  { title: "Product designer · SBM surfaces", location: "Remote", type: "Full-time", level: "Mid" },
  { title: "Frontend · profile & growth UI", location: "Hybrid (US)", type: "Full-time", level: "Senior" },
  { title: "Member success & education", location: "Remote", type: "Part-time", level: "Mid" },
]

const benefits = [
  "A mission that matches the brand: clarity, well-being, and people-first product craft",
  "Stipend for health learning and community programs",
  "No-meeting Friday blocks to protect deep work on the profile system",
  "Offsites focused on co-design, not performative busyness",
]

export default function CareersPage() {
  return (
    <PageShell
      title="Careers"
      description={`We are hiring people who can carry the same green and blue, white-space story you see on the SBM home — calm software for credible profiles.`}
      actions={
        <Button asChild className="bg-[#76A13B] text-white shadow-sm hover:bg-[#658d34]">
          <Link href="/contact">Start a conversation</Link>
        </Button>
      }
    >
      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-4">
          {roles.map((role) => (
            <Card
              key={role.title}
              className="border border-border transition hover:border-[#1AAAD1]/40"
            >
              <CardContent className="p-6">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge className="border-0 bg-[#e0f4fa] text-[#0a6b82]">{role.level}</Badge>
                  <Badge variant="outline" className="border-[#76A13B]/30">
                    {role.type}
                  </Badge>
                </div>
                <h2 className="mt-3 text-lg font-semibold text-foreground">{role.title}</h2>
                <p className="mt-1 text-sm text-muted-foreground">{role.location}</p>
                <Button variant="outline" className="mt-4 border-[#76A13B] text-[#2d3a28] hover:bg-[#e8f2e0]/80" asChild>
                  <Link href="/contact">Discuss role</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        <Card className="h-fit border border-dashed border-[#76A13B]/30 bg-gradient-to-b from-white to-[#e8f2e0]/40">
          <CardContent className="p-6">
            <h3 className="inline-flex items-center gap-2 text-lg font-semibold">
              <Heart className="h-5 w-5 text-[#1AAAD1]" />
              Why {SITE_CONFIG.name}
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              We are small by design, shipping only what strengthens SBM trust — not a grab-bag of random surfaces.
            </p>
            <div className="mt-4 space-y-2 text-sm text-foreground/90">
              {benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="rounded-2xl border border-white/50 bg-white/60 px-3 py-2 shadow-sm"
                >
                  {benefit}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </PageShell>
  );
}
