import type { CharState } from "@typing-platform/utils";

interface Props {
  text: string;
  charStates: CharState[];
  currentIndex: number;
}

export default function TypingText({
  text,
  charStates,
  currentIndex
}: Props) {
  return (
    <div className="font-mono text-xl leading-relaxed select-none">
      {text.split("").map((char, idx) => {
        let className = "text-muted-foreground";

        if (charStates[idx] === "correct") {
          className = "text-green-500";
        } else if (charStates[idx] === "incorrect") {
          className = "text-red-500";
        } else if (idx === currentIndex) {
          className = "bg-yellow-200 text-black";
        }

        return (
          <span key={idx} className={className}>
            {char}
          </span>
        );
      })}
    </div>
  );
}
