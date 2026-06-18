import React from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { aiVideos } from '../data/aiVideos';
import { financeVideos } from '../data/financeVideos';

const VideoPlayerPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();
  
  // Get video from location state or find by id
  let video = location.state?.video;
  
  if (!video && id) {
    // Search in both video collections
    const allVideos = [...aiVideos, ...financeVideos];
    video = allVideos.find(v => v.id === parseInt(id));
  }

  // Enhanced URL handling for different YouTube formats
  const getEmbedUrl = (url) => {
    if (!url) return '';
    
    // If it's already an embed URL, return as is
    if (url.includes('youtube.com/embed/')) {
      return url;
    }
    
    // If it's a playlist
    if (url.includes('list=')) {
      const match = url.match(/list=([^&]+)/);
      if (match) {
        return `https://www.youtube.com/embed/videoseries?list=${match[1]}`;
      }
    }
    
    // If it's a watch URL (youtube.com/watch?v=VIDEO_ID)
    if (url.includes('watch?v=')) {
      const videoId = url.split('v=')[1]?.split('&')[0];
      if (videoId) {
        return `https://www.youtube.com/embed/${videoId}`;
      }
    }
    
    // If it's a youtu.be URL (youtu.be/VIDEO_ID)
    if (url.includes('youtu.be/')) {
      const videoId = url.split('youtu.be/')[1]?.split('?')[0];
      if (videoId) {
        return `https://www.youtube.com/embed/${videoId}`;
      }
    }
    
    // If it's a shorts URL (youtube.com/shorts/VIDEO_ID)
    if (url.includes('shorts/')) {
      const videoId = url.split('shorts/')[1]?.split('?')[0];
      if (videoId) {
        return `https://www.youtube.com/embed/${videoId}`;
      }
    }
    
    // If it's a search URL, convert to embed
    if (url.includes('search_query=')) {
      const searchQuery = url.split('search_query=')[1]?.split('&')[0];
      if (searchQuery) {
        return `https://www.youtube.com/embed/?search_query=${searchQuery}`;
      }
    }
    
    // If none of the above, return the original URL
    return url;
  };

  // Get the embed URL
  const embedUrl = getEmbedUrl(video?.url);

  // Handle video not found
  if (!video) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-400 text-lg mb-4">Video not found</p>
          <button 
            onClick={() => navigate('/ai-hub')} 
            className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg text-white"
          >
            Go Back to Videos
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black py-12">
      <div className="container mx-auto px-4">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-400 hover:text-purple-400 mb-6 transition-colors"
        >
          <FaArrowLeft /> Back to Videos
        </button>

        <div className="max-w-5xl mx-auto">
          {/* Video Player */}
          <div className="aspect-video rounded-xl overflow-hidden shadow-2xl shadow-purple-500/20 bg-black">
            {embedUrl ? (
              <iframe
                src={`${embedUrl}?autoplay=1&rel=0&modestbranding=1&showinfo=0&controls=1&iv_load_policy=3&cc_load_policy=0`}
                title={video.title}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gray-900">
                <div className="text-center">
                  <p className="text-gray-400 text-lg mb-4">⚠️ Video unavailable</p>
                  <p className="text-gray-500 text-sm">The video URL could not be loaded</p>
                  <a 
                    href={video.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="mt-4 inline-block px-6 py-2 bg-purple-600 rounded-lg text-white hover:bg-purple-700"
                  >
                    Open on YouTube
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* Video Info */}
          <div className="mt-6">
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-3">{video.title}</h1>
            <div className="flex flex-wrap gap-3">
              <span className="px-3 py-1 bg-purple-900/50 rounded-full text-purple-300 text-sm">
                📺 Language: {video.language}
              </span>
              <span className="px-3 py-1 bg-purple-900/50 rounded-full text-purple-300 text-sm">
                📂 Category: {video.category}
              </span>
            </div>
          </div>

          {/* Related Videos - Optional */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-white mb-4">Watch More</h3>
            <button 
              onClick={() => navigate(-1)}
              className="text-purple-400 hover:text-purple-300"
            >
              ← Browse all videos
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayerPage;
