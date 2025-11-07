import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Send, Settings, Paperclip, Wand2, Mic, Search, MessageSquare } from "lucide-react";

interface QuickAction {
  icon: React.ReactNode;
  label: string;
}

const quickActions: QuickAction[] = [
  { icon: "🖼️", label: "Image" },
  { icon: "📱", label: "Interactive App" },
  { icon: "🌐", label: "Landing Page" },
  { icon: "🎮", label: "2D Game" },
  { icon: "🎯", label: "3D Game" }
];

interface EnhancedChatInputProps {
  onSend: (message: string) => void;
  disabled?: boolean;
}

export const EnhancedChatInput = ({ onSend, disabled }: EnhancedChatInputProps) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() && !disabled) {
      onSend(input);
      setInput("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <div className="border-t border-border bg-background">
      <div className="max-w-4xl mx-auto w-full p-4">
        {/* Quick Actions */}
        <div className="flex gap-2 mb-3 flex-wrap">
          {quickActions.map((action, index) => (
            <button
              key={index}
              className="px-3 py-1.5 rounded-lg bg-secondary hover:bg-secondary/80 border border-border text-xs flex items-center gap-1.5 transition-colors"
            >
              <span>{action.icon}</span>
              <span className="text-muted-foreground">{action.label}</span>
            </button>
          ))}
        </div>

        {/* Input Area */}
        <form onSubmit={handleSubmit} className="relative">
          <Textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Start a new message..."
            className="min-h-[60px] max-h-[200px] resize-none bg-secondary border-border focus-visible:ring-primary pr-24 text-sm"
            disabled={disabled}
          />
          
          {/* Bottom toolbar */}
          <div className="flex items-center justify-between mt-2">
            <div className="flex items-center gap-1">
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="h-8 w-8 text-muted-foreground hover:text-foreground"
              >
                <Settings className="h-4 w-4" />
              </Button>
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="h-8 w-8 text-muted-foreground hover:text-foreground"
              >
                <Paperclip className="h-4 w-4" />
              </Button>
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="h-8 w-8 text-muted-foreground hover:text-foreground"
              >
                <Wand2 className="h-4 w-4" />
              </Button>
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="h-8 w-8 text-muted-foreground hover:text-foreground"
              >
                <Mic className="h-4 w-4" />
              </Button>
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="h-8 text-muted-foreground hover:text-foreground gap-1"
              >
                <Search className="h-4 w-4" />
                Search
              </Button>
            </div>

            <div className="flex items-center gap-2">
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="h-8 text-muted-foreground hover:text-foreground gap-1"
              >
                <MessageSquare className="h-4 w-4" />
                Memory (9)
              </Button>
              <Button 
                type="submit" 
                disabled={!input.trim() || disabled}
                className="bg-primary hover:bg-primary/90 h-8 px-4"
                size="sm"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
