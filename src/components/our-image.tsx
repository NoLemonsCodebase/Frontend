"use client";

import { sendErrorMessageToSlack } from "@/lib/car-actions";
import Image from "next/image";

interface OurImageProps {
  src: string;
  width: number;
  height: number;
  classes?: string;
  alt: string;
}

const OurImage: React.FC<OurImageProps> = ({
  src,
  width,
  height,
  alt,
  classes = "",
}) => {
  function handleError(e: any) {
    // sendErrorMessageToSlack(
    //   `Something is wrong with loading this image => ${e.target.alt}!!!`
    // );
  }

  return (
    <Image
      src={src}
      width={width}
      height={height}
      alt={alt}
      className={classes}
      onError={handleError}
    />
  );
};

export default OurImage;
