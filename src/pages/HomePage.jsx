import React from 'react';
// Keeping all your original system structural feature components intact
import FinancialCalculator from '../components/FinancialCalculator'; 
import VideoGrid from '../components/VideoGrid';
import ResourceHub from '../components/ResourceHub';

export default function HomePage() {
  return (
    <div className="bg-[#FAF8F5] text-stone-800 min-h-screen font-sans antialiased selection:bg-pink-200">
      
      {/* 1. Header Navigation Bar (Kid Palace Header Style from image_896658.jpg) */}
      <nav className="bg-[#A4C9FF] px-6 py-4 flex justify-between items-center sticky top-0 z-50 shadow-sm">
        <div className="flex items-center space-x-2">
          <div className="w-9 h-9 rounded-xl bg-[#FF6B8B] flex items-center justify-center text-white text-lg font-black shadow-sm">
            🏰
          </div>
          <span className="text-xl font-black text-white tracking-tight drop-shadow-sm">forthefutures</span>
        </div>
        <div className="hidden md:flex space-x-8 text-sm font-black text-white/90">
          <a href="#about" className="hover:text-white transition drop-shadow-sm">About Us</a>
          <a href="#calculator" className="hover:text-white transition drop-shadow-sm">Smart Calculator</a>
          <a href="#videos" className="hover:text-white transition drop-shadow-sm">AI Hub</a>
          <a href="#contact" className="hover:text-white transition drop-shadow-sm">Contact</a>
        </div>
        <a href="#contact" className="bg-white text-purple-900 text-xs font-black px-5 py-2.5 rounded-full hover:scale-105 transition shadow-sm uppercase tracking-wider">
          Sign In
        </a>
      </nav>

      {/* 2. Three-Tone Pastel Hero Panel Section with 3D-Style Cartoon Characters from image_896658.jpg */}
      <header className="relative overflow-hidden pt-12 pb-24 px-6 shadow-md" style={{
        background: 'linear-gradient(135deg, #A4C9FF 0%, #FFEB99 50%, #FF9EAF 100%)'
      }}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-8 items-center relative z-10">
          
          {/* Hero Left Content Column */}
          <div className="md:col-span-7 text-left space-y-6">
            <h1 className="text-5xl md:text-7xl font-black tracking-tight text-white leading-none drop-shadow-md">
              Play, Learn<br/>Enjoy & Repeat
            </h1>
            <p className="text-purple-950/80 text-sm md:text-base max-w-md font-bold leading-relaxed">
              Empowering youth with interactive lessons, global financial literacy metrics, and cross-border analytics tools that fit your everyday routine seamlessly.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <a href="#calculator" className="bg-[#1A1A1A] text-white font-black px-8 py-3.5 rounded-full shadow-lg hover:bg-black transition transform hover:-translate-y-0.5 text-xs uppercase tracking-wider">
                Subscribe
              </a>
              <a href="#videos" className="bg-[#FFE57F] text-stone-900 font-black px-8 py-3.5 rounded-full shadow-md hover:bg-[#ffd54f] transition transform hover:-translate-y-0.5 text-xs uppercase tracking-wider border border-amber-300">
                Browse Toys
              </a>
            </div>
          </div>

          {/* Hero Right Column: 3D Animated Character Presentation Placeholder */}
          <div className="md:col-span-5 flex justify-center relative min-h-[300px]">
            <div className="absolute inset-0 flex flex-col items-center justify-center animate-bounce-slow">
              {/* 3D Girl Character & Gift Box Simulation Frame */}
              <span className="text-[7rem] drop-shadow-xl select-none">👧</span>
              <div className="bg-amber-100 border-2 border-amber-800/40 w-24 h-16 rounded-xl relative -mt-4 shadow-md flex items-center justify-center text-xl">
                💝
              </div>
            </div>
          </div>

        </div>
      </header>

      {/* 3. Core Operational Content Body Cards Grid Layout Wrapper */}
      <main className="bg-[#EAF7F2] py-12 px-4 space-y-12 shadow-inner">
        
        {/* Core Media/Presentation Element Box (Matches the layout grid steps in image_896658.jpg) */}
        <section id="about" className="max-w-6xl mx-auto text-center space-y-4 mb-8">
          <h2 className="text-3xl md:text-4xl font-black text-stone-900 tracking-tight uppercase">
            How to Learn with forthefutures
          </h2>
          <p className="text-xs md:text-sm text-stone-500 font-bold max-w-md mx-auto leading-relaxed">
            There are simple modular workflows constructed to map and compute your currency targets reliably.
          </p>
          <div className="bg-white p-6 rounded-[2rem] shadow-md max-w-4xl mx-auto border-2 border-stone-100">
            <ResourceHub />
          </div>
        </section>

        {/* INTEGRATED FUNCTIONALITY: Financial Currency Tracking Module Grid Block */}
        <section id="calculator" className="max-w-6xl mx-auto bg-white rounded-[2rem] border-2 border-stone-100 p-6 md:p-10 shadow-lg relative overflow-hidden">
          {/* Interactive 3D Decorative Top Edge Badges */}
          <div className="absolute top-4 right-6 text-2xl">🐠</div>
          <div className="border-b-2 border-stone-100 pb-4 mb-6">
            <h3 className="text-xl font-black text-stone-900 uppercase">Interactive Asset Calculator</h3>
            <p className="text-xs text-stone-400 font-bold">Execution algorithms configured globally for tracking values in INR, USD, and AED structures.</p>
          </div>
          <FinancialCalculator />
        </section>

        {/* INTEGRATED FUNCTIONALITY: Video Content Mapping Block */}
        <section id="videos" className="max-w-6xl mx-auto bg-white rounded-[2rem] border-2 border-stone-100 p-6 md:p-10 shadow-lg relative overflow-hidden">
          <div className="absolute top-4 right-6 text-2xl">🧸</div>
          <div className="border-b-2 border-stone-100 pb-4 mb-6">
            <h3 className="text-xl font-black text-stone-900 uppercase">Educational Resource Hub</h3>
            <p className="text-xs text-stone-400 font-bold">Select any baseline structural knowledge module panel target card to execute learning views.</p>
          </div>
          <VideoGrid />
        </section>

      </main>

      {/* 4. Brand Specific Application Anchor Footer */}
      <footer id="contact" className="bg-[#192428] text-white py-8 px-6 rounded-t-[2rem] flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-bold border-t-4 border-[#FF6B8B]">
        <div className="text-center md:text-left">
          <p className="text-[#FF6B8B]">📞 Contact: +971585417100 | ✉ Email: forthefuturenet@gmail.com</p>
          <p className="text-stone-400 text-[10px] mt-0.5">📸 Instagram: @financeforfutures2026</p>
        </div>
        <p className="text-stone-500 text-[10px] font-medium">© 2026 forthefutures. All rights reserved.</p>
      </footer>

    </div>
  );
}
