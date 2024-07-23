import { redirect } from "next/navigation";

export default async function Home() {
  redirect(`/gallery/`); // Navigate to the gallery page
  return <></>;
}
