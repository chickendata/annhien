import { ReactNode } from "react";
import Heading from "@/components/atoms/Heading";

export default function StaticPageTemplate({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <Heading level={1} className="mb-8">{title}</Heading>
      <div className="prose prose-neutral max-w-none text-base leading-relaxed">
        {children}
      </div>
    </div>
  );
}
