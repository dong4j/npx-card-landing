/* eslint-disable react/no-unescaped-entities */
"use client"
import { ArrowRight, Github, Cpu, Volume2, Code, Award } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { ApiStatus } from '@/components/ApiStatus'

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <header className="container mx-auto px-4 py-8">
        <nav className="flex justify-between items-center">
          <div className="text-2xl font-bold">npx dong4j</div>
          <div className="flex items-center space-x-4">
            <a href="#features" className="hover:text-blue-400 transition-colors">Features</a>
            <a href="#usage" className="hover:text-blue-400 transition-colors">Usage</a>
            <a href="https://home.dong4j.site" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">Home</a>
            <a href="https://github.com/dong4j/npx-card" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">GitHub</a>
            <a href="https://blog.dong4j.site" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">Blog</a>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-4">
        <section className="text-center py-20">
          <h1 className="text-5xl font-bold mb-6">npx dong4j</h1>
          <p className="text-xl mb-8">No need to globally install dependency packages, quick to run and display personal information.</p>
          <div className="flex justify-center space-x-4">
            <Button asChild>
              <a href="https://www.npmjs.com/package/dong4j" target="_blank" rel="noopener noreferrer">
                Try <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button asChild>
              <a target="_blank" rel="noopener noreferrer" className="flex items-center">
                <ApiStatus /> <Code className="mx-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </section>

        <section id="features" className="py-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Key Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Cpu className="h-10 w-10" />}
              title="Social contact"
              description="Display your social contact information."
            />
            <FeatureCard
              icon={<Volume2 className="h-10 w-10" />}
              title="Free AI Chat"
              description="Experience free AI chat with a variety of models."
            />
            <FeatureCard
              icon={<Award className="h-10 w-10" />}
              title="Latest Blog Content"
              description="Stay updated with the latest blog content."
            />
          </div>
        </section>

        <section id="usage" className="py-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Quick Start</h2>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg overflow-x-auto">
            <h3 className="text-xl font-semibold mb-4">brew install node</h3>
            <h4 className="text-lg font-medium mb-2">npx dong4j</h4>
            <pre className="text-sm mb-6">
              <code>{`
                                                            ┌───────────────────────────────────────────────────┐
                                                            │                                                   │
                                                            │                 Hi there, I'm dong4j              │
                                                            │                                                   │
                                                            │          Work:  Software Engineer at iHome        │
                                                            │                                                   │
                                                            │       Twitter:  https://twitter.com/dong4j        │
                                                            │        GitHub:  https://github.com/dong4j         │
                                                            │      LinkedIn:  https://linkedin.com/in/dong4j    │
                                                            │      Homepage:  https://home.dong4j.site          │
                                                            │          Blog:  https://blog.dong4j.site          │
                                                            │                                                   │
                                                            │          Card:  npx dong4j                        │
                                                            │                                                   │
                                                            │   I am currently looking for new opportunities,   │
                                                            │   my inbox is always open. Whether you have a     │
                                                            │   question or just want to say hi, I will try     │
                                                            │   my best to get back to you!                     │
                                                            │                                                   │
                                                            └───────────────────────────────────────────────────┘

Tip: Try cmd/ctrl + click on the links above

? What would you like to do? (Use arrow keys)
❯ 1. Send me an email?
2. Download my Resume?
3. Contact me via WeChat 📱
4. Show my Github Stats 〽️
5. Play Dino Runner Game 🦖
6. Chat with AI Assistant 🤖
7. Show my Latest blog 💥
Just quit. 👋
              `}</code>
            </pre>
            <h4 className="text-lg font-medium mb-2">A simple game 👾</h4>
            <pre className="text-sm mb-6">
              <code>{`
🦖             🌵
⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯

Press SPACE to jump, Ctrl+C to exit
Score: 0
              `}</code>
            </pre>
            <h4 className="text-lg font-medium mb-2">AI Chat 🤖: Use provided AI service</h4>
            <pre className="text-sm mb-6">
              <code>{`
? What would you like to do? AI Assistant

🤖 Welcome to AI Chat!

Type your message and press Enter to chat.
Type "exit" to return to the main menu.

? How would you like to configure the AI service? Use provided AI service
? 👉 You: hello world

🎉 AI Assistant: Hello! I'm ChatGLM（智谱清言）, the artificial intelligence assistant, nice to meet you. Feel free to ask me any questions.

? 👉 You: What can you do?
              `}</code>
            </pre>
            <h4 className="text-lg font-medium mb-2">AI Chat 🤖: Use custom configuration</h4>
            <pre className="text-sm mb-6">
              <code>{`
? How would you like to configure the AI service? Use custom configuration
? Enter your OpenAI API key: [hidden]
? Do you want to use a custom API URL? Yes
? Enter the API base URL: https://api.openai.com/v1
? Enter the model name: gpt-3.5-turbo

OpenAI API Configuration:

Using configuration:
API URL: https://api.openai.com/v1
Model: gpt-3.5-turbo

? 👉 You:
              `}</code>
            </pre>
            <h4 className="text-lg font-medium mb-2">Recommended for use</h4>
            <pre className="text-sm">
              <code>{`npx dong4j --no`}</code>
            </pre>
            <br/>
            <p>Because I cannot control your npm configuration, there may be some dependency warnings, and this method will suppress the warnings</p>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 py-8 mt-20">
        <div className="container mx-auto px-4 text-center">
          <p>© dong4j</p>
          <div className="mt-4">
            <a href="https://github.com/dong4j" target="_blank" rel="noopener noreferrer" className="inline-block">
              <Github className="h-6 w-6" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
      <div className="flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  )
}

