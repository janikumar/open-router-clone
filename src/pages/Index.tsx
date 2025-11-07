import { useEffect, useRef } from "react";
import { ChatMessage } from "@/components/ChatMessage";
import { EnhancedChatInput } from "@/components/EnhancedChatInput";
import { ChatHistory } from "@/components/ChatHistory";
import { WelcomeScreen } from "@/components/WelcomeScreen";
import { useChat } from "@/hooks/useChat";

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
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth"
    });
  };
  
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="flex h-screen bg-background">
      {/* Chat History Sidebar */}
      <ChatHistory onNewChat={clearMessages} />

      {/* Main Chat Area */}
      <div className="flex flex-col flex-1">
        {/* Top Navigation */}
        <header className="border-b border-border bg-background px-6 py-3 flex items-center justify-end gap-6">
          <nav className="flex items-center gap-6">
            <button className="text-sm text-foreground hover:text-primary transition-colors">
              Models
            </button>
            <button className="text-sm text-foreground hover:text-primary transition-colors">
              Chat
            </button>
            <button className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Rankings
            </button>
            <button className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Docs
            </button>
          </nav>
          <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-sm font-semibold">
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
                <div className="flex gap-3 px-4 py-6 bg-card">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-[hsl(var(--message-assistant))] border border-border">
                    <div className="h-4 w-4 animate-spin rounded-full border-2 border-muted-foreground border-t-transparent" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground">Thinking...</p>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          )}
        </div>

        {/* Enhanced Input */}
        <EnhancedChatInput onSend={sendMessage} disabled={isLoading} />
      </div>
    </div>
  );
};

export default Index;