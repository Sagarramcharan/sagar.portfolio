
export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  category: 'web' | 'ai' | 'design';
}

export interface Skill {
  name: string;
  icon: string;
  level: number;
  category: 'Frontend' | 'Backend' | 'Tools' | 'Design';
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  duration: string;
  description: string[];
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}
