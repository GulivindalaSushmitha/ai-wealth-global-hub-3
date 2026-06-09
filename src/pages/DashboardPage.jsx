import React from 'react';
import { motion } from 'framer-motion';
import { FiPlayCircle, FiClock, FiTrendingUp, FiAward } from 'react-icons/fi';

const DashboardPage = () => {
  const stats = [
    { icon: FiPlayCircle, label: 'Videos Watched', value: '24', color: 'from-purple-500 to-pink-500', bgColor: 'purple' },
    { icon: FiClock, label: 'Hours Learned', value: '18.5', color: 'from-purple-500 to-pink-500', bgColor: 'purple' },
    { icon: FiTrendingUp, label: 'Day Streak', value: '7', color: 'from-purple-500 to-pink-500', bgColor: 'purple' },
    { icon: FiAward, label: 'Certificates', value: '3', color: 'from-purple-500 to-pink-500', bgColor: 'purple' },
  ];

  const courses = [
    { title: 'AI Basics', progress: 75 },
    { title: 'Machine Learning', progress: 45 },
    { title: 'Personal Finance', progress: 60 },
    { title: 'Investment Strategies', progress: 30 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-950 to-black">
      {/* Header Section with Purple/Pink Gradient */}
      <div className="relative bg-gradient-to-r from-purple-900 via-pink-800 to-purple-900 py-16">
        <div className="absolute inset-0 bg-black/50" />
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300">
                📊 Your Dashboard
              </span>
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Track your learning progress and achievements
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass-card p-6 group"
            >
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-purple-300 mb-1">{stat.label}</p>
                  <p className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    {stat.value}
                  </p>
                </div>
                <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <stat.icon className="w-7 h-7 text-white" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Courses Progress Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="glass-card p-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center">
              <FiTrendingUp className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-white">Course Progress</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {courses.map((course, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="space-y-2"
              >
                <div className="flex justify-between items-center">
                  <span className="text-white font-medium">{course.title}</span>
                  <span className="text-purple-300 text-sm">{course.progress}%</span>
                </div>
                <div className="relative h-3 bg-purple-900/50 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${course.progress}%` }}
                    transition={{ duration: 1, delay: 0.6 + index * 0.1 }}
                    className="absolute h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-lg shadow-purple-500/30"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Recent Activity Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="glass-card p-8 mt-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center">
              <FiClock className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-white">Recent Activity</h2>
          </div>

          <div className="space-y-3">
            {[
              { title: "Introduction to Artificial Intelligence", time: "2 hours ago", status: "completed" },
              { title: "Machine Learning Fundamentals", time: "Yesterday", status: "completed" },
              { title: "Personal Finance Basics", time: "2 days ago", status: "in-progress" },
            ].map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                className="flex items-center justify-between p-4 bg-purple-900/20 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <div>
                    <p className="text-white font-medium">{activity.title}</p>
                    <p className="text-xs text-purple-300">{activity.time}</p>
                  </div>
                </div>
                <span className={`text-xs px-3 py-1 rounded-full ${
                  activity.status === 'completed' 
                    ? 'bg-green-500/20 text-green-400' 
                    : 'bg-yellow-500/20 text-yellow-400'
                }`}>
                  {activity.status === 'completed' ? '✓ Completed' : '⏳ In Progress'}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Achievement Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="glass-card p-8 mt-8 text-center"
        >
          <h2 className="text-2xl font-bold mb-6 gradient-text">🏆 Achievements</h2>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { icon: "🎯", title: "First Video", desc: "Watched first video" },
              { icon: "🔥", title: "7 Day Streak", desc: "Active for 7 days" },
              { icon: "📚", title: "5 Videos", desc: "Completed 5 videos" },
              { icon: "⭐", title: "Quick Learner", desc: "Watched 3 videos in a day" },
            ].map((badge, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.9 + index * 0.1, type: "spring" }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="text-center p-4 bg-purple-900/30 rounded-xl border border-purple-500/30 min-w-[100px]"
              >
                <div className="text-3xl mb-2">{badge.icon}</div>
                <p className="text-white font-semibold text-sm">{badge.title}</p>
                <p className="text-xs text-purple-300">{badge.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DashboardPage;