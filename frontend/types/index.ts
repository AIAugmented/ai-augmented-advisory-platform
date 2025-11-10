export type Theme = "light" | "dark" | "system";

export interface Message {
  id?: string;
  sender: "user" | "bot";
  content: string;
  isStreaming?: boolean;
}
