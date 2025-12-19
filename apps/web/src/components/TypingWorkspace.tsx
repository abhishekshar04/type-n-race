import { Button } from "@/components/ui/button";
import { Keyboard } from 'lucide-react'

interface TypingWorkspaceProps {
  textIndex: number;
  totalTexts: number;
  progress: number;
  onRestart: () => void;
  onNewText: () => void;
  children: React.ReactNode;
}

export default function TypingWorkspace({

  progress,
  onRestart,
  onNewText,
  children
}: TypingWorkspaceProps) {
  return (
    <div
      className="
        rounded-2xl
        bg-base
        border
        border-textBase/20
        p-6
      "
    >
      {/* Top bar */}
      {/* Top bar */}
<div className="flex items-center justify-between">
  {/* Left: context */}
  <div className="flex items-center gap-2 text-textMuted">
    <Keyboard className="text-lg" />
    <span className="text-sm">
      Typing Session
    </span>
  </div>

  {/* Right: actions */}
  <div className="flex gap-3">
    <Button
      size="sm"
      onClick={onRestart}
      className="
        border-2 border-textBase
        bg-transparent
        text-textBase
        transition-colors
        hover:bg-orange-300
        hover:blur-in-md
      "
    >
      Restart
    </Button>

    <Button
      size="sm"
      onClick={onNewText}
      className="
        border-2 border-textBase
        text-textBase
        transition-colors
        hover:blur-in-md
      "
    >
      New Text
    </Button>
  </div>
</div>


      {/* Progress bar */}
      <div className="mt-4 h-1 w-full rounded-full bg-textMuted/30">
        <div
          className="
            h-full
            rounded-full
            bg-primary
            transition-all
          "
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Typing box */}
      <div
        className="
          mt-6
          rounded-xl
          border
          border-textBase/30
          bg-base
          p-6
        "
      >
        {children}
      </div>
    </div>
  );
}
