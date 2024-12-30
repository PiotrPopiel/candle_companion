import { auth } from "@/auth";
import AddProductForm from "@/components/forms/add-product-form";
import Modal from "@/components/modal";
import { prisma } from "@/db/prisma";

export default async function NewProduct() {
  const session = await auth();

  const user = await prisma.user.findUnique({
    where: {
      id: session?.user?.id,
    },
  });

  return (
    <Modal>
      <div className="center flex-col">
        <h1 className="font-bold text-2xl text-main-purple">New Product</h1>
        <AddProductForm collections={user?.collections} />
      </div>
    </Modal>
  );
}
