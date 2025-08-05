import { NextResponse } from 'next/server';
import { Downloader, GetVideoComments } from '@tobyg74/tiktok-api-dl';

const cache = new Map();
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    let urlTik = searchParams.get('url') || '';
    const version = searchParams.get('version') || 'v3';
    const includeComments = searchParams.get('comments') === 'true';

    if (!urlTik) {
      return NextResponse.json(
        { error: 'url is required' },
        { status: 400 }
      );
    }

    const cacheKey = `${urlTik}_${version}_${includeComments}`;
    const cached = cache.get(cacheKey);
    
    if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
      return NextResponse.json(cached.data);
    }

    if (urlTik.includes('douyin')) {
      try {
        const response = await fetch(urlTik, {
          method: 'HEAD',
          redirect: 'follow',
        });
        urlTik = response.url.replace('douyin', 'tiktok');
      } catch (e) {
        console.log('Douyin redirect failed:', e);
      }
    }

    const data = await Downloader(urlTik, {
      version: version,
    });

    const isStory = urlTik.includes('/story/');
    if (isStory && data?.result) {
      data.result.type = 'story';
    }

    const createTime = data?.result?.create_time;
    const uploadDate = createTime
      ? new Date(createTime * 1000).toISOString()
      : null;

    if (data?.result) {
      data.result.uploadDate = uploadDate;
    }

    if (includeComments && data?.result && urlTik) {
      try {
        const comments = await GetVideoComments(urlTik, {
          commentLimit: 10
        });
        data.result.comments = comments?.result || [];
      } catch (e) {
        console.log('Comments fetch failed:', e);
        data.result.comments = [];
      }
    }

    cache.set(cacheKey, {
      data,
      timestamp: Date.now()
    });

    return NextResponse.json(data);

  } catch (error) {
    console.error('TikTok API Error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to process TikTok URL' },
      { status: 500 }
    );
  }
}