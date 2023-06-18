import Link from "next/link";
import { Icons } from "./Icons";
import UserAuthForm from "./UserAuthForm";

const SignIn = () => {
  return (
    <div className="container mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px]">
      <div className="flex flex-col space-y-2 text-center">
        <Icons.logo className="w-6 h-6 mx-auto" />
        <h1 className="text-2xl font-semibold tracking-tight">Welcome back</h1>
        <p className="text-sm max-w-xs mx-auto">
          By continuing, you agree to our User Agreement and Privacy Policy.
        </p>
        <UserAuthForm />

        <p className="px-8 text-center text-sm text-zinc-700">
          New to Breadit?{" "}
          <Link
            href="Sign-up"
            className="hover:text-zinc-900 underline underline-offset-4"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
