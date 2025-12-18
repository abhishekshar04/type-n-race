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
          className = "border-b-2 border-yellow-500 text-foreground";
        }


        const displayChar = char === " " ? " " : char;

        return (
          <span key={idx} className={className}>
            {displayChar}
          </span>
        );
      })}
    </div>
  );
}
