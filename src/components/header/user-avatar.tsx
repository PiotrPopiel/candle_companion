import Image from "next/image";
import UserMenu from "./user-menu";
import { useState } from "react";

type userProps = {
  image: string;
  name: string;
};

export default function UserAvatar({ image, name }: userProps) {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative flex ">
      {isOpen && <UserMenu name={name} closeMenu={closeMenu} />}
      {image && (
        <Image
          src={image}
          onClick={() => setIsOpen((currentIsOpen) => !currentIsOpen)}
          alt=""
          height={56}
          width={56}
          className="rounded-full cursor-pointer"
        />
      )}
    </div>
  );
}
