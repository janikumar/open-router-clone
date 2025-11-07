import { MessageSquare, Plus, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

interface ChatHistoryProps {
  onNewChat: () => void;
  isOpen?: boolean;
  onClose?: () => void;
}

export const ChatHistory = ({ onNewChat, isOpen = false, onClose }: ChatHistoryProps) => {
  const handleNewChat = () => {
    onNewChat();
    onClose?.();
  };

  return (
    <div className={cn(
      "w-64 border-r border-border bg-background flex flex-col h-full transition-transform duration-300 ease-in-out",
      "fixed lg:static inset-y-0 left-0 z-50",
      isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
    )}>
      {/* Header */}
      <div className="p-4 border-b border-border">
        <div className="flex items-center gap-2 mb-4">
          <MessageSquare className="h-5 w-5 text-primary" />
          <span className="font-semibold text-foreground">OpenRouter</span>
        </div>
        
        <div className="relative mb-3">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input 
            placeholder="Search" 
            className="pl-9 bg-secondary border-border text-sm h-9"
          />
        </div>

        <div className="flex gap-2">
          <Button 
            onClick={handleNewChat}
            className="flex-1 bg-secondary hover:bg-secondary/80 text-foreground border border-border h-9 text-sm"
            size="sm"
          >
            <Plus className="h-4 w-4 mr-1" />
            <span className="hidden sm:inline">New Chat</span>
            <span className="sm:hidden">New</span>
          </Button>
          <Button 
            className="bg-secondary hover:bg-secondary/80 text-foreground border border-border h-9 px-3"
            size="sm"
          >
            <Plus className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Search rooms */}
      <div className="p-3">
        <Input 
          placeholder="Search rooms..." 
          className="bg-secondary border-border text-sm h-9"
        />
      </div>

      {/* Chat history */}
      <ScrollArea className="flex-1">
        <div className="p-3">
          <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
            PREVIOUS 7 DAYS
          </div>
          <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-secondary/50 transition-colors text-sm text-foreground">
            hello
          </button>
        </div>
      </ScrollArea>
    </div>
  );
};
