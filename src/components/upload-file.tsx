"use client";
import React from "react";
import { CldUploadButton } from "next-cloudinary";
import { Button } from "./ui/button";
import { useToast } from "@/components/ui/use-toast";

export default function UploadFile() {
  const { toast } = useToast();

  const uploadedSuccess = () => {
    setTimeout(() => {
      // Show success toast
      toast({
        title: "Image Successfully Uploaded!",
        description: "The image has been successfully uploaded :)",
      });
    }, 5000);
  };

  return (
    <>
      {/* It uses CldUploadButton to upload the image to cloudinary */}
      <Button asChild>
        <CldUploadButton
          uploadPreset="arfycboc"
          onUploadAdded={uploadedSuccess}
        />
      </Button>
    </>
  );
}
