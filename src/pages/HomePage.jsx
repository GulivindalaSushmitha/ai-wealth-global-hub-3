import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { aiVideos } from '../data/aiVideos';
import { financeVideos } from '../data/financeVideos';

export default function HomePage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('videos');
  const [submissionText, setSubmissionText] = useState('');
  const [submissionFile, setSubmissionFile] = useState(null);

  // Quiz States
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState('');
  const [quizFinished, setQuizFinished] = useState(false);

  const allVideos = [...aiVideos, ...financeVideos];
  
  const categories = {
    'AI Basics': allVideos.filter(v => v.category === 'AI Basics'),
    'AI Course': allVideos.filter(v => v.category === 'AI Course'),
    'Machine Learning': allVideos.filter(v => v.category === 'Machine Learning'),
    'Groww': allVideos.filter(v => v.category === 'Groww'),
    'Pranjal Kamra': allVideos.filter(v => v.category === 'Pranjal Kamra'),
    'Finance Tips': allVideos.filter(v => v.category === 'Finance Tips'),
    'Other': allVideos.filter(v => !['AI Basics', 'AI Course', 'Machine Learning', 'Groww', 'Pranjal Kamra', 'Finance Tips'].includes(v.category))
  };

  // Quiz Data
  const quizData = [
    {
      question: "🤖 What does AI stand for?",
      options: ["Artificial Intelligence", "Automated Internet", "Awesome Ideas"],
      correct: 0
    },
    {
      question: "💰 Which is a benefit of learning finance?",
      options: ["Better video game skills", "Smart money choices", "Faster running"],
      correct: 1
    },
    {
      question: "🧠 AI can help us with:",
      options: ["Cooking only", "Solving problems", "Making bed"],
      correct: 1
    },
    {
      question: "📈 What is a stock?",
      options: ["A part of a company", "A type of fruit", "A video game"],
      correct: 0
    },
    {
      question: "🌟 Which is a cool AI tool?",
      options: ["ChatGPT", "A pencil", "A bicycle"],
      correct: 0
    }
  ];

  // PPT Contents
  const aiPPTContent = `AI: Why Learn & Benefits
==========================
🤖 Why learn AI?
- AI is shaping every industry
- High demand for AI skills
- Creative problem solving

✨ Benefits of AI:
- Automates repetitive tasks
- Enhances decision making
- Powers innovation (healthcare, finance, art)
- Personalized experiences

🔮 Future with AI:
- New job roles (AI ethicist, prompt engineer)
- Augmented human intelligence
- Endless possibilities

👉 Start your AI journey today!`;

  const financePPTContent = `Finance: Why Learn & Benefits
==============================
💰 Why learn Finance?
- Money management is life skill
- Understand investments & savings
- Build wealth and security

📈 Benefits of Finance:
- Make informed spending decisions
- Grow wealth through compounding
- Plan for retirement & goals
- Understand global economy

🧠 Financial literacy:
- Budgeting, stocks, bonds, crypto
- Risk management
- Passive income strategies

👉 Take control of your financial future!`;

  // Download Functions
  const downloadPPT = (content, filename) => {
    const blob = new Blob([content], { type: 'application/vnd.ms-powerpoint' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const downloadWorksheet = (type) => {
    let content = type === 'ai' 
      ? `AI WORKSHEET\n----------------\n1. Define AI in your own words.\n2. List 3 real-world AI applications.\n3. Draw a simple AI chatbot.\n4. Fill in: AI stands for ________.\n5. Benefits of AI: (circle) speed, creativity, boredom, accuracy.\n6. Write one risk of AI.\n--- interactive exercises ---`
      : `FINANCE WORKSHEET\n--------------------\n1. What is compound interest?\n2. List 3 ways to save money.\n3. Draw a piggy bank and label savings goal.\n4. Match: Stock | Bond | Crypto\n5. Budget exercise: income $100, expenses $40, savings ?\n6. Why is investing important?\n--- interactive exercises ---`;
    
    const blob = new Blob([content], { type: 'application/pdf' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = type === 'ai' ? 'AI_Worksheet.pdf' : 'Finance_Worksheet.pdf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const downloadVideoLinks = () => {
    const content = `🎥 Free AI & Finance Video Courses / Links
==========================================
📺 YouTube Playlists:
- AI for Beginners: https://youtu.be/... 
- Finance 101: https://youtu.be/...

📚 Free Courses:
- Google AI: https://ai.google/education
- Khan Academy Finance: https://www.khanacademy.org/... 
- Coursera: AI For Everyone (audit)
- edX: Finance for Everyone

📱 Interactive:
- AI experiments: https://experiments.withgoogle.com/ai
- Stock market game: https://www.howthemarketworks.com/

⭐ Bonus: daily quiz & kid-friendly materials`;
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'AI_Finance_Videos_Courses.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  // Quiz Functions
  const startQuiz = () => {
    setQuizStarted(true);
    setCurrentQuestion(0);
    setScore(0);
    setQuizFinished(false);
    setShowFeedback(false);
    setFeedbackMessage('');
  };

  const handleAnswer = (selectedIdx) => {
    const q = quizData[currentQuestion];
    if (selectedIdx === q.correct) {
      setScore(score + 1);
      setFeedbackMessage('✅ Correct! Great job!');
    } else {
      setFeedbackMessage(`❌ Oops! The answer was: ${q.options[q.correct]}`);
    }
    setShowFeedback(true);
    
    setTimeout(() => {
      if (currentQuestion + 1 < quizData.length) {
        setCurrentQuestion(currentQuestion + 1);
        setShowFeedback(false);
        setFeedbackMessage('');
      } else {
        setQuizFinished(true);
        setShowFeedback(false);
      }
    }, 1500);
  };

  const resetQuiz = () => {
    setQuizStarted(false);
    setCurrentQuestion(0);
    setScore(0);
    setQuizFinished(false);
    setShowFeedback(false);
    setFeedbackMessage('');
  };

  const handleSubmitWork = (e) => {
    e.preventDefault();
    alert('Thank you! Your work has been submitted. We will review and post it soon! 🎉');
    setSubmissionText('');
    setSubmissionFile(null);
  };

  return (
    <div className="bg-[#FAF8F5] text-stone-800 min-h-screen font-sans antialiased">
      
      {/* HERO SECTION */}
      <header className="relative overflow-hidden pt-12 pb-24 px-6 shadow-md bg-gradient-to-r from-[#A4C9FF] via-[#FFEB99] to-[#FF9EAF]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-8 items-center relative z-10">
          <div className="md:col-span-7 text-left space-y-6">
            <h1 className="text-5xl md:text-7xl font-black tracking-tight text-white leading-none drop-shadow-md">
              Play, Learn, Enjoy and Repeat
            </h1>
            <p className="text-purple-950/80 text-sm md:text-base max-w-md font-bold leading-relaxed">
              Empowering youth with interactive lessons, global financial literacy metrics, and cross-border analytics tools that fit your everyday routine seamlessly.
            </p>
          </div>
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

      {/* MAIN CONTENT */}
      <main className="bg-[#EAF7F2] py-12 px-4 shadow-inner">
        <div className="max-w-6xl mx-auto space-y-16">

          {/* SECTION 1: MISSION STATEMENT */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-[2rem] p-8 md:p-12 shadow-lg border-2 border-stone-100"
          >
            <h2 className="text-3xl md:text-4xl font-black text-stone-900 text-center mb-6">
              Our Mission 🎯
            </h2>
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-lg md:text-xl text-stone-700 leading-relaxed">
                <span className="font-bold text-purple-700">forthefutures</span> is a student-run organization founded by 
                <span className="font-bold text-pink-600"> Samara Mahajan</span>. 
                It began with teaching students from Indian slums financial literacy and has grown into 
                a network and a hub for education on life skills for the kids who deserve it most, 
                to increase social mobility.
              </p>
              <div className="mt-6 flex justify-center gap-4 flex-wrap">
                <span className="px-4 py-2 bg-purple-100 rounded-full text-purple-700 font-bold">🌍 Social Impact</span>
                <span className="px-4 py-2 bg-pink-100 rounded-full text-pink-700 font-bold">📚 Education</span>
                <span className="px-4 py-2 bg-blue-100 rounded-full text-blue-700 font-bold">🚀 Social Mobility</span>
              </div>
            </div>
          </motion.section>

          {/* SECTION 2: MEET THE FOUNDER */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-[2rem] p-8 md:p-12 shadow-lg border-2 border-stone-100"
          >
            <h2 className="text-3xl md:text-4xl font-black text-stone-900 text-center mb-8">
              Meet the Founder 🌟
            </h2>
            <div className="flex flex-col md:flex-row gap-8 items-center max-w-5xl mx-auto">
              <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-purple-400 shadow-xl flex-shrink-0 bg-gradient-to-br from-purple-200 to-pink-200 flex items-center justify-center">
                <img 
                  src="https://gulivindalasushmitha.github.io/ai-wealth-global-hub-3/images/samara.jpg" 
                  alt="Samara Mahajan - Founder"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/400x400/7c3aed/ffffff?text=Samara';
                  }}
                />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-bold text-purple-700">Samara Mahajan</h3>
                <p className="text-sm text-stone-500 mb-3">Founder & President, forthefutures</p>
                <p className="text-stone-700 leading-relaxed">
                  Samara is a <span className="font-bold">16-year-old student</span> at 
                  <span className="font-bold text-purple-700"> North London Collegiate School Dubai</span>. 
                  Ethnically from India but raised in Toronto and Dubai, she has been working with NGOs 
                  for <span className="font-bold text-pink-600">3 years</span> to provide financial literacy education to 
                  <span className="font-bold text-purple-700"> 300+ kids</span>.
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <span className="px-3 py-1 bg-purple-100 rounded-full text-purple-700 text-sm font-bold">🇮🇳 Indian Origin</span>
                  <span className="px-3 py-1 bg-pink-100 rounded-full text-pink-700 text-sm font-bold">🇨🇦 Toronto</span>
                  <span className="px-3 py-1 bg-blue-100 rounded-full text-blue-700 text-sm font-bold">🇦🇪 Dubai</span>
                  <span className="px-3 py-1 bg-green-100 rounded-full text-green-700 text-sm font-bold">🌍 3+ Years NGO</span>
                </div>
              </div>
            </div>
          </motion.section>

          {/* SECTION 3: THE TEAM */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-[2rem] p-8 md:p-12 shadow-lg border-2 border-purple-100"
          >
            <h2 className="text-3xl md:text-4xl font-black text-stone-900 text-center mb-6">
              The Team Behind It All 👥
            </h2>
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-lg text-stone-700 leading-relaxed">
                Our team consists of <span className="font-bold text-purple-700">10 kids in the tenth grade</span> 
                who have been trained for over <span className="font-bold text-pink-600">a year</span> to deliver 
                quality education to these kids. Together, we are building a brighter future.
              </p>
              <div className="mt-6 grid grid-cols-2 md:grid-cols-5 gap-4 max-w-2xl mx-auto">
                {['👩‍🏫', '👨‍🏫', '👩‍💻', '👨‍💻', '🧑‍🎓'].map((emoji, i) => (
                  <div key={i} className="bg-white rounded-xl p-4 shadow-md text-center">
                    <span className="text-3xl">{emoji}</span>
                    <p className="text-xs text-stone-600 mt-1 font-bold">Team Member</p>
                  </div>
                ))}
              </div>
              <p className="text-sm text-stone-500 mt-4">
                🌟 Trained for 1+ years • 📚 10 dedicated students • 💪 Making a difference
              </p>
            </div>
          </motion.section>

          {/* SECTION 4: CHUCK GARCIA WORKSHOP - TEXT ONLY */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white rounded-[2rem] p-8 md:p-12 shadow-lg border-2 border-stone-100"
          >
            <h2 className="text-3xl md:text-4xl font-black text-stone-900 text-center mb-6">
              Chuck Garcia Workshop 🎓
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              
              {/* LEFT SIDE */}
              <div className="space-y-4">
                <div className="bg-purple-50 rounded-xl p-4">
                  <h3 className="font-bold text-purple-700 text-lg">📊 Workshop Impact</h3>
                  <ul className="space-y-2 text-stone-700">
                    <li>✅ <span className="font-bold">150+</span> students taught</li>
                    <li>✅ <span className="font-bold">5</span> sessions conducted</li>
                    <li>✅ <span className="font-bold">90%</span> students reported increased financial confidence</li>
                    <li>✅ <span className="font-bold">100%</span> said they would recommend to friends</li>
                  </ul>
                </div>
                <div className="bg-pink-50 rounded-xl p-4">
                  <h3 className="font-bold text-pink-700 text-lg">🌍 Expanding to MENA</h3>
                  <p className="text-stone-700 text-sm">
                    We are actively working to bring financial literacy education to schools 
                    across the <span className="font-bold">MENA region</span>, starting with partnerships 
                    in UAE, Saudi Arabia, and Egypt.
                  </p>
                </div>
              </div>

              {/* RIGHT SIDE */}
              <div className="space-y-4">
                <div className="bg-blue-50 rounded-xl p-4">
                  <h3 className="font-bold text-blue-700 text-lg">🎯 What We Achieved</h3>
                  <p className="text-stone-700 text-sm">
                    Students learned budgeting, saving, investing basics, and developed 
                    practical money management skills they can use for life.
                  </p>
                </div>
                <div className="bg-green-50 rounded-xl p-4">
                  <h3 className="font-bold text-green-700 text-lg">📚 Workshop Details</h3>
                  <ul className="space-y-2 text-stone-700 text-sm">
                    <li>✅ Interactive sessions with real-life examples</li>
                    <li>✅ Hands-on activities and group discussions</li>
                    <li>✅ Practical financial literacy skills</li>
                    <li>✅ Q&A sessions with industry experts</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.section>

          {/* SECTION 5: IMPORTANCE OF AI & FINANCIAL LITERACY */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-[2rem] p-8 md:p-12 shadow-lg border-2 border-blue-100"
          >
            <h2 className="text-3xl md:text-4xl font-black text-stone-900 text-center mb-6">
              Why AI & Financial Literacy Matter 🤖💰
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <span className="text-4xl">🤖</span>
                <h3 className="text-xl font-bold text-purple-700 mt-2">AI for the Future</h3>
                <ul className="mt-3 space-y-2 text-stone-700 text-sm">
                  <li>✅ 85% of jobs in 2030 don't exist yet</li>
                  <li>✅ AI literacy is the new digital literacy</li>
                  <li>✅ Understanding AI = Better career opportunities</li>
                  <li>✅ Prepares youth for the future workforce</li>
                  <li>✅ Develops critical thinking and problem-solving</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <span className="text-4xl">💰</span>
                <h3 className="text-xl font-bold text-green-700 mt-2">Financial Literacy</h3>
                <ul className="mt-3 space-y-2 text-stone-700 text-sm">
                  <li>✅ 78% of adults wish they learned finance in school</li>
                  <li>✅ Essential for breaking the poverty cycle</li>
                  <li>✅ Creates financial independence and confidence</li>
                  <li>✅ Reduces stress about money</li>
                  <li>✅ Builds generational wealth knowledge</li>
                </ul>
              </div>
            </div>
            <p className="text-center text-stone-600 text-sm mt-6 max-w-2xl mx-auto">
              <span className="font-bold text-purple-700">Together</span>, AI and financial literacy 
              empower the next generation to <span className="font-bold text-pink-600">break the cycle of poverty</span> 
              and build a <span className="font-bold text-blue-700">brighter future</span>.
            </p>
          </motion.section>

          {/* SECTION 6: ORGANIZED VIDEOS */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-white rounded-[2rem] p-8 md:p-12 shadow-lg border-2 border-stone-100"
          >
            <h2 className="text-3xl md:text-4xl font-black text-stone-900 text-center mb-6">
              Educational Videos 📺
            </h2>
            <p className="text-center text-stone-600 mb-8">
              Browse our organized video library by category
            </p>

            <div className="flex flex-wrap gap-2 justify-center mb-8">
              {Object.keys(categories).map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveTab(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${
                    activeTab === cat 
                      ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/30' 
                      : 'bg-gray-100 text-stone-600 hover:bg-purple-100'
                  }`}
                >
                  {cat} ({categories[cat].length})
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories[activeTab] && categories[activeTab].length > 0 ? (
                categories[activeTab].slice(0, 9).map((video) => (
                  <motion.div
                    key={video.id}
                    whileHover={{ y: -5 }}
                    className="bg-gray-50 rounded-xl overflow-hidden cursor-pointer border-2 border-transparent hover:border-purple-400 transition-all shadow-md hover:shadow-xl"
                    onClick={() => navigate(`/video/${video.id}`, { state: { video } })}
                  >
                    <div className="aspect-video bg-gray-200 flex items-center justify-center">
                      <span className="text-4xl">🎬</span>
                    </div>
                    <div className="p-4">
                      <h4 className="font-bold text-sm text-stone-800 line-clamp-2">{video.title}</h4>
                      <div className="flex justify-between mt-2">
                        <span className="text-xs text-purple-600 font-bold">{video.language}</span>
                        <span className="text-xs text-stone-400">{video.category}</span>
                      </div>
                    </div>
                  </motion.div>
                ))
              ) : (
                <p className="text-stone-400 text-center col-span-3">No videos in this category yet.</p>
              )}
            </div>
            
            <div className="text-center mt-6">
              <button 
                onClick={() => navigate('/ai-hub')}
                className="px-6 py-3 bg-purple-600 text-white rounded-full font-bold hover:bg-purple-700 transition-all shadow-lg shadow-purple-500/30"
              >
                View All Videos 🚀
              </button>
            </div>
          </motion.section>

          {/* SECTION 7: RESOURCES & ACTIVITIES - UPDATED WITH INTERACTIVE FEATURES */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="bg-white rounded-[2rem] p-8 md:p-12 shadow-lg border-2 border-stone-100"
          >
            <h2 className="text-3xl md:text-4xl font-black text-stone-900 text-center mb-8">
              Resources & Activities 📚
            </h2>
            
            <div className="max-w-5xl mx-auto space-y-6">
              
              {/* PowerPoints */}
              <div className="bg-purple-50 rounded-2xl p-6 shadow-md border-2 border-purple-100">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">📊</span>
                  <h3 className="text-2xl font-bold text-purple-700">PowerPoints</h3>
                </div>
                <p className="text-stone-600 mb-4">Ready-to-use presentations on AI and Finance</p>
                <div className="flex flex-wrap gap-4">
                  <button 
                    onClick={() => downloadPPT(aiPPTContent, 'AI_Why_Benefits.ppt')} 
                    className="bg-purple-600 text-white px-6 py-2.5 rounded-full hover:bg-purple-700 transition flex items-center gap-2 shadow-md hover:shadow-lg text-sm font-bold"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 3a1 1 0 011 1v9.586l3.293-3.293a1 1 0 011.414 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 011.414-1.414L9 13.586V4a1 1 0 011-1z"/>
                    </svg>
                    Download AI PPT
                  </button>
                  <button 
                    onClick={() => downloadPPT(financePPTContent, 'Finance_Why_Benefits.ppt')} 
                    className="bg-green-600 text-white px-6 py-2.5 rounded-full hover:bg-green-700 transition flex items-center gap-2 shadow-md hover:shadow-lg text-sm font-bold"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 3a1 1 0 011 1v9.586l3.293-3.293a1 1 0 011.414 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 011.414-1.414L9 13.586V4a1 1 0 011-1z"/>
                    </svg>
                    Download Finance PPT
                  </button>
                </div>
              </div>

              {/* Worksheets */}
              <div className="bg-pink-50 rounded-2xl p-6 shadow-md border-2 border-pink-100">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">📝</span>
                  <h3 className="text-2xl font-bold text-pink-700">Worksheets</h3>
                </div>
                <p className="text-stone-600 mb-4">Interactive exercises to reinforce learning</p>
                <div className="flex flex-wrap gap-3">
                  <button 
                    onClick={() => downloadWorksheet('ai')} 
                    className="bg-pink-600 text-white px-6 py-2.5 rounded-full hover:bg-pink-700 transition shadow-md hover:shadow-lg text-sm font-bold"
                  >
                    AI Worksheet
                  </button>
                  <button 
                    onClick={() => downloadWorksheet('finance')} 
                    className="bg-pink-600 text-white px-6 py-2.5 rounded-full hover:bg-pink-700 transition shadow-md hover:shadow-lg text-sm font-bold"
                  >
                    Finance Worksheet
                  </button>
                  <button 
                    onClick={downloadVideoLinks} 
                    className="bg-blue-600 text-white px-6 py-2.5 rounded-full hover:bg-blue-700 transition shadow-md hover:shadow-lg text-sm font-bold"
                  >
                    🎬 Videos & Courses
                  </button>
                </div>
              </div>

              {/* Activities / Quiz */}
              <div className="bg-green-50 rounded-2xl p-6 shadow-md border-2 border-green-100">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">🎮</span>
                  <h3 className="text-2xl font-bold text-green-700">Activities</h3>
                </div>
                <p className="text-stone-600 mb-4">Fun quizzes and interactive exercises</p>
                
                {!quizStarted ? (
                  <button 
                    onClick={startQuiz} 
                    className="bg-yellow-500 text-gray-800 px-8 py-3 rounded-full hover:bg-yellow-600 transition flex items-center gap-2 text-lg font-bold shadow-md hover:shadow-lg"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 3a1 1 0 011 1v9.586l3.293-3.293a1 1 0 011.414 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 011.414-1.414L9 13.586V4a1 1 0 011-1z"/>
                    </svg>
                    Start Now 🚀
                  </button>
                ) : (
                  <div className="bg-white rounded-xl p-6 shadow-inner">
                    {!quizFinished ? (
                      <div>
                        <h4 className="text-xl font-bold mb-4 text-gray-800">{quizData[currentQuestion].question}</h4>
                        <div className="space-y-3">
                          {quizData[currentQuestion].options.map((opt, idx) => (
                            <button
                              key={idx}
                              onClick={() => !showFeedback && handleAnswer(idx)}
                              className={`block w-full text-left px-4 py-3 rounded-xl border-2 transition ${
                                showFeedback 
                                  ? 'cursor-default opacity-70' 
                                  : 'hover:bg-green-100 hover:border-green-400 bg-white'
                              }`}
                            >
                              <span className="font-medium">{String.fromCharCode(65 + idx)}. </span>
                              {opt}
                            </button>
                          ))}
                        </div>
                        {showFeedback && (
                          <div className={`mt-4 p-4 rounded-lg border-2 ${
                            feedbackMessage.includes('Correct') 
                              ? 'bg-green-100 border-green-400 text-green-700' 
                              : 'bg-red-100 border-red-400 text-red-700'
                          }`}>
                            <p className="font-semibold">{feedbackMessage}</p>
                          </div>
                        )}
                        <div className="mt-4 flex justify-between items-center">
                          <span className="text-sm text-gray-500">
                            Question {currentQuestion + 1} of {quizData.length}
                          </span>
                          <span className="text-sm font-semibold text-green-600">
                            ⭐ Score: {score}
                          </span>
                        </div>
                      </div>
                    ) : (
                      <div className="text-center py-6">
                        <div className="text-6xl mb-4">🎉</div>
                        <h4 className="text-2xl font-bold mb-2 text-gray-800">Quiz Complete!</h4>
                        <p className="text-xl font-semibold text-green-600">Score: {score} / {quizData.length}</p>
                        <p className="text-gray-600 mt-2 text-lg">
                          {score === quizData.length ? '🌟 Perfect! AI & Finance star!' : '👍 Keep learning! You\'re doing great!'}
                        </p>
                        <button 
                          onClick={resetQuiz} 
                          className="mt-6 bg-purple-600 text-white px-8 py-3 rounded-full hover:bg-purple-700 transition shadow-md hover:shadow-lg font-bold"
                        >
                          🔄 Try Again
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Share Your Work - Updated to match design */}
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-dashed border-blue-400 rounded-2xl p-6 flex flex-wrap items-center justify-between">
                <div className="flex items-center gap-4">
                  <span className="text-3xl">📤</span>
                  <div>
                    <p className="font-semibold text-blue-800 text-lg">Share Your Work</p>
                    <p className="text-gray-600 text-sm">Submit your projects, worksheets, or creative work and get featured on our platform!</p>
                  </div>
                </div>
                <button 
                  onClick={() => document.getElementById('shareSection')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-white text-blue-600 px-8 py-3 rounded-full border-2 border-blue-400 hover:bg-blue-50 transition shadow-sm font-bold"
                >
                  ✏️ Submit Now
                </button>
              </div>
            </div>
          </motion.section>

          {/* SECTION 8: STUDENT SUBMISSION */}
          <motion.section 
            id="shareSection"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-[2rem] p-8 md:p-12 shadow-lg border-2 border-yellow-200"
          >
            <h2 className="text-3xl md:text-4xl font-black text-stone-900 text-center mb-6">
              Share Your Work ✨
            </h2>
            <p className="text-center text-stone-600 max-w-2xl mx-auto mb-8">
              Submit your projects, worksheets, or creative work and get featured on our platform!
            </p>
            <form onSubmit={handleSubmitWork} className="max-w-2xl mx-auto space-y-4">
              <div>
                <label className="block text-sm font-bold text-stone-700 mb-1">Your Name</label>
                <input 
                  type="text" 
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 rounded-xl border-2 border-stone-200 focus:border-purple-400 focus:outline-none transition-all"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-stone-700 mb-1">What did you create?</label>
                <textarea 
                  value={submissionText}
                  onChange={(e) => setSubmissionText(e.target.value)}
                  placeholder="Describe your project, worksheet, or activity..."
                  className="w-full px-4 py-3 rounded-xl border-2 border-stone-200 focus:border-purple-400 focus:outline-none transition-all h-24"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-stone-700 mb-1">Upload Your Work</label>
                <input 
                  type="file"
                  onChange={(e) => setSubmissionFile(e.target.files[0])}
                  className="w-full px-4 py-3 rounded-xl border-2 border-stone-200 focus:border-purple-400 focus:outline-none transition-all bg-white"
                  accept=".pdf,.doc,.docx,.jpg,.png,.ppt,.pptx"
                />
                <p className="text-xs text-stone-400 mt-1">Accepted: PDF, Word, Images, PowerPoint</p>
              </div>
              <button 
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-bold hover:shadow-lg transition-all text-lg"
              >
                🚀 Submit Your Work
              </button>
            </form>
            <p className="text-center text-sm text-stone-500 mt-4">
              💡 Your work could be featured on our platform! We'll review and post it soon.
            </p>
          </motion.section>

          {/* SECTION 9: CERTIFICATES */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="bg-white rounded-[2rem] p-8 md:p-12 shadow-lg border-2 border-stone-100"
          >
            <h2 className="text-3xl md:text-4xl font-black text-stone-900 text-center mb-6">
              Earn Your Certificate 🎓
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-8 text-center">
                <span className="text-6xl">📜</span>
                <h3 className="text-2xl font-bold text-purple-700 mt-3">Free Certificates for Students</h3>
                <p className="text-stone-700 max-w-2xl mx-auto mt-2">
                  Complete our courses and earn <span className="font-bold">downloadable certificates</span> 
                  to add to your portfolio, resume, or job applications!
                </p>
                <div className="grid md:grid-cols-3 gap-4 mt-6">
                  <div className="bg-white rounded-xl p-4 shadow-md">
                    <span className="text-2xl">🤖</span>
                    <h4 className="font-bold text-sm text-purple-700">AI Basics</h4>
                    <p className="text-xs text-stone-500">Complete 5 AI lessons</p>
                  </div>
                  <div className="bg-white rounded-xl p-4 shadow-md">
                    <span className="text-2xl">💰</span>
                    <h4 className="font-bold text-sm text-purple-700">Financial Literacy</h4>
                    <p className="text-xs text-stone-500">Complete 5 Finance lessons</p>
                  </div>
                  <div className="bg-white rounded-xl p-4 shadow-md">
                    <span className="text-2xl">🌟</span>
                    <h4 className="font-bold text-sm text-purple-700">Advanced</h4>
                    <p className="text-xs text-stone-500">Complete 10 combined lessons</p>
                  </div>
                </div>
                <button className="mt-6 px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-bold hover:shadow-lg transition-all text-sm">
                  📥 Start Learning & Earn Certificate
                </button>
              </div>
            </div>
          </motion.section>

        </div>
      </main>

      {/* FOOTER - UPDATED CONTACT */}
      <footer id="contact" className="bg-[#192428] text-white py-8 px-6 rounded-t-[2rem] flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-bold border-t-4 border-[#FF6B8B]">
        <div className="text-center md:text-left">
          <p className="text-[#FF6B8B]">📞 Phone: +971585417100</p>
          <p className="text-stone-400 text-[10px] mt-0.5">✉ Email: forthefuturenet@gmail.com</p>
          <p className="text-stone-400 text-[10px] mt-0.5">
            📸 Instagram: 
            <a 
              href="https://www.instagram.com/samspr1v09?igsh=ZDVjYXg0Y21vYTIw" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#FF6B8B] hover:underline ml-1"
            >
              @samspr1v09
            </a>
          </p>
        </div>
        <p className="text-stone-500 text-[10px] font-medium">© 2026 forthefutures. All rights reserved.</p>
      </footer>

    </div>
  );
}
