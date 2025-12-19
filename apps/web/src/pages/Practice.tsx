import { useState } from "react";
import TypingText from "@/components/TypingText";
import { useTyping } from "@/hooks/useTyping";
import { typingTexts } from "@/data/typingTexts";
import TypingWorkspace from "@/components/TypingWorkspace";
import TypingStats from "@/components/TypingStats";
export default function Practice() {
  const [selectedId, setSelectedId] = useState(
    typingTexts[0].id
  );

  const selectedText =
    typingTexts.find((t) => t.id === selectedId)!.text;

  const { state, stats, reset } = useTyping(selectedText);
  const finished = state.endedAt !== null;
  const progress =
  (state.currentIndex / state.text.length) * 100;
  return (
    <div className="space-y-10">
      {/* Header */}
          <TypingWorkspace
      textIndex={1}
      totalTexts={typingTexts.length}
      progress={progress}
      onRestart={reset}
      onNewText={() => {
        const next =
          (typingTexts.findIndex(t => t.id === selectedId) + 1) %
          typingTexts.length;
        setSelectedId(typingTexts[next].id);
      }}
    >
      <TypingText
        text={state.text}
        charStates={state.charStates}
        currentIndex={state.currentIndex}
        isStarted={state.startedAt !== null}
      />
    </TypingWorkspace>
    <TypingStats
      wpm={stats.wpm}
      accuracy={stats.accuracy}
      errors={
        state.charStates.filter(c => c === "incorrect").length
      }
    />
    </div>
  );
}
