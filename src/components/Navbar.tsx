import Link from "next/link";
import { Icons } from "./Icons";
import { buttonVariants } from "./ui/Button";
import { cn } from "@/lib/utils";

export default function Navbar() {
  return (
    <div className="fixed top-0 inset-x-0 h-fit bg-zinc-100 border-b border-zinc-300 z-[10] py-2">
      <div className="container max-w-7xl h-full mx-auto flex items-center justify-between gap-2">
        <Link href="/" className="flex gap-2 items-center">
          <Icons.logo className="w-9 h-9 fill-red-500 text-zinc-700 md:w-8" />
          <p className="hidden text-zinc-700 text-sm font-medium md:block">
            Breadit
          </p>
        </Link>
        {/* TODO: search bar */}
        <Link href="/sign-in" className={cn(buttonVariants())}>
          Sign in
        </Link>
      </div>
    </div>
  );
}
