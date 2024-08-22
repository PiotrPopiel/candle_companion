"use client";

import { useSession, signIn, signOut } from "next-auth/react";

export default function UserPanel() {
  const { data: session, status } = useSession();

  let userLoginContent: React.ReactNode;

  if (status === "loading") {
    userLoginContent = null;
  } else if (session?.user) {
    userLoginContent = (
      <div className="flex flex-col md:flex-row items-center gap-10">
        <p>Signed in as: {session.user.name}</p>
        <form
          action={async () => {
            await signOut();
          }}>
          <button
            type="submit"
            className="bg-red-500 w-full rounded font-semibold text-gray-50 hover:bg-[#7a649f] hover:scale-110 focus:scale-110 active:scale-105 transition  flex items-center justify-center">
            <p className="text-2xl md:text-lg py-2 px-4">Sign Out</p>
          </button>
        </form>
      </div>
    );
  } else {
    userLoginContent = (
      <form
        action={async () => {
          await signIn();
        }}>
        <button
          type="submit"
          className="bg-[#5f448c] w-full rounded font-semibold text-gray-50 hover:bg-[#7a649f] hover:scale-110 focus:scale-110 active:scale-105 transition  flex items-center justify-center">
          <p className="text-2xl md:text-lg py-2 px-4">Sign In</p>
        </button>
      </form>
    );
  }

  return userLoginContent;
}
