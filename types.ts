export interface Lesson {
  id: string;
  title: string;
  duration: string;
  isLocked: boolean;
}

export interface Module {
  id: string;
  title: string;
  description: string;
  lessons: Lesson[];
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export enum Tab {
  CURRICULUM = 'CURRICULUM',
  TUTOR = 'TUTOR',
  ABOUT = 'ABOUT'
}