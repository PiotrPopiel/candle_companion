"use server";

import { auth } from "@/auth";
import { prisma } from "@/db/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

const createCollectionSchema = z.object({
  title: z.string().min(3, { message: "Collection name must be longer." }),
});

type createCollectionFormState = {
  errors: {
    title?: string[];
    _form?: string[];
  };
};

export async function createCollection(
  FormState: createCollectionFormState,
  formData: FormData
): Promise<createCollectionFormState> {
  const result = createCollectionSchema.safeParse({
    title: formData.get("title"),
  });

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
    };
  }

  const newCollection = result.data.title;

  const session = await auth();
  if (!session?.user) {
    return {
      errors: { _form: ["Must be signed in to do that."] },
    };
  }

  const user = await prisma.user.findFirst({
    where: {
      id: session.user.id,
    },
  });

  try {
    if (user?.collections.includes(newCollection)) {
      return {
        errors: {
          _form: ["There is already collection with that name."],
        },
      };
    } else if (!user?.collections.includes(newCollection)) {
      await prisma.user.update({
        where: {
          id: session.user.id,
        },
        data: {
          collections: { push: newCollection },
        },
      });
    }
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
