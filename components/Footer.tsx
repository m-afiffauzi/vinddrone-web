import React from "react";
import Container from "./ui/container";
import OpenStreetMap from "./Dynamic";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <section id="footer" className="w-full h-1/4 bg-background py-4 relative">
      <Container>
        <h2 className="md:text-2xl font-bold text-center">Kontak</h2>
        <h4 className="text-sm md:text-xl text-center">
          Hubungi kami untuk informasi lebih lanjut.
        </h4>
        <div className="w-full mx-auto flex items-center justify-center mt-8">
          <div className="h-96 w-full z-0">
            <OpenStreetMap />
          </div>
        </div>
        <div className="flex flex-col p-4 gap-2 text-xs md:font-medium mb-10">
          <div className="w-full sm:flex items-center justify-start gap-2">
            <b>Alamat: </b>
            <Link
              rel="noopener"
              target="_blank"
              href="https://www.google.com/maps/place/7%C2%B035'04.6%22S+110%C2%B012'07.5%22E/@-7.584607,110.2014423,19z/data=!3m1!4b1!4m12!1m7!3m6!1s0x2e7a8d7d5a072ef7:0xbfbf3b9cb724b14c!2sBOROBUDUR+GADGET!8m2!3d-7.5846603!4d110.2019964!16s%2Fg%2F11p3m5vt7b!3m3!8m2!3d-7.584607!4d110.202086?entry=ttu"
              className="flex items-center justify-start sm:justify-center group hover:underline gap-0"
            >
              Dusun Sodongan, Desa Bumiharjo, Kec. Borobudur, Kab. Magelang,
              Jawa Tengah 56553
              <ArrowUpRight className="hidden md:group-hover:block" size={10} />
            </Link>
          </div>
          <div className="w-full flex items-center justify-start gap-2">
            <b>No.HP: </b>
            <Link
              rel="noopener"
              target="_blank"
              href="tel:082138351343"
              className="flex items-center justify-center group hover:underline gap-0"
            >
              082138351343
              <ArrowUpRight className="hidden group-hover:block" size={10} />
            </Link>
          </div>
          <div className="w-full flex items-center justify-start gap-1">
            <b>Whatsapp: </b>
            <Link
              rel="noopener"
              target="_blank"
              href="https://wa.me/082138351343"
              className="flex items-center justify-center group hover:underline gap-0"
            >
              082138351343
              <ArrowUpRight className="hidden group-hover:block" size={10} />
            </Link>
          </div>
          <div className="w-full flex items-center justify-start gap-2">
            <b>Instagram: </b>
            <Link
              rel="noopener"
              target="_blank"
              href="https://www.instagram.com/vinddrone.magelang/"
              className="flex items-center justify-center group hover:underline gap-0"
            >
              @vinddrone.magelang
              <ArrowUpRight className="hidden group-hover:block" size={10} />
            </Link>
          </div>
          <div className="w-full flex items-center justify-start gap-2">
            <b>Tiktok: </b>
            <Link
              rel="noopener"
              target="_blank"
              href="https://www.tiktok.com/@arisantosoagus"
              className="flex items-center justify-center group hover:underline gap-0"
            >
              @arisantosoagus
              <ArrowUpRight className="hidden group-hover:block" size={10} />
            </Link>
          </div>
        </div>
        <div className="border-t absolute bottom-0 left-0 w-full py-4 flex items-center justify-center bg-background">
          <p className="text-xs md:text-sm font-light">
            © {year} | <b className="font-medium">Vinddrone </b>All Rights
            Reserved
          </p>
        </div>
      </Container>
    </section>
  );
};

export default Footer;
