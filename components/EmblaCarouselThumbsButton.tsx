import Image from "next/image";
import React from "react";

type PropType = {
  selected: boolean;
  index: number;
  onClick: () => void;
  url: string;
};

export const Thumb: React.FC<PropType> = (props) => {
  const { selected, index, url, onClick } = props;

  return (
    <div
      className={"embla-thumbs__slide".concat(
        selected ? " embla-thumbs__slide--selected brightness-50" : ""
      )}
    >
      <button
        onClick={onClick}
        type="button"
        className="embla-thumbs__slide__number p-0"
      >
        <Image
          src={url}
          alt={index + "1"}
          width={100}
          height={100}
          className="aspect-square rounded-xl"
        />
      </button>
    </div>
  );
};
