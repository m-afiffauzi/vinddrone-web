import React from "react";
import Container from "./ui/container";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  const contactData = [
    {
      title: "Alamat: ",
      desc: "Dusun Sodongan, Desa Bumiharjo, Kec. Borobudur, Kab. Magelang, Jawa Tengah 56553",
      link: "https://www.google.com/maps/place/7%C2%B035'04.6%22S+110%C2%B012'07.5%22E/@-7.584607,110.2014423,19z/data=!3m1!4b1!4m12!1m7!3m6!1s0x2e7a8d7d5a072ef7:0xbfbf3b9cb724b14c!2sBOROBUDUR+GADGET!8m2!3d-7.5846603!4d110.2019964!16s%2Fg%2F11p3m5vt7b!3m3!8m2!3d-7.584607!4d110.202086?entry=ttu",
    },
    {
      title: "No. HP: ",
      desc: "082138351343",
      link: "tel:082138351343",
    },
    {
      title: "Whatsapp: ",
      desc: "082138351343",
      link: "https://wa.me/082138351343",
    },
    {
      title: "Instagram: ",
      desc: "vinddrone",
      link: "https://www.instagram.com/vinddrone/",
    },
    {
      title: "Tiktok: ",
      desc: "@arisantosoagus",
      link: "https://www.tiktok.com/@arisantosoagus",
    },
  ];

  return (
    <section
      id="footer"
      className="-mt-5 w-full h-1/4 bg-background pt-16 pb-16 relative rounded-t-3xl"
    >
      <Container>
        <h2 className="text-2xl md:text-3xl font-bold text-center pb-2">
          Kontak
        </h2>
        <h4 className="md:text-xl text-center mb-8">
          Hubungi kami untuk informasi lebih lanjut.
        </h4>
        <div className="w-full mx-auto flex flex-col gap-2">
          <div className="w-full h-60 lg:h-80 z-0 rounded-[22px]">
            <iframe
              title="maps"
              className="w-full h-full rounded-md"
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1044.086341813771!2d110.20143822845709!3d-7.5846097701531!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zN8KwMzUnMDQuNiJTIDExMMKwMTInMDcuNSJF!5e1!3m2!1sid!2sid!4v1725638985779!5m2!1sid!2sid"
              loading="lazy"
            ></iframe>
          </div>
          <div className="flex flex-col p-4 gap-2 text-sm md:text-base">
            {contactData.map((contact, i) => (
              <div key={i} className="w-full flex justify-start gap-2">
                <b>{contact.title}</b>
                <Link
                  rel="noopener"
                  target="_blank"
                  href={contact.link}
                  className="flex items-center justify-center group hover:underline gap-0"
                >
                  {contact.desc}
                  <ArrowUpRight
                    className="hidden group-hover:block"
                    size={10}
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="border-t absolute bottom-0 left-0 w-full py-4 flex items-center justify-center rounded-t-[22px]">
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
