import type { CharState } from "@typing-platform/utils";

interface Props {
  text: string;
  charStates: CharState[];
  currentIndex: number;
  isStarted: boolean;
}

export default function TypingText({
  text,
  charStates,
  currentIndex,
  isStarted
}: Props) {
  return (
    <div className="relative">
      {!isStarted && (
        <div className="absolute inset-0 flex items-center justify-center text-textMuted font-bold text-xl bg-blur">
          Click here and start typing…
        </div>
      )}

      <div
        className={`
          font-mono text-xl leading-relaxed select-none
          ${!isStarted ? "opacity-40" : "opacity-100"}
        `}
      >
        {text.split("").map((char, idx) => {
          let className = "text-textMuted";

          if (charStates[idx] === "correct") {
            className = "text-green-600";
          } else if (charStates[idx] === "incorrect") {
            className = "text-red-700";
          } else if (idx === currentIndex) {
            className =
              "border-b-2 border-textBase text-textBase";
          } else {
            className = "text-textMuted";
          }


          return (
            <span key={idx} className={className}>
              {char === " " ? " " : char}
            </span>
          );
        })}
      </div>
    </div>
  );
}
