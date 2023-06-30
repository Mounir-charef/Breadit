import { HomeIcon } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/Button";

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-bold md:text-4xl">Your feed</h1>
      <div className="grid grid-cols-1 gap-y-4 py-6 md:grid-cols-3 md:gap-x-4">
        {/* feed */}

        {/* info */}

        <div className="order-first h-fit overflow-hidden rounded-lg border border-gray-200 md:order-last">
          <div className="bg-slate-100 px-6 py-4">
            <p className="flex items-center gap-1.5 py-3 font-semibold">
              <HomeIcon className="h-4 w-4" />
              Home
            </p>
          </div>
          <div className="-my-3 divide-y bg-slate-100 px-6 py-4 text-sm leading-6">
            <div className="flex justify-between gap-x-4 py-3">
              <p className="text-zinc-500">
                Your personal Breadit homepage. Come here to check in with your
                favorite communities.
              </p>
            </div>
            <Link
              href="/r/create"
              className={buttonVariants({
                className: "mb-6 mt-4 w-full",
              })}
            >
              Browse Breadits
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
