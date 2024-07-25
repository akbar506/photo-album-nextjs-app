import React from "react";
import UploadFile from "@/components/upload-file";
import ShowImage from "@/components/showImage";
import Refresh from "@/components/refresh";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function Gallery() {
  return (
    <>
      <div className="w-full">
        <div className="w-10/12 p-5">
          <Alert>
            <AlertTitle>NOTE!</AlertTitle>
            <AlertDescription>
              Once you upload an Image, There is no option at that time to
              delete that image means it cannot be deleted and also it will
              avaiable to everyone who visits this website.
            </AlertDescription>
          </Alert>
        </div>

        <div className="flex justify-between items-center p-5 w-full">
          <div>
            <h2 className="text-xl font-bold">Gallery</h2>
          </div>
          <div className="flex gap-x-5">
            <div>
              <Refresh />
            </div>
            <div>
              <UploadFile />
            </div>
          </div>
        </div>
        <div className="p-5">
          <ShowImage />
        </div>
      </div>
    </>
  );
}
