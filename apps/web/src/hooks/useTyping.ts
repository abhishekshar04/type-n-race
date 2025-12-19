import { useCallback, useEffect, useState } from "react";
import {
  initTypingState,
  applyKey,
  calculateStats
} from "@typing-platform/utils";
import type { TypingState } from "@typing-platform/utils";
export function useTyping(text: string) {
  const [state, setState] = useState<TypingState>(() =>
    initTypingState(text)
  );

  useEffect(() => {
    setState(initTypingState(text));
  }, [text]);

  const onKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.ctrlKey || e.metaKey || e.altKey) return;

    const isValidKey =
      e.key.length === 1 || e.key === "Backspace";

    if (!isValidKey) {
      e.preventDefault();
      return;
    }

    setState((prev) => applyKey(prev, e.key));
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", onKeyDown);
    return () =>
      window.removeEventListener("keydown", onKeyDown);
  }, [onKeyDown]);

  const stats = calculateStats(state);

  const reset = () => setState(initTypingState(text));

  return { state, stats, reset };
}
