import React from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaPhone, FaEnvelope } from 'react-icons/fa';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-950 to-black">
      {/* Header Section */}
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
                📞 Contact Us
              </span>
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Get in touch with us for any questions or support
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Contact Information Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          
          {/* Phone Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="glass-card p-8 text-center group cursor-pointer hover:scale-105 transition-all duration-300"
          >
            <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mb-5 shadow-xl">
              <FaPhone className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">📞 Phone</h3>
            <p className="text-purple-300 text-lg font-semibold">+971 585417100</p>
            <p className="text-gray-400 text-sm mt-2">Call us for any queries</p>
          </motion.div>

          {/* Email Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="glass-card p-8 text-center group cursor-pointer hover:scale-105 transition-all duration-300"
          >
            <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mb-5 shadow-xl">
              <FaEnvelope className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">✉ Email</h3>
            <p className="text-purple-300 text-lg font-semibold">forthefuturenet@gmail.com</p>
            <p className="text-gray-400 text-sm mt-2">Send us an email</p>
          </motion.div>

          {/* Instagram Card - UPDATED */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="glass-card p-8 text-center group cursor-pointer hover:scale-105 transition-all duration-300"
          >
            <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-r from-pink-600 to-purple-600 flex items-center justify-center mb-5 shadow-xl">
              <FaInstagram className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">📸 Instagram</h3>
            <a 
              href="https://www.instagram.com/financeforfutures2026?igsh=MWg2NDVkazJvbXFhbQ==" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-purple-300 text-lg font-semibold hover:text-pink-400 transition-colors"
            >
              @financeforfutures2026
            </a>
            <p className="text-gray-400 text-sm mt-2">Follow us on Instagram</p>
          </motion.div>

        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-12 glass-card p-6 text-center bg-gradient-to-r from-purple-900/30 to-pink-900/30 max-w-3xl mx-auto"
        >
          <p className="text-gray-300">
            📍 We're here to help! Reach out to us anytime.
          </p>
          <p className="text-purple-300 text-sm mt-2">
            Business Hours: Monday - Friday, 9:00 AM to 6:00 PM (GST)
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;
