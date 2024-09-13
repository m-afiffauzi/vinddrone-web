import React from "react";
import { cn } from "@/lib/utils";

type ServiceProps = {
  service: {
    name?: string;
    desc?: string;
    image?: string;
    gif?: string;
  };
};

export function ServiceCard({ service }: ServiceProps) {
  return (
    <div className="max-w-xs w-full rounded-[22px] mx-auto">
      <div
        className={cn(
          "group w-full cursor-pointer overflow-hidden relative card h-44 rounded-[22px] shadow-xl mx-auto flex flex-col justify-center p-4 border border-transparent dark:border-neutral-800 bg-cover bg-center",
          `${service.image}`,
          "after:content-[''] after:absolute after:inset-0 after:bg-black after:opacity-50",
          "hover:bg-top hover:after:opacity-75",
          "transition-all duration-500"
        )}
      >
        <div className="text relative z-30">
          <h3 className="font-bold text-xl md:text-2xl text-gray-50 relative">
            {service.name}
          </h3>
          <p className="font-normal text-sm text-gray-50 relative mt-4">
            {service.desc}
          </p>
        </div>
      </div>
    </div>
  );
}
