"use client";
import { CldImage } from "next-cloudinary";

type CloudinaryImage = {
  src: string;
  width: number;
  height: number;
};

export default function CloudinaryImage({
  src,
  width,
  height,
  ...props
}: CloudinaryImage) {
  return (
    <div className="max-w-80">
      <CldImage
        key={src}
        width={width}
        height={height}
        src={src}
        {...props}
        sizes="100vw"
        alt="Image"
        // removeBackground
      />
    </div>
  );
}
