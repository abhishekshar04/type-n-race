import { useCallback, useEffect, useState } from "react";
import {
  initTypingState,
  applyKey,
  calculateStats
} from "@typing-platform/utils";
import type {TypingState} from "@typing-platform/utils";

export function useTyping(text: string) {
  const [state, setState] = useState<TypingState>(() =>
    initTypingState(text)
  );

  const onKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.ctrlKey || e.metaKey) return;
    if (e.key === "Tab") e.preventDefault();

    setState((prev) => applyKey(prev, e.key));
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onKeyDown]);

  const stats = calculateStats(state);

  const reset = () => setState(initTypingState(text));

  return { state, stats, reset };
}
