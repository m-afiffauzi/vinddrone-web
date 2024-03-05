import React from "react";
import Container from "./ui/container";
import Link from "next/link";
import { Button } from "./ui/button";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <section id="hero" className="relative">
      <Container>
        <div className="flex flex-col items-center justify-center gap-8 min-h-screen w-full -mt-10 my-auto text-white">
          <h2 className="text-4xl lg:text-6xl font-bold">VINDDRONE</h2>
          <h4 className="text-xl lg:text-3xl font-semibold">
            Jasa Sewa Drone Area Magelang
          </h4>
          <div className="flex items-center justify-center gap-5 mt-5">
            <Link href={"/#plan"} className="group">
              <Button
                variant={"outline"}
                className="bg-transparent dark:border-white dark:hover:bg-background dark:hover:invert w-28 h-14"
              >
                <ChevronDown className="text-5xl animate-bounce" />
              </Button>
            </Link>
          </div>
        </div>
      </Container>
      <video
        src={"/vinddrone.mp4"}
        autoPlay
        muted
        loop
        className="fixed top-0 left-0 aspect-video h-screen w-screen brightness-50 dark:brightness-25 -z-[1] object-cover"
      />
    </section>
  );
};

export default Hero;
