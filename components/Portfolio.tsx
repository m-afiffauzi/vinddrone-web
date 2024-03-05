import React from "react";
import Container from "./ui/container";
import { AwareCard } from "./AwareCard";
import EmblaCarousel from "./EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel";

const Portfolio = () => {
  const OPTIONS: EmblaOptionsType = { loop: true, active: true };
  const contents = [
    {
      imageUrl: "/instagram-banner.png",
      name: "instagram",
      link: "https://www.instagram.com/vinddrone.magelang/",
    },
    {
      imageUrl: "/tiktok-banner.jpg",
      name: "tiktok",
      link: "https://www.tiktok.com/@arisantosoagus",
    },
  ];
  return (
    <section
      id="portfolio"
      className="w-full h-full bg-background py-16 text-center px-4"
    >
      <Container>
        <h2 className="md:text-2xl font-bold">Portofolio</h2>
        <h4 className="text-sm md:text-xl mb-8">
          Gunakan portofolio dibawah sebagai gambaran dari jasa yang kami
          sediakan.
        </h4>
        <EmblaCarousel options={OPTIONS} />
        <h4 className="text-sm md:text-xl my-8">
          Klik link dibawah ini untuk melihat portofolio lebih lengkap.
        </h4>
        <div className="flex flex-col sm:flex-row items-center justify-center md:gap-4 md:p-4">
          {contents.map((content, i) => (
            <div key={i}>
              <AwareCard content={content} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Portfolio;
