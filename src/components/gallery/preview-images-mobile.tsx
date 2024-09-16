import Image from "next/image";

export default function PreviewImagesMobile({
  images,
  openGallery,
}: {
  images: string[];
  openGallery: any;
}) {
  const images_render = images.slice(1, 4);

  return (
    <div className="basis-[30%]">
      <div className=" grid grid-cols-3 gap-2">
        {images_render.map((img, idx) => (
          <div
            onClick={() => openGallery(idx + 1)}
            key={idx}
            className="rounded-md overflow-hidden relative cursor-pointer"
          >
            <Image
              className=" h-full object-cover"
              src={img}
              alt="prev image"
              width={1110}
              height={740}
            />
            {idx == 2 && (
              <div className="absolute inset-0 text-white bg-black font-semibold flex items-center justify-center text-[8px] lg:text-base bg-opacity-60">
                View all photos ({images.length})
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
