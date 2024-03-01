"use client";
import React from "react";
import { BackgroundGradient } from "./ui/background-gradient";
import Image from "next/image";

type PlanProps = {
  plan: {
    name: string;
    battery: string;
    drone: string;
    memory: string;
    exprice: string;
    price: string;
    resolution: string;
    uptime: string;
    addon: string;
  };
};

export function GlowingCard({ plan }: PlanProps) {
  return (
    <div>
      <BackgroundGradient className="rounded-[22px] max-w-lg md:min-w-sm py-4 sm:py-8 px-20 sm:px-28 lg:px-20 bg-white dark:bg-zinc-900 text-center">
        <div className="w-full mx-auto flex items-center justify-center">
          <Image
            src={`/mavic-mini.jpg`}
            alt="Mavic Mini"
            height="100"
            width="100"
            className="object-contain"
          />
        </div>
        <p className="text-base block font-semibold md:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
          {plan.name}
        </p>
        <div className="flex flex-col items-center justify-center gap-1 text-sm text-neutral-600 dark:text-neutral-400">
          <p>{plan.battery}</p>
          <p>{plan.drone}</p>
          <p>{plan.resolution}</p>
          <p>{plan.uptime}</p>
          <p>{plan.memory}</p>
          <p className="font-light">{plan.addon}</p>
          <div className="text-neutral-600 dark:text-neutral-400 line-through flex items-center bg-transparent mt-2 text-xs font-bold cursor-default">
            <span>{plan.exprice}</span>
          </div>
          <div className="rounded-full px-4 py-2 text-white flex items-center bg-black text-sm font-bold dark:bg-zinc-800 cursor-default">
            <span>{plan.price}</span>
          </div>
        </div>
      </BackgroundGradient>
    </div>
  );
}
