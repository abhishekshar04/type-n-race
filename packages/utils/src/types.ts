export interface TypingState {
  text: string;
  currentIndex: number;
  correct: number;
  incorrect: number;
  startedAt: number | null;
  endedAt: number | null;
}
