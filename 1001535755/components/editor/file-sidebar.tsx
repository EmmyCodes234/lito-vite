"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Search, Plus, FileText, X } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"

interface Document {
  id: string
  title: string
  content: string
  lastModified: string
}

interface FileSidebarProps {
  documents: Document[]
  activeDocId: string | null
  onSelectDocument: (id: string) => void
  onNewDocument: () => void
  onClose: () => void
}

export function FileSidebar({ documents, activeDocId, onSelectDocument, onNewDocument, onClose }: FileSidebarProps) {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredDocs = documents.filter((doc) => doc.title.toLowerCase().includes(searchQuery.toLowerCase()))

  return (
    <div className="w-64 border-r border-border bg-background flex flex-col">
      {/* Header */}
      <div className="p-4 border-b border-border space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="font-semibold">Documents</h2>
          <Button variant="ghost" size="icon" className="h-8 w-8" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </div>
        <div className="relative">
          <Search className="absolute left-2 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-8 h-9"
          />
        </div>
        <Button onClick={onNewDocument} className="w-full" size="sm">
          <Plus className="h-4 w-4 mr-2" />
          New Document
        </Button>
      </div>

      {/* Document List */}
      <ScrollArea className="flex-1">
        <div className="p-2 space-y-1">
          {filteredDocs.map((doc) => (
            <button
              key={doc.id}
              onClick={() => onSelectDocument(doc.id)}
              className={cn(
                "w-full text-left px-3 py-2 rounded-md hover:bg-accent transition-colors flex items-center gap-2",
                activeDocId === doc.id && "bg-accent",
              )}
            >
              <FileText className="h-4 w-4 text-muted-foreground flex-shrink-0" />
              <span className="text-sm truncate">{doc.title}</span>
            </button>
          ))}
        </div>
      </ScrollArea>
    </div>
  )
}
