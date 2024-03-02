"use client";
import Link from "next/link";
import Container from "./ui/container";
import { Button } from "./ui/button";
import MobileNav from "./MobileNav";

const Header = () => {
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

  return (
    <header
      id="header"
      className="sm:flex sm:justify-between py-2 px-2 border-b sticky top-0 left-0 bg-white z-50"
    >
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex items-center justify-between w-full">
          <Link href="#top">
            <h1 className="text-xl font-bold">VINDDRONE</h1>
          </Link>
          <nav className="mx-6 md:flex items-center space-x-4 lg:space-x-6 hidden">
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
