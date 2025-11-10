"use client";

import { useEffect, useRef, useState } from "react";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Plus } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { useStore } from "@/store";

// Animation settings reused to avoid repetition
const messageAnimation = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.3 },
};

// Helper function to preprocess markdown content
const preprocessMarkdown = (content: string) => {
  // Convert bullet points (•) to markdown list syntax (-)
  return content.replace(/^• /gm, "- ");
};

export const ChatMessages = () => {
  const { messages, isProcessing, clearChat } = useStore();

  const messagesContainerRef = useRef<HTMLDivElement | null>(null);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const [showScrollButton, setShowScrollButton] = useState(false);

  // Check if user has scrolled away from the bottom
  const handleScroll = () => {
    if (!messagesContainerRef.current) return;

    const { scrollHeight, scrollTop, clientHeight } =
      messagesContainerRef.current;
    // Show button if user has scrolled up more than 100px from the bottom
    const isNearBottom = scrollHeight - scrollTop - clientHeight < 100;
    setShowScrollButton(!isNearBottom);
  };

  // Scroll to bottom on button click
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Only scroll to bottom when new user messages are added (not for AI responses)
  useEffect(() => {
    const hasStreamingMessage = messages.some(m => m.isStreaming);

    // Only auto-scroll for user messages, never for AI responses
    if (!hasStreamingMessage) {
      const lastMessage = messages[messages.length - 1];
      if (lastMessage?.sender === "user") {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
        setShowScrollButton(false);
      }
    }
  }, [messages]);
  return (
    <div className="relative flex flex-1 flex-col overflow-hidden">
      <div className="bg-opacity-50 absolute top-0 left-0 z-20 flex w-full items-center justify-between px-5 py-2.5 shadow-sm backdrop-blur-md">
        <h3>Chat</h3>
        <Plus onClick={clearChat} />
      </div>

      <div
        ref={messagesContainerRef}
        onScroll={handleScroll}
        className="flex-1 space-y-5 overflow-y-auto p-5"
      >
        <AnimatePresence mode="popLayout">
          {messages?.map((message, index) => {
            const isUser = message.sender === "user";
            return (
              <motion.div
                key={message.id || index}
                {...messageAnimation}
                className={`flex ${isUser ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`text-small ${
                    isUser
                      ? "max-w-[90%] rounded-xl border border-border bg-card p-4 whitespace-pre-wrap shadow-sm"
                      : ""
                  }`}
                >
                  {isUser ? (
                    // User messages - plain text with whitespace preserved
                    <span className="whitespace-pre-wrap">
                      {message.content}
                    </span>
                  ) : (
                    // Bot messages - render as markdown
                    <div className="prose prose-sm prose-headings:text-current prose-p:text-current prose-li:text-current prose-strong:text-current max-w-none">
                      <ReactMarkdown
                        remarkPlugins={[remarkGfm]}
                        components={{
                          // Custom components for better styling
                          p: ({ children }) => (
                            <p className="mb-2 last:mb-0">{children}</p>
                          ),
                          ul: ({ children }) => (
                            <ul className="mb-2 ml-4 list-disc last:mb-0">
                              {children}
                            </ul>
                          ),
                          ol: ({ children }) => (
                            <ol className="mb-2 ml-4 list-decimal last:mb-0">
                              {children}
                            </ol>
                          ),
                          li: ({ children }) => (
                            <li className="mb-1">{children}</li>
                          ),
                          strong: ({ children }) => (
                            <strong className="font-semibold">
                              {children}
                            </strong>
                          ),
                          h1: ({ children }) => (
                            <h1 className="mb-2 text-2xl">{children}</h1>
                          ),
                          h2: ({ children }) => (
                            <h2 className="mb-2 text-xl">{children}</h2>
                          ),
                          h3: ({ children }) => (
                            <h3 className="mb-1 text-lg">{children}</h3>
                          ),
                          h4: ({ children }) => (
                            <h4 className="mb-1 text-base">{children}</h4>
                          ),
                          h5: ({ children }) => (
                            <h5 className="mb-1 text-sm">{children}</h5>
                          ),
                          h6: ({ children }) => (
                            <h6 className="mb-1 text-xs">{children}</h6>
                          ),
                          code: ({ children, className }) => {
                            const isInline = !className?.includes("language-");
                            return isInline ? (
                              <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">
                                {children}
                              </code>
                            ) : (
                              <code className="block rounded bg-muted p-2 font-mono text-xs">
                                {children}
                              </code>
                            );
                          },
                          blockquote: ({ children }) => (
                            <blockquote className="border-l-4 border-border pl-3 italic">
                              {children}
                            </blockquote>
                          ),
                        }}
                      >
                        {preprocessMarkdown(message.content)}
                      </ReactMarkdown>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>

        {/* Bot typing indicator - only show when processing and no streaming messages */}
        <AnimatePresence>
          {isProcessing && !messages.some(m => m.isStreaming) && (
            <motion.div {...messageAnimation} className="flex justify-start">
              <div className="flex max-w-[90%] items-center gap-1">
                {[0, 1, 2].map(dot => (
                  <span
                    key={dot}
                    className="h-2 w-2 animate-bounce rounded-full bg-primary"
                    style={{ animationDelay: `${dot * 0.08}s` }}
                  />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Scroll anchor */}
        <div ref={messagesEndRef} />
      </div>

      {/* Scroll to bottom button */}
      <AnimatePresence>
        {showScrollButton && (
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            onClick={scrollToBottom}
            className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center justify-center rounded-full bg-muted-foreground p-2 text-primary-foreground shadow-lg transition-colors hover:bg-primary/90"
            aria-label="Scroll to bottom"
          >
            <ChevronDown className="h-5 w-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};
