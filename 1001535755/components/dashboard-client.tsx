"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Plus, Moon, Sun, LogOut } from "lucide-react"
import { ProjectCard } from "@/components/project-card"
import { OnboardingModal } from "@/components/onboarding-modal"
import { useTheme } from "next-themes"
import { createClient } from "@/lib/supabase/client"
import { useRouter } from "next/navigation"

interface Project {
  id: string
  title: string
  description: string
  lastModified: string
  documentCount: number
}

interface DashboardClientProps {
  initialProjects: Project[]
  userEmail: string
}

export function DashboardClient({ initialProjects, userEmail }: DashboardClientProps) {
  const [projects, setProjects] = useState<Project[]>(initialProjects)
  const [searchQuery, setSearchQuery] = useState("")
  const [showOnboarding, setShowOnboarding] = useState(false)
  const { theme, setTheme } = useTheme()
  const router = useRouter()
  const supabase = createClient()

  useEffect(() => {
    // Check if user has seen onboarding
    const hasSeenOnboarding = localStorage.getItem("lito-onboarding-complete")
    if (!hasSeenOnboarding) {
      setShowOnboarding(true)
    }
  }, [])

  const handleNewProject = async () => {
    const { data, error } = await supabase
      .from("projects")
      .insert({
        title: "Untitled Project",
        description: "Start writing to add a description",
      })
      .select()
      .single()

    if (error) {
      console.error("[v0] Error creating project:", error)
      return
    }

    if (data) {
      const newProject: Project = {
        id: data.id,
        title: data.title,
        description: data.description || "",
        lastModified: "Just now",
        documentCount: 0,
      }
      setProjects([newProject, ...projects])
      router.push(`/editor/${data.id}`)
    }
  }

  const handleCloseOnboarding = () => {
    setShowOnboarding(false)
    localStorage.setItem("lito-onboarding-complete", "true")
  }

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    router.push("/")
    router.refresh()
  }

  const filteredProjects = projects.filter(
    (project) =>
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="min-h-screen bg-background">
      <OnboardingModal isOpen={showOnboarding} onClose={handleCloseOnboarding} />

      {/* Header */}
      <header className="border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8">
              <h1 className="text-2xl font-semibold">Lito</h1>
              <div className="relative w-96">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search projects..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sm text-muted-foreground">{userEmail}</span>
              <Button onClick={handleNewProject}>
                <Plus className="h-4 w-4 mr-2" />
                New Project
              </Button>
              <Button variant="ghost" size="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
                {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
              <Button variant="ghost" size="icon" onClick={handleSignOut}>
                <LogOut className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        <h2 className="text-3xl font-semibold mb-8">Your Projects</h2>

        {filteredProjects.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground mb-4">{searchQuery ? "No projects found" : "No projects yet"}</p>
            {!searchQuery && (
              <Button onClick={handleNewProject}>
                <Plus className="h-4 w-4 mr-2" />
                Create your first project
              </Button>
            )}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}
      </main>
    </div>
  )
}
