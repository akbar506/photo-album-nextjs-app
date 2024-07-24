import React from "react";
import cloudinary from "cloudinary";
import CloudinaryImage from "./cloudinary-image";

type SearchResult = {
  map(arg0: (result: any) => React.JSX.Element): React.ReactNode;
  public_id: string;
  width: number;
  height: number;
};

export default async function ShowImage() {
  const results = (await cloudinary.v2.search
    .expression("resource_type:image")
    .sort_by("public_id", "asc")
    .max_results(5)
    .execute()) as { resources: SearchResult };

  console.log(results);

  return (
    <>
      <main>
        <div className="flex gap-5 flex-wrap">
          {results.resources.map((result: SearchResult) => (
            <CloudinaryImage
              key={result.public_id}
              src={result.public_id}
              width={result.width}
              height={result.height}
            />
          ))}
        </div>
      </main>
    </>
  );
}
