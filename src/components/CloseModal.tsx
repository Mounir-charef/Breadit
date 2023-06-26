"use client";

import { XCircle } from "lucide-react";
import { useRouter } from "next/navigation";

const CloseModal = () => {
  const router = useRouter();
  return (
    <button
      aria-label="close-modal"
      className="absolute top-4 right-4 opacity-80"
      onClick={() => router.back()}
    >
      <XCircle className="h-6 w-6 hover:stroke-red-500 transition-colors" />
    </button>
  );
};

export default CloseModal;
