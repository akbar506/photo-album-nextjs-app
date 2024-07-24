import React from "react";
import UploadFile from "@/components/upload-file";
import ShowImage from "@/components/showImage";

export default function Gallery() {
  return (
    <>
      <div className="w-full">
        <div className="flex justify-between items-center p-5 w-full">
          <div>
            <h2 className="text-xl font-bold">Gallery</h2>
          </div>
          <div>
            <UploadFile />
          </div>
        </div>
        <div className="p-5">
          <ShowImage />
        </div>
      </div>
    </>
  );
}
