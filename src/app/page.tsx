import Hero from "@/components/Hero";
import connectDB from "@/db/config";

export default function Home() {
  connectDB();
  return (
    <main className="pt-20 flex flex-col items-center justify-between">
      <Hero />
    </main>
  );
}
