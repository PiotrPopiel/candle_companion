"use client";

import { useRouter } from "next/navigation";

type ModalProps = {
  children: React.ReactNode;
  onClose?: () => void;
};

export default function Modal({ children, onClose }: ModalProps) {
  const router = useRouter();

  const handleCloseModal = () => {
    if (onClose) {
      onClose();
    } else {
      router.back();
    }
  };

  return (
    <>
      <div
        onClick={handleCloseModal}
        className="z-10 absolute inset-0  bg-white/50 backdrop-blur-sm overflow-y-hidden"></div>
      <div className="z-50 absolute left-[50%] translate-x-[-50%] top-[20%] border flex items-center rounded justify-center p-10 bg-white shadow-md">
        {children}
      </div>
    </>
  );
}
