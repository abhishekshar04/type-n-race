function Stat({
  label,
  value
}: {
  label: string;
  value: string | number;
}) {
  return (
    <div
      className="
        flex-1
        rounded-xl
        border
        border-textBase/20
        bg-base
        p-6
        text-center
      "
    >
      <div className="text-4xl font-bold text-textBase">
        {value}
      </div>
      <div className="mt-2 text-sm text-textMuted">
        {label}
      </div>
    </div>
  );
}

export default function TypingStats({
  wpm,
  accuracy,
  errors
}: {
  wpm: number;
  accuracy: number;
  errors: number;
}) {
  return (
    <div className="mt-6 flex gap-6">
      <Stat label="WPM" value={wpm} />
      <Stat label="ACCURACY" value={`${accuracy}%`} />
      <Stat label="ERRORS" value={errors} />
    </div>
  );
}
