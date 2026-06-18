import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { financeVideos } from '../data/financeVideos';
import { motion } from 'framer-motion';

const FinanceHubPage = () => {
  const navigate = useNavigate();
  const [selectedLanguage, setSelectedLanguage] = useState('All');

  // Filter videos with error handling
  const getFilteredVideos = () => {
    try {
      if (!financeVideos || !Array.isArray(financeVideos)) {
        console.warn('financeVideos is not an array or is undefined');
        return [];
      }

      if (selectedLanguage === 'All') {
        return financeVideos;
      }
      return financeVideos.filter(video => video.language === 'Hindi');
    } catch (error) {
      console.error('Error filtering videos:', error);
      return [];
    }
  };

  const filteredVideos = getFilteredVideos();

  // Get YouTube thumbnail from URL
  const getThumbnail = (url) => {
    if (!url) return 'https://img.youtube.com/vi/default/mqdefault.jpg';
    
    let videoId = null;
    
    if (url.includes('embed/')) {
      videoId = url.split('embed/')[1]?.split('?')[0];
    } else if (url.includes('watch?v=')) {
      videoId = url.split('v=')[1]?.split('&')[0];
    } else if (url.includes('youtu.be/')) {
      videoId = url.split('youtu.be/')[1]?.split('?')[0];
    } else if (url.includes('shorts/')) {
      videoId = url.split('shorts/')[1]?.split('?')[0];
    } else if (url.includes('videoseries')) {
      return 'https://img.youtube.com/vi/default/mqdefault.jpg';
    }
    
    return videoId ? `https://img.youtube.com/vi/${videoId}/mqdefault.jpg` : 'https://img.youtube.com/vi/default/mqdefault.jpg';
  };

  // Get random emoji for each video card
  const getEmoji = (index) => {
    const emojis = ['💰', '📈', '💎', '🏦', '💵', '🪙', '📊', '🎯', '🌟', '🚀', '💡', '🌈'];
    return emojis[index % emojis.length];
  };

  // Handle video click
  const handleVideoClick = (video) => {
    navigate(`/video/${video.id}`, { state: { video } });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a0a] to-[#1a0a2e] py-12 px-4">
      <div className="container mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold text-center mb-4">
          <span className="gradient-text">💰 Finance Learning Hub</span>
        </h1>
        <p className="text-center text-gray-400 mb-8 text-lg">Learn how to manage money and build wealth! 🚀</p>
        
        {/* Language Filter - Kid-Friendly */}
        <div className="flex justify-center gap-4 mb-10">
          {['All', 'Hindi'].map((lang) => (
            <motion.button
              key={lang}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedLanguage(lang)}
              className={`px-8 py-3 rounded-full transition-all text-lg font-bold ${
                selectedLanguage === lang
                  ? 'bg-gradient-to-r from-green-500 to-blue-500 text-white shadow-lg shadow-green-500/50'
                  : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white'
              }`}
            >
              {lang === 'All' ? '🌍 All Languages' : '🇮🇳 Hindi'}
            </motion.button>
          ))}
        </div>

        {/* Video Grid - Kid-Friendly Cards */}
        {filteredVideos && filteredVideos.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredVideos.map((video, index) => (
              <motion.div
                key={video.id}
                whileHover={{ y: -10, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="bg-gradient-to-br from-gray-900 to-green-900/30 rounded-2xl overflow-hidden cursor-pointer border-2 border-green-500/20 hover:border-green-500/60 transition-all shadow-lg hover:shadow-green-500/20"
                onClick={() => handleVideoClick(video)}
              >
                {/* Thumbnail with Play Button Overlay */}
                <div className="relative aspect-video bg-gray-800">
                  <img 
                    src={getThumbnail(video.url)} 
                    alt={video.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = 'https://img.youtube.com/vi/default/mqdefault.jpg';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/30 hover:bg-white/30 transition-all">
                      <span className="text-3xl">▶️</span>
                    </div>
                  </div>
                  {/* Language Badge */}
                  <div className="absolute top-2 right-2 bg-black/70 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-white">
                    {video.language === 'Hindi' ? '🇮🇳' : '🌍'}
                  </div>
                </div>
                
                {/* Video Info */}
                <div className="p-4">
                  <div className="flex items-start gap-2 mb-2">
                    <span className="text-2xl">{getEmoji(index)}</span>
                    <h3 className="text-white font-semibold text-sm line-clamp-2 flex-1">
                      {video.title || 'Untitled Video'}
                    </h3>
                  </div>
                  <div className="flex flex-wrap items-center gap-2 mt-2">
                    <span className="px-2 py-1 bg-green-500/20 rounded-full text-green-300 text-xs">
                      {video.category || 'General'}
                    </span>
                    <span className="px-2 py-1 bg-blue-500/20 rounded-full text-blue-300 text-xs">
                      {video.language || 'Unknown'}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🎯</div>
            <p className="text-gray-400 text-xl">No videos found</p>
            <p className="text-gray-500 text-sm mt-2">Check back later for more amazing content!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FinanceHubPage;
