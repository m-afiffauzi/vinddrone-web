"use client";
import { cn } from "@/lib/utils";
import { ArrowRightSquare } from "lucide-react";
import Link from "next/link";

type ContentProps = {
  content: {
    imageUrl: string;
    name: string;
    link: string;
  };
};

export function SocialCard({ content }: ContentProps) {
  return (
    <Link
      href={content.link}
      rel="noopener"
      target="_blank"
      className="w-full max-w-xs relative flex items-center justify-center"
    >
      <div className="max-w-xs w-full rounded-[22px] mx-auto">
        <div
          className={cn(
            "group w-full cursor-pointer overflow-hidden relative card h-20 rounded-[22px] shadow-xl mx-auto flex flex-col justify-center p-4 dark:border-neutral-800 bg-cover bg-center",
            `${content.imageUrl}`,
            "after:content-[''] after:absolute after:inset-0 after:bg-black after:opacity-10",
            "hover:bg-top hover:after:opacity-90 hover:after:bg-gradient-to-r from-purple-500 to-cyan-500",
            "transition-all duration-500"
          )}
        >
          <div className="hidden text-gray-50 group-hover:flex items-center justify-center gap-2 z-10">
            <h3 className="font-bold text-xl md:text-2xl relative">
              {content.name}
            </h3>
            <ArrowRightSquare />
          </div>
        </div>
      </div>
    </Link>
  );
}
