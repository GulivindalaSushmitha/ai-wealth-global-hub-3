import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { FaArrowLeft, FaYoutube } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { aiVideos } from '../data/aiVideos';
import { financeVideos } from '../data/financeVideos';

const VideoPlayerPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();
  const [videoError, setVideoError] = useState(false);
  
  // Get video from location state or find by id
  let video = location.state?.video;
  
  if (!video && id) {
    const allVideos = [...aiVideos, ...financeVideos];
    video = allVideos.find(v => v.id === parseInt(id));
  }

  // Enhanced URL handling for different YouTube formats
  const getEmbedUrl = (url) => {
    if (!url) return '';
    
    if (url.includes('youtube.com/embed/')) return url;
    
    if (url.includes('list=')) {
      const match = url.match(/list=([^&]+)/);
      if (match) {
        return `https://www.youtube.com/embed/videoseries?list=${match[1]}`;
      }
    }
    
    if (url.includes('watch?v=')) {
      const videoId = url.split('v=')[1]?.split('&')[0];
      if (videoId) return `https://www.youtube.com/embed/${videoId}`;
    }
    
    if (url.includes('youtu.be/')) {
      const videoId = url.split('youtu.be/')[1]?.split('?')[0];
      if (videoId) return `https://www.youtube.com/embed/${videoId}`;
    }
    
    if (url.includes('shorts/')) {
      const videoId = url.split('shorts/')[1]?.split('?')[0];
      if (videoId) return `https://www.youtube.com/embed/${videoId}`;
    }
    
    if (url.includes('search_query=')) {
      const searchQuery = url.split('search_query=')[1]?.split('&')[0];
      if (searchQuery) {
        return `https://www.youtube.com/embed/?search_query=${searchQuery}`;
      }
    }
    
    return url;
  };

  const embedUrl = getEmbedUrl(video?.url);

  // Handle iframe error
  const handleIframeError = () => {
    setVideoError(true);
  };

  // Reset error when video changes
  useEffect(() => {
    setVideoError(false);
  }, [video?.id]);

  if (!video) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">😕</div>
          <p className="text-gray-400 text-lg mb-4">Video not found</p>
          <button 
            onClick={() => navigate('/ai-hub')} 
            className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg text-white hover:shadow-lg hover:shadow-purple-500/50 transition-all"
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
          className="flex items-center gap-2 text-gray-400 hover:text-purple-400 mb-6 transition-colors group"
        >
          <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" /> Back to Videos
        </button>

        <div className="max-w-5xl mx-auto">
          {/* Video Title with Emoji */}
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-4">
            <span className="gradient-text">🎬 {video.title}</span>
          </h1>
          
          {/* Video Player */}
          <div className="aspect-video rounded-xl overflow-hidden shadow-2xl shadow-purple-500/20 bg-black relative">
            {embedUrl && !videoError ? (
              <iframe
                src={`${embedUrl}?autoplay=1&rel=0&modestbranding=1&showinfo=0&controls=1&iv_load_policy=3&cc_load_policy=0&enablejsapi=1`}
                title={video.title}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                onError={handleIframeError}
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 to-purple-900/50 p-8 text-center">
                <div className="text-6xl mb-4">🎯</div>
                <p className="text-white text-xl font-bold mb-2">Video Unavailable</p>
                <p className="text-gray-400 text-sm mb-6 max-w-md">
                  This video couldn't be loaded. But don't worry! You can watch it directly on YouTube.
                </p>
                <div className="flex gap-4">
                  <a 
                    href={video.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-red-600 rounded-lg text-white font-bold hover:bg-red-700 transition-all hover:scale-105 flex items-center gap-2"
                  >
                    <FaYoutube /> Watch on YouTube
                  </a>
                  <button 
                    onClick={() => navigate(-1)}
                    className="px-6 py-3 bg-gray-700 rounded-lg text-white font-bold hover:bg-gray-600 transition-all"
                  >
                    Go Back
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Video Info */}
          <div className="mt-6 flex flex-wrap gap-3">
            <span className="px-4 py-2 bg-purple-900/50 rounded-full text-purple-300 text-sm font-bold">
              📺 {video.language}
            </span>
            <span className="px-4 py-2 bg-purple-900/50 rounded-full text-purple-300 text-sm font-bold">
              📂 {video.category}
            </span>
            {video.language === 'Hindi' && (
              <span className="px-4 py-2 bg-orange-500/20 rounded-full text-orange-300 text-sm font-bold">
                🇮🇳 Hindi
              </span>
            )}
          </div>

          {/* Related Videos Section */}
          <div className="mt-10">
            <h3 className="text-xl font-semibold text-white mb-4">✨ More Videos You'll Love</h3>
            <div className="flex gap-4 overflow-x-auto pb-4">
              {[...aiVideos, ...financeVideos]
                .filter(v => v.id !== video.id)
                .slice(0, 6)
                .map((relatedVideo) => (
                  <motion.div
                    key={relatedVideo.id}
                    whileHover={{ y: -5 }}
                    className="min-w-[200px] bg-gray-900 rounded-xl overflow-hidden cursor-pointer border border-gray-800 hover:border-purple-500 transition-all flex-shrink-0"
                    onClick={() => navigate(`/video/${relatedVideo.id}`, { state: { video: relatedVideo } })}
                  >
                    <div className="aspect-video bg-gray-800 flex items-center justify-center">
                      <span className="text-3xl">▶️</span>
                    </div>
                    <div className="p-3">
                      <h4 className="text-white text-xs font-semibold line-clamp-2">
                        {relatedVideo.title}
                      </h4>
                      <span className="text-purple-400 text-xs">{relatedVideo.language}</span>
                    </div>
                  </motion.div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayerPage;
