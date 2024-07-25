import React from "react";
import cloudinary from "cloudinary";
import CloudinaryImage from "./cloudinary-image";
import ImageSkeleton from "@/components/image-skeleton";
import { Suspense } from "react";
import Link from "next/link";

type SearchResult = {
  width: number;
  height: number;
  url: string;
  public_id: string;
};
async function getCloudinaryResults() {
  // Use Cloudinary Package to get images "public_id" and store in a array
  const results = (await cloudinary.v2.search
    .expression("resource_type:image")
    .sort_by("public_id", "asc")
    // .max_results(5)
    .execute()) as { resources: SearchResult[] };

  console.log(results.resources);

  return results.resources;
}

export default async function ShowImage() {
  return (
    <>
      <main>
        <div className="flex gap-5 flex-wrap">
          {/* Use Suspense for while fetching images */}
          <Suspense fallback={<ImageSkeleton />}>
            <ImageResults />
          </Suspense>
        </div>
      </main>
    </>
  );
}

function ImageResults() {
  const results = React.use(getCloudinaryResults());

  return (
    <main>
      <div className="flex gap-5 flex-wrap">
        {results.map((result: SearchResult) => (
          <div key={result.public_id}>
            <Link href={`/api/download?public_id=${result.public_id}`}>
              <CloudinaryImage // Get Cloudinary Image Component and show image using public id
                src={result.public_id}
                width={result.width}
                height={result.height}
                url=""
              />
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
