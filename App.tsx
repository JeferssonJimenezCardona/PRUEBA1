import React, { useState } from 'react';
import { HashRouter, Routes, Route, Link } from 'react-router-dom';
import { Tab } from './types';
import { COURSE_MODULES } from './constants';
import { CourseCard } from './components/CourseCard';
import { AITutor } from './components/AITutor';
import { Button } from './components/Button';
import { Terminal, BookOpen, MessageSquare, Menu, X, Cpu } from 'lucide-react';

const Dashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>(Tab.CURRICULUM);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-kognia-bg text-kognia-text font-sans selection:bg-brand-500/30">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-kognia-bg/80 backdrop-blur-md border-b border-kognia-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-brand-500 to-indigo-600 rounded-lg flex items-center justify-center text-white shadow-lg shadow-brand-500/20">
                <Cpu size={20} />
              </div>
              <span className="font-bold text-xl tracking-tight">Kognia<span className="text-brand-500">Learn</span></span>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => setActiveTab(Tab.CURRICULUM)}
                className={`text-sm font-medium transition-colors ${activeTab === Tab.CURRICULUM ? 'text-brand-400' : 'text-kognia-muted hover:text-white'}`}
              >
                Temario
              </button>
              <button 
                onClick={() => setActiveTab(Tab.TUTOR)}
                className={`text-sm font-medium transition-colors ${activeTab === Tab.TUTOR ? 'text-brand-400' : 'text-kognia-muted hover:text-white'}`}
              >
                Tutor IA
              </button>
              <Button variant="primary" className="!py-1.5 !text-sm">
                Panel Estudiante
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white">
                {isMobileMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-kognia-card border-b border-kognia-border">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button 
                onClick={() => { setActiveTab(Tab.CURRICULUM); setIsMobileMenuOpen(false); }}
                className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-white hover:bg-white/5"
              >
                Temario
              </button>
              <button 
                onClick={() => { setActiveTab(Tab.TUTOR); setIsMobileMenuOpen(false); }}
                className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-white hover:bg-white/5"
              >
                Tutor IA
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Sidebar / Intro Area */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-kognia-border p-6 rounded-2xl shadow-xl">
              <h1 className="text-3xl font-bold text-white mb-2">Ingeniería de IA Aplicada</h1>
              <p className="text-kognia-muted mb-6 text-sm leading-relaxed">
                Domina la creación de aplicaciones inteligentes con LLMs, RAG y Agentes Autónomos.
              </p>
              
              <div className="flex items-center gap-4 text-xs text-kognia-muted mb-6">
                <div className="flex items-center gap-1">
                  <Terminal size={14} />
                  <span>Código Intensivo</span>
                </div>
                <div className="flex items-center gap-1">
                  <BookOpen size={14} />
                  <span>3 Módulos</span>
                </div>
              </div>

              <div className="w-full bg-slate-700/50 rounded-full h-2 mb-2 overflow-hidden">
                <div className="bg-brand-500 h-2 rounded-full w-[15%]"></div>
              </div>
              <p className="text-right text-xs text-brand-400 font-mono">15% Completado</p>
            </div>

            <div className="hidden lg:block">
              <h3 className="text-sm font-semibold text-kognia-muted uppercase tracking-wider mb-4">Recursos</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-sm text-slate-300 hover:text-brand-400 cursor-pointer transition-colors">
                  <div className="w-1 h-1 bg-brand-500 rounded-full"></div>
                  Documentación Gemini
                </li>
                <li className="flex items-center gap-3 text-sm text-slate-300 hover:text-brand-400 cursor-pointer transition-colors">
                  <div className="w-1 h-1 bg-brand-500 rounded-full"></div>
                  Repositorio de GitHub
                </li>
                <li className="flex items-center gap-3 text-sm text-slate-300 hover:text-brand-400 cursor-pointer transition-colors">
                  <div className="w-1 h-1 bg-brand-500 rounded-full"></div>
                  Comunidad Discord
                </li>
              </ul>
            </div>
          </div>

          {/* Content Area */}
          <div className="lg:col-span-8">
            {/* Tabs Selector for Mobile/Desktop */}
            <div className="flex items-center gap-4 mb-6 border-b border-kognia-border pb-1">
              <button 
                onClick={() => setActiveTab(Tab.CURRICULUM)}
                className={`pb-3 px-2 text-sm font-medium transition-all relative ${
                  activeTab === Tab.CURRICULUM ? 'text-white' : 'text-kognia-muted hover:text-slate-300'
                }`}
              >
                Contenido del Curso
                {activeTab === Tab.CURRICULUM && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-500 rounded-t-full"></span>
                )}
              </button>
              <button 
                onClick={() => setActiveTab(Tab.TUTOR)}
                className={`pb-3 px-2 text-sm font-medium transition-all relative ${
                  activeTab === Tab.TUTOR ? 'text-white' : 'text-kognia-muted hover:text-slate-300'
                }`}
              >
                Asistente Virtual
                {activeTab === Tab.TUTOR && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-500 rounded-t-full"></span>
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