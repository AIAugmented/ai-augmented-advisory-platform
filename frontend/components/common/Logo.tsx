import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";

import { ROUTES } from "@/routes";

export default function Logo({ href = ROUTES.home }: { href: string }) {
  return (
    <Link href={href} className="group flex items-center gap-2.5">
      <div className="relative h-5 w-5">
        <Image
          src="/icons/logo.svg"
          alt="AI-Augmented Logo"
          fill
          priority
          unoptimized
          quality={100}
          className="object-contain"
        />
      </div>
      <div className="flex items-center gap-2.5">
        <h5 className="font-bold transition-all duration-300 group-hover:text-foreground/80">
          AI-Augmented
        </h5>
        <Badge
          variant="outline"
          className="border-[#D3B795] bg-[#D3B795]/70 px-2 py-1 text-xs font-bold tracking-wider dark:border-[#D3B795] dark:bg-[#D3B795]/20"
        >
          BETA
        </Badge>
      </div>
    </Link>
  );
}
