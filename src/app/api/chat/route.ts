import { createOpenAI } from "@ai-sdk/openai";
import { streamText, convertToModelMessages, type UIMessage } from "ai";

export const maxDuration = 30;

export async function POST(req: Request) {
  const apiKey = process.env.OPEN_API;
  if (!apiKey) {
    return new Response("Missing OPEN_API environment variable", {
      status: 500,
    });
  }

  const openai = createOpenAI({ apiKey });
  const { messages } = (await req.json()) as { messages: UIMessage[] };
  if (!messages?.length) {
    return new Response("Missing messages", { status: 400 });
  }

  const result = streamText({
    model: openai("gpt-5-nano"),
    messages: await convertToModelMessages(messages),
  });

  return result.toUIMessageStreamResponse();
}
