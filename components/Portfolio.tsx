import React from "react";
import Container from "./ui/container";
import { SocialCard } from "./SocialCard";
import EmblaCarousel from "./EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel";

const Portfolio = () => {
  const OPTIONS: EmblaOptionsType = { loop: true, active: true };
  const contents = [
    {
      imageUrl:
        "bg-[url(https://www.gizchina.com/wp-content/uploads/images/2023/05/Instagram-3-768x432.jpg)]",
      name: "Instagram",
      link: "https://www.instagram.com/vinddrone/",
    },
    {
      imageUrl:
        "bg-[url(https://www.meiahora.com.br/_midias/jpg/2020/04/29/tiktok-16899518.jpg)]",
      name: "Tiktok",
      link: "https://www.tiktok.com/@arisantosoagus",
    },
  ];
  return (
    <section
      id="portfolio"
      className="w-full h-full bg-background py-16 text-center"
    >
      <Container>
        <h2 className="text-2xl md:text-3xl font-bold text-center pb-2">
          Portofolio
        </h2>
        <h4 className="md:text-xl mb-8">
          Gunakan portofolio dibawah sebagai gambaran dari jasa yang kami
          sediakan.
        </h4>
        <EmblaCarousel options={OPTIONS} />
        <h4 className="md:text-xl mb-6">
          Kunjungi media sosial kami untuk melihat portofolio lebih lengkap.
        </h4>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mx-auto">
          {contents.map((content, i) => (
            <SocialCard content={content} key={i} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Portfolio;
