import { auth } from "@/auth";
import Collection from "@/components/products/collection";
import ProductItem from "@/components/products/product-item";
import { prisma } from "@/db/prisma";
import Link from "next/link";
import { RiAddFill } from "react-icons/ri";

export default async function Products() {
  const session = await auth();
  const products = await prisma.product.findMany({
    where: {
      userId: session?.user?.id,
    },
  });
  const user = await prisma.user.findUnique({
    where: {
      id: session?.user?.id,
    },
  });

  return (
    <>
      <div className="relative flex items-center justify-between px-4">
        <h1 className="p-4 font-bold text-2xl text-main-purple">Products</h1>
        <Link
          href={"/dashboard/products/new-product"}
          className="border-2 py-1 px-4 rounded border-secondary-purple flex items-center gap-2 hover:bg-secondary-purple text-main-purple hover:text-gray-50 transition-all hover:scale-110 active:scale-105 focus:scale-105">
          <RiAddFill className="text-xl" />
          <p className="font-bold">Add Product</p>
        </Link>
      </div>
      <hr />
      {user?.collections.map((collection) => (
        <Collection collection={collection} key={collection}>
          {products.map(
            (product) =>
              product.collection === collection && (
                <ProductItem product={product} key={product.id} />
              )
          )}
        </Collection>
      ))}
      <div className="w-full center mt-4">
        <Link
          href={"/dashboard/products/new-collection"}
          className="bg-secondary-purple rounded text-gray-50 font-bold  px-4 py-2 transition-all hover:scale-110 active:size-105 focus:size-105">
          + New Collection
        </Link>
      </div>
    </>
  );
}
