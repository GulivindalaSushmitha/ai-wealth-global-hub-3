import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { aiVideos } from '../data/aiVideos';
import { motion } from 'framer-motion';

const AIHubPage = () => {
  const navigate = useNavigate();
  const [selectedLanguage, setSelectedLanguage] = useState('All');

  const getFilteredVideos = () => {
    try {
      if (!aiVideos || !Array.isArray(aiVideos)) return [];
      if (selectedLanguage === 'All') return aiVideos;
      return aiVideos.filter(video => video.language === 'Hindi');
    } catch {
      return [];
    }
  };

  const filteredVideos = getFilteredVideos();

  const getThumbnail = (url) => {
    if (!url) return 'https://img.youtube.com/vi/default/mqdefault.jpg';
    let videoId = null;
    if (url.includes('embed/')) videoId = url.split('embed/')[1]?.split('?')[0];
    else if (url.includes('watch?v=')) videoId = url.split('v=')[1]?.split('&')[0];
    else if (url.includes('youtu.be/')) videoId = url.split('youtu.be/')[1]?.split('?')[0];
    else if (url.includes('shorts/')) videoId = url.split('shorts/')[1]?.split('?')[0];
    else if (url.includes('videoseries')) return 'https://img.youtube.com/vi/default/mqdefault.jpg';
    return videoId ? `https://img.youtube.com/vi/${videoId}/mqdefault.jpg` : 'https://img.youtube.com/vi/default/mqdefault.jpg';
  };

  const getEmoji = (index) => {
    const emojis = ['🤖', '🚀', '🧠', '💡', '🎯', '🌟', '⭐', '🌈', '🎈', '✨', '💫', '🔥'];
    return emojis[index % emojis.length];
  };

  const getCardColor = (index) => {
    const colors = [
      'from-purple-600/20 to-pink-600/20 border-purple-500/30 hover:border-purple-400',
      'from-blue-600/20 to-cyan-600/20 border-blue-500/30 hover:border-blue-400',
      'from-green-600/20 to-teal-600/20 border-green-500/30 hover:border-green-400',
      'from-orange-600/20 to-yellow-600/20 border-orange-500/30 hover:border-orange-400',
      'from-red-600/20 to-pink-600/20 border-red-500/30 hover:border-red-400',
      'from-indigo-600/20 to-purple-600/20 border-indigo-500/30 hover:border-indigo-400',
    ];
    return colors[index % colors.length];
  };

  const handleVideoClick = (video) => {
    navigate(`/video/${video.id}`, { state: { video } });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#1a0a2e] to-[#0a0a0a] py-12 px-4">
      <div className="container mx-auto">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-4">
          <h1 className="text-5xl md:text-7xl font-black">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              🤖 AI Learning Hub
            </span>
          </h1>
          <p className="text-gray-300 mt-2 text-lg">Explore the amazing world of Artificial Intelligence! 🚀</p>
        </motion.div>
        
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex justify-center gap-4 mb-10">
          {['All', 'Hindi'].map((lang) => (
            <button
              key={lang}
              onClick={() => setSelectedLanguage(lang)}
              className={`px-8 py-3 rounded-full transition-all text-lg font-bold shadow-lg ${
                selectedLanguage === lang
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-purple-500/50 border-2 border-purple-300'
                  : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/70 border-2 border-gray-600'
              }`}
            >
              {lang === 'All' ? '🌍 All Languages' : '🇮🇳 Hindi'}
            </button>
          ))}
        </motion.div>

        {filteredVideos && filteredVideos.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredVideos.map((video, index) => (
              <motion.div
                key={video.id}
                whileHover={{ y: -12, scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.04 }}
                className={`relative bg-gradient-to-br ${getCardColor(index)} rounded-2xl overflow-hidden cursor-pointer border-2 shadow-xl hover:shadow-2xl transition-all duration-300`}
                onClick={() => handleVideoClick(video)}
              >
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-purple-500/10 rounded-full blur-2xl"></div>
                <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-pink-500/10 rounded-full blur-2xl"></div>
                
                <div className="relative aspect-video bg-gray-800">
                  <img 
                    src={getThumbnail(video.url)} 
                    alt={video.title}
                    className="w-full h-full object-cover"
                    onError={(e) => { e.target.src = 'https://img.youtube.com/vi/default/mqdefault.jpg'; }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/40">
                      <span className="text-4xl">▶️</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 relative z-10">
                  <div className="flex items-start gap-2 mb-2">
                    <span className="text-2xl">{getEmoji(index)}</span>
                    <h3 className="text-white font-bold text-sm line-clamp-2 flex-1">{video.title}</h3>
                  </div>
                  <div className="flex flex-wrap items-center gap-2 mt-2">
                    <span className="px-3 py-1 bg-purple-500/30 rounded-full text-purple-200 text-xs font-semibold border border-purple-400/20">
                      {video.category}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="text-7xl mb-4">🎯</div>
            <p className="text-gray-300 text-2xl font-bold">No videos found</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AIHubPage;
