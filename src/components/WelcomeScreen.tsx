import { Sparkles, Brain, Code, Drama } from "lucide-react";

interface ModelCategory {
  title: string;
  icon: React.ReactNode;
}

const categories: ModelCategory[] = [
  {
    title: "Flagship models",
    icon: <Sparkles className="h-5 w-5" />
  },
  {
    title: "Best roleplay models",
    icon: <Drama className="h-5 w-5" />
  },
  {
    title: "Best coding models",
    icon: <Code className="h-5 w-5" />
  },
  {
    title: "Reasoning models",
    icon: <Brain className="h-5 w-5" />
  }
];

const examplePrompts = [
  { title: "9.9 vs 9.11", subtitle: "Which one is larger?" },
  { title: "Strawberry Test", subtitle: "How many r's are in the word" },
  { title: "Poem Riddle", subtitle: "Compose a 12-line poem" },
  { title: "Personal Finance", subtitle: "Draft up a portfolio plan" }
];

export const WelcomeScreen = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full px-4 sm:px-6 md:px-8 pb-16 sm:pb-24 md:pb-32">
      {/* Model Categories */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8 max-w-3xl w-full">
        {categories.map((category, index) => (
          <button
            key={index}
            className="group relative p-4 sm:p-6 rounded-xl bg-gradient-to-br from-card to-card/50 border border-border hover:border-primary/50 transition-all duration-300 text-left overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative flex items-start justify-between">
              <h3 className="text-sm sm:text-base font-medium text-foreground pr-2">
                {category.title}
              </h3>
              <div className="text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0">
                {category.icon}
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Example Prompts */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-wrap gap-2 sm:gap-3 justify-center max-w-4xl w-full mb-6">
        {examplePrompts.map((prompt, index) => (
          <button
            key={index}
            className="px-3 sm:px-4 py-2 rounded-lg bg-secondary hover:bg-secondary/80 border border-border transition-all duration-200 text-left"
          >
            <div className="text-sm font-medium text-foreground">{prompt.title}</div>
            <div className="text-xs text-muted-foreground">{prompt.subtitle}</div>
          </button>
        ))}
      </div>
    </div>
  );
};
