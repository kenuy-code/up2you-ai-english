
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Send } from "lucide-react";

export const ChatSection = () => {
  const [messages, setMessages] = useState<Array<{role: 'user' | 'assistant', content: string}>>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const newMessage = { role: 'user' as const, content: input };
    setMessages(prev => [...prev, newMessage]);
    setInput("");
    setIsLoading(true);

    // Simulated assistant response
    setTimeout(() => {
      const responses = [
        "Can you practice this sentence: 'I enjoy learning English!'",
        "Great question! In English, we usually say it this way...",
        "Let's practice some vocabulary. What words do you know about...",
        "That's correct! Here's another example you can try...",
        "Would you like to practice pronunciation? Repeat after me...",
      ];
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      
      const assistantMessage = { 
        role: 'assistant' as const, 
        content: randomResponse
      };
      setMessages(prev => [...prev, assistantMessage]);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="h-[calc(100vh-12rem)] flex flex-col">
      <Card className="flex-grow p-4 mb-4 overflow-y-auto">
        <div className="space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] rounded-lg p-3 ${
                  message.role === 'user'
                    ? 'bg-up2you-coral text-white'
                    : 'bg-gray-100 text-up2you-darkGray'
                }`}
              >
                {message.content}
              </div>
            </div>
          ))}
          {messages.length === 0 && (
            <div className="text-center text-gray-500">
              Comece uma conversa com seu assistente de inglês! Você pode fazer perguntas, praticar diálogos ou tirar dúvidas.
            </div>
          )}
        </div>
      </Card>

      <form onSubmit={handleSubmit} className="flex gap-2">
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Digite sua mensagem..."
          className="flex-grow"
          disabled={isLoading}
        />
        <Button type="submit" size="icon" disabled={isLoading}>
          <Send className="h-4 w-4" />
        </Button>
      </form>
    </div>
  );
};
