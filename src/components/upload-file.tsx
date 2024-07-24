"use client";
import React from "react";
import { CldUploadButton } from "next-cloudinary";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

export default function UploadFile() {
  const router = useRouter();
  return (
    <>
      <Button asChild>
        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15m0-3-3-3m0 0-3 3m3-3V15"
          />
        </svg> */}

        <CldUploadButton
          onUploadAdded={(result: any) => {
            console.log(result.info.public_id);
            router.push("/gallery");
          }}
          uploadPreset="arfycboc"
        />
      </Button>
    </>
  );
}
