import { ReactNode } from "react";
import Label from "@/components/atoms/Label";

export default function FormField({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <Label htmlFor={id}>{label}</Label>
      {children}
      {error && <p className="text-xs text-[color:var(--brand)]">{error}</p>}
    </div>
  );
}
