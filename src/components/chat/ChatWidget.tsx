"use client";

import { DefaultChatTransport } from "ai";
import { useChat, type UseChatOptions, type UIMessage } from "@ai-sdk/react";
import { useWindowSize } from "@uidotdev/usehooks";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect, useMemo } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

function getMessageText(message: { content?: unknown; parts?: Array<{ type?: string; text?: string }> }): string {
  if (message.parts?.length) {
    return message.parts
      .map((p) => (p.type === "text" && p.text ? p.text : ""))
      .join("");
  }
  const c = message.content;
  if (typeof c === "string") return c;
  if (Array.isArray(c)) {
    return c
      .map((part) => (typeof part === "object" && part && "text" in part ? (part as { text: string }).text : String(part)))
      .join("");
  }
  return String(c ?? "");
}

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const pathname = usePathname();
  const { width } = useWindowSize();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const isCarPage =
    pathname.includes("/cars") || pathname.includes("/import-a-car");
  const bottomOffset =
    width && width <= 768 && isCarPage ? "bottom-20" : "bottom-4";

  const transport = useMemo(
    () => new DefaultChatTransport({ api: "/api/chat" }),
    []
  );
  const chatOptions = { transport } as UseChatOptions<UIMessage>;
  const { messages, sendMessage, status } = useChat(chatOptions);

  const isLoading = status === "streaming" || status === "submitted";

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const text = input.trim();
    if (!text || isLoading) return;
    setInput("");
    sendMessage({ text });
  }

  return (
    <>
      {/* Toggle button - positioned left of UpButton to avoid overlap */}
      <button
        type="button"
        aria-label={isOpen ? "Close chat" : "Open chat"}
        className={cn(
          "fixed right-20 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-black text-white shadow-lg transition-all hover:bg-gray-800",
          bottomOffset
        )}
        onClick={() => setIsOpen((o) => !o)}
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>

      {/* Chat panel */}
      {isOpen && (
        <div
          className={cn(
            "fixed right-20 z-20 flex w-[min(360px,calc(100vw-2rem))] flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-xl",
            bottomOffset,
            "h-[420px] translate-y-[-calc(100%+0.5rem)]"
          )}
        >
          <div className="flex items-center justify-between border-b border-gray-200 bg-gray-50 px-4 py-3">
            <div>
              <h3 className="font-semibold text-gray-900">Chat with us</h3>
              <p className="text-xs text-gray-500">Ask anything about our cars</p>
            </div>
            <button
              type="button"
              aria-label="Close chat"
              onClick={() => setIsOpen(false)}
              className="rounded p-1.5 text-gray-500 hover:bg-gray-200 hover:text-gray-700"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="flex flex-1 flex-col overflow-hidden">
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.length === 0 && (
                <p className="text-sm text-gray-500 text-center py-6">
                  Send a message to get started.
                </p>
              )}
              {messages.map((m) => (
                <div
                  key={m.id}
                  className={cn(
                    "flex",
                    m.role === "user" ? "justify-end" : "justify-start"
                  )}
                >
                  <div
                    className={cn(
                      "max-w-[85%] rounded-lg px-3 py-2 text-sm",
                      m.role === "user"
                        ? "bg-black text-white"
                        : "bg-gray-100 text-gray-900"
                    )}
                  >
                    {getMessageText(m)}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="rounded-lg bg-gray-100 px-3 py-2 text-sm text-gray-500">
                    Thinking...
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <form
              onSubmit={handleSubmit}
              className="flex gap-2 border-t border-gray-200 p-3"
            >
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a message..."
                className="flex-1"
                disabled={isLoading}
              />
              <Button type="submit" size="icon" disabled={isLoading}>
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
