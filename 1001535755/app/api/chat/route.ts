import { convertToModelMessages, streamText, type UIMessage } from "ai"

export const maxDuration = 30

export async function POST(req: Request) {
  const { messages }: { messages: UIMessage[] } = await req.json()

  const prompt = convertToModelMessages(messages)

  const result = streamText({
    model: "openai/gpt-5-mini",
    prompt,
    abortSignal: req.signal,
  })

  return result.toUIMessageStreamResponse()
}
