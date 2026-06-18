import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#192428] text-white py-8 px-6 rounded-t-[2rem] border-t-4 border-[#FF6B8B]">
      <div className="max-w-6xl mx-auto">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
          
          {/* Column 1: Brand */}
          <div>
            <h3 className="text-xl font-bold text-white mb-3">🏰 forthefutures</h3>
            <p className="text-stone-400 text-sm">
              Empowering youth with interactive lessons in AI and Financial Literacy.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-[#FF6B8B] uppercase tracking-wider mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-stone-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/ai-hub" className="text-stone-400 hover:text-white transition-colors">AI Hub</Link></li>
              <li><Link to="/finance-hub" className="text-stone-400 hover:text-white transition-colors">Finance Hub</Link></li>
              <li><Link to="/calculators" className="text-stone-400 hover:text-white transition-colors">Calculators</Link></li>
              <li><Link to="/contact" className="text-stone-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact Details - UPDATED */}
          <div>
            <h4 className="text-sm font-bold text-[#FF6B8B] uppercase tracking-wider mb-3">Contact Us</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-stone-400">
                <span className="text-[#FF6B8B]">📞</span> Phone: +971585417100
              </li>
              <li className="text-stone-400">
                <span className="text-[#FF6B8B]">✉</span> Email: forthefuturenet@gmail.com
              </li>
              <li className="text-stone-400">
                <span className="text-[#FF6B8B]">📸</span> Instagram: 
                <a 
                  href="https://www.instagram.com/samspr1v09?igsh=ZDVjYXg0Y21vYTIw" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#FF6B8B] hover:underline ml-1"
                >
                  @samspr1v09
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-stone-700 pt-4 text-center">
          <p className="text-stone-500 text-[10px] font-medium">
            © 2026 forthefutures. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
