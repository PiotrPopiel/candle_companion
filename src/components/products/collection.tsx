"use client";

import clsx from "clsx";
import { useState } from "react";
import {
  RiArrowDownWideFill,
  RiArrowUpWideFill,
  RiDeleteBin6Line,
} from "react-icons/ri";
import Modal from "../modal";
import FormButton from "../forms/form-button";
import CancelButton from "../cancel-button";
import { deleteCollection } from "@/actions/delete-collection";

type collectionProps = {
  children: React.ReactNode;
  collection: string;
};

export default function Collection({ collection, children }: collectionProps) {
  const [isOpen, setIsOpen] = useState(true);
  const [showModal, setShowModal] = useState(false);

  const ToggleCollectionList = () => {
    setIsOpen(!isOpen);
  };

  const handleModal = () => {
    setShowModal(!showModal);
  };

  const deleteCollectionAction = deleteCollection.bind(null, collection);

  return (
    <div
      key={collection}
      className="bg-gray-200 p-2 mt-4 rounded text-gray-800">
      <div className="flex items-center justify-between p-3 bg-white rounded-t border-b-2">
        <div className="center gap-4">
          <h1 className="text-xl font-bold">{collection}</h1>
          <RiDeleteBin6Line
            onClick={handleModal}
            className="cursor-pointer text-red-600 border-red-500 border text-lg rounded p-[2px]"
          />
        </div>
        <div onClick={ToggleCollectionList} className="text-xl cursor-pointer">
          {isOpen ? <RiArrowDownWideFill /> : <RiArrowUpWideFill />}
        </div>
      </div>
      <div
        className={clsx("p-1", {
          hidden: !isOpen,
        })}>
        {children}
      </div>
      {showModal && (
        <Modal onClose={handleModal}>
          <form action={deleteCollectionAction} className="center flex-col">
            <p className="text-lg">
              Are You sure you want to delete {collection} and all products in
              it?
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
