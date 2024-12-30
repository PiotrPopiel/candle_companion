"use server";

import { z } from "zod";
import type { Product } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { prisma } from "@/db/prisma";
import { auth } from "@/auth";

const createProductSchema = z.object({
  title: z.string().min(3, { message: "Title must be longer" }),
  collection: z.string({ message: "Please select collection" }),
  materialCost: z.string().min(1),
  price: z.string().min(1),
});

type createProductFormState = {
  errors: {
    title?: string[];
    collection?: string[];
    materialCost?: string[];
    price?: string[];
    _form?: string[];
  };
};

export async function createProduct(
  formState: createProductFormState,
  formData: FormData
): Promise<createProductFormState> {
  const result = createProductSchema.safeParse({
    title: formData.get("title"),
    collection: formData.get("collection"),
    materialCost: formData.get("materialCost"),
    price: formData.get("price"),
  });

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
    };
  }

  const session = await auth();
  if (!session?.user) {
    return {
      errors: { _form: ["Must be signed in to do that."] },
    };
  }

  const productExists = await prisma.product.findFirst({
    where: {
      title: result.data.title,
      userId: session?.user?.id,
      collection: result.data.collection,
    },
  });

  console.log(productExists);

  try {
    if (productExists) {
      return {
        errors: { _form: ["There is already product with that name"] },
      };
    }
    await prisma.product.create({
      data: {
        title: result.data.title,
        collection: result.data.collection,
        materialCost: result.data.materialCost,
        price: result.data.price,
        profit: (+result.data.price - +result.data.materialCost).toFixed(2),
        userId: session?.user?.id,
      },
    });
  } catch (err: unknown) {
    if (err instanceof Error) {
      return {
        errors: {
          _form: [err.message],
        },
      };
    } else {
      return {
        errors: {
          _form: ["Something went wrong"],
        },
      };
    }
  }

  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
}
