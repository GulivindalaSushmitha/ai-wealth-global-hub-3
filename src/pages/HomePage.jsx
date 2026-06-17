import React from 'react';

export default function HomePage() {
  return (
    <div className="bg-[#FAF8F5] text-stone-800 min-h-screen font-sans antialiased selection:bg-purple-200">
      
      {/* 1. Header Navigation Bar */}
      <nav className="bg-white px-6 py-4 flex justify-between items-center border-b border-stone-200/60 sticky top-0 z-50">
        <div className="flex items-center space-x-2">
          <div className="w-9 h-9 rounded-full bg-purple-600 flex items-center justify-center text-white text-sm font-black shadow-md">
            K
          </div>
          <span className="text-xl font-black text-stone-900 tracking-tight">forthefutures</span>
        </div>
        <div className="hidden md:flex space-x-8 text-sm font-bold text-stone-600">
          <a href="#" className="text-purple-600 border-b-2 border-purple-600 pb-1">About Us</a>
          <a href="#" className="hover:text-stone-900 transition">Smart Calculator</a>
          <a href="#" className="hover:text-stone-900 transition">AI Hub</a>
          <a href="#" className="hover:text-stone-900 transition">Contact</a>
        </div>
        <button className="bg-[#00D67D] text-stone-900 text-xs font-black px-5 py-2.5 rounded-full hover:scale-105 transition shadow-sm uppercase tracking-wider">
          Get In Touch
        </button>
      </nav>

      {/* 2. Premium Royal Purple Hero Panel Section */}
      <header className="bg-[#511365] text-white pt-16 pb-24 px-6 relative overflow-hidden text-center rounded-b-[3rem] md:rounded-b-[5rem] shadow-xl">
        {/* Background Visual Floating Accent Objects */}
        <div className="absolute top-12 left-8 text-4xl opacity-10 animate-pulse">☁</div>
        <div className="absolute bottom-20 right-12 text-5xl opacity-20 rotate-12">⭐</div>

        <div className="max-w-3xl mx-auto space-y-6 relative z-10">
          <h1 className="text-4xl md:text-6xl font-black tracking-tight uppercase leading-tight text-white drop-shadow-md">
            WELCOME TO <br/><span className="text-[#00D67D]">FORTHEFUTURES</span>
          </h1>
          <p className="text-stone-200 text-sm md:text-base max-w-xl mx-auto font-medium leading-relaxed">
            Turn screen time into learning time with fun, interactive lessons designed to keep kids excited and engaged. We turn everyday learning into an exciting journey!
          </p>
          <div className="flex justify-center gap-4 pt-2">
            <button className="bg-[#00D67D] text-stone-900 font-black px-6 py-3.5 rounded-full shadow-lg hover:bg-[#00c070] transition transform hover:-translate-y-0.5 text-xs uppercase tracking-wider">
              Get Started Now
            </button>
            <button className="bg-white/10 border border-white/20 text-white font-bold px-6 py-3.5 rounded-full hover:bg-white/20 transition text-xs uppercase tracking-wider">
              Explore Activities
            </button>
          </div>
        </div>

        {/* Cloud-shaped / Wavy Styled Main Feature Frame */}
        <div className="max-w-4xl mx-auto mt-12 relative px-4">
          <div className="bg-white p-4 rounded-[2.5rem] shadow-2xl border-4 border-purple-400 max-w-2xl mx-auto transform rotate-1 hover:rotate-0 transition duration-300">
            <div className="bg-purple-100 rounded-[2rem] overflow-hidden aspect-[16/9] flex items-center justify-center text-purple-900 font-bold border-2 border-stone-200 relative">
              <span className="text-sm md:text-base text-purple-800 font-black px-4 py-2 bg-white/80 rounded-full shadow-sm">
                📸 [ Main Welcome Showcase / Founder Photo Panel ]
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* 3. Core Offerings Area - Dual Column Grid Panels */}
      <section className="max-w-6xl mx-auto px-6 py-16 mt-6">
        <div className="bg-white rounded-[2.5rem] border border-stone-200/80 p-8 md:p-12 shadow-md grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left Side Column Block: Main Media Stream Box */}
          <div className="space-y-4">
            <div className="bg-stone-100 rounded-3xl overflow-hidden aspect-video shadow-inner border-4 border-purple-100 flex items-center justify-center text-stone-400 font-bold text-sm">
              <!-- Interactive Interactive Video Player Shell -->
              📺 [ Interactive Media Showcase Module ]
            </div>
            <div className="bg-purple-50 p-4 rounded-2xl border border-purple-100 text-center">
              <h4 className="font-black text-purple-900 text-sm">Active Exploration Station</h4>
              <p className="text-xs text-stone-600 font-medium mt-1">Select an objective card from the side control board to launch lessons.</p>
            </div>
          </div>

          {/* Right Side Column Block: Capsule Interface Selector Panel */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-black text-stone-900 uppercase leading-tight">
              WHAT WE OFFER <br/>FOR STUDENTS
            </h2>
            <p className="text-stone-600 text-xs md:text-sm font-semibold leading-relaxed">
              Our expert designed activities help children grow their minds, build confidence, & fall in love with learning.
            </p>

            {/* Alternating Styled Interactive Capsule Selection Layout Grid */}
            <div className="flex flex-col gap-3 pt-2">
              <button className="bg-[#00D67D] text-stone-900 border-2 border-stone-950 px-5 py-3 rounded-full text-xs font-black uppercase tracking-wider text-left shadow-sm w-full md:w-5/6">
                🌟 Pillar 1: Applied Interactive Modules
              </button>
              <button className="bg-[#F2EFE9] text-stone-700 hover:bg-purple-100 hover:text-purple-900 px-5 py-3 rounded-full text-xs font-black uppercase tracking-wider text-left shadow-sm w-full md:w-5/6 transition">
                📝 Pillar 2: Dynamic Skill Measurement Tracker
              </button>
              <button className="bg-[#F2EFE9] text-stone-700 hover:bg-purple-100 hover:text-purple-900 px-5 py-3 rounded-full text-xs font-black uppercase tracking-wider text-left shadow-sm w-full md:w-5/6 transition">
                🎮 Pillar 3: Educational Systems & Game Arrays
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* 4. Modern Charcoal Content Footer Anchor */}
      <footer className="bg-[#192428] text-white py-6 px-6 rounded-t-[2.5rem] flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-bold border-t-4 border-[#00D67D]">
        <div className="text-center md:text-left">
          <p className="text-[#00D67D]">📞 Contact: +971585417100 | ✉ Email: forthefuturenet@gmail.com</p>
          <p className="text-stone-400 text-[10px] mt-0.5">📸 Instagram: @financeforfutures2026</p>
        </div>
        <p className="text-stone-500 text-[10px] font-medium">© 2026 forthefutures. All rights reserved.</p>
      </footer>

    </div>
  );
}
