import { NextResponse } from "next/server";
import cloudinary from "cloudinary";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const public_id = searchParams.get("public_id");

  if (!public_id) {
    return NextResponse.json(
      { error: "Missing public_id parameter" },
      { status: 400 }
    );
  }

  try {
    // Get the secure URL from Cloudinary
    const imageUrl = await cloudinary.v2.url(public_id, { secure: true });

    // Fetch the image
    const response = await fetch(imageUrl);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // Get the image data as a buffer
    const imageBuffer = await response.arrayBuffer();

    // Create and return the response
    return new NextResponse(imageBuffer, {
      headers: {
        "Content-Type": "image/jpeg",
        "Content-Disposition": `attachment; filename="${public_id}.jpg"`,
      },
    });
  } catch (error) {
    console.error("Error downloading image:", error);
    return NextResponse.json(
      { error: "Error downloading image" },
      { status: 500 }
    );
  }
}
