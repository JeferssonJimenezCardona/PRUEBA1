import React, { useState } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Tab } from './types';
import { COURSE_MODULES } from './constants';
import { CourseCard } from './components/CourseCard';
import { AITutor } from './components/AITutor';
import { Button } from './components/Button';
import { Terminal, BookOpen, Menu, X, Cpu, Rocket, ShieldCheck } from 'lucide-react';

const Dashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>(Tab.CURRICULUM);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-kognia-bg text-kognia-text font-sans selection:bg-brand-500/30">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-kognia-bg/90 backdrop-blur-md border-b border-kognia-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-gradient-to-br from-brand-500 to-indigo-600 rounded-lg flex items-center justify-center text-white shadow-lg shadow-brand-500/20 ring-1 ring-white/10">
                <Cpu size={20} />
              </div>
              <span className="font-bold text-xl tracking-tight text-white">
                Kognia<span className="text-brand-500">AI</span>
              </span>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => setActiveTab(Tab.CURRICULUM)}
                className={`text-sm font-medium transition-all duration-200 ${
                  activeTab === Tab.CURRICULUM ? 'text-brand-400 scale-105' : 'text-kognia-muted hover:text-white'
                }`}
              >
                Temario
              </button>
              <button 
                onClick={() => setActiveTab(Tab.TUTOR)}
                className={`text-sm font-medium transition-all duration-200 ${
                  activeTab === Tab.TUTOR ? 'text-brand-400 scale-105' : 'text-kognia-muted hover:text-white'
                }`}
              >
                Tutor Inteligente
              </button>
              <div className="h-4 w-px bg-kognia-border"></div>
              <Button variant="primary" className="!py-1.5 !text-sm !px-5 rounded-full">
                Acceso Estudiante
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
                className="text-kognia-muted hover:text-white transition-colors"
              >
                {isMobileMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-kognia-card border-b border-kognia-border absolute w-full left-0 animate-in slide-in-from-top-5">
            <div className="px-4 pt-2 pb-4 space-y-2">
              <button 
                onClick={() => { setActiveTab(Tab.CURRICULUM); setIsMobileMenuOpen(false); }}
                className={`block w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                  activeTab === Tab.CURRICULUM ? 'bg-brand-900/20 text-brand-400' : 'text-white hover:bg-white/5'
                }`}
              >
                Temario
              </button>
              <button 
                onClick={() => { setActiveTab(Tab.TUTOR); setIsMobileMenuOpen(false); }}
                className={`block w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                  activeTab === Tab.TUTOR ? 'bg-brand-900/20 text-brand-400' : 'text-white hover:bg-white/5'
                }`}
              >
                Tutor Inteligente
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="pt-28 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Sidebar / Intro Area */}
          <div className="lg:col-span-4 space-y-8">
            <div className="bg-gradient-to-b from-slate-800 to-slate-900/50 border border-kognia-border p-8 rounded-2xl shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
                <Rocket size={120} />
              </div>
              
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-semibold mb-4">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
                </span>
                CURSO EN VIVO
              </div>

              <h1 className="text-3xl lg:text-4xl font-bold text-white mb-3 leading-tight">
                Ingeniería de <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-indigo-400">
                  IA Aplicada
                </span>
              </h1>
              
              <p className="text-kognia-muted mb-8 text-sm leading-relaxed">
                Una formación intensiva para dominar la creación de aplicaciones con LLMs, RAG y Agentes Autónomos utilizando Gemini API.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-black/20 p-3 rounded-lg border border-white/5">
                  <div className="flex items-center gap-2 text-brand-400 mb-1">
                    <Terminal size={16} />
                    <span className="font-bold">Práctico</span>
                  </div>
                  <p className="text-xs text-slate-400">80% Código</p>
                </div>
                <div className="bg-black/20 p-3 rounded-lg border border-white/5">
                  <div className="flex items-center gap-2 text-brand-400 mb-1">
                    <BookOpen size={16} />
                    <span className="font-bold">3 Módulos</span>
                  </div>
                  <p className="text-xs text-slate-400">Certificado</p>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-xs font-medium">
                  <span className="text-white">Progreso del Curso</span>
                  <span className="text-brand-400">15%</span>
                </div>
                <div className="w-full bg-slate-700/30 rounded-full h-2.5 overflow-hidden ring-1 ring-white/5">
                  <div className="bg-gradient-to-r from-brand-600 to-brand-400 h-2.5 rounded-full w-[15%] shadow-[0_0_10px_rgba(14,165,233,0.5)]"></div>
                </div>
              </div>
            </div>

            <div className="hidden lg:block bg-kognia-card border border-kognia-border rounded-2xl p-6">
              <h3 className="text-xs font-bold text-kognia-muted uppercase tracking-wider mb-4 flex items-center gap-2">
                <ShieldCheck size={14} />
                Garantía de Aprendizaje
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 group cursor-pointer">
                  <div className="w-1.5 h-1.5 mt-2 bg-slate-600 rounded-full group-hover:bg-brand-500 transition-colors"></div>
                  <div>
                    <span className="block text-sm text-slate-200 group-hover:text-white transition-colors">Acceso a Gemini 2.5 Pro</span>
                    <span className="text-xs text-slate-500">Incluido en el entorno</span>
                  </div>
                </li>
                <li className="flex items-start gap-3 group cursor-pointer">
                  <div className="w-1.5 h-1.5 mt-2 bg-slate-600 rounded-full group-hover:bg-brand-500 transition-colors"></div>
                  <div>
                    <span className="block text-sm text-slate-200 group-hover:text-white transition-colors">Repositorio GitHub</span>
                    <span className="text-xs text-slate-500">Código fuente completo</span>
                  </div>
                </li>
                <li className="flex items-start gap-3 group cursor-pointer">
                  <div className="w-1.5 h-1.5 mt-2 bg-slate-600 rounded-full group-hover:bg-brand-500 transition-colors"></div>
                  <div>
                    <span className="block text-sm text-slate-200 group-hover:text-white transition-colors">Comunidad Discord</span>
                    <span className="text-xs text-slate-500">Soporte 24/7</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Content Area */}
          <div className="lg:col-span-8">
            {/* Tabs Selector */}
            <div className="flex items-center gap-6 mb-8 border-b border-kognia-border">
              <button 
                onClick={() => setActiveTab(Tab.CURRICULUM)}
                className={`pb-4 px-2 text-sm font-medium transition-all relative outline-none ${
                  activeTab === Tab.CURRICULUM ? 'text-white' : 'text-kognia-muted hover:text-slate-300'
                }`}
              >
                Contenido del Curso
                {activeTab === Tab.CURRICULUM && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-500 shadow-[0_-2px_10px_rgba(14,165,233,0.5)]"></span>
                )}
              </button>
              <button 
                onClick={() => setActiveTab(Tab.TUTOR)}
                className={`pb-4 px-2 text-sm font-medium transition-all relative outline-none ${
                  activeTab === Tab.TUTOR ? 'text-white' : 'text-kognia-muted hover:text-slate-300'
                }`}
              >
                Asistente Virtual (AI)
                {activeTab === Tab.TUTOR && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-500 shadow-[0_-2px_10px_rgba(14,165,233,0.5)]"></span>
                )}
              </button>
            </div>

            {/* Tab Panels */}
            {activeTab === Tab.CURRICULUM && (
              <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
                {COURSE_MODULES.map((module, idx) => (
                  <CourseCard key={module.id} module={module} index={idx} />
                ))}
              </div>
            )}

            {activeTab === Tab.TUTOR && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <AITutor />
              </div>
            )}
          </div>

        </div>
      </main>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </HashRouter>
  );
};

export default App;