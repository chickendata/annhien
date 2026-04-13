"use client";

import Icon from "@/components/atoms/Icon";

export default function QuantityStepper({
  value,
  onChange,
  min = 1,
  max = 99,
}: {
  value: number;
  onChange: (next: number) => void;
  min?: number;
  max?: number;
}) {
  const dec = () => onChange(Math.max(min, value - 1));
  const inc = () => onChange(Math.min(max, value + 1));

  return (
    <div className="inline-flex items-center border border-[color:var(--border)]">
      <button
        type="button"
        onClick={dec}
        aria-label="Decrease"
        className="flex h-9 w-9 items-center justify-center hover:bg-[color:var(--surface)]"
      >
        <Icon name="minus" size={14} />
      </button>
      <span className="w-10 text-center text-sm tabular-nums">{value}</span>
      <button
        type="button"
        onClick={inc}
        aria-label="Increase"
        className="flex h-9 w-9 items-center justify-center hover:bg-[color:var(--surface)]"
      >
        <Icon name="plus" size={14} />
      </button>
    </div>
  );
}
