import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaYoutube, FaGlobe } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FaFacebook, href: 'https://www.facebook.com/FuturesAbroad?mibextid=rS40aB7S9Ucbxw6v', label: 'Facebook', color: 'hover:bg-blue-600' },
    { icon: FaInstagram, href: 'https://www.instagram.com/futuresabroad/?utm_source=ig_web_button_share_sheet', label: 'Instagram', color: 'hover:bg-pink-600' },
    { icon: FaYoutube, href: 'https://youtube.com/@futuresabroad5453?si=HGyi2jUVjqGVoZDP', label: 'YouTube', color: 'hover:bg-red-600' },
    { icon: FaGlobe, href: 'https://futuresabroad.com/', label: 'Website', color: 'hover:bg-green-600' },
  ];

  return (
    <footer className="bg-black/90 backdrop-blur-md border-t border-purple-500/30 text-white mt-auto py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-4">AI Wealth Hub</h3>
            <p className="text-gray-400 text-sm">Premium learning platform for AI and Financial Management with videos in Hindi & English.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-purple-300">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/ai-hub" className="text-gray-400 hover:text-purple-400 transition-colors">🤖 AI Hub</Link></li>
              <li><Link to="/finance-hub" className="text-gray-400 hover:text-purple-400 transition-colors">💰 Finance Hub</Link></li>
              <li><Link to="/calculators" className="text-gray-400 hover:text-purple-400 transition-colors">📊 Calculators</Link></li>
              <li><Link to="/dashboard" className="text-gray-400 hover:text-purple-400 transition-colors">📈 Dashboard</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-purple-300">Contact Us</h4>
            <div className="space-y-2 text-gray-400 text-sm">
              <p className="flex items-center gap-2">📞 Dubai: <span className="text-white">+971 45512620</span></p>
              <p className="flex items-center gap-2">📞 India: <span className="text-white">+91 9321741138</span></p>
              <p className="flex items-center gap-2">✉️ Email: <span className="text-white">info@futuresabroad.com</span></p>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-purple-300">Follow Us</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a key={index} href={social.href} target="_blank" rel="noopener noreferrer" className={`w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center ${social.color} transition-all duration-300`}>
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
            <p className="text-gray-400 text-sm mt-4">Other Offices: Doha, Saudi Arabia, Qatar</p>
          </div>
        </div>
        <div className="border-t border-purple-500/30 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} AI Wealth Global Hub | <span className="text-purple-400">Futures Abroad DMCC</span></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;