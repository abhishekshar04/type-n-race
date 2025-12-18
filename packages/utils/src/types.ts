export type CharState = "pending" | "correct" | "incorrect";

export interface TypingState {
  text: string;
  currentIndex: number;
  charStates: CharState[];
  startedAt: number | null;
  endedAt: number | null;
}
