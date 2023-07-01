"use client";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import type { Subreddit } from "@/lib/validators/subreddit";
import { toast } from "@/hooks/use-toast";
import { useCustonToast } from "@/hooks/use-custom-toast";

const page = () => {
  const [input, setInput] = useState("");
  const router = useRouter();
  const { loginToast } = useCustonToast();

  const { mutate: createCommunity, isLoading } = useMutation({
    mutationFn: async () => {
      const payload: Subreddit = {
        name: input,
      };

      const { data } = await axios.post("/api/subreddit", payload);
      return data as string;
    },
    onError: (error: AxiosError) => {
      switch (error.response?.status) {
        case 422:
          toast({
            title: "Invalid subreddit name",
            description: "Please choose a name between 3 and 21 characters",
            variant: "destructive",
          });
          break;

        case 401:
          loginToast();
          break;

        case 409:
          toast({
            title: "Community already exists",
            description: "Please choose a different name",
            variant: "destructive",
          });
          break;

        default:
          toast({
            title: "Something went wrong",
            description: "Please try again later",
            variant: "destructive",
          });
          break;
      }
    },
    onSuccess: (data) => {
      router.push(`/r/${data}`);
    },
  });

  return (
    <div className="container flex h-full max-w-3xl items-center">
      <div className="relative h-fit w-full space-y-6 rounded-lg bg-slate-50 p-4">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-semibold">Create community</h1>
        </div>

        <hr className="h-px bg-zinc-500" />

        <div>
          <p className="text-lg font-medium">Name</p>
          <p className="pb-2 text-xs opacity-80">Name</p>
          <div className="relative">
            <p className="absolute inset-y-0 left-0 grid w-8 place-items-center text-sm text-zinc-400">
              r/
            </p>
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="pl-6"
            />
          </div>
        </div>

        <div className="flex justify-end gap-4">
          <Button variant="subtle" onClick={() => router.back()}>
            Cancel
          </Button>
          <Button
            disabled={input.length === 0}
            isLoading={isLoading}
            onClick={() => createCommunity()}
          >
            Create community
          </Button>
        </div>
      </div>
    </div>
  );
};

export default page;
