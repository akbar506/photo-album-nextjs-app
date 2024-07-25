"use client";
import React from "react";
import { CldUploadButton } from "next-cloudinary";
import { Button } from "./ui/button";

export default function UploadFile() {
  return (
    <>
      {/* It uses CldUploadButton to upload the image to cloudinary */}
      <Button asChild>
        <CldUploadButton uploadPreset="arfycboc" />
      </Button>
    </>
  );
}
