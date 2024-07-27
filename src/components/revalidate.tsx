import { revalidatePath } from "next/cache";
import React from "react";

export default function Revalidate({ path }: { path: string }) {
  revalidatePath(path);
  return <></>;
}
