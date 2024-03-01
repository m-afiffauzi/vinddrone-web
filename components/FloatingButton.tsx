import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Badge } from "./ui/badge";

const FloatingButton = () => {
  return (
    <Link
      href="https://wa.me/082138351343"
      rel="noopener"
      target="_blank"
      className="fixed bottom-12 sm:bottom-6 right-6 flex items-center justify-center z-10 cursor-pointer w-auto group"
    >
      <Badge variant={"outline"} className="group-hover:animate-pulse">
        Hubungi Kami
      </Badge>
      <Image
        src="/wa-icon.png"
        alt="Whatsapp"
        height={48}
        width={48}
        className="transition group-hover:scale-110"
      />
    </Link>
  );
};

export default FloatingButton;
