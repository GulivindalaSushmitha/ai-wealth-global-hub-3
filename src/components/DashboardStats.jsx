import React from 'react';
import { motion } from 'framer-motion';
import { FiPlayCircle, FiClock, FiTrendingUp, FiAward } from 'react-icons/fi';

const DashboardStats = () => {
  const stats = [
    { icon: FiPlayCircle, label: 'Videos Watched', value: '24', color: 'from-purple-500 to-pink-500' },
    { icon: FiClock, label: 'Hours Learned', value: '18.5', color: 'from-purple-500 to-pink-500' },
    { icon: FiTrendingUp, label: 'Day Streak', value: '7', color: 'from-purple-500 to-pink-500' },
    { icon: FiAward, label: 'Certificates', value: '3', color: 'from-purple-500 to-pink-500' },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ scale: 1.05, y: -5 }}
          className="glass-card p-6 group"
        >
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm text-purple-300 mb-1">{stat.label}</p>
              <p className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {stat.value}
              </p>
            </div>
            <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center group-hover:scale-110 transition-transform">
              <stat.icon className="w-6 h-6 text-white" />
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default DashboardStats;