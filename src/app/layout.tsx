import { cn } from "@/lib/utils";
import "@/styles/globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import { Toaster } from "@/components/ui/Toaster";

export const metadata = {
  title: "Breadit",
  description: "A Reddit clone built with Next.js and TypeScript UwU.",
};

const inter = Inter({
  subsets: ["latin", "latin-ext"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn(
        "bg-white text-slate-900 antialiased light",
        inter.className
      )}
    >
      <body className="min-h-screen pt-12 bg-slate-50 antialiased">
        <Navbar />
        <main className="container max-w-7xl mx-auto h-full pt-12">
          {children}
        </main>
        <Toaster />
      </body>
    </html>
  );
}
