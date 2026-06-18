import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { financeVideos } from '../data/financeVideos';
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
    <
