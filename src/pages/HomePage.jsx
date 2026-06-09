import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiCpu, FiDollarSign, FiTrendingUp } from 'react-icons/fi';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section with Purple Gradient */}
      <div className="relative overflow-hidden bg-gradient-to-br from-purple-900 via-purple-800 to-black">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="container mx-auto px-4 py-24 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="inline-block mb-6"
            >
              <span className="px-4 py-2 bg-purple-500/20 rounded-full text-sm backdrop-blur-sm border border-purple-500/30">
                🚀 Premium Learning Platform
              </span>
            </motion.div>
            
            <h1 className="text-6xl md:text-8xl font-bold mb-6">
              <span className="gradient-text">AI Wealth</span>
              <br />
              <span className="text-white">Global Hub</span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
              Master AI & Finance with videos in Hindi & English. Get AI-powered investment suggestions and smart calculators.
            </p>
            
            <div className="flex flex-wrap gap-5 justify-center">
              <Link to="/ai-hub">
                <button className="btn-purple text-white text-lg cursor-pointer flex items-center gap-2">
                  <FiCpu className="w-5 h-5" /> Explore AI Hub
                </button>
              </Link>
              <Link to="/finance-hub">
                <button className="btn-outline text-white text-lg cursor-pointer flex items-center gap-2">
                  <FiDollarSign className="w-5 h-5" /> Explore Finance Hub
                </button>
              </Link>
            </div>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20"
          >
            {[
              { value: "42+", label: "AI Videos", icon: FiCpu },
              { value: "29+", label: "Finance Videos", icon: FiDollarSign },
              { value: "2", label: "Languages", icon: FiTrendingUp },
              { value: "24/7", label: "Access", icon: FiTrendingUp },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.4 + i * 0.1, type: "spring" }}
                className="glass-card p-6 text-center"
              >
                <stat.icon className="w-10 h-10 mx-auto mb-3 text-purple-400" />
                <div className="text-3xl font-bold gradient-text">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20"
          >
            {[
              {
                icon: FiCpu,
                title: "AI Learning Hub",
                description: "Master Artificial Intelligence with expert videos in Hindi & English",
              },
              {
                icon: FiDollarSign,
                title: "Smart Calculators",
                description: "Track expenses, get AI investment suggestions in INR, USD, AED",
              },
              {
                icon: FiTrendingUp,
                title: "AI Investment Tips",
                description: "Personalized suggestions to double your wealth and achieve financial freedom",
              },
            ].map((feature, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="glass-card p-8 text-center group"
              >
                <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  <feature.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Banner */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-20 glass-card p-12 text-center bg-gradient-to-r from-purple-600/20 to-pink-600/20"
          >
            <h2 className="text-3xl font-bold mb-4 gradient-text">Ready to Start Your Journey?</h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join thousands of learners mastering AI and Finance with our premium video library
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/ai-hub">
                <button className="btn-purple text-white">Start Learning AI 🤖</button>
              </Link>
              <Link to="/calculators">
                <button className="btn-outline text-white">Try Smart Calculator 💰</button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;