"use client";
import React, { useState, useEffect, useCallback } from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import { Thumb } from "./EmblaCarouselThumbsButton";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Image from "next/image";
import { PlaySquare } from "lucide-react";

type PropType = {
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { options } = props;
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaMainRef, emblaMainApi] = useEmblaCarousel(options);
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: "keepSnaps",
    dragFree: true,
  });

  const onThumbClick = useCallback(
    (index: number) => {
      if (!emblaMainApi || !emblaThumbsApi) return;
      emblaMainApi.scrollTo(index);
    },
    [emblaMainApi, emblaThumbsApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaMainApi || !emblaThumbsApi) return;
    setSelectedIndex(emblaMainApi.selectedScrollSnap());
    emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap());
  }, [emblaMainApi, emblaThumbsApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaMainApi) return;
    onSelect();
    emblaMainApi.on("select", onSelect);
    emblaMainApi.on("reInit", onSelect);
  }, [emblaMainApi, onSelect]);

  const portfolioData = [
    {
      url: "/vinddrone.png",
      title: "Vinddrone",
      link: "https://fast.wistia.net/embed/iframe/sed1v4zloq?seo=true&videoFoam=true",
    },
    {
      url: "/ketep-pass.png",
      title: "Ketep Pass",
      link: "https://fast.wistia.net/embed/iframe/4elniluvbh?seo=true&videoFoam=true",
    },
    {
      url: "/desa-digital.png",
      title: "Family Gathering Desa Digital",
      link: "https://fast.wistia.net/embed/iframe/stb3emm6h3?seo=true&videoFoam=true",
    },
    {
      url: "/politeknik.png",
      title: "Family Gathering Politeknik KTJ",
      link: "https://fast.wistia.net/embed/iframe/9ctp9nd218?seo=true&videoFoam=true",
    },
    {
      url: "/travel.png",
      title: "Traveling Borobudur",
      link: "https://fast.wistia.net/embed/iframe/z4nl6cu35n?seo=true&videoFoam=true",
    },
    {
      url: "/pasar-ngaleh.png",
      title: "Pasar Ngaleh Desa Bumiharjo",
      link: "https://fast.wistia.net/embed/iframe/ydp0uq3uiu?seo=true&videoFoam=true",
    },
    {
      url: "/dieng.png",
      title: "Dieng Wonderland",
      link: "https://fast.wistia.net/embed/iframe/0z18jksoci?seo=true&videoFoam=true",
    },
    {
      url: "/sukomakmur.png",
      title: "Sukomakmur",
      link: "https://fast.wistia.net/embed/iframe/n375achinm?seo=true&videoFoam=true",
    },
    {
      url: "/sawangan.png",
      title: "Sawangan",
      link: "https://fast.wistia.net/embed/iframe/gmgjiimfix?seo=true&videoFoam=true",
    },
  ];

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaMainRef}>
        <div className="embla__container">
          {portfolioData.map((data, index) => (
            <div className="embla__slide" key={index}>
              <Dialog>
                <DialogTrigger className="relative group">
                  <div className="embla__slide__number">
                    <Image
                      priority
                      src={data.url}
                      alt={data.title}
                      width={1280}
                      height={720}
                    />
                    <span className="flex items-center justify-center text-white w-full h-10 group-hover:h-full transition-all bg-black/50 absolute bottom-0 left-0">
                      <PlaySquare
                        width={50}
                        height={50}
                        className="scale-50 group-hover:scale-100 aspect-square"
                      />
                      <p className="group-hover:hidden text-sm">{data.title}</p>
                    </span>
                  </div>
                </DialogTrigger>
                <DialogContent className="p-0 min-w-[60vw] max-w-xl aspect-video flex items-center justify-center z-50">
                  <iframe
                    className="rounded-md w-full h-full"
                    src={data.link}
                    title={data.title}
                    allow="autoplay; fullscreen"
                    allowFullScreen
                  ></iframe>
                </DialogContent>
              </Dialog>
            </div>
          ))}
        </div>
      </div>

      <div className="embla-thumbs -mt-3 sm:-mt-5">
        <div className="embla-thumbs__viewport" ref={emblaThumbsRef}>
          <div className="embla-thumbs__container">
            {portfolioData.map((data, index) => (
              <Thumb
                key={index}
                onClick={() => onThumbClick(index)}
                selected={index === selectedIndex}
                index={index}
                url={data.url}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
