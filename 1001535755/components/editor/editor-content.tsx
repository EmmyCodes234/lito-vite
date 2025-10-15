"use client"

import type React from "react"

import { Textarea } from "@/components/ui/textarea"
import { useEffect, useRef, useState } from "react"

interface EditorContentProps {
  content: string
  onChange: (content: string) => void
}

export function EditorContent({ content, onChange }: EditorContentProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const [suggestion, setSuggestion] = useState("")
  const [isLoadingSuggestion, setIsLoadingSuggestion] = useState(false)

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto"
      textareaRef.current.style.height = textareaRef.current.scrollHeight + "px"
    }
  }, [content])

  const fetchSuggestion = async () => {
    if (!textareaRef.current || content.length < 10) return

    const cursorPosition = textareaRef.current.selectionStart
    setIsLoadingSuggestion(true)

    try {
      const response = await fetch("/api/autocomplete", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content, cursorPosition }),
      })

      const data = await response.json()
      setSuggestion(data.completion)
    } catch (error) {
      console.error("[v0] Autocomplete error:", error)
    } finally {
      setIsLoadingSuggestion(false)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Tab" && suggestion) {
      e.preventDefault()
      const cursorPosition = textareaRef.current?.selectionStart || 0
      const newContent = content.slice(0, cursorPosition) + suggestion + content.slice(cursorPosition)
      onChange(newContent)
      setSuggestion("")

      // Move cursor to end of inserted suggestion
      setTimeout(() => {
        if (textareaRef.current) {
          const newPosition = cursorPosition + suggestion.length
          textareaRef.current.setSelectionRange(newPosition, newPosition)
        }
      }, 0)
    } else if (e.key === "Escape") {
      setSuggestion("")
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(e.target.value)
    setSuggestion("")

    clearTimeout((window as any).suggestionTimeout)
    ;(window as any).suggestionTimeout = setTimeout(() => {
      fetchSuggestion()
    }, 1000)
  }

  return (
    <div className="flex-1 overflow-auto">
      <div className="max-w-4xl mx-auto px-8 py-12 relative">
        <Textarea
          ref={textareaRef}
          value={content}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder="Start writing... Press Tab for AI suggestions"
          className="min-h-screen border-0 focus-visible:ring-0 text-base leading-relaxed resize-none p-0"
        />
        {suggestion && (
          <div className="absolute top-12 left-8 right-8 pointer-events-none">
            <div className="max-w-4xl">
              <span className="invisible">{content}</span>
              <span className="text-muted-foreground/50 italic">{suggestion}</span>
            </div>
          </div>
        )}
        {isLoadingSuggestion && (
          <div className="absolute bottom-4 right-4 text-xs text-muted-foreground">Thinking...</div>
        )}
      </div>
    </div>
  )
}
