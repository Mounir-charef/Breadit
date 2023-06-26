import CloseModal from "@/components/CloseModal";
import SignIn from "@/components/SignIn";
import { FC } from "react";

const page: FC = () => {
  return (
    <div className="fixed inset-0 bg-slate-800/20 z-10 ">
      <div className="container flex items-center h-full max-w-lg mx-auto">
        <div className="relative bg-white w-full h-fit py-20 px-2 rounded-lg">
          <div className="flex flex-col items-center">
            <CloseModal />
            <SignIn />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
