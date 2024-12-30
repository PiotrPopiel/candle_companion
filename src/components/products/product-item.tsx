"use client";
import { deleteProduct } from "@/actions/delete-product";
import { Product } from "@prisma/client";
import { useState } from "react";
import { RiDeleteBin6Line, RiEdit2Line } from "react-icons/ri";
import Modal from "../modal";
import FormButton from "../forms/form-button";
import CancelButton from "../cancel-button";

type productProps = {
  product: Product;
};

export default function ProductItem({ product }: productProps) {
  const [showModal, setShowModal] = useState(false);

  const deleteProductAction = deleteProduct.bind(null, product.id);

  const handleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="flex items-center justify-between bg-white border-b rounded py-2 px-4">
      <p>{product.title}</p>
      <div className="flex gap-2 text-2xl ">
        <RiEdit2Line className="cursor-pointer text-orange-600 border-orange-500 border rounded p-[2px]" />
        <RiDeleteBin6Line
          onClick={handleModal}
          className="cursor-pointer text-red-600 border-red-500 border rounded p-[2px]"
        />
      </div>
      {showModal && (
        <Modal onClose={handleModal}>
          <form action={deleteProductAction} className="center flex-col">
            <p className="text-lg">
              Are You sure you want to delete {product.title}?
            </p>
            <div className="center gap-4">
              <FormButton>Yes</FormButton>
              <CancelButton action={handleModal}>Cancel</CancelButton>
            </div>
          </form>
        </Modal>
      )}
    </div>
  );
}
