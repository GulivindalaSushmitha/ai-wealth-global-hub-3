import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// Force cache refresh with version parameter
import { financeVideos } from '../data/financeVideos?v=3';
import { motion } from 'framer-motion';

const FinanceHubPage = () => {
  const navigate = useNavigate();
  const [selectedLanguage, setSelectedLanguage] = useState('All');

  const getFilteredVideos = () => {
    try {
      if (!financeVideos || !Array.isArray(financeVideos)) return [];
      if (selectedLanguage === 'All') return financeVideos;
      return financeVideos.filter(video => video.language === 'Hindi');
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
    const emojis = ['💰', '📈', '💎', '🏦', '💵', '🪙', '📊', '🎯', '🌟', '🚀', '💡', '🌈'];
    return emojis[index % emojis.length];
  };

  const getCardColor = (index) => {
    const colors = [
      'from-green-600/20 to-teal-600/20 border-green-500/30 hover:border-green-400',
      'from-emerald-600/20 to-cyan-600/20 border-emerald-500/30 hover:border-emerald-400',
      'from-blue-600/20 to-indigo-600/20 border-blue-500/30 hover:border-blue-400',
      'from-yellow-600/20 to-orange-600/20 border-yellow-500/30 hover:border-yellow-400',
      'from-teal-600/20 to-green-600/20 border-teal-500/30 hover:border-teal-400',
      'from-cyan-600/20 to-blue-600/20 border-cyan-500/30 hover:border-cyan-400',
    ];
    return colors[index % colors.length];
  };

  const handleVideoClick = (video) => {
    navigate(`/video/${video.id}`, { state: { video } });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#0a1a0a] to-[#0a0a0a] py-12 px-4">
      <div className="container mx-auto">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-4">
          <h1 className="text-5xl md:text-7xl font-black">
            <span className="bg-gradient-to-r from-green-400 via-yellow-400 to-blue-400 bg-clip-text text-transparent">
              💰 Finance Learning Hub
            </span>
          </h1>
          <p className="text-gray-300 mt-2 text-lg">Learn how to manage money and build wealth! 🚀</p>
        </motion.div>
        
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex justify-center gap-4 mb-10">
          {['All', 'Hindi'].map((lang) => (
            <button
              key={lang}
              onClick={() => setSelectedLanguage(lang)}
              className={`px-8 py-3 rounded-full transition-all text-lg font-bold shadow-lg ${
                selectedLanguage === lang
                  ? 'bg-gradient-to-r from-green-500 to-blue-500 text-white shadow-green-500/50 border-2 border-green-300'
                  : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/70 border-2 border-gray-600'
              }`}
            >
              {lang === 'All' ? '🌍 All Languages' : '🇮🇳 Hindi'}
            </motion.button>
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
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-green-500/10 rounded-full blur-2xl"></div>
                <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-blue-500/10 rounded-full blur-2xl"></div>
                
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
                  <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-bold text-white border border-white/20">
                    {video.language === 'Hindi' ? '🇮🇳 Hindi' : '🌍 English'}
                  </div>
                </div>
                
                <div className="p-4 relative z-10">
                  <div className="flex items-start gap-2 mb-2">
                    <span className="text-2xl">{getEmoji(index)}</span>
                    <h3 className="text-white font-bold text-sm line-clamp-2 flex-1">{video.title}</h3>
                  </div>
                  <div className="flex flex-wrap items-center gap-2 mt-2">
                    <span className="px-3 py-1 bg-green-500/30 rounded-full text-green-200 text-xs font-semibold border border-green-400/20">
                      {video.category}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="text-7xl mb-4">💰</div>
            <p className="text-gray-300 text-2xl font-bold">No videos found</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FinanceHubPage;
