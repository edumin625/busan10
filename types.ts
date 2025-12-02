export interface ThemeStrategy {
  id: string;
  keyword: string;
  keywordKr: string;
  title: string;
  description: string;
  locations: string[];
  target: string;
  color: string;
}

export interface SentimentData {
  name: string;
  value: number;
  fill: string;
}

export interface CommentData {
  author: string;
  content: string;
  likes: number;
  sentiment: 'positive' | 'negative' | 'neutral';
}

export interface Flashcard {
  id: number;
  question: string;
  answer: string;
  hint: string;
}