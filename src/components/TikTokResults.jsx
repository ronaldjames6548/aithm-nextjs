'use client';
import React from 'react';
import { Video, Music, Download } from 'lucide-react';
import toast from 'react-hot-toast';

const TikTokResults = ({ data }) => {
  if (!data || data.status !== 'success') {
    return null;
  }

  const downloadFile = (fileUrl, filename, type) => {
    const proxyUrl = `https://dl.tiktokiocdn.workers.dev/api/download?url=${encodeURIComponent(fileUrl)}&type=${type}&title=${encodeURIComponent(filename)}`;
    
    const link = document.createElement('a');
    link.href = proxyUrl;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    toast.success(`Downloading ${type} file...`);
  };

  return (
    <section id="tiktok-results" className="py-5 bg-light">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-xl-10">
            <div className="card shadow-lg border-0">
              <div className="card-body p-4">
                <div className="row g-4">
                  
                  {/* Video Preview */}
                  <div className="col-12 col-lg-5">
                    <div className="position-relative rounded overflow-hidden bg-dark" style={{ aspectRatio: '9/16', maxHeight: '500px' }}>
                      <video
                        controls
                        src={data.result.videoSD || data.result.videoHD || data.result.videoWatermark || ''}
                        className="w-100 h-100"
                        style={{ objectFit: 'contain' }}
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  </div>

                  {/* Content and Downloads */}
                  <div className="col-12 col-lg-7">
                    
                    {/* Author Info */}
                    <div className="d-flex align-items-center mb-4">
                      <img
                        src={data.result.author?.avatar || ''}
                        alt={data.result.author?.nickname || ''}
                        className="rounded-circle me-3"
                        width="64"
                        height="64"
                        style={{ objectFit: 'cover' }}
                      />
                      <div>
                        <h4 className="mb-1">{data.result.author?.nickname || 'Unknown'}</h4>
                        <p className="text-muted mb-0">@{data.result.author?.username || 'unknown'}</p>
                      </div>
                    </div>
                    
                    {/* Description */}
                    <p className="text-muted mb-4">
                      {data.result.desc || 'No description available'}
                    </p>

                    {/* Download Buttons */}
                    <div className="d-grid gap-3">
                      {data.result.videoSD && (
                        <button
                          onClick={() => downloadFile(data.result.videoSD, `${data.result.author?.nickname || 'tiktok'}_SD`, '.mp4')}
                          className="btn btn-primary btn-lg d-flex align-items-center justify-content-center"
                          style={{ background: 'linear-gradient(45deg, #007bff, #0056b3)' }}
                        >
                          <Video size={20} className="me-2" />
                          Download SD (No Watermark)
                        </button>
                      )}
                      
                      {data.result.videoHD && (
                        <button
                          onClick={() => downloadFile(data.result.videoHD, `${data.result.author?.nickname || 'tiktok'}_HD`, '.mp4')}
                          className="btn btn-lg d-flex align-items-center justify-content-center text-white"
                          style={{ background: 'linear-gradient(45deg, #6f42c1, #5a32a3)' }}
                        >
                          <Video size={20} className="me-2" />
                          Download HD (No Watermark)
                        </button>
                      )}
                      
                      {data.result.videoWatermark && (
                        <button
                          onClick={() => downloadFile(data.result.videoWatermark, `${data.result.author?.nickname || 'tiktok'}_watermark`, '.mp4')}
                          className="btn btn-success btn-lg d-flex align-items-center justify-content-center"
                          style={{ background: 'linear-gradient(45deg, #28a745, #1e7e34)' }}
                        >
                          <Video size={20} className="me-2" />
                          Download (With Watermark)
                        </button>
                      )}
                      
                      {data.result.music && (
                        <button
                          onClick={() => downloadFile(data.result.music, `${data.result.author?.nickname || 'tiktok'}_audio`, '.mp3')}
                          className="btn btn-lg d-flex align-items-center justify-content-center text-white"
                          style={{ background: 'linear-gradient(45deg, #e83e8c, #c2185b)' }}
                        >
                          <Music size={20} className="me-2" />
                          Download Audio Only
                        </button>
                      )}
                    </div>

                    {/* Upload Date */}
                    {data.result.uploadDate && (
                      <div className="mt-4">
                        <small className="text-muted">
                          Uploaded: {new Date(data.result.uploadDate).toLocaleDateString()}
                        </small>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TikTokResults;