import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { aiVideos } from '../data/aiVideos';
import { motion } from 'framer-motion';

const AIHubPage = () => {
  const navigate = useNavigate();
  const [selectedLanguage, setSelectedLanguage] = useState('All');

  // Filter videos with error handling
  const getFilteredVideos = () => {
    try {
      // Check if aiVideos exists and is an array
      if (!aiVideos || !Array.isArray(aiVideos)) {
        console.warn('aiVideos is not an array or is undefined');
        return [];
      }

      // If "All" is selected, return ALL videos (English + Hindi)
      if (selectedLanguage === 'All') {
        return aiVideos;
      }
      
      // If "Hindi" is selected, return ONLY Hindi videos
      return aiVideos.filter(video => video.language === 'Hindi');
    } catch (error) {
      console.error('Error filtering videos:', error);
      return [];
    }
  };

  const filteredVideos = getFilteredVideos();

  // Handle video click
  const handleVideoClick = (video) => {
    navigate(`/video/${video.id}`, { state: { video } });
  };

  return (
    <div className="min-h-screen bg-black py-12 px-4">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8 text-center gradient-text">
          AI Learning Hub
        </h1>
        
        {/* Language Filter - Only All and Hindi */}
        <div className="flex justify-center gap-4 mb-8">
          {['All', 'Hindi'].map((lang) => (
            <button
              key={lang}
              onClick={() => setSelectedLanguage(lang)}
              className={`px-6 py-2 rounded-full transition-all ${
                selectedLanguage === lang
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                  : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
              }`}
            >
              {lang === 'All' ? '🌍 All Languages' : '🇮🇳 Hindi'}
            </button>
          ))}
        </div>

        {/* Video Grid */}
        {filteredVideos && filteredVideos.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredVideos.map((video) => (
              <motion.div
                key={video.id}
                whileHover={{ y: -5 }}
                className="bg-gray-900 rounded-xl overflow-hidden cursor-pointer border border-gray-800 hover:border-purple-500 transition-all"
                onClick={() => handleVideoClick(video)}
              >
                <div className="aspect-video bg-gray-800 flex items-center justify-center">
                  <span className="text-6xl">🎬</span>
                </div>
                <div className="p-4">
                  <h3 className="text-white font-semibold text-sm mb-2 line-clamp-2">
                    {video.title || 'Untitled Video'}
                  </h3>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-purple-400">{video.language || 'Unknown'}</span>
                    <span className="text-xs text-gray-500">{video.category || 'General'}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">No videos found</p>
            <p className="text-gray-500 text-sm mt-2">Please check back later</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AIHubPage;
