"use client";
import Link from "next/link";
import Container from "./ui/container";
import { Button } from "./ui/button";
import MobileNav from "./MobileNav";
import { ModeToggle } from "./ModeToggle";

const Header = () => {
  const routes = [
    {
      href: "#top",
      label: "Beranda",
    },
    {
      href: "#service",
      label: "Layanan",
    },
    {
      href: "#plan",
      label: "Paket",
    },
    {
      href: "#portfolio",
      label: "Portofolio",
    },
  ];

  return (
    <header
      id="header"
      className="sm:flex sm:justify-between py-2 px-2 border-b bg-background sticky top-0 left-0 z-50 rounded-b-[22px]"
    >
      <Container>
        <div className="relative flex items-center justify-between w-full">
          <Link href="#top">
            <p className="text-xl font-bold">VINDDRONE</p>
          </Link>
          <nav className="md:flex items-center space-x-4 lg:space-x-6 hidden">
            {routes.map((route, i) => (
              <Button key={i} asChild variant="link">
                <Link
                  key={i}
                  href={route.href}
                  className="text-sm font-medium transition-colors"
                >
                  {route.label}
                </Link>
              </Button>
            ))}
            <Link
              href={"#footer"}
              className="text-sm font-medium p-[3px] relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full" />
              <div className="p-2 sm:px-8 sm:py-2 bg-background dark:bg-background rounded-full relative group transition duration-200 text-neutral-800 dark:text-neutral-50 hover:text-neutral-50 hover:bg-transparent dark:hover:bg-transparent">
                <span className="hidden sm:block">Kontak</span>
              </div>
            </Link>
            <ModeToggle />
          </nav>
          <div className="md:hidden">
            <MobileNav />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
