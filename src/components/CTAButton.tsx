import { signIn } from "next-auth/react";

export default function ctaButton() {
  return (
    <form
      className="w-full"
      action={async () => {
        await signIn("google");
      }}>
      <button
        type="submit"
        className="bg-gray-50 w-full rounded font-semibold text-gray-800 hover:bg-gray-100 hover:scale-110 focus:scale-110 active:scale-105 transition  flex items-center justify-center">
        <p className="text-lg py-2 px-4 font-bold">Sign Up Now!</p>
      </button>
    </form>
  );
}
