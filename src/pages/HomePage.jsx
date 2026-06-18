import React from 'react';

export default function HomePage() {
  return (
    <div className="bg-[#FAF8F5] text-stone-800 min-h-screen font-sans antialiased">
      
      {/* Hero Section */}
      <header className="relative overflow-hidden pt-12 pb-24 px-6 shadow-md bg-gradient-to-r from-[#A4C9FF] via-[#FFEB99] to-[#FF9EAF]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-8 items-center relative z-10">
          
          {/* Left Block */}
          <div className="md:col-span-7 text-left space-y-6">
            <h1 className="text-5xl md:text-7xl font-black tracking-tight text-white leading-none drop-shadow-md">
              Play, Learn, Enjoy and Repeat
            </h1>
            <p className="text-purple-950/80 text-sm md:text-base max-w-md font-bold leading-relaxed">
              Empowering youth with interactive lessons, global financial literacy metrics, and cross-border analytics tools that fit your everyday routine seamlessly.
            </p>
          </div>

          {/* Right Column: Cartoon Character */}
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

      {/* About Us Section Only - Removed Educational Resource Hub */}
      <main className="bg-[#EAF7F2] py-12 px-4 shadow-inner">
        
        <section id="about" className="max-w-6xl mx-auto text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-black text-stone-900 tracking-tight uppercase">
            About Us
          </h2>
          <p className="text-sm md:text-base text-stone-600 max-w-2xl mx-auto leading-relaxed">
            forthefutures is dedicated to empowering youth with interactive lessons in AI and Finance. 
            Our platform provides global financial literacy metrics and cross-border analytics tools 
            that fit seamlessly into your everyday routine.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-2xl shadow-md">
              <span className="text-4xl">🎯</span>
              <h3 className="font-bold mt-2">Our Mission</h3>
              <p className="text-sm text-stone-600">Making AI and Finance education accessible to every child</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-md">
              <span className="text-4xl">🌟</span>
              <h3 className="font-bold mt-2">Our Vision</h3>
              <p className="text-sm text-stone-600">Creating future-ready leaders through technology education</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-md">
              <span className="text-4xl">💡</span>
              <h3 className="font-bold mt-2">Our Values</h3>
              <p className="text-sm text-stone-600">Innovation, accessibility, and lifelong learning</p>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
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
