"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

export default function Refresh() {
  const router = useRouter();

  const onButtonClick = () => {
    router.push("/");
  };
  return (
    <>
      <Button onClick={onButtonClick}>Refresh</Button>
    </>
  );
}
