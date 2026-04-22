import { PageShell } from '@/components/shared/page-shell'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CheckCircle2 } from 'lucide-react'

const services = [
  { name: 'Web app + SBM home', status: 'Operational' },
  { name: 'Profile & library API', status: 'Operational' },
  { name: 'Media + avatar CDN', status: 'Degraded in isolated regions' },
]

const incidents = [
  { date: 'Mar 20, 2026', title: 'SBM import queue catch-up', status: 'Resolved' },
  { date: 'Mar 1, 2026', title: 'Help center static assets', status: 'Resolved' },
]

export default function StatusPage() {
  return (
    <PageShell
      title="Service status"
      description="A lightweight board for the same green theme as the SBM home — we keep the language plain on purpose."
    >
      <div className="space-y-6">
        <div className="grid gap-4 md:grid-cols-3">
          {services.map((service) => (
            <Card
              key={service.name}
              className="border border-border transition hover:-translate-y-0.5 hover:shadow-sm"
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#76A13B]" />
                  <h2 className="text-lg font-semibold">{service.name}</h2>
                </div>
                <Badge
                  className="mt-3 border-0 bg-[#e0f4fa] text-[#0a6b82] hover:bg-[#e0f4fa]"
                  variant="secondary"
                >
                  {service.status}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>
        <Card className="border border-border bg-white shadow-sm">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold">Recent work</h3>
            <p className="mt-1 text-sm text-muted-foreground">Short notes when something may touch your SBM experience.</p>
            <div className="mt-4 space-y-3">
              {incidents.map((incident) => (
                <div
                  key={incident.title}
                  className="flex flex-col gap-1 rounded-2xl border border-border bg-[#f4faf0]/50 px-4 py-3 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div>
                    <div className="text-xs text-muted-foreground">{incident.date}</div>
                    <div className="text-sm font-medium text-foreground">{incident.title}</div>
                  </div>
                  <div className="text-xs text-[#0a6b82]">{incident.status}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </PageShell>
  )
}
