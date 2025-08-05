import { NextResponse } from 'next/server';

const Tiktok = require("@tobyg74/tiktok-api-dl");

export async function POST(request) {
  try {
    const { url, version = "v1" } = await request.json();
    
    if (!url) {
      return NextResponse.json(
        { error: 'TikTok URL is required' },
        { status: 400 }
      );
    }

    // Download TikTok video/content
    const result = await Tiktok.Downloader(url, {
      version: version,
      showOriginalResponse: false
    });

    return NextResponse.json(result);
    
  } catch (error) {
    console.error('TikTok API Error:', error);
    return NextResponse.json(
      { error: 'Failed to process TikTok URL' },
      { status: 500 }
    );
  }
}