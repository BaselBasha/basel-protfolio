interface TagProps { label: string; }

export function Tag({ label }: TagProps) {
  return (
    <span className="inline-block font-mono text-[11px] tracking-wider text-text-secondary bg-bg-elevated border border-border px-2 py-1 rounded-sm">
      {label}
    </span>
  );
}
