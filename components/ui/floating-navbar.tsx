"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Contact } from "lucide-react";
import { ModeToggle } from "../ModeToggle";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0) {
        setVisible(false);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: 0,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-fit fixed top-5 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full dark:bg-background bg-background shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-40 pr-2 pl-8 py-2  items-center justify-center space-x-4",
          className
        )}
      >
        <ModeToggle />
        {navItems.map((navItem: any, idx: number) => (
          <Link
            key={`link=${idx}`}
            href={navItem.link}
            className={cn(
              "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-800 dark:hover:text-neutral-300 hover:text-neutral-500"
            )}
          >
            <span className="block sm:hidden">{navItem.icon}</span>
            <span className="hidden sm:block">{navItem.name}</span>
          </Link>
        ))}
        <Link href={"#footer"} className="text-sm font-medium p-[3px] relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full" />
          <div className="p-2 sm:px-8 sm:py-2 bg-background dark:bg-background rounded-full relative group transition duration-200 text-neutral-800 dark:text-neutral-50 hover:text-neutral-50 hover:bg-transparent dark:hover:bg-transparent">
            <span className="block sm:hidden">
              <Contact className="h-4 w-4 text-neutral-500 dark:text-white" />
            </span>
            <span className="hidden sm:block">Kontak</span>
          </div>
        </Link>
      </motion.div>
    </AnimatePresence>
  );
};
