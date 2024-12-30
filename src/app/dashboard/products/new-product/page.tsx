import { auth } from "@/auth";
import AddProductForm from "@/components/forms/add-product-form";
import { prisma } from "@/db/prisma";
import Link from "next/link";
import { RiArrowGoBackFill } from "react-icons/ri";

export default async function NewProduct() {
  const session = await auth();

  const user = await prisma.user.findUnique({
    where: {
      id: session?.user?.id,
    },
  });

  return (
    <div>
      <div className="relative flex items-center px-4">
        <Link
          href="/dashboard/products"
          className="text-main-purple flex gap-2 py-4">
          <RiArrowGoBackFill className="text-xl" />
          <p className="hidden md:block font-medium">Return to Products</p>
        </Link>
        <h1 className="absolute left-[50%] translate-x-[-50%] p-4 font-bold text-2xl text-main-purple">
          New Product
        </h1>
      </div>
      <hr />
      <div className="flex justify-center">
        <AddProductForm collections={user?.collections} />
      </div>
    </div>
  );
}
