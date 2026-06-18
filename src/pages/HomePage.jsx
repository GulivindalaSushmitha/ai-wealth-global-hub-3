import React from 'react';
// import FinancialCalculator from '../components/FinancialCalculator'; // COMMENTED OUT - File missing
import VideoGrid from '../components/VideoGrid';
import ResourceHub from '../components/ResourceHub';

export default function HomePage() {
  return (
    <div className="bg-[#FAF8F5] text-stone-800 min-h-screen font-sans antialiased">
      
      {/* 1. Header Navigation */}
      <nav className="bg-[#A4C9FF] px-6 py-4 flex justify-between items-center sticky top-0 z-50 shadow-sm">
        <div className="flex items-center space-x-2">
          <div className="w-9 h-9 rounded-xl bg-[#FF6B8B] flex items-center justify-center text-white text-lg font-black shadow-sm">
            <span>🏰</span>
          </div>
          <span className="text-xl font-black text-white tracking-tight">forthefutures</span>
        </div>
        <div className="hidden md:flex space-x-8 text-sm font-black text-white">
          <a href="#about" className="hover:text-stone-100 transition">About Us</a>
          <a href="#calculator" className="hover:text-stone-100 transition">Smart Calculator</a>
          <a href="#videos" className="hover:text-stone-100 transition">AI Hub</a>
          <a href="#contact" className="hover:text-stone-100 transition">Contact</a>
        </div>
        <a href="#contact" className="bg-white text-purple-900 text-xs font-black px-5 py-2.5 rounded-full hover:scale-105 transition shadow-sm uppercase tracking-wider">
          Sign In
        </a>
      </nav>

      {/* 2. Three-Tone Pastel Hero Section with Cartoon Components */}
      <header className="relative overflow-hidden pt-12 pb-24 px-6 shadow-md bg-gradient-to-r from-[#A4C9FF] via-[#FFEB99] to-[#FF9EAF]">
        <div className="absolute top-6 left-12 text-3xl opacity-30 animate-bounce">
          <span>🎈</span>
        </div>
        <div className="absolute bottom-6 left-1/3 text-3xl opacity-30">
          <span>⭐</span>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-8 items-center relative z-10">
          
          {/* Left Block */}
          <div className="md:col-span-7 text-left space-y-6">
            <h1 className="text-5xl md:text-7xl font-black tracking-tight text-white leading-none drop-shadow-md">
              Play, Learn, Enjoy and Repeat
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

          {/* Right Column: 3D-Style Cartoon Character Frame */}
          <div className="md:col-span-5 flex flex-col items-center justify-center relative min-h-[320px]">
            <div className="relative w-full max-w-sm flex flex-col items-center justify-center animate-bounce">
              <div className="w-44 h-44 bg-white rounded-full p-2 shadow-2xl border-4 border-pink-400 flex items-center justify-center overflow-hidden">
                <span className="text-[7rem] select-none">👧</span>
              </div>
              <div className="bg-white border-2 border-amber-400 px-5 py-2 rounded-2xl -mt-4 shadow-md flex items-center space-x-2">
                <span className="text-lg">💝</span>
                <span className="text-xs font-black text-purple-900 uppercase tracking-wider">Kids Learning Hub</span>
              </div>
            </div>
          </div>

        </div>
      </header>

      {/* 3. Your Existing Live Project Features */}
      <main className="bg-[#EAF7F2] py-12 px-4 space-y-12 shadow-inner">
        
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

        {/* Financial Calculator Section - Temporarily Removed */}
        {/* 
        <section id="calculator" className="max-w-6xl mx-auto bg-white rounded-[2rem] border-2 border-stone-100 p-6 md:p-10 shadow-lg relative overflow-hidden">
          <div className="absolute top-4 right-6 text-2xl">
            <span>🐠</span>
          </div>
          <div className="border-b-2 border-stone-100 pb-4 mb-6">
            <h3 className="text-xl font-black text-stone-900 uppercase">Interactive Asset Calculator</h3>
            <p className="text-xs text-stone-400 font-bold">Execution algorithms configured globally for tracking values in INR, USD, and AED structures.</p>
          </div>
          <FinancialCalculator />
        </section>
        */}

        <section id="videos" className="max-w-6xl mx-auto bg-white rounded-[2rem] border-2 border-stone-100 p-6 md:p-10 shadow-lg relative overflow-hidden">
          <div className="absolute top-4 right-6 text-2xl">
            <span>🧸</span>
          </div>
          <div className="border-b-2 border-stone-100 pb-4 mb-6">
            <h3 className="text-xl font-black text-stone-900 uppercase">Educational Resource Hub</h3>
            <p className="text-xs text-stone-400 font-bold">Select any baseline structural knowledge module panel target card to execute learning views.</p>
          </div>
          <VideoGrid />
        </section>

      </main>

      {/* 4. Footer */}
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
