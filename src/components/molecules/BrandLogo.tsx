import Image from "next/image";
import type { Brand } from "@/data/brands";

export default function BrandLogo({ brand }: { brand: Brand }) {
  return (
    <div className="relative flex h-16 w-32 items-center justify-center opacity-60 grayscale transition hover:opacity-100 hover:grayscale-0">
      <Image src={brand.logo} alt={brand.name} fill sizes="128px" className="object-contain" />
    </div>
  );
}
