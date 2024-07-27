"use client";
import { Button } from "./ui/button";
import { useToast } from "@/components/ui/use-toast";
import Revalidate from "./revalidate";

export default function DeleteButton({ public_id }: { public_id: string }) {
  const { toast } = useToast();

  const deleteImage = async () => {
    try {
      const response = await fetch("/api/delete-image", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ public_id }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Delete response:", data);

        // Show success toast
        toast({
          title: "Image Successfully Deleted!",
          description: "The image has been removed from the gallery.",
        });
        // Revalidate the component to update the list of images
        <Revalidate path="/gallery" />;
      } else {
        const errorData = await response.json();
        console.error("Error response:", errorData);
        throw new Error(errorData.message || "Failed to delete image");
      }
    } catch (error) {
      console.error("Error deleting image:", error);

      // Show error toast
      toast({
        title: "Error Deleting Image",
        description:
          error instanceof Error ? error.message : "An unknown error occurred",
        variant: "destructive",
      });
    }
  };

  return (
    <Button variant={"ghost"} className="p-0" size={"sm"} onClick={deleteImage}>
      Delete
    </Button>
  );
}
