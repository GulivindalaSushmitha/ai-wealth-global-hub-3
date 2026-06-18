import React from 'react';
import { aiVideos } from '../data/aiVideos';
import { financeVideos } from '../data/financeVideos';

const VideoGrid = () => {
  // Combine all videos with error handling
  let allVideos = [];
  
  try {
    // Check if aiVideos exists and is an array
    if (aiVideos && Array.isArray(aiVideos)) {
      allVideos = [...allVideos, ...aiVideos];
    }
    
    // Check if financeVideos exists and is an array
    if (financeVideos && Array.isArray(financeVideos)) {
      allVideos = [...allVideos, ...financeVideos];
    }
  } catch (error) {
    console.error('Error loading videos:', error);
  }

  // If no videos, show message
  if (!allVideos || allVideos.length === 0) {
    return (
      <div className="text-center p-8">
        <p className="text-white text-lg">No videos available</p>
        <p className="text-gray-400 text-sm">Please check back later</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {allVideos.map((video) => (
        <div key={video.id} className="glass-card p-4">
          <h4 className="text-white font-bold text-sm mb-2">{video.title}</h4>
          <p className="text-gray-400 text-xs">Language: {video.language}</p>
          <p className="text-purple-400 text-xs">Category: {video.category}</p>
          <a 
            href={video.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="mt-3 inline-block btn-purple text-white text-xs px-4 py-2 rounded"
          >
            Watch Video
          </a>
        </div>
      ))}
    </div>
  );
};

export default VideoGrid;
