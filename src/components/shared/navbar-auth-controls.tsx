'use client'

import Link from 'next/link'
import { ChevronDown, LayoutGrid, LogOut, Plus, User, FileText, Building2, Tag, Image as ImageIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { useAuth } from '@/lib/auth-context'
import { SITE_CONFIG, type TaskKey } from '@/lib/site-config'

const taskIcons: Record<TaskKey, any> = {
  article: FileText,
  listing: Building2,
  sbm: LayoutGrid,
  classified: Tag,
  image: ImageIcon,
  profile: User,
  social: LayoutGrid,
  pdf: FileText,
  org: Building2,
  comment: FileText,
}

export function NavbarAuthControls() {
  const { user, logout } = useAuth()

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            size="sm"
            className="hidden h-10 gap-1 rounded-full border border-[#5a7d2d] bg-[#76A13B] px-4 text-white shadow-sm hover:bg-[#658d34] sm:flex"
          >
            <Plus className="h-4 w-4" />
            Create
            <ChevronDown className="h-3 w-3" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="end"
          className="w-56 border border-border bg-card text-foreground shadow-lg"
        >
          {SITE_CONFIG.tasks.filter((task) => task.enabled).map((task) => {
            const Icon = taskIcons[task.key] || LayoutGrid
            return (
              <DropdownMenuItem key={task.key} asChild>
                <Link href={`/create/${task.key}`} className="focus:bg-[#e8f2e0]/80">
                  <Icon className="mr-2 h-4 w-4" />
                  Create {task.label}
                </Link>
              </DropdownMenuItem>
            )
          })}
        </DropdownMenuContent>
      </DropdownMenu>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            type="button"
            variant="ghost"
            className="h-10 gap-2 rounded-full px-1.5 pl-1 text-foreground hover:bg-[#e8f2e0]/80"
            aria-label="Account menu"
          >
            <Avatar className="h-9 w-9 border border-[#76A13B]/30">
              <AvatarImage src={user?.avatar} alt={user?.name} />
              <AvatarFallback>{user?.name?.charAt(0)}</AvatarFallback>
            </Avatar>
            <span className="hidden max-w-[7rem] truncate text-sm font-medium sm:inline">
              {user?.name}
            </span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-60 border border-border bg-card p-0 text-foreground shadow-lg">
          <div className="p-2 pb-0">
            <p className="truncate px-1 text-sm font-medium">{user?.name}</p>
            <p className="truncate px-1 text-xs text-muted-foreground">{user?.email}</p>
          </div>
          <DropdownMenuSeparator className="my-2" />
          <div className="p-1 pt-0">
            <DropdownMenuItem
              onClick={() => logout()}
              className="cursor-pointer justify-center gap-2 rounded-md border border-[#b91c1c]/30 bg-background p-2 text-destructive focus:bg-destructive/10"
            >
              <LogOut className="h-4 w-4" />
              Sign out
            </DropdownMenuItem>
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  )
}
