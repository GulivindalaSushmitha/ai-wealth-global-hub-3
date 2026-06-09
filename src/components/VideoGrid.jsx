import React, { useState } from 'react';
import { motion } from 'framer-motion';
import VideoCard from './VideoCard';

const VideoGrid = ({ videos, title }) => {
  const [selectedLanguage, setSelectedLanguage] = useState('all');
  
  const languages = ['all', ...new Set(videos.map(v => v.language))];
  const filteredVideos = selectedLanguage === 'all' ? videos : videos.filter(v => v.language === selectedLanguage);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center flex-wrap gap-4">
        <h2 className="text-2xl font-bold gradient-text">{title}</h2>
        <div className="flex gap-2">
          {languages.map(lang => (
            <button
              key={lang}
              onClick={() => setSelectedLanguage(lang)}
              className={`px-4 py-2 rounded-lg capitalize transition-all ${
                selectedLanguage === lang
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                  : 'bg-white/10 hover:bg-white/20 text-gray-300'
              }`}
            >
              {lang === 'all' ? 'All Languages' : lang}
            </button>
          ))}
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredVideos.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
      
      {filteredVideos.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-400">No videos found in {selectedLanguage}</p>
        </div>
      )}
    </div>
  );
};

export default VideoGrid;