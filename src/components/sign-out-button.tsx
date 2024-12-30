import { signOut } from "next-auth/react";

export default function SignOutButton() {
  return (
    <form
      action={async () => {
        await signOut();
      }}>
      <button
        type="submit"
        className="bg-red-500 w-full rounded font-semibold text-gray-50 hover:bg-red-400 hover:scale-110 focus:scale-110 active:scale-105 transition  flex items-center justify-center">
        <p className="py-1 px-4">Sign Out</p>
      </button>
    </form>
  );
}
