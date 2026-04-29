import { NextResponse } from "next/server";

export async function GET() {
  const response = await fetch(
    "https://www.dailymotion.com/player/metadata/video/x9svm7m",
    { next: { revalidate: 3600 } }
  );

  if (!response.ok) {
    return NextResponse.json({ hls: null }, { status: 502 });
  }

  const metadata = await response.json();
  const hls = metadata?.qualities?.auto?.[0]?.url ?? null;

  return NextResponse.json({ hls });
}
