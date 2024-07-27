import { NextResponse } from "next/server";
import cloudinary from "cloudinary";

cloudinary.v2.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function DELETE(request: Request) {
  const { public_id } = await request.json();

  if (!public_id) {
    return NextResponse.json(
      { message: "public_id is required" },
      { status: 400 }
    );
  }

  try {
    const result = await cloudinary.v2.uploader.destroy(public_id, {
      invalidate: true,
    });
    return NextResponse.json(
      { message: "Image deleted successfully", result },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting image:", error);
    return NextResponse.json(
      { message: "Error deleting image", error },
      { status: 500 }
    );
  }
}
