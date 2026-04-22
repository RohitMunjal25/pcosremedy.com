'use client'

import { motion } from 'framer-motion'
import { FileText, Bookmark, Users, BarChart3 } from 'lucide-react'

const stats = [
  {
    icon: FileText,
    value: '25K+',
    label: 'Profile views',
    description: 'Public SBM pages discovered this month',
  },
  {
    icon: Bookmark,
    value: '12K+',
    label: 'Resource saves',
    description: 'Items organized in SBM libraries',
  },
  {
    icon: BarChart3,
    value: '50K+',
    label: 'Reputation index',
    description: 'Cumulative SBM points across the network',
  },
  {
    icon: Users,
    value: '100K+',
    label: 'Active members',
    description: 'Growing community of professionals',
  },
]

export function StatsSection() {
  return (
    <section className="border-b border-border bg-secondary/30 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
            Platform in Numbers
          </h2>
          <p className="mt-2 text-muted-foreground">
            Join our thriving community of creators and businesses
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10">
                <stat.icon className="h-7 w-7 text-accent" />
              </div>
              <div className="text-3xl font-bold text-foreground">{stat.value}</div>
              <div className="mt-1 font-medium text-foreground">{stat.label}</div>
              <div className="mt-1 text-sm text-muted-foreground">{stat.description}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
