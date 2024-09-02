import Image from "next/image";
import SwiperSlider from "./swiper-slider";

type CarImage = {
  image: string;
};

type MobileGalleryProps = {
  carImages: CarImage[];
};

export default function MobileGallery({ carImages }: MobileGalleryProps) {
  const all_images = carImages.map((ob) => ob.image);

  return (
    <div>
      <div>
        <Image src={all_images[0]} alt="main image" width={1110} height={740} />
      </div>

      <SwiperSlider allImages={all_images} />
    </div>
  );
}
