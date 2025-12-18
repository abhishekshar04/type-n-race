import { TypingState } from "./types";

export function initTypingState(text: string): TypingState {
  return {
    text,
    currentIndex: 0,
    correct: 0,
    incorrect: 0,
    startedAt: null,
    endedAt: null
  };
}
