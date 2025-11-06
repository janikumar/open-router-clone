import { useEffect, useRef } from "react";
import { ChatMessage } from "@/components/ChatMessage";
import { ChatInput } from "@/components/ChatInput";
import { ModelSidebar } from "@/components/ModelSidebar";
import { useChat } from "@/hooks/useChat";
import { MessageSquare } from "lucide-react";
const Index = () => {
  const {
    messages,
    isLoading,
    sendMessage,
    selectedModel,
    setSelectedModel
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
  return <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <ModelSidebar 
        selectedModel={selectedModel}
        onSelectModel={setSelectedModel}
      />

      {/* Main Chat Area */}
      <div className="flex flex-col flex-1">
        {/* Header */}
        <header className="border-b border-border bg-card/50 backdrop-blur px-6 py-4 flex items-center gap-3">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(158_64%_52%)] flex items-center justify-center shadow-[var(--shadow-glow)]">
            <MessageSquare className="h-4 w-4 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-lg font-semibold text-foreground">AI Router Chat</h1>
            <p className="text-xs text-muted-foreground">Powered by Lovable AI</p>
          </div>
        </header>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto">
          {messages.length === 0 ? <div className="flex flex-col items-center justify-center h-full text-center px-4">
              <div className="h-20 w-20 rounded-2xl bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(158_64%_52%)] flex items-center justify-center shadow-[var(--shadow-glow)] mb-6">
                <MessageSquare className="h-10 w-10 text-primary-foreground" />
              </div>
              <h2 className="text-3xl font-bold mb-3 bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(158_64%_52%)] bg-clip-text text-transparent">
                Welcome to AI Router
              </h2>
              <p className="text-muted-foreground max-w-md text-sm">
                Select an AI model from the sidebar and start your conversation. Experience multiple AI providers in one seamless interface.
              </p>
            </div> : <div className="max-w-4xl mx-auto w-full">
              {messages.map((message, index) => <ChatMessage key={index} role={message.role} content={message.content} />)}
              {isLoading && <div className="flex gap-3 px-4 py-6 bg-card">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-[hsl(var(--message-assistant))] border border-border">
                    <div className="h-4 w-4 animate-spin rounded-full border-2 border-muted-foreground border-t-transparent" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground">Thinking...</p>
                  </div>
                </div>}
              <div ref={messagesEndRef} />
            </div>}
        </div>

        {/* Input */}
        <ChatInput onSend={sendMessage} disabled={isLoading} />
      </div>
    </div>;
};
export default Index;