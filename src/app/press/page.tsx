'use client'

import { useState } from 'react'
import Image from 'next/image'
import { PageShell } from '@/components/shared/page-shell'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { useToast } from '@/components/ui/use-toast'
import { mockPressAssets, mockPressCoverage } from '@/data/mock-data'

export default function PressPage() {
  const { toast } = useToast()
  const [activeAssetId, setActiveAssetId] = useState<string | null>(null)
  const activeAsset = mockPressAssets.find((asset) => asset.id === activeAssetId)

  return (
    <PageShell
      title="Press & media"
      description="Green growth and cyan people-first accents: official wordmark, SBM home screenshots, and the stories we are proud to stand behind."
    >
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <Card className="border border-border bg-white shadow-sm">
          <CardContent className="space-y-3 p-6 sm:p-8">
            <h2 className="text-lg font-semibold text-foreground">Media kit</h2>
            <p className="text-sm text-muted-foreground">
              Logos, UI captures, and short copy blocks that match the same fresh layout you see on the SBM profile home.
            </p>
            <div className="grid gap-2">
              {mockPressAssets.map((asset) => (
                <div
                  key={asset.id}
                  className="rounded-2xl border border-border bg-gradient-to-r from-white to-[#e8f2e0]/30 px-4 py-3"
                >
                  <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                    <div>
                      <p className="text-sm font-medium text-foreground">{asset.title}</p>
                      <p className="text-xs text-muted-foreground">{asset.description}</p>
                    </div>
                    <div className="flex flex-wrap items-center gap-2">
                      <Badge className="border-0 bg-[#e0f4fa] text-[#0a6b82]">{asset.fileType}</Badge>
                      <Button size="sm" variant="outline" className="border-[#76A13B]/40" onClick={() => setActiveAssetId(asset.id)}>
                        Preview
                      </Button>
                      <Button
                        size="sm"
                        className="bg-[#76A13B] text-white hover:bg-[#658d34]"
                        onClick={() =>
                          toast({
                            title: 'Download started',
                            description: `${asset.title} is downloading.`,
                          })
                        }
                      >
                        Download
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        <div className="space-y-4">
          {mockPressCoverage.map((item) => (
            <Card
              key={item.id}
              className="border border-border transition hover:-translate-y-0.5 hover:border-[#1AAAD1]/30 hover:shadow-sm"
            >
              <CardContent className="p-6">
                <div className="text-xs font-semibold uppercase tracking-wide text-[#0a6b82]">{item.outlet}</div>
                <p className="mt-2 text-sm text-foreground">{item.headline}</p>
                <p className="mt-2 text-xs text-muted-foreground">{item.date}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Dialog open={Boolean(activeAsset)} onOpenChange={() => setActiveAssetId(null)}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>{activeAsset?.title}</DialogTitle>
          </DialogHeader>
          {activeAsset?.previewUrl && (
            <div className="relative aspect-[16/9] overflow-hidden rounded-xl border border-border bg-muted">
              <Image
                src={activeAsset.previewUrl}
                alt={activeAsset.title}
                fill
                className="object-cover"
              />
            </div>
          )}
          <p className="text-sm text-muted-foreground">{activeAsset?.description}</p>
          <DialogFooter>
            <Button variant="outline" onClick={() => setActiveAssetId(null)}>
              Close
            </Button>
            <Button
              className="bg-[#76A13B] text-white hover:bg-[#658d34]"
              onClick={() =>
                toast({
                  title: 'Download started',
                  description: `${activeAsset?.title} is downloading.`,
                })
              }
            >
              Download {activeAsset?.fileType}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </PageShell>
  )
}
