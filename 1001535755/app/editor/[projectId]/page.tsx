import { redirect } from "next/navigation"
import { createClient } from "@/lib/supabase/server"
import { EditorClient } from "@/components/editor/editor-client"

export default async function EditorPage({ params }: { params: Promise<{ projectId: string }> }) {
  const { projectId } = await params
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect("/auth/login")
  }

  const { data: project } = await supabase.from("projects").select("*").eq("id", projectId).single()

  if (!project) {
    redirect("/dashboard")
  }

  const { data: documents } = await supabase
    .from("documents")
    .select("*")
    .eq("project_id", projectId)
    .order("updated_at", { ascending: false })

  const transformedDocuments =
    documents?.map((doc) => ({
      id: doc.id,
      title: doc.title,
      content: doc.content || "",
      lastModified: new Date(doc.updated_at).toISOString(),
    })) || []

  return <EditorClient projectId={projectId} initialDocuments={transformedDocuments} userId={user.id} />
}
