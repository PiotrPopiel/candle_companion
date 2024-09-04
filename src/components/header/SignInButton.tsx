import { signIn } from "next-auth/react";

export default function SignInButton() {
  return (
    <form
      action={async () => {
        await signIn("google");
      }}>
      <button
        type="submit"
        className="bg-[#5f448c] w-full rounded font-semibold text-gray-50 hover:bg-[#7a649f] hover:scale-110 focus:scale-110 active:scale-105 transition  flex items-center justify-center">
        <p className="text-lg py-2 px-4">Sign In</p>
      </button>
    </form>
  );
}
