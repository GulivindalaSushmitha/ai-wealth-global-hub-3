import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const VideoPlayer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { video } = location.state || {};

  if (!video) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <div className="text-center">
          <p className="text-gray-400 text-lg">No video selected</p>
          <button onClick={() => navigate('/ai-hub')} className="mt-4 text-purple-400 hover:text-purple-300">
            Go back to videos
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-400 hover:text-white mb-6 transition-colors"
        >
          <FaArrowLeft /> Back to Videos
        </button>
        
        <div className="aspect-video rounded-xl overflow-hidden shadow-2xl bg-black">
          <iframe
            src={`${video.url}?autoplay=1&rel=0&modestbranding=1`}
            title={video.title}
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        
        <div className="mt-6">
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">{video.title}</h1>
          <div className="flex gap-4 text-sm text-gray-400">
            <span className="px-3 py-1 bg-white/10 rounded-full">Language: {video.language}</span>
            <span className="px-3 py-1 bg-white/10 rounded-full">Category: {video.category}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;