import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebook, FaInstagram, FaYoutube, FaGlobe, FaPhone, FaEnvelope, FaMapMarkerAlt, FaBuilding } from 'react-icons/fa';

const Contact = () => {
  const socialLinks = [
    { icon: FaFacebook, name: 'Facebook', url: 'https://www.facebook.com/FuturesAbroad?mibextid=rS40aB7S9Ucbxw6v', bgColor: 'from-blue-600 to-blue-400' },
    { icon: FaInstagram, name: 'Instagram', url: 'https://www.instagram.com/futuresabroad/?utm_source=ig_web_button_share_sheet', bgColor: 'from-pink-600 to-purple-600' },
    { icon: FaYoutube, name: 'YouTube', url: 'https://youtube.com/@futuresabroad5453?si=HGyi2jUVjqGVoZDP', bgColor: 'from-red-600 to-red-400' },
    { icon: FaGlobe, name: 'Website', url: 'https://futuresabroad.com/', bgColor: 'from-green-600 to-emerald-400' },
  ];

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
                📞 Connect With Us
              </span>
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Follow Futures Abroad on social media and stay updated with latest news
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Social Links Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {socialLinks.map((link, i) => (
            <motion.a
              key={i}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass-card p-8 text-center group cursor-pointer"
            >
              <div className={`w-24 h-24 mx-auto rounded-2xl bg-gradient-to-r ${link.bgColor} flex items-center justify-center mb-5 group-hover:scale-110 transition-all duration-300 shadow-xl`}>
                <link.icon className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">{link.name}</h3>
              <p className="text-purple-300 text-sm">Click to visit →</p>
            </motion.a>
          ))}
        </motion.div>

        {/* Contact Information Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Phone & Email Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="glass-card p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                <FaPhone className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white">Phone Numbers</h2>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-purple-900/30 rounded-xl border border-purple-500/30">
                <div>
                  <p className="text-sm text-purple-300">Dubai Office</p>
                  <p className="text-xl font-bold text-white">+971 45512620</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center">
                  <FaPhone className="w-4 h-4 text-purple-400" />
                </div>
              </div>
              
              <div className="flex items-center justify-between p-4 bg-purple-900/30 rounded-xl border border-purple-500/30">
                <div>
                  <p className="text-sm text-purple-300">India Office</p>
                  <p className="text-xl font-bold text-white">+91 9321741138</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center">
                  <FaPhone className="w-4 h-4 text-purple-400" />
                </div>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-purple-500/30">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                  <FaEnvelope className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">Email</h3>
              </div>
              <div className="p-4 bg-purple-900/30 rounded-xl border border-purple-500/30">
                <p className="text-lg font-semibold text-purple-300">info@futuresabroad.com</p>
                <p className="text-xs text-gray-400 mt-1">Send us an email for any queries</p>
              </div>
            </div>
          </motion.div>

          {/* Address Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="glass-card p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                <FaMapMarkerAlt className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white">Office Address</h2>
            </div>
            
            <div className="p-4 bg-purple-900/30 rounded-xl border border-purple-500/30 mb-6">
              <p className="text-purple-300 text-sm mb-2">HEAD OFFICE</p>
              <p className="text-white font-semibold">JLT, Cluster C, Goldcrest Executive Tower, Suite 508</p>
              <p className="text-white">Dubai, United Arab Emirates</p>
            </div>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                <FaBuilding className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white">Other Offices</h3>
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 bg-purple-900/30 rounded-xl border border-purple-500/30 text-center">
                <p className="font-semibold text-white">Doha</p>
                <p className="text-xs text-purple-300">Qatar</p>
              </div>
              <div className="p-3 bg-purple-900/30 rounded-xl border border-purple-500/30 text-center">
                <p className="font-semibold text-white">Riyadh</p>
                <p className="text-xs text-purple-300">Saudi Arabia</p>
              </div>
              <div className="p-3 bg-purple-900/30 rounded-xl border border-purple-500/30 text-center">
                <p className="font-semibold text-white">Mumbai</p>
                <p className="text-xs text-purple-300">India</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-8 glass-card p-6 text-center bg-gradient-to-r from-purple-900/30 to-pink-900/30"
        >
          <p className="text-gray-300">
            📍 Visit our head office in Dubai or contact us via phone/email for any assistance
          </p>
          <p className="text-purple-300 text-sm mt-2">
            Business Hours: Monday - Friday, 9:00 AM to 6:00 PM (GST)
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;  // ← Make sure this says "Contact" not "ContactPage"