import Link from "next/link";
import { toast } from "./use-toast";
import { buttonVariants } from "@/components/ui/Button";
import { LogIn } from "lucide-react";

export const useCustonToast = () => {
  const loginToast = () => {
    const { dismiss } = toast({
      title: "Login required",
      description: "You need to be logged",
      variant: "destructive",
      action: (
        <Link
          href="/sign-in"
          className={buttonVariants({
            variant: "outline",
          })}
          onClick={() => dismiss()}
        >
          <LogIn className="h-4 w-4" />
        </Link>
      ),
    });
  };

  return { loginToast };
};
