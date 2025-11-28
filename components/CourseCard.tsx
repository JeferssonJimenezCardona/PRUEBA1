import React, { useState } from 'react';
import { Module } from '../types';
import { ChevronDown, ChevronUp, PlayCircle, Lock } from 'lucide-react';

interface CourseCardProps {
  module: Module;
  index: number;
}

export const CourseCard: React.FC<CourseCardProps> = ({ module, index }) => {
  const [isOpen, setIsOpen] = useState(index === 0);

  return (
    <div className="bg-kognia-card border border-kognia-border rounded-xl overflow-hidden mb-4 transition-all duration-300 hover:border-brand-500/30">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
      >
        <div>
          <span className="text-xs font-bold text-brand-500 uppercase tracking-wider mb-1 block">
            Módulo {index + 1}
          </span>
          <h3 className="text-lg font-semibold text-white">{module.title}</h3>
          <p className="text-sm text-kognia-muted mt-1">{module.description}</p>
        </div>
        <div className="text-kognia-muted">
          {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </div>
      </button>

      {isOpen && (
        <div className="bg-black/20 border-t border-kognia-border">
          {module.lessons.map((lesson) => (
            <div 
              key={lesson.id}
              className={`px-6 py-3 flex items-center justify-between border-b border-kognia-border/50 last:border-0 ${
                lesson.isLocked ? 'opacity-50 cursor-not-allowed' : 'hover:bg-white/5 cursor-pointer'
              }`}
            >
              <div className="flex items-center gap-3">
                {lesson.isLocked ? (
                  <Lock size={16} className="text-kognia-muted" />
                ) : (
                  <PlayCircle size={16} className="text-brand-400" />
                )}
                <span className="text-sm text-kognia-text">{lesson.title}</span>
              </div>
              <span className="text-xs text-kognia-muted font-mono">{lesson.duration}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};