"use client";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";
import { ArrowRightSquare } from "lucide-react";
import Link from "next/link";

type ContentProps = {
  content: {
    imageUrl: string;
    name: string;
    link: string;
  };
};

export function AwareCard({ content }: ContentProps) {
  return (
    <div className="h-auto relative  flex items-center justify-center">
      <Link href={content.link} rel="noopener" target="_blank">
        <DirectionAwareHover imageUrl={content.imageUrl}>
          <div className="flex items-center justify-center gap-4">
            <p className="font-bold text-xl">{content.name}</p>
            <ArrowRightSquare />
          </div>
        </DirectionAwareHover>
      </Link>
    </div>
  );
}
