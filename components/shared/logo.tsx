import Image from "next/image";
import Link from "next/link";

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={className} aria-label="AL MYTHAQ Building Cleaning Service">
      <Image
        src="/logo.png"
        alt="AL MYTHAQ Building Cleaning Service"
        width={160}
        height={48}
        priority
      />
    </Link>
  );
}
