import { Button } from "@/components/ui/button";
import { useTyping } from "@/hooks/useTyping";
import TypingText from "@/components/TypingTest";

const SAMPLE_TEXT =
  "The quick brown fox jumps over the lazy dog.";

export default function Practice() {
  const { state, stats, reset } = useTyping(SAMPLE_TEXT);

  const finished = state.endedAt !== null;

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Practice</h1>
      <p className="text-sm text-muted-foreground">
        Start typing to begin the test
      </p>

      <TypingText
        text={state.text}
        charStates={state.charStates}
        currentIndex={state.currentIndex}
      />

      {finished && (
        <p className="text-sm text-muted-foreground">
          Test completed. Press restart to try again.
        </p>
      )}

      {finished && (
        <div className="flex gap-6">
          <div>WPM: {stats.wpm}</div>
          <div>Accuracy: {stats.accuracy}%</div>
        </div>
      )}

      <Button onClick={reset} variant="outline">
        Restart
      </Button>
    </div>
  );
}
