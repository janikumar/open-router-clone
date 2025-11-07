# OpenAI Chat Mirror

A modern, responsive AI chat interface that provides a seamless experience for interacting with multiple AI models. Built with React, TypeScript, and Tailwind CSS, this application mirrors the OpenRouter chat interface with enhanced features and mobile-first design.

## 🚀 Features

- **Real-time Streaming Chat**: Server-sent events (SSE) for progressive message rendering
- **Multi-Model Support**: Switch between different AI models (Gemini, GPT, etc.)
- **Fully Responsive**: Mobile-first design with optimized layouts for all screen sizes
- **Dark Theme**: Beautiful dark mode interface with custom color schemes
- **Quick Actions**: Pre-built templates for common tasks (images, apps, games)
- **Chat History**: Sidebar with conversation management
- **Modern UI Components**: Built with shadcn/ui and Radix UI primitives

## 🛠️ Technology Stack

### Frontend
- **React 18.3.1** - UI library
- **TypeScript 5.8.3** - Type safety
- **Vite 5.4.19** - Build tool and dev server
- **Tailwind CSS 3.4.17** - Utility-first CSS framework
- **shadcn/ui** - Component library
- **Radix UI** - Accessible component primitives
- **Lucide React** - Icon library
- **React Router DOM** - Client-side routing

### State Management
- **TanStack React Query** - Server state management
- **React Hook Form** - Form handling
- **Zod** - Schema validation

### Backend
- **Supabase** - Backend as a Service
- **Edge Functions** - Serverless API endpoints (Deno runtime)
- **AI Gateway** - Model routing and streaming

## 📦 Installation

### Prerequisites
- Node.js 16+ or Bun
- npm, yarn, pnpm, or bun package manager

### Setup

```bash
# Clone the repository
git clone https://github.com/janikumar/openai-chat-mirror.git

# Navigate to the project directory
cd openai-chat-mirror

# Install dependencies
npm install
# or
bun install

# Set up environment variables
cp .env.example .env
# Edit .env with your Supabase credentials

# Start the development server
npm run dev
# or
bun dev
```

The application will be available at `http://localhost:8080`

## 🔧 Environment Variables

Create a `.env` file in the root directory:

```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_PUBLISHABLE_KEY=your_supabase_anon_key
```

For the Supabase Edge Function, set:

```env
LOVABLE_API_KEY=your_ai_gateway_api_key
```

## 📁 Project Structure

```
openai-chat-mirror/
├── src/
│   ├── components/          # React components
│   │   ├── ui/             # shadcn/ui components
│   │   ├── ChatHistory.tsx
│   │   ├── ChatMessage.tsx
│   │   ├── EnhancedChatInput.tsx
│   │   └── WelcomeScreen.tsx
│   ├── hooks/              # Custom React hooks
│   │   └── useChat.ts
│   ├── pages/              # Route pages
│   │   ├── Index.tsx
│   │   └── NotFound.tsx
│   ├── lib/                # Utilities
│   └── integrations/       # External services
│       └── supabase/
├── supabase/
│   └── functions/
│       └── chat/           # AI chat endpoint
└── public/                 # Static assets
```

## 🎨 Responsive Design

The application is fully responsive with breakpoints:
- **Mobile**: < 640px
- **Tablet**: ≥ 640px
- **Desktop**: ≥ 1024px
- **Large Desktop**: ≥ 1280px

### Mobile Features
- Collapsible sidebar with smooth animations
- Touch-optimized UI elements
- Responsive navigation with hamburger menu
- Adaptive font sizes and spacing

## 🚀 Available Scripts

```bash
# Development server
npm run dev

# Build for production
npm run build

# Build for development mode
npm run build:dev

# Preview production build
npm run preview

# Lint code
npm run lint
```

## 🏗️ Development Workflow

1. **Local Development**: Use `npm run dev` for hot-reload development
2. **Component Development**: Components follow atomic design principles
3. **Styling**: Tailwind CSS with custom design tokens
4. **Type Safety**: Full TypeScript coverage with strict mode
5. **Code Quality**: ESLint configuration for React best practices

## 🌐 Deployment

### Build

```bash
npm run build
```

The build output will be in the `dist/` directory.

### Deploy Options

- **Vercel**: Connect your GitHub repository
- **Netlify**: Drag and drop the `dist` folder
- **Cloudflare Pages**: Connect via Git integration
- **GitHub Pages**: Use GitHub Actions workflow
- **Custom Server**: Serve the `dist` folder with any static host

### Supabase Edge Functions

Deploy edge functions using Supabase CLI:

```bash
supabase functions deploy chat
```

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for the amazing component library
- [Radix UI](https://www.radix-ui.com/) for accessible primitives
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Supabase](https://supabase.com/) for backend infrastructure

## 📧 Contact

For questions or support, please open an issue on GitHub.

---

**Repository**: [github.com/janikumar/openai-chat-mirror](https://github.com/janikumar/openai-chat-mirror)

