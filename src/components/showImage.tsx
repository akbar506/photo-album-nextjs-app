import React from "react";
import cloudinary from "cloudinary";
import CloudinaryImage from "./cloudinary-image";
import ImageSkeleton from "@/components/image-skeleton";
import { Suspense } from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import VerticalThreeDot from "./vertical-three-dot";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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
            {/* eslint-disable-next-line react/jsx-key */}
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
          <div key={result.public_id} className="relative">
            <CloudinaryImage // Get Cloudinary Image Component and show image using public id
              src={result.public_id}
              width={result.width}
              height={result.height}
              url=""
            />
            <div className="absolute top-3 right-3">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="secondary"
                    className="p-3 rounded-full opacity-60"
                  >
                    <VerticalThreeDot className="rounded-full" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-36">
                  <DropdownMenuLabel>Options</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <DropdownMenuItem>
                      <span>Edit</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link
                        href={`/api/download?public_id=${result.public_id}`}
                      >
                        <span>Download</span>
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <span>Delete</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
