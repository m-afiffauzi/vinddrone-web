"use client";
import React, { useState, useEffect, useCallback } from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import { Thumb } from "./EmblaCarouselThumbsButton";
import Image from "next/image";

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

  const images = [
    {
      url: "/1.png",
    },
    {
      url: "/2.png",
    },
    {
      url: "/3.png",
    },
    {
      url: "/4.png",
    },
    {
      url: "/5.png",
    },
    {
      url: "/6.png",
    },
    {
      url: "/7.png",
    },
    {
      url: "/8.png",
    },
    {
      url: "/9.png",
    },
    {
      url: "/10.png",
    },
    {
      url: "/11.png",
    },
    {
      url: "/12.png",
    },
    {
      url: "/13.png",
    },
    {
      url: "/14.png",
    },
    {
      url: "/15.png",
    },
    {
      url: "/16.png",
    },
    {
      url: "/17.png",
    },
    {
      url: "/18.png",
    },
    {
      url: "/19.png",
    },
    {
      url: "/20.png",
    },
  ];

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaMainRef}>
        <div className="embla__container">
          {images.map((image, index) => (
            <div className="embla__slide" key={index}>
              <div className="embla__slide__number">
                {index == 0 ? (
                  <Image
                    priority
                    src={image.url}
                    alt={`${index}`}
                    width={800}
                    height={800}
                    className="aspect-video rounded-[1.8rem]"
                  />
                ) : (
                  <Image
                    src={image.url}
                    alt={`${index}`}
                    width={800}
                    height={800}
                    className="aspect-video rounded-[1.8rem]"
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="embla-thumbs">
        <div className="embla-thumbs__viewport" ref={emblaThumbsRef}>
          <div className="embla-thumbs__container">
            {images.map((image, index) => (
              <Thumb
                key={index}
                onClick={() => onThumbClick(index)}
                selected={index === selectedIndex}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
