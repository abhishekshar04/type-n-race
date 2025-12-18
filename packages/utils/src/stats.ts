import { TypingState } from "./types";

export function calculateStats(state: TypingState) {
  if (!state.startedAt || !state.endedAt) {
    return { wpm: 0, accuracy: 0 };
  }

  const correct = state.charStates.filter(
    (c) => c === "correct"
  ).length;

  const incorrect = state.charStates.filter(
    (c) => c === "incorrect"
  ).length;

  const timeInMinutes =
    (state.endedAt - state.startedAt) / 1000 / 60;

  const wpm =
    timeInMinutes > 0
      ? Math.round((correct / 5) / timeInMinutes)
      : 0;

  const accuracy =
    correct + incorrect > 0
      ? Math.round((correct / (correct + incorrect)) * 100)
      : 0;

  return { wpm, accuracy };
}
