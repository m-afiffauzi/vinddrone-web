"use client";
import React from "react";
import { BackgroundGradient } from "./ui/background-gradient";
import Link from "next/link";
import { CheckCircle } from "lucide-react";

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
    link: string;
  };
};

export function GlowingCard({ plan }: PlanProps) {
  return (
    <BackgroundGradient className="rounded-[22px] w-full max-w-xl py-8 px-16 sm:px-28 lg:px-10 bg-background text-center">
      <p className="block font-extrabold text-xl md:text-2xl text-black mb-2 dark:text-neutral-200">
        {plan.name}
      </p>
      <div className="flex flex-col items-start justify-center gap-1 text-sm text-black dark:text-neutral-200">
        <div className="flex items-center justify-center gap-2">
          <CheckCircle width={16} color="green" />
          <p>{plan.drone}</p>
        </div>
        <div className="flex items-center justify-center gap-2">
          <CheckCircle width={16} color="green" />
          <p>{plan.battery}</p>
        </div>
        <div className="flex items-center justify-center gap-2">
          <CheckCircle width={16} color="green" />
          <p>{plan.resolution}</p>
        </div>
        <div className="flex items-center justify-center gap-2">
          <CheckCircle width={16} color="green" />
          <p>{plan.uptime}</p>
        </div>
        <div className="flex items-center justify-center gap-2">
          <CheckCircle width={16} color="green" />
          <p>{plan.memory}</p>
        </div>
        <div className="flex items-center justify-center gap-2">
          <CheckCircle width={16} color="green" />
          <p>{plan.addon}</p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="text-neutral-600 dark:text-neutral-400 flex items-center bg-transparent mt-2 text-xs cursor-default">
          <span>Mulai Dari</span>
        </div>
        <div className="text-black dark:text-primary flex items-center text-lg lg:text-xl font-extrabold cursor-default">
          <span>{plan.price}</span>
        </div>
        <Link
          rel="noopener"
          target="_blank"
          href={plan.link}
          className="text-sm font-medium relative p-[3px] mt-2"
        >
          <div className="px-4 p-2 bg-gradient-to-r from-purple-400 to-cyan-400 dark:from-purple-500 dark:to-cyan-500 rounded-full relative group transition duration-200 text-neutral-800 dark:text-neutral-50 hover:scale-105">
            <span>Pesan Sekarang</span>
          </div>
        </Link>
      </div>
    </BackgroundGradient>
  );
}
