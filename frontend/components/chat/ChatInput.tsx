"use client";

import { FormEvent, useEffect, useRef, useState } from "react";

import { ArrowUp } from "lucide-react";

import { useStore } from "@/store";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export const ChatInput = () => {
  const { handleSendMessage, isProcessing } = useStore();
  const [inputValue, setInputValue] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Auto-focus textarea on mount
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.focus();
    }
  }, []);

  const handleSubmit = (e?: FormEvent) => {
    if (e) e.preventDefault();
    if (inputValue.trim() && !isProcessing) {
      handleSendMessage(inputValue.trim());
      setInputValue("");
      if (textareaRef.current) {
        textareaRef.current.style.height = "128px"; // Reset height
      }
      // Keep focus on textarea after sending - use setTimeout to ensure it happens after React updates
      setTimeout(() => {
        if (textareaRef.current) {
          textareaRef.current.focus();
        }
      }, 0);
    }
  };

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
    if (textareaRef.current) {
      textareaRef.current.style.height = "128px"; // Reset first
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`; // Auto-grow
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault(); // Prevent new line
      handleSubmit(); // Send message
    }
  };

  return (
    <form onSubmit={handleSubmit} className="px-5 py-2.5">
      <div className="flex items-end gap-2.5 rounded-xl border border-border bg-card p-2.5 shadow-sm">
        <Textarea
          ref={textareaRef}
          value={inputValue}
          onChange={handleInput}
          onKeyDown={handleKeyDown}
          placeholder="Type your message..."
          className="max-h-60 min-h-32 flex-1 resize-none overflow-y-auto rounded-none border-none !bg-transparent px-0 text-sm leading-snug shadow-none dark:!bg-transparent"
          disabled={isProcessing}
          rows={4}
        />
        <Button type="submit" disabled={!inputValue.trim() || isProcessing}>
          <ArrowUp />
        </Button>
      </div>
    </form>
  );
};
