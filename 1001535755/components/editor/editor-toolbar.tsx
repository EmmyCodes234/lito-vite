"use client"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import {
  Bold,
  Italic,
  Underline,
  List,
  ListOrdered,
  AlignLeft,
  AlignCenter,
  AlignRight,
  Sparkles,
  PanelLeftClose,
  PanelLeftOpen,
  PanelRightClose,
  PanelRightOpen,
  ChevronDown,
  FileText,
} from "lucide-react"
import Link from "next/link"

interface EditorToolbarProps {
  onToggleSidebar: () => void
  onToggleAI: () => void
  isSidebarOpen: boolean
  isAIOpen: boolean
}

export function EditorToolbar({ onToggleSidebar, onToggleAI, isSidebarOpen, isAIOpen }: EditorToolbarProps) {
  return (
    <div className="border-b border-border bg-background">
      <div className="flex items-center justify-between px-4 py-2">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" onClick={onToggleSidebar}>
            {isSidebarOpen ? <PanelLeftClose className="h-4 w-4" /> : <PanelLeftOpen className="h-4 w-4" />}
          </Button>
          <Link href="/dashboard">
            <Button variant="ghost" className="font-semibold">
              Lito
            </Button>
          </Link>
        </div>

        <div className="flex items-center gap-1">
          {/* Text Formatting */}
          <Button variant="ghost" size="icon">
            <Bold className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon">
            <Italic className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon">
            <Underline className="h-4 w-4" />
          </Button>

          <Separator orientation="vertical" className="h-6 mx-1" />

          {/* Lists */}
          <Button variant="ghost" size="icon">
            <List className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon">
            <ListOrdered className="h-4 w-4" />
          </Button>

          <Separator orientation="vertical" className="h-6 mx-1" />

          {/* Alignment */}
          <Button variant="ghost" size="icon">
            <AlignLeft className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon">
            <AlignCenter className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon">
            <AlignRight className="h-4 w-4" />
          </Button>

          <Separator orientation="vertical" className="h-6 mx-1" />

          {/* AI Block Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="default" size="sm" className="gap-2">
                <Sparkles className="h-4 w-4" />
                Insert AI Block
                <ChevronDown className="h-3 w-3" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuItem>
                <Sparkles className="h-4 w-4 mr-2" />
                Custom AI Block
              </DropdownMenuItem>
              <DropdownMenuItem>
                <FileText className="h-4 w-4 mr-2" />
                AI Summary
              </DropdownMenuItem>
              <DropdownMenuItem>
                <List className="h-4 w-4 mr-2" />
                Key Points
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Sparkles className="h-4 w-4 mr-2" />
                AI Insights
              </DropdownMenuItem>
              <DropdownMenuItem>
                <FileText className="h-4 w-4 mr-2" />
                Citations
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <Button variant="ghost" size="icon" onClick={onToggleAI}>
          {isAIOpen ? <PanelRightClose className="h-4 w-4" /> : <PanelRightOpen className="h-4 w-4" />}
        </Button>
      </div>
    </div>
  )
}
