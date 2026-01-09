export interface Program {
  id: string;
  title: string;
  duration: string;
  description: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
}

export interface ScrollProgress {
  scrollY: number;
  progress: number;
}