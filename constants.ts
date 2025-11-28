import { Module } from './types';

export const COURSE_MODULES: Module[] = [
  {
    id: 'm1',
    title: 'Fundamentos de IA Generativa',
    description: 'Comprende la arquitectura Transformer, tokens y el ecosistema actual.',
    lessons: [
      { id: 'l1-1', title: 'Introducción a LLMs', duration: '15:00', isLocked: false },
      { id: 'l1-2', title: 'Tokens vs Palabras', duration: '10:30', isLocked: false },
      { id: 'l1-3', title: 'Temperatura y Top-K', duration: '12:45', isLocked: false },
    ]
  },
  {
    id: 'm2',
    title: 'Ingeniería de Prompts Avanzada',
    description: 'Técnicas de Chain-of-Thought, Few-Shot y estructuración de salidas.',
    lessons: [
      { id: 'l2-1', title: 'Zero-shot vs Few-shot', duration: '20:00', isLocked: true },
      { id: 'l2-2', title: 'Chain of Thought (CoT)', duration: '18:15', isLocked: true },
      { id: 'l2-3', title: 'Formatos JSON y Tablas', duration: '14:20', isLocked: true },
    ]
  },
  {
    id: 'm3',
    title: 'Integración de Gemini API',
    description: 'Construcción de aplicaciones reales utilizando el SDK de Google.',
    lessons: [
      { id: 'l3-1', title: 'Configuración y API Keys', duration: '08:00', isLocked: true },
      { id: 'l3-2', title: 'Generación de Texto e Imágenes', duration: '25:00', isLocked: true },
      { id: 'l3-3', title: 'Multimodalidad y Video', duration: '30:00', isLocked: true },
    ]
  }
];

export const SYSTEM_INSTRUCTION = `
Eres "Kognia Tutor", un asistente experto en Inteligencia Artificial para un curso de formación profesional.
Tu objetivo es ayudar a los estudiantes a entender conceptos complejos de IA, explicar el código y guiarlos en el temario.
Responde de manera concisa, técnica pero accesible, y siempre en español.
Si te preguntan sobre el curso, refiérete a los módulos de: Fundamentos, Prompt Engineering y API de Gemini.
`;