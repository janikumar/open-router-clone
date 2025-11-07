import { useEffect, useRef, useState } from "react";
import { ChatMessage } from "@/components/ChatMessage";
import { EnhancedChatInput } from "@/components/EnhancedChatInput";
import { ChatHistory } from "@/components/ChatHistory";
import { WelcomeScreen } from "@/components/WelcomeScreen";
import { useChat } from "@/hooks/useChat";
import { Menu, X, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  const {
    messages,
    isLoading,
    sendMessage,
    selectedModel,
    setSelectedModel,
    clearMessages
  } = useChat();
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth"
    });
  };
  
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    // Close sidebar on mobile when a message is sent
    if (messages.length > 0) {
      setIsSidebarOpen(false);
    }
  }, [messages.length]);

  const handleSendMessage = (message: string) => {
    sendMessage(message);
    setIsSidebarOpen(false); // Close sidebar when sending message on mobile
  };

  return (
    <div className="flex h-screen bg-background overflow-hidden">
      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Chat History Sidebar */}
      <ChatHistory 
        onNewChat={clearMessages} 
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      {/* Main Chat Area */}
      <div className="flex flex-col flex-1 min-w-0">
        {/* Top Navigation */}
        <header className="border-b border-border bg-background px-3 sm:px-4 md:px-6 py-3 flex items-center gap-3 sm:gap-4">
          {/* Left Section - Logo and Mobile Menu */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Mobile Menu Button - Only on mobile */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden h-8 w-8 flex-shrink-0"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
              {isSidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>

            {/* OpenRouter Logo - Always visible on top left */}
            <div className="flex items-center gap-2">
              <MessageSquare className="h-5 w-5 text-primary" />
              <span className="font-semibold text-foreground">OpenRouter</span>
            </div>
          </div>

          {/* Spacer to push nav and user avatar to the right */}
          <div className="flex-1"></div>

          {/* Navigation - Always visible, aligned to the right */}
          <nav className="flex items-center gap-2 sm:gap-3 md:gap-4">
            <button className="text-xs sm:text-sm text-foreground hover:text-primary transition-colors px-2 py-1">
              Models
            </button>
            <button className="text-xs sm:text-sm text-foreground hover:text-primary transition-colors px-2 py-1">
              Chat
            </button>
            <button className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors px-2 py-1">
              Rankings
            </button>
            <button className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors px-2 py-1">
              Docs
            </button>
          </nav>
          
          {/* User Avatar */}
          <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-sm font-semibold flex-shrink-0">
            U
          </div>
        </header>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto">
          {messages.length === 0 ? (
            <WelcomeScreen />
          ) : (
            <div className="max-w-4xl mx-auto w-full">
              {messages.map((message, index) => (
                <ChatMessage key={index} role={message.role} content={message.content} />
              ))}
              {isLoading && (
                <div className="flex gap-2 sm:gap-3 px-3 sm:px-4 py-4 sm:py-6 bg-card">
                  <div className="flex h-7 w-7 sm:h-8 sm:w-8 shrink-0 items-center justify-center rounded-md bg-[hsl(var(--message-assistant))] border border-border">
                    <div className="h-3.5 w-3.5 sm:h-4 sm:w-4 animate-spin rounded-full border-2 border-muted-foreground border-t-transparent" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs sm:text-sm text-muted-foreground">Thinking...</p>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          )}
        </div>

        {/* Enhanced Input */}
        <EnhancedChatInput onSend={handleSendMessage} disabled={isLoading} />
      </div>
    </div>
  );
};

export default Index;