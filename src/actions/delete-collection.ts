"use server";

import { auth } from "@/auth";
import { prisma } from "@/db/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function deleteCollection(collection: string) {
  const session = await auth();

  let user;

  if (session?.user) {
    user = await prisma.user.findFirst({
      where: {
        id: session.user.id,
      },
    });

    const newCollectionList = user?.collections.filter((coll) => {
      if (coll !== collection) {
        return coll;
      }
    });

    await prisma.user.update({
      where: {
        id: session.user.id,
      },
      data: {
        collections: newCollectionList,
      },
    });

    await prisma.product.deleteMany({
      where: {
        userId: user?.id,
        collection,
      },
    });
  }

  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
}
