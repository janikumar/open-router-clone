import { cn } from "@/lib/utils";
import { Bot, User } from "lucide-react";

interface ChatMessageProps {
  role: "user" | "assistant";
  content: string;
}

export const ChatMessage = ({ role, content }: ChatMessageProps) => {
  const isUser = role === "user";

  return (
    <div
      className={cn(
        "flex gap-3 px-4 py-6 animate-in fade-in slide-in-from-bottom-2 duration-500",
        isUser ? "bg-background" : "bg-card"
      )}
    >
      <div
        className={cn(
          "flex h-8 w-8 shrink-0 select-none items-center justify-center rounded-md",
          isUser 
            ? "bg-[hsl(var(--message-user))] text-primary-foreground shadow-[var(--shadow-glow)]" 
            : "bg-[hsl(var(--message-assistant))] text-muted-foreground border border-border"
        )}
      >
        {isUser ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
      </div>
      <div className="flex-1 space-y-2 overflow-hidden">
        <p className="text-sm font-medium leading-none text-foreground/80">
          {isUser ? "You" : "Assistant"}
        </p>
        <div className="text-sm text-foreground whitespace-pre-wrap break-words">
          {content}
        </div>
      </div>
    </div>
  );
};
