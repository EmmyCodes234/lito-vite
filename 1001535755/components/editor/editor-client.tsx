"use client"

import { useState, useEffect } from "react"
import { FileSidebar } from "@/components/editor/file-sidebar"
import { EditorToolbar } from "@/components/editor/editor-toolbar"
import { EditorContent } from "@/components/editor/editor-content"
import { AIAssistant } from "@/components/editor/ai-assistant"
import { createClient } from "@/lib/supabase/client"

interface Document {
  id: string
  title: string
  content: string
  lastModified: string
}

interface EditorClientProps {
  projectId: string
  initialDocuments: Document[]
  userId: string
}

export function EditorClient({ projectId, initialDocuments, userId }: EditorClientProps) {
  const [documents, setDocuments] = useState<Document[]>(initialDocuments)
  const [activeDocId, setActiveDocId] = useState<string | null>(initialDocuments[0]?.id || null)
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const [isAIOpen, setIsAIOpen] = useState(true)
  const supabase = createClient()

  useEffect(() => {
    if (initialDocuments.length === 0) {
      handleNewDocument()
    }
  }, [])

  const activeDocument = documents.find((doc) => doc.id === activeDocId)

  const handleContentChange = async (content: string) => {
    if (!activeDocId) return

    const { error } = await supabase
      .from("documents")
      .update({
        content,
        updated_at: new Date().toISOString(),
      })
      .eq("id", activeDocId)

    if (error) {
      console.error("[v0] Error updating document:", error)
      return
    }

    const updatedDocs = documents.map((doc) =>
      doc.id === activeDocId ? { ...doc, content, lastModified: new Date().toISOString() } : doc,
    )
    setDocuments(updatedDocs)
  }

  const handleNewDocument = async () => {
    const { data, error } = await supabase
      .from("documents")
      .insert({
        project_id: projectId,
        user_id: userId,
        title: "Untitled Document",
        content: "",
      })
      .select()
      .single()

    if (error) {
      console.error("[v0] Error creating document:", error)
      return
    }

    if (data) {
      const newDoc: Document = {
        id: data.id,
        title: data.title,
        content: data.content || "",
        lastModified: new Date(data.updated_at).toISOString(),
      }
      const updatedDocs = [...documents, newDoc]
      setDocuments(updatedDocs)
      setActiveDocId(newDoc.id)
    }
  }

  return (
    <div className="h-screen flex bg-background">
      {/* File Sidebar */}
      {isSidebarOpen && (
        <FileSidebar
          documents={documents}
          activeDocId={activeDocId}
          onSelectDocument={setActiveDocId}
          onNewDocument={handleNewDocument}
          onClose={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Main Editor Area */}
      <div className="flex-1 flex flex-col min-w-0">
        <EditorToolbar
          onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
          onToggleAI={() => setIsAIOpen(!isAIOpen)}
          isSidebarOpen={isSidebarOpen}
          isAIOpen={isAIOpen}
        />
        <EditorContent content={activeDocument?.content || ""} onChange={handleContentChange} />
      </div>

      {/* AI Assistant Sidebar */}
      {isAIOpen && <AIAssistant projectId={projectId} documents={documents} />}
    </div>
  )
}
