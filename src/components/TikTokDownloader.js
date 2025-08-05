'use client';
import { useState } from 'react';

export default function TikTokDownloader() {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const handleDownload = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setResult(null);

    try {
      const response = await fetch('/api/tiktok', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url, version: 'v1' }),
      });

      const data = await response.json();

      if (response.ok) {
        setResult(data);
      } else {
        setError(data.error || 'Something went wrong');
      }
    } catch (err) {
      setError('Network error occurred');
    } finally {
      setLoading(false);
    }
  };

  const downloadFile = async (fileUrl, filename) => {
    try {
      const response = await fetch(fileUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.style.display = 'none';
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (error) {
      console.error('Download failed:', error);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
        TikTok Video Downloader
      </h2>
      
      <form onSubmit={handleDownload} className="mb-6">
        <div className="flex flex-col gap-4">
          <input
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Enter TikTok URL (e.g., https://vt.tiktok.com/xxxxxxxx)"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
          >
            {loading ? 'Processing...' : 'Download'}
          </button>
        </div>
      </form>

      {error && (
        <div className="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
          {error}
        </div>
      )}

      {result && result.status === 'success' && (
        <div className="bg-gray-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-4">Download Options:</h3>
          
          {/* Video Description */}
          {result.result?.desc && (
            <div className="mb-4">
              <p className="text-sm text-gray-600 font-medium">Description:</p>
              <p className="text-gray-800">{result.result.desc}</p>
            </div>
          )}

          {/* Author Info */}
          {result.result?.author && (
            <div className="mb-4 flex items-center gap-3">
              <img 
                src={result.result.author.avatarThumb?.[0]} 
                alt="Author" 
                className="w-10 h-10 rounded-full"
              />
              <div>
                <p className="font-medium">@{result.result.author.username}</p>
                <p className="text-sm text-gray-600">{result.result.author.nickname}</p>
              </div>
            </div>
          )}

          {/* Video Downloads */}
          {result.result?.video && (
            <div className="mb-4">
              <h4 className="font-medium mb-2">Video:</h4>
              <div className="flex flex-wrap gap-2">
                {result.result.video.playAddr?.map((videoUrl, index) => (
                  <button
                    key={index}
                    onClick={() => downloadFile(videoUrl, `tiktok_video_${result.result.id}.mp4`)}
                    className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg text-sm"
                  >
                    Download Video {index + 1}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Image Downloads */}
          {result.result?.images && (
            <div className="mb-4">
              <h4 className="font-medium mb-2">Images:</h4>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mb-4">
                {result.result.images.map((imageUrl, index) => (
                  <div key={index} className="relative">
                    <img 
                      src={imageUrl} 
                      alt={`Image ${index + 1}`}
                      className="w-full h-32 object-cover rounded-lg"
                    />
                    <button
                      onClick={() => downloadFile(imageUrl, `tiktok_image_${index + 1}.jpg`)}
                      className="absolute bottom-2 right-2 px-2 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded text-xs"
                    >
                      Download
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Music Download */}
          {result.result?.music && (
            <div className="mb-4">
              <h4 className="font-medium mb-2">Music:</h4>
              <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                <img 
                  src={result.result.music.coverThumb?.[0]} 
                  alt="Music cover" 
                  className="w-12 h-12 rounded"
                />
                <div className="flex-grow">
                  <p className="font-medium">{result.result.music.title}</p>
                  <p className="text-sm text-gray-600">{result.result.music.author}</p>
                </div>
                {result.result.music.playUrl?.[0] && (
                  <button
                    onClick={() => downloadFile(result.result.music.playUrl[0], `${result.result.music.title}.mp3`)}
                    className="px-3 py-1 bg-purple-600 hover:bg-purple-700 text-white rounded text-sm"
                  >
                    Download Music
                  </button>
                )}
              </div>
            </div>
          )}

          {/* Statistics */}
          {result.result?.statistics && (
            <div className="text-sm text-gray-600">
              <p>👍 {result.result.statistics.likeCount?.toLocaleString() || 0} likes</p>
              <p>💬 {result.result.statistics.commentCount?.toLocaleString() || 0} comments</p>
              <p>🔄 {result.result.statistics.shareCount?.toLocaleString() || 0} shares</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}