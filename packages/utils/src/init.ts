import { TypingState } from "./types";

export function initTypingState(text: string): TypingState {
  return {
    text,
    currentIndex: 0,
    charStates: Array(text.length).fill("pending"),
    startedAt: null,
    endedAt: null
  };
}
