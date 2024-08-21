import Image from "next/image";
import connectDB from "../../db/config";

export default function Home() {
  connectDB();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Image src="/logo.svg" alt="logo" width={700} height={200} />
    </main>
  );
}
