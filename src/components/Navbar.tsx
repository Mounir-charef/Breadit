import Link from "next/link";
import { Icons } from "./Icons";
import { buttonVariants } from "./ui/Button";
import { cn } from "@/lib/utils";
import { getAuthSession } from "@/lib/auth";
import UserAccount from "./UserAccount";

export default async function Navbar() {
  const session = await getAuthSession();

  return (
    <div className="fixed inset-x-0 top-0 z-[10] h-fit border-b border-zinc-300 bg-zinc-100 py-2">
      <div className="container mx-auto flex h-full max-w-7xl items-center justify-between gap-2">
        <Link href="/" className="flex items-center gap-2">
          <Icons.logo className="h-9 w-9 fill-red-500 text-zinc-700 md:w-8" />
          <p className="hidden text-sm font-medium text-zinc-700 md:block">
            Breadit
          </p>
        </Link>
        {/* TODO: search bar */}
        {session ? (
          <UserAccount user={session.user} />
        ) : (
          <Link href="/sign-in" className={cn(buttonVariants())}>
            Sign in
          </Link>
        )}
      </div>
    </div>
  );
}
