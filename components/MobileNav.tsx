"use client";
import * as React from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import { useMediaQuery } from "@/hooks/use-media-query";
import Link from "next/link";

const MobileNav = () => {
  const routes = [
    {
      href: "#top",
      label: "Beranda",
    },
    {
      href: "#plans",
      label: "Paket",
    },
    {
      href: "#portfolio",
      label: "Portofolio",
    },
    {
      href: "#footer",
      label: "Kontak",
    },
  ];
  const isMobile = useMediaQuery("(min-width:768px)");
  return isMobile ? (
    <div className="hidden">Desktop</div>
  ) : (
    <Sheet key={"top"}>
      <SheetTrigger asChild>
        <Button variant="outline">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side={"top"}>
        <nav className="mx-auto flex flex-col items-center justify-center">
          {routes.map((route, i) => (
            <Link
              key={i}
              href={route.href}
              className="text-sm font-medium transition-colors"
            >
              <SheetTrigger asChild>
                <Button variant="link">{route.label}</Button>
              </SheetTrigger>
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
