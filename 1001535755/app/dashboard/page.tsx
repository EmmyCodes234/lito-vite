import { redirect } from "next/navigation"
import { createClient } from "@/lib/supabase/server"
import { DashboardClient } from "@/components/dashboard-client"

export default async function DashboardPage() {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect("/auth/login")
  }

  const { data: projects, error } = await supabase
    .from("projects")
    .select(
      `
      id,
      title,
      description,
      updated_at,
      documents:documents(count)
    `,
    )
    .order("updated_at", { ascending: false })

  if (error) {
    console.error("[v0] Error fetching projects:", error)
  }

  const transformedProjects =
    projects?.map((project) => ({
      id: project.id,
      title: project.title,
      description: project.description || "",
      lastModified: new Date(project.updated_at).toLocaleDateString(),
      documentCount: project.documents?.[0]?.count || 0,
    })) || []

  return <DashboardClient initialProjects={transformedProjects} userEmail={user.email || ""} />
}
