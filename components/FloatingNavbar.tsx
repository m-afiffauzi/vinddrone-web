"use client";
import React from "react";
import { FloatingNav } from "./ui/floating-navbar";
import { Home, PercentCircle, ImagesIcon, HandHelping } from "lucide-react";
export function FloatingNavbar() {
  const navItems = [
    {
      name: "Beranda",
      link: "/",
      icon: <Home className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Servis",
      link: "#service",
      icon: (
        <HandHelping className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
    {
      name: "Paket",
      link: "#plan",
      icon: (
        <PercentCircle className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
    {
      name: "Portofolio",
      link: "#portfolio",
      icon: <ImagesIcon className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
  ];
  return (
    <div className="relative w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}
