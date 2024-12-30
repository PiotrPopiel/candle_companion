"use client";

import { useSession } from "next-auth/react";
import SignInButton from "../sign-in-button";
import UserAvatar from "./user-avatar";
import { ImSpinner2 } from "react-icons/im";

export default function HeaderAuth() {
  const { data: session, status } = useSession();

  let sessionContent: React.ReactNode;

  if (status === "loading") {
    sessionContent = (
      <div className="px-8">
        <ImSpinner2 className="animate-spin text-lg text-main-purple" />
      </div>
    );
  } else if (!session?.user) {
    sessionContent = <SignInButton />;
  } else {
    sessionContent = session?.user.image && session?.user.name && (
      <div className="flex items-center gap-5">
        <p className="hidden md:block text-lg">
          Hello <b>{session?.user.name}</b> !
        </p>
        <UserAvatar image={session?.user.image} name={session?.user.name} />
      </div>
    );
  }

  return sessionContent;
}
