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
      className="z-40 fixed bottom-8 right-2 sm:right-8 hover:-right-2 sm:hover:right-6 flex items-center justify-center cursor-pointer w-14 h-14 hover:w-40 group bg-green-500 dark:bg-green-700 rounded-full p-2 scale-90 transition-all duration-300 group grayscale-50"
    >
      <Badge
        variant={"outline"}
        className="z-40 absolute left-2 w-30 border-none bg-green-500 dark:bg-green-700 scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-100 delay-200 transition-opacity"
      >
        Hubungi Kami
      </Badge>
      <Image
        src="/wa-icon.png"
        alt="Whatsapp"
        height={40}
        width={40}
        className="z-40 absolute right-2"
      />
    </Link>
  );
};

export default FloatingButton;
