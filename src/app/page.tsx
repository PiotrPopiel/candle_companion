import connectDB from "../../db/config";

export default function Home() {
  connectDB();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24"></main>
  );
}
