import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FaPlay, FaLanguage } from 'react-icons/fa';

const VideoCard = ({ video }) => {
  const navigate = useNavigate();

  const getVideoId = (url) => {
    if (!url) return '';
    if (url.includes('/embed/')) return url.split('/embed/')[1]?.split('?')[0];
    if (url.includes('youtu.be/')) return url.split('youtu.be/')[1]?.split('?')[0];
    if (url.includes('watch?v=')) return url.split('v=')[1]?.split('&')[0];
    if (url.includes('youtube.com/embed/')) return url.split('embed/')[1]?.split('?')[0];
    return '';
  };

  const videoId = getVideoId(video.url);
  const thumbnailUrl = videoId 
    ? `https://img.youtube.com/vi/${videoId}/mqdefault.jpg` 
    : 'https://via.placeholder.com/320x180?text=Video';

  const handlePlay = () => {
    // Navigate to video player page with video data
    navigate(`/video/${video.id}`, { state: { video } });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05, y: -5 }}
      transition={{ duration: 0.3 }}
      className="cursor-pointer rounded-xl overflow-hidden glass-card group"
      onClick={handlePlay}
    >
      <div className="relative aspect-video">
        <img 
          src={thumbnailUrl} 
          alt={video.title} 
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/320x180?text=AI+Wealth+Hub';
          }}
        />
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center shadow-xl">
            <FaPlay className="w-7 h-7 text-white ml-1" />
          </div>
        </div>
        <div className="absolute top-3 right-3 bg-black/80 backdrop-blur-sm rounded-full px-3 py-1 text-xs flex items-center gap-1">
          <FaLanguage className="w-3 h-3" />
          <span>{video.language}</span>
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-base line-clamp-2 mb-2 text-white">{video.title}</h3>
        <p className="text-xs text-gray-400">{video.category}</p>
      </div>
    </motion.div>
  );
};

export default VideoCard;