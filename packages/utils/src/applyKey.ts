import { TypingState } from "./types";

export function applyKey(
  state: TypingState,
  key: string
): TypingState {

    if (state.endedAt !== null) return state;

    if (key.length > 1 && key !== "Backspace") return state;

    let { currentIndex, correct, incorrect, startedAt } = state;

    if (startedAt === null && key !== "Backspace") {
        startedAt = Date.now();
    }

    if (key === "Backspace") {
        if (currentIndex === 0) return state;

        const prevChar = state.text[currentIndex - 1];
        const wasCorrect = prevChar === state.text[currentIndex - 1];

        currentIndex--;

        return {
        ...state,
        currentIndex,
        startedAt
        };
    }

    const expectedChar = state.text[currentIndex];

    if (key === expectedChar) {
        correct++;
    } else {
        incorrect++;
    }

    currentIndex++;

    const endedAt =
        currentIndex === state.text.length ? Date.now() : null;

    return {
        ...state,
        currentIndex,
        correct,
        incorrect,
        startedAt,
        endedAt
    };
}
