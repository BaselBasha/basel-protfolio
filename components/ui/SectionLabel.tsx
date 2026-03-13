interface SectionLabelProps { number: string; label: string; }

export function SectionLabel({ number, label }: SectionLabelProps) {
  return (
    <div className="flex items-center gap-4 mb-8">
      <span className="font-mono text-xs text-accent tracking-widest uppercase">
        {number} / {label}
      </span>
      <div className="flex-1 h-px bg-border" />
    </div>
  );
}
