import { TypingState } from "./types";

export function applyKey(
  state: TypingState,
  key: string
): TypingState {
  if (state.endedAt !== null) return state;
  if (key.length > 1 && key !== "Backspace") return state;

  let { currentIndex, charStates, startedAt } = state;

  // Start timer
  if (startedAt === null && key !== "Backspace") {
    startedAt = Date.now();
  }

  // Handle backspace
  if (key === "Backspace") {
    if (currentIndex === 0) return state;

    const newCharStates = [...charStates];
    newCharStates[currentIndex - 1] = "pending";

    return {
      ...state,
      currentIndex: currentIndex - 1,
      charStates: newCharStates,
      startedAt
    };
  }

  const expectedChar = state.text[currentIndex];
  const newCharStates = [...charStates];

  newCharStates[currentIndex] =
    key === expectedChar ? "correct" : "incorrect";

  currentIndex++;

  const endedAt =
    currentIndex === state.text.length ? Date.now() : null;

  return {
    ...state,
    currentIndex,
    charStates: newCharStates,
    startedAt,
    endedAt
  };
}
