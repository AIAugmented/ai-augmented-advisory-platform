import { ChatInput } from "./ChatInput";
import { ChatMessages } from "./ChatMessages";

export default function Chat() {
  return (
    <div className="flex h-full flex-col">
      <ChatMessages />
      <ChatInput />
    </div>
  );
}
