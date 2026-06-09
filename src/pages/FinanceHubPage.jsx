import React, { useState } from 'react';
import { motion } from 'framer-motion';
import VideoCard from '../components/VideoCard';
import { financeVideos } from '../data/financeVideos';

const FinanceHubPage = () => {
  const [showHindiOnly, setShowHindiOnly] = useState(false);

  const filteredVideos = showHindiOnly 
    ? financeVideos.filter(video => video.language === 'Hindi')
    : financeVideos;

  const hindiCount = financeVideos.filter(v => v.language === 'Hindi').length;
  const totalCount = financeVideos.length;

  return (
    <div className="min-h-screen bg-black">
      {/* Purple Gradient Header */}
      <div className="relative bg-gradient-to-br from-purple-900 via-purple-800 to-black py-16">
        <div className="absolute inset-0 bg-black/50" />
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                💰 Financial Management Hub
              </span>
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Master personal finance and investments with videos in Hindi and English
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Only 2 Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-center gap-6 mb-12"
        >
          <button
            onClick={() => setShowHindiOnly(false)}
            className={`px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300 ${
              !showHindiOnly
                ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-xl shadow-purple-500/30 scale-105'
                : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
            }`}
          >
            🌐 All Languages ({totalCount})
          </button>
          <button
            onClick={() => setShowHindiOnly(true)}
            className={`px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300 ${
              showHindiOnly
                ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-xl shadow-purple-500/30 scale-105'
                : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
            }`}
          >
            🇮🇳 Hindi Videos ({hindiCount})
          </button>
        </motion.div>

        {/* Videos Grid */}
        <motion.div
          key={showHindiOnly ? 'hindi' : 'all'}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {filteredVideos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </motion.div>

        {filteredVideos.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-400 text-lg">No videos found</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FinanceHubPage;