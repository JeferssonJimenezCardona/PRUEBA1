import React, { useState, useRef, useEffect } from 'react';
import { ChatMessage } from '../types';
import { sendMessageToGemini } from '../services/geminiService';
import { Send, Bot, User, Loader2, Sparkles } from 'lucide-react';
import { Button } from './Button';

export const AITutor: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'model',
      text: 'Hola, soy el Tutor Kognia. ¿En qué puedo ayudarte con tu aprendizaje de IA hoy?',
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      const responseText = await sendMessageToGemini(userMsg.text, messages.map(m => m.text));
      
      const botMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: responseText,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botMsg]);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-[600px] bg-kognia-card border border-kognia-border rounded-xl overflow-hidden shadow-2xl">
      {/* Header */}
      <div className="bg-slate-900/50 p-4 border-b border-kognia-border flex items-center gap-3">
        <div className="p-2 bg-brand-900/30 rounded-lg text-brand-400">
          <Sparkles size={20} />
        </div>
        <div>
          <h3 className="font-semibold text-white">Tutor IA</h3>
          <p className="text-xs text-kognia-muted">Potenciado por Gemini 2.5</p>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
          >
            <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
              msg.role === 'user' ? 'bg-indigo-600 text-white' : 'bg-brand-600 text-white'
            }`}>
              {msg.role === 'user' ? <User size={14} /> : <Bot size={14} />}
            </div>
            <div className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
              msg.role === 'user' 
                ? 'bg-indigo-600 text-white rounded-tr-sm' 
                : 'bg-slate-700/50 text-slate-200 border border-slate-600 rounded-tl-sm'
            }`}>
              {msg.text}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex gap-3">
             <div className="w-8 h-8 rounded-full bg-brand-600 text-white flex items-center justify-center flex-shrink-0">
               <Bot size={14} />
             </div>
             <div className="bg-slate-700/50 px-4 py-3 rounded-2xl rounded-tl-sm flex items-center gap-2">
               <Loader2 size={16} className="animate-spin text-kognia-muted" />
               <span className="text-xs text-kognia-muted">Pensando...</span>
             </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-4 bg-slate-900/50 border-t border-kognia-border">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Pregunta sobre el temario..."
            className="flex-1 bg-slate-800 border border-slate-600 rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-brand-500 placeholder-slate-500 transition-colors"
          />
          <Button onClick={handleSend} disabled={isLoading} className="!px-3">
            <Send size={18} />
          </Button>
        </div>
        <p className="text-[10px] text-center text-slate-500 mt-2">
          La IA puede cometer errores. Verifica la información importante.
        </p>
      </div>
    </div>
  );
};