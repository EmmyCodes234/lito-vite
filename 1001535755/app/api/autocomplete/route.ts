import { generateText } from "ai"

export async function POST(req: Request) {
  const { content, cursorPosition } = await req.json()

  const textBeforeCursor = content.slice(0, cursorPosition)
  const textAfterCursor = content.slice(cursorPosition)

  const { text } = await generateText({
    model: "openai/gpt-5-mini",
    prompt: `You are an AI writing assistant. Complete the following text naturally and concisely (max 50 words). Only provide the completion, nothing else.

Text before cursor: ${textBeforeCursor}
Text after cursor: ${textAfterCursor}

Completion:`,
    maxOutputTokens: 100,
    temperature: 0.7,
  })

  return Response.json({ completion: text.trim() })
}
