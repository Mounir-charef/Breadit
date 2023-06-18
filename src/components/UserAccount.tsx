"use client";
import { FC } from "react";
import { User } from "next-auth";
import UserAvatar from "./UserAvatar";
import {
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "./ui/DropDownMenu";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuGroup,
} from "@radix-ui/react-dropdown-menu";
import { DropdownMenuContent } from "./ui/DropDownMenu";
import { Icons } from "./Icons";
import Link from "next/link";
import { signOut } from "next-auth/react";

interface UserAccountProps {
  user: Pick<User, "image" | "name" | "email">;
}

const UserAccount: FC<UserAccountProps> = ({ user }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="rounded-full">
        <UserAvatar
          className="cursor-pointer h-8 w-8"
          user={{
            image: user.image,
            name: user.name,
          }}
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-white" align="end">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Icons.user className="mr-2 h-4 w-4" />
            <span>{user.name}</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Icons.mail className="mr-2 h-4 w-4" />
            <span>{user.email}</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem asChild className="cursor-pointer">
            <Link href="/">
              <Icons.feed className="mr-2 h-4 w-4" />
              <span>Feed</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild className="cursor-pointer">
            <Link href="/r/create">
              <Icons.plus className="mr-2 h-4 w-4" />
              <span>Create Community</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild className="cursor-pointer">
            <Link className="self-center" href="/setting">
              <Icons.setting className="mr-2 h-4 w-4" />
              <span>Setting</span>
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          className="cursor-pointer"
          onSelect={(e) => {
            e.preventDefault();
            signOut();
          }}
        >
          <span>Sign out</span> <Icons.logout className="ml-2 h-4 w-4" />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserAccount;
