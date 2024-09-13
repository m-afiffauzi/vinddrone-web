import React from "react";
import Container from "./ui/container";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

const Hero = () => {
  return (
    <section id="hero" className="relative">
      <Container>
        <div className="flex flex-col items-center justify-center text-center gap-4 sm:gap-6 min-h-[92vh] w-full my-auto px-4 text-white">
          <h1 className="text-4xl lg:text-5xl font-bold">
            SEWA DRONE MAGELANG
          </h1>
          <h3 className="text-lg lg:text-2xl font-semibold">
            Dapatkan dokumentasi drone berkualitas dan profesional dengan harga
            terjangkau.
          </h3>
          <div className="flex items-center justify-center gap-5 mt-5">
            <Link
              rel="noopener"
              target="_blank"
              href="https://wa.me/082138351343"
              className="text-sm font-medium p-[3px] relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full" />
              <div className="p-2 sm:px-8 sm:py-2 bg-bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full relative group transition duration-200 text-white dark:text-neutral-50 hover:text-black hover:bg-background dark:hover:bg-background">
                <span className="text-lg">Pesan Sekarang</span>
              </div>
            </Link>
          </div>
          <Link href="#service">
            <ChevronDown className="text-5xl animate-bounce" />
          </Link>
          <video
            src="/vinddrone.mp4"
            title="Vinddrone Promotional"
            autoPlay
            muted
            loop
            className="fixed top-10 left-0 aspect-video h-full w-full brightness-50 dark:brightness-25 -z-[1] object-cover"
          />
          <Image
            src="/vinddrone.png"
            alt="Hero Image"
            width={500}
            height={500}
            className="fixed top-10 left-0 aspect-video h-full w-full brightness-50 dark:brightness-25 -z-[2] object-cover"
          />
        </div>
      </Container>
    </section>
  );
};

export default Hero;
