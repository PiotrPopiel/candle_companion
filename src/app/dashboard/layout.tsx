import Sidenav from "@/components/dashboard/Sidenav";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  let DashboardLayoutContent: React.ReactNode;

  if (!session) {
    redirect("/");
  } else {
    DashboardLayoutContent = (
      <div className="mt-24 p-2 flex flex-col gap-5 lg:flex-row">
        <Sidenav />
        <main className="bg-gray-50 h-[800px] w-full rounded-md p-4 shadow-md">
          {children}
        </main>
      </div>
    );
  }

  return DashboardLayoutContent;
}
