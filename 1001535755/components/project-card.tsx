"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, MoreVertical } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface Project {
  id: string
  title: string
  description: string
  lastModified: string
  documentCount: number
}

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/editor/${project.id}`}>
      <Card className="hover:border-primary/50 transition-colors cursor-pointer group">
        <CardHeader>
          <div className="flex items-start justify-between">
            <CardTitle className="text-xl group-hover:text-primary transition-colors">{project.title}</CardTitle>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity"
              onClick={(e) => {
                e.preventDefault()
                // Handle menu actions
              }}
            >
              <MoreVertical className="h-4 w-4" />
            </Button>
          </div>
          <CardDescription className="line-clamp-2">{project.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              <span>{project.documentCount} documents</span>
            </div>
            <span>{project.lastModified}</span>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
