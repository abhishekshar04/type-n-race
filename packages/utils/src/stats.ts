import { TypingState } from "./types";

export function calculateStats(state: TypingState) {
  if (!state.startedAt || !state.endedAt) {
    return { wpm: 0, accuracy: 0 };
  }

  const timeInMinutes =
    (state.endedAt - state.startedAt) / 1000 / 60;

  const totalTyped = state.correct + state.incorrect;

  const wpm =
    timeInMinutes > 0
      ? Math.round((state.correct / 5) / timeInMinutes)
      : 0;

  const accuracy =
    totalTyped > 0
      ? Math.round((state.correct / totalTyped) * 100)
      : 0;

  return { wpm, accuracy };
}
