import React from 'react';
import { motion } from 'framer-motion';

const ProgressCard = ({ title, progress, color = 'from-purple-500 to-pink-500' }) => {
  return (
    <div className="glass-card p-4">
      <div className="flex justify-between items-center mb-2">
        <h4 className="font-semibold text-white">{title}</h4>
        <span className="text-sm text-purple-300">{progress}%</span>
      </div>
      <div className="relative h-2 bg-purple-900/50 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 1 }}
          className={`absolute h-full bg-gradient-to-r ${color} rounded-full shadow-lg shadow-purple-500/30`}
        />
      </div>
    </div>
  );
};

export default ProgressCard;