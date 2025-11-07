import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Model {
  id: string;
  name: string;
  provider: string;
  description: string;
  contextWindow: string;
  pricing: string;
}

const models: Model[] = [
  {
    id: "google/gemini-2.5-flash",
    name: "Gemini 2.5 Flash",
    provider: "Google",
    description: "Balanced & fast multimodal model",
    contextWindow: "1M tokens",
    pricing: "$0.075 / 1M tokens"
  },
  {
    id: "google/gemini-2.5-pro",
    name: "Gemini 2.5 Pro",
    provider: "Google",
    description: "Most capable Gemini model",
    contextWindow: "2M tokens",
    pricing: "$1.25 / 1M tokens"
  },
  {
    id: "google/gemini-2.5-flash-lite",
    name: "Gemini 2.5 Flash Lite",
    provider: "Google",
    description: "Fastest & most efficient",
    contextWindow: "1M tokens",
    pricing: "$0.0375 / 1M tokens"
  },
  {
    id: "openai/gpt-5",
    name: "GPT-5",
    provider: "OpenAI",
    description: "Powerful reasoning & multimodal",
    contextWindow: "200K tokens",
    pricing: "$2.50 / 1M tokens"
  },
  {
    id: "openai/gpt-5-mini",
    name: "GPT-5 Mini",
    provider: "OpenAI",
    description: "Cost efficient & fast",
    contextWindow: "128K tokens",
    pricing: "$0.30 / 1M tokens"
  },
  {
    id: "openai/gpt-5-nano",
    name: "GPT-5 Nano",
    provider: "OpenAI",
    description: "Speed optimized",
    contextWindow: "128K tokens",
    pricing: "$0.15 / 1M tokens"
  }
];

interface ModelSidebarProps {
  selectedModel: string;
  onSelectModel: (modelId: string) => void;
}

export const ModelSidebar = ({ selectedModel, onSelectModel }: ModelSidebarProps) => {
  const groupedModels = models.reduce((acc, model) => {
    if (!acc[model.provider]) acc[model.provider] = [];
    acc[model.provider].push(model);
    return acc;
  }, {} as Record<string, Model[]>);

  return (
    <div className="w-full sm:w-80 border-r border-border bg-card/30 backdrop-blur flex flex-col h-full">
      <div className="p-3 sm:p-4 border-b border-border">
        <h2 className="text-base sm:text-lg font-semibold text-foreground">Models</h2>
        <p className="text-xs text-muted-foreground mt-1">Select an AI model to chat with</p>
      </div>
      
      <ScrollArea className="flex-1">
        <div className="p-2 sm:p-3 space-y-3 sm:space-y-4">
          {Object.entries(groupedModels).map(([provider, providerModels]) => (
            <div key={provider}>
              <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2 px-2">
                {provider}
              </h3>
              <div className="space-y-1">
                {providerModels.map((model) => (
                  <button
                    key={model.id}
                    onClick={() => onSelectModel(model.id)}
                    className={cn(
                      "w-full text-left p-2.5 sm:p-3 rounded-lg transition-all duration-200",
                      "hover:bg-secondary/80",
                      selectedModel === model.id
                        ? "bg-secondary border border-primary/50"
                        : "border border-transparent"
                    )}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="font-medium text-xs sm:text-sm text-foreground truncate">
                            {model.name}
                          </span>
                          {selectedModel === model.id && (
                            <Check className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary shrink-0" />
                          )}
                        </div>
                        <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                          {model.description}
                        </p>
                        <div className="flex items-center gap-2 sm:gap-3 mt-1.5 sm:mt-2 text-xs text-muted-foreground/80 flex-wrap">
                          <span>{model.contextWindow}</span>
                          <span className="hidden sm:inline">•</span>
                          <span className="text-xs">{model.pricing}</span>
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};
