"use client";

import { sendErrorMessageToSlack } from "@/lib/car-actions";
import Image from "next/image";
import { usePathname } from "next/navigation";

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
  // Get the current pathname

  const pathname = usePathname();

  async function handleError(e: any) {
    await sendErrorMessageToSlack(
      `Something went wrong with loading this image => ${e.target.alt}!!! URL ===> https://nolemons.co${pathname}`
    );
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
