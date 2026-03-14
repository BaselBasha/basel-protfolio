interface TagProps { label: string; }

export function Tag({ label }: TagProps) {
  return (
    <span className="inline-block mb-4 font-mono text-[11px] tracking-wider text-text-secondary bg-bg-elevated border border-border px-3 py-1.5 rounded-sm">
      {label}
    </span>
  );
}
