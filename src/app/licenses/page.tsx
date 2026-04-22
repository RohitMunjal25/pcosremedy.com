import { PageShell } from '@/components/shared/page-shell'
import { Card, CardContent } from '@/components/ui/card'
import { FileCode2 } from 'lucide-react'

const licenses = [
  { name: 'Next.js', description: 'MIT License' },
  { name: 'React & React DOM', description: 'MIT License' },
  { name: 'Tailwind CSS', description: 'MIT License' },
  { name: 'Recharts', description: 'MIT License' },
  { name: 'Radix UI', description: 'MIT License' },
]

export default function LicensesPage() {
  return (
    <PageShell
      title="Open source notices"
      description="Packages that power the SBM profile home and shared UI shell — the same clean layout you see across our marketing and product pages."
    >
      <Card className="border border-border bg-white shadow-sm">
        <CardContent className="p-6 sm:p-8">
          <p className="mb-4 inline-flex items-center gap-2 text-sm text-muted-foreground">
            <FileCode2 className="h-4 w-4 text-[#1AAAD1]" />
            We are grateful to the maintainers behind these libraries.
          </p>
          <ul className="space-y-3">
            {licenses.map((license) => (
              <li
                key={license.name}
                className="flex items-center justify-between gap-3 rounded-2xl border border-border bg-[#f4faf0]/40 px-4 py-3"
              >
                <span className="font-medium text-foreground">{license.name}</span>
                <span className="text-sm text-[#0a6b82]">{license.description}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </PageShell>
  )
}
