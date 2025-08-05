'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { Download, Paste } from 'lucide-react';

const HeroOne = () => {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);

  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      setUrl(text);
      toast.success('URL pasted!');
    } catch (err) {
      toast.error('Clipboard access denied');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!url.trim()) {
      toast.error('Please enter a valid TikTok URL');
      return;
    }

    setLoading(true);
    
    try {
      const params = new URLSearchParams({
        url: url.trim(),
        version: 'v3',
        comments: 'false'
      });

      const response = await fetch(`/api/tiktok?${params}`);
      const json = await response.json();

      if (!response.ok) {
        throw new Error(json.error || 'Something went wrong');
      }

      if (json.status === 'error') {
        throw new Error(json.message || 'Failed to process video');
      }

      setData(json);
      toast.success('Video processed successfully!');
      
      // Scroll to results section
      setTimeout(() => {
        const resultsSection = document.getElementById('tiktok-results');
        if (resultsSection) {
          resultsSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 500);

    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Toaster position="bottom-center" />
      <div className="hero-section-2">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="hero-content-2">
                <div className="sub-title-2" data-animation="fade-zoom-in" data-delay={0.4}>
                  <p>TikTok Video Downloader</p>
                </div>
                <h2>
                  <span data-animation="fade-up">Download TikTok videos in</span>
                  <span className="sub-head" data-animation="fade-up" data-delay={0.2}>High Quality</span>
                </h2>
                <div className="image-generator-box">
                  <div className="searchbox" data-animation="fade-zoom-in">
                    <div className="searchwrapper">
                      <form onSubmit={handleSubmit}>
                        <div className="row align-items-center">
                          <div className="col-md-9">
                            <div className="position-relative">
                              <input 
                                type="text" 
                                className="form-control" 
                                placeholder="Paste TikTok URL here..." 
                                value={url}
                                onChange={(e) => setUrl(e.target.value)}
                                required
                              />
                              <button
                                type="button"
                                className="btn btn-outline-secondary position-absolute top-50 end-0 translate-middle-y me-2"
                                onClick={handlePaste}
                                style={{ border: 'none', background: 'rgba(0,0,0,0.1)' }}
                              >
                                <Paste size={16} />
                              </button>
                            </div>
                          </div>
                          <div className="col-lg-3">
                            <button 
                              className="btn w-100" 
                              type="submit"
                              disabled={loading}
                            >
                              {loading ? (
                                <>
                                  <span className="spinner-border spinner-border-sm me-2" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                  </span>
                                  Processing...
                                </>
                              ) : (
                                <>
                                  <Download size={16} className="me-2" />
                                  Download
                                </>
                              )}
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="short-prompt" data-animation="fade-zoom-in">
                  <ul>
                    <li><p>Features :</p></li>
                    <li><Link className="hover-bg" href="#features">HD Quality</Link></li>
                    <li><Link href="#features">No Watermark</Link></li>
                    <li><Link href="#features">Audio Only</Link></li>
                    <li><Link href="#features">Fast Download</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroOne;