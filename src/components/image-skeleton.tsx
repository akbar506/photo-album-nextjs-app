import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

export default function ImageSkeleton() {
  return (
    <>
      {[...Array(12)].map((_, index) => (
        <Skeleton className="h-80 w-80 rounded-lg" />
      ))}
    </>
  );
}
