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

  // ===== RABBIT RACING GAME STATES =====
  const [gameStarted, setGameStarted] = useState(false);
  const [currentLevel, setCurrentLevel] = useState(0);
  const [score, setScore] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState('');
  const [gameFinished, setGameFinished] = useState(false);
  const [rabbitPosition, setRabbitPosition] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [certificateName, setCertificateName] = useState('');
  const [certificateType, setCertificateType] = useState('');

  // ===== LEARNING GAME LEVELS (10 levels) =====
  const gameLevels = [
    {
      question: "🤖 What does AI stand for?",
      options: ["Artificial Intelligence", "Automated Internet", "Awesome Ideas", "Advanced Integration"],
      correct: 0,
      hint: "💡 Think about what makes computers smart!",
      funFact: "✨ AI was first talked about in 1956!"
    },
    {
      question: "🧠 Which of these is an example of AI?",
      options: ["ChatGPT", "A pencil", "A bicycle", "A book"],
      correct: 0,
      hint: "💡 It's something that can talk to you!",
      funFact: "✨ ChatGPT can write stories and poems!"
    },
    {
      question: "🤖 What can AI help us with?",
      options: ["Solving problems", "Cooking only", "Making bed", "Watching TV"],
      correct: 0,
      hint: "💡 AI is like a smart helper!",
      funFact: "✨ AI helps doctors find diseases faster!"
    },
    {
      question: "💰 What is financial literacy?",
      options: ["Managing money wisely", "Only spending", "Only saving", "Only earning"],
      correct: 0,
      hint: "💡 It's about being smart with money!",
      funFact: "✨ People who learn finance early save more money!"
    },
    {
      question: "💳 What is a budget?",
      options: ["A plan for your money", "A type of card", "A game", "A book"],
      correct: 0,
      hint: "💡 It's like a map for your money!",
      funFact: "✨ A budget helps you buy what you really want!"
    },
    {
      question: "📱 Which device uses AI?",
      options: ["Smartphone", "Rock", "Tree", "Water bottle"],
      correct: 0,
      hint: "💡 It's something you use every day!",
      funFact: "✨ Your phone uses AI to understand your voice!"
    },
    {
      question: "🏦 What is a bank?",
      options: ["A place to keep money", "A restaurant", "A school", "A park"],
      correct: 0,
      hint: "💡 It's where money is safe!",
      funFact: "✨ The first bank was in Italy in 1400s!"
    },
    {
      question: "🤖 Self-driving cars use:",
      options: ["AI technology", "Magic", "Only wheels", "Only mirrors"],
      correct: 0,
      hint: "💡 It's the same thing that makes computers smart!",
      funFact: "✨ Self-driving cars can see better than humans!"
    },
    {
      question: "💰 Why is saving important?",
      options: ["For future needs", "Only for buying candy", "Only for games", "Only for fun"],
      correct: 0,
      hint: "💡 Think about tomorrow!",
      funFact: "✨ Saving just ₹10 a day = ₹3650 a year!"
    },
    {
      question: "🚀 AI will help us in the future by:",
      options: ["Solving big problems", "Only playing games", "Only sleeping", "Only eating"],
      correct: 0,
      hint: "💡 AI makes the world better!",
      funFact: "✨ AI will help us explore space and cure diseases!"
    }
  ];

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

  // ===== BEAUTIFUL AI PPT CONTENT - FIXED =====
  const aiPPTContent = `🌟 AI: What, Why & Future - Kid's Edition 🌟
=========================================================

🎨 SLIDE 1: What is AI? 🤖
--------------------------
✨ AI stands for ARTIFICIAL INTELLIGENCE
✨ It's like giving a computer a BRAIN! 🧠
✨ AI helps machines think, learn, and make decisions
✨ Think of it as a SMART ROBOT FRIEND! 🤖
✨ Examples: Siri, Alexa, ChatGPT, Self-driving cars


🎨 SLIDE 2: Where is AI Used? 🌍
--------------------------------
📱 Smartphones - Face unlock, Voice assistants
🎮 Video Games - Smart enemies that learn
🚗 Self-driving Cars - Drive themselves!
🏥 Hospitals - Help doctors save lives
🛒 Online Shopping - Recommend products you might like


🎨 SLIDE 3: Why is AI Important? ❓
-----------------------------------
⚡ AI helps us do things FASTER and BETTER!
⚡ It solves problems humans find too hard
⚡ It helps us discover NEW things
⚡ AI never gets tired - works 24/7! 🕐
⚡ Fun Fact: AI can beat humans at chess! ♟️


🎨 SLIDE 4: Benefits of AI ✨
-----------------------------
⭐ SAVES TIME - AI does tasks quickly
⭐ HELPS WITH DIFFICULT TASKS - Like solving puzzles
⭐ WORKS 24/7 - Never needs sleep!
⭐ MAKES FEWER MISTAKES - Very accurate
⭐ HELPS CREATE NEW INVENTIONS - Like robots!


🎨 SLIDE 5: AI in the Future 🚀
-------------------------------
🚀 AI will be EVERYWHERE!
🚀 Robots will help with household chores
🚀 AI teachers will personalize learning for each student
🚀 We'll explore space with AI assistants
🚀 AI will help humans, not replace them!
🚀 THE FUTURE IS BRIGHT WITH AI! 🌟


🌈 Remember: You can be part of the AI revolution! Start learning today! 🎓`;

  // ===== BEAUTIFUL FINANCE PPT CONTENT - FIXED =====
  const financePPTContent = `💰 Finance: What, Why & Future - Kid's Edition 💰
===========================================================

🎨 SLIDE 1: What is Finance? 💰
--------------------------------
✨ Finance is all about MONEY! 💵
✨ It's how we earn, save, spend, and grow money
✨ Think of it as the SUPERPOWER of managing money! 💪
✨ A piggy bank with a cape - that's finance! 🦸
✨ Finance helps us achieve our DREAMS! 🌟


🎨 SLIDE 2: Why is Finance Important? ❓
----------------------------------------
✨ To buy things we WANT and things we NEED
✨ To SAVE money for the future 🏦
✨ To avoid running out of money
✨ To help our families and communities
✨ To have FREEDOM to do what we love! 🎈


🎨 SLIDE 3: How to Save Money 🐷
--------------------------------
💰 Save a little bit EVERY DAY
💰 Use a piggy bank or savings jar 🏺
💰 Set a savings goal (like a new video game!) 🎮
💰 Watch your money GROW like a plant! 🌱
💰 Fun Fact: Even ₹10 a day adds up to ₹3650 a year!


🎨 SLIDE 4: Smart Spending 🛒
-----------------------------
🧠 Think before you buy: Do I NEED it or WANT it?
🧠 Compare prices before buying
🧠 Wait for sales and discounts
🧠 Save up for BIG purchases
🧠 Budget your money - plan your spending!


🎨 SLIDE 5: Your Financial Future 🌟
------------------------------------
🌟 You can become a MONEY EXPERT!
🌟 Learn to invest, save, and grow your wealth
🌟 Financial freedom = You can do what you LOVE
🌟 Start learning about money TODAY!
🌟 Remember: Every millionaire started with one coin! 💰


🌈 Be smart with money and you'll have a bright future! Start today! 🎓`;

  // ===== DOWNLOAD FUNCTIONS =====
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

  // ===== FIXED: DOWNLOAD VIDEOS WITH BLUE CLICKABLE LINKS =====
  const downloadVideoLinks = () => {
    const content = `🎥 FREE AI & FINANCE VIDEO COURSES / LINKS
===============================================================

📺 YOUTUBE PLAYLISTS (Click the links below):
• AI for Beginners: https://www.youtube.com/results?search_query=ai+for+beginners
• Finance 101: https://www.youtube.com/results?search_query=finance+101
• Machine Learning Basics: https://www.youtube.com/results?search_query=machine+learning+basics
• Investing for Kids: https://www.youtube.com/results?search_query=investing+for+kids

📚 FREE COURSES:
• Google AI Education: https://ai.google/education
• Khan Academy Financial Literacy: https://www.khanacademy.org/college-careers-more/financial-literacy
• Coursera AI For Everyone: https://www.coursera.org/learn/ai-for-everyone
• edX Finance for Everyone: https://www.edx.org/learn/finance
• Harvard CS50 AI: https://cs50.harvard.edu/ai/
• Stanford Financial Literacy: https://www.stanford.edu/

📱 INTERACTIVE TOOLS:
• AI Experiments: https://experiments.withgoogle.com/ai
• Stock Market Game: https://www.howthemarketworks.com/
• Interactive Finance Games: https://www.practicalmoneyskills.com/
• AI for Kids: https://www.tynker.com/ai

📖 EDUCATIONAL RESOURCES:
• Investopedia for Kids: https://www.investopedia.com/financial-literacy-for-kids-5112941
• AI Ethics: https://www.unesco.org/en/artificial-intelligence
• Future of Work: https://www.weforum.org/

⭐ Bonus: Daily quizzes and interactive activities available on our platform!`;

    // Create HTML file with BLUE clickable links
    const htmlContent = `<!DOCTYPE html>
<html>
<head>
<style>
  body { font-family: Arial, sans-serif; padding: 40px; max-width: 800px; margin: auto; background: #f5f5f5; }
  h1 { color: #ff6b35; text-align: center; }
  .section { background: white; padding: 20px; border-radius: 10px; margin: 20px 0; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
  h2 { color: #2d3436; border-bottom: 2px solid #ff6b35; padding-bottom: 10px; }
  a { display: block; color: #0066cc; text-decoration: none; padding: 8px 0; font-weight: 600; }
  a:hover { text-decoration: underline; color: #ff6b35; }
  .emoji { font-size: 20px; }
  .footer { text-align: center; margin-top: 30px; color: #888; border-top: 2px solid #eee; padding-top: 20px; }
  .blue-link { color: #0066cc; font-weight: bold; }
</style>
</head>
<body>
  <h1>🎥 FREE AI & FINANCE VIDEO COURSES / LINKS</h1>
  <p style="text-align:center; color:#888;">📌 Click any blue link below to visit the website</p>

  <div class="section">
    <h2>📺 YouTube Playlists</h2>
    <a href="https://www.youtube.com/results?search_query=ai+for+beginners" target="_blank">🎬 AI for Beginners</a>
    <a href="https://www.youtube.com/results?search_query=finance+101" target="_blank">🎬 Finance 101</a>
    <a href="https://www.youtube.com/results?search_query=machine+learning+basics" target="_blank">🎬 Machine Learning Basics</a>
    <a href="https://www.youtube.com/results?search_query=investing+for+kids" target="_blank">🎬 Investing for Kids</a>
  </div>

  <div class="section">
    <h2>📚 Free Courses</h2>
    <a href="https://ai.google/education" target="_blank">📖 Google AI Education</a>
    <a href="https://www.khanacademy.org/college-careers-more/financial-literacy" target="_blank">📖 Khan Academy Financial Literacy</a>
    <a href="https://www.coursera.org/learn/ai-for-everyone" target="_blank">📖 Coursera AI For Everyone</a>
    <a href="https://www.edx.org/learn/finance" target="_blank">📖 edX Finance for Everyone</a>
    <a href="https://cs50.harvard.edu/ai/" target="_blank">📖 Harvard CS50 AI</a>
    <a href="https://www.stanford.edu/" target="_blank">📖 Stanford Financial Literacy</a>
  </div>

  <div class="section">
    <h2>📱 Interactive Tools</h2>
    <a href="https://experiments.withgoogle.com/ai" target="_blank">🧪 AI Experiments</a>
    <a href="https://www.howthemarketworks.com/" target="_blank">📊 Stock Market Game</a>
    <a href="https://www.practicalmoneyskills.com/" target="_blank">💵 Practical Money Skills</a>
    <a href="https://www.tynker.com/ai" target="_blank">🤖 AI for Kids</a>
  </div>

  <div class="section">
    <h2>📖 Educational Resources</h2>
    <a href="https://www.investopedia.com/financial-literacy-for-kids-5112941" target="_blank">📚 Investopedia for Kids</a>
    <a href="https://www.unesco.org/en/artificial-intelligence" target="_blank">🌍 AI Ethics - UNESCO</a>
    <a href="https://www.weforum.org/" target="_blank">💼 Future of Work - WEF</a>
  </div>

  <div class="footer">
    <p>⭐ Bonus: Daily quizzes and interactive activities available on our platform!</p>
    <p style="font-size:12px;">© 2026 AI Wealth Hub - All resources are free to use</p>
  </div>
</body>
</html>`;

    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'AI_Finance_Resources.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  // ===== RABBIT RACING GAME FUNCTIONS =====
  const startGame = () => {
    setGameStarted(true);
    setCurrentLevel(0);
    setScore(0);
    setCorrectAnswers(0);
    setRabbitPosition(0);
    setGameFinished(false);
    setShowFeedback(false);
    setFeedbackMessage('');
  };

  const handleAnswer = (selectedIdx) => {
    const level = gameLevels[currentLevel];
    if (selectedIdx === level.correct) {
      const newScore = score + 10;
      const newCorrect = correctAnswers + 1;
      setScore(newScore);
      setCorrectAnswers(newCorrect);
      const newPosition = Math.min((newCorrect / gameLevels.length) * 100, 100);
      setRabbitPosition(newPosition);
      setFeedbackMessage(`🎉 CORRECT! +10 points! ${level.funFact}`);
      setShowFeedback(true);
    } else {
      setFeedbackMessage(`💪 Not quite! The answer is: ${level.options[level.correct]}. ${level.hint}`);
      setShowFeedback(true);
    }
    
    setTimeout(() => {
      if (currentLevel + 1 < gameLevels.length) {
        setCurrentLevel(currentLevel + 1);
        setShowFeedback(false);
        setFeedbackMessage('');
      } else {
        setGameFinished(true);
        setShowFeedback(false);
      }
    }, 2500);
  };

  const resetGame = () => {
    setGameStarted(false);
    setCurrentLevel(0);
    setScore(0);
    setCorrectAnswers(0);
    setRabbitPosition(0);
    setGameFinished(false);
    setShowFeedback(false);
    setFeedbackMessage('');
  };

  // ===== FIXED: CERTIFICATE DOWNLOAD =====
  const downloadCertificate = (name, type) => {
    if (!name || name.trim() === '') {
      alert('🎓 Please enter your name first!');
      return;
    }

    const certType = type || 'AI & Finance Explorer';
    const date = new Date().toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });

    const certHTML = `<!DOCTYPE html>
<html>
<head>
  <title>Certificate - ${name}</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Fredoka+One&family=Quicksand:wght@400;600;700&display=swap');
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { 
      min-height: 100vh; 
      display: flex; 
      justify-content: center; 
      align-items: center; 
      background: #f0f7ff; 
      font-family: 'Quicksand', sans-serif;
      padding: 20px;
    }
    .certificate {
      max-width: 850px;
      width: 100%;
      background: linear-gradient(135deg, #fff8e7, #fff3d6, #fff8e7);
      border: 12px double #ff6b35;
      border-radius: 30px;
      padding: 50px 40px;
      text-align: center;
      box-shadow: 0 20px 60px rgba(255,107,53,0.2);
      position: relative;
      overflow: hidden;
    }
    .certificate::before {
      content: '🌟✨🌟✨🌟✨🌟✨🌟';
      position: absolute;
      top: 5px;
      left: 0;
      width: 100%;
      font-size: 20px;
      letter-spacing: 10px;
      opacity: 0.3;
    }
    .certificate::after {
      content: '🌟✨🌟✨🌟✨🌟✨🌟';
      position: absolute;
      bottom: 5px;
      left: 0;
      width: 100%;
      font-size: 20px;
      letter-spacing: 10px;
      opacity: 0.3;
    }
    .deco-top { font-size: 35px; letter-spacing: 12px; margin-bottom: 5px; }
    .deco-bottom { font-size: 35px; letter-spacing: 12px; margin-top: 5px; }
    h1 { 
      font-family: 'Fredoka One', cursive;
      font-size: 38px; 
      color: #ff6b35; 
      margin: 5px 0;
      text-shadow: 2px 2px 0 rgba(255,107,53,0.1);
    }
    .subtitle { 
      font-size: 20px; 
      color: #666; 
      margin: 5px 0 15px;
      font-weight: 600;
    }
    .seal { font-size: 70px; margin: 5px 0; }
    .name {
      font-family: 'Fredoka One', cursive;
      font-size: 52px;
      font-weight: 900;
      color: #2d3436;
      background: #ffe66d;
      padding: 8px 40px;
      border-radius: 20px;
      display: inline-block;
      margin: 10px 0;
      border: 4px dashed #ff6b35;
      box-shadow: 0 5px 20px rgba(255,107,53,0.15);
    }
    .desc { 
      font-size: 22px; 
      color: #555; 
      margin: 10px 0;
      font-weight: 600;
    }
    .date { 
      font-size: 18px; 
      color: #888; 
      margin-top: 15px;
      font-weight: 600;
    }
    .footer {
      display: flex;
      justify-content: space-between;
      margin-top: 25px;
      padding-top: 20px;
      border-top: 3px dashed #ddd;
      color: #888;
      font-size: 16px;
      font-weight: 600;
    }
    .footer span { 
      background: #f0f7ff; 
      padding: 5px 15px; 
      border-radius: 20px; 
    }
    .badge {
      position: absolute;
      top: 20px;
      right: 20px;
      font-size: 40px;
      animation: spin 4s linear infinite;
    }
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
    .stars {
      position: absolute;
      font-size: 30px;
      opacity: 0.2;
    }
    @media print {
      body { background: white; padding: 0; }
      .certificate { box-shadow: none; border-color: #333; }
    }
  </style>
</head>
<body>
  <div class="certificate">
    <div class="stars" style="top:10px;left:10px;">⭐</div>
    <div class="stars" style="bottom:10px;right:10px;">⭐</div>
    <div class="badge">🏅</div>
    <div class="deco-top">✨🌟✨🌟✨</div>
    <h1>🎓 AI WEALTH HUB</h1>
    <div class="subtitle">🌟 Certificate of Achievement 🌟</div>
    <div class="seal">🏆</div>
    <div class="name">${name.toUpperCase()}</div>
    <div class="desc">🎯 For completing the ${certType} Course!</div>
    <div style="font-size:16px;color:#666;margin:5px 0;">
      ⭐ ${correctAnswers >= 8 ? '🌟 EXCELLENT PERFORMANCE!' : correctAnswers >= 6 ? '💪 GREAT EFFORT!' : '📚 GOOD START!'}
    </div>
    <div class="date">📅 Date: ${date}</div>
    <div class="footer">
      <span>🤖 AI Explorer</span>
      <span>💰 Money Master</span>
      <span>🚀 Future Leader</span>
    </div>
    <div class="deco-bottom">✨🌟✨🌟✨</div>
    <div style="margin-top:10px;font-size:12px;color:#aaa;">
      This certificate is proudly awarded by forthefutures
    </div>
  </div>
</body>
</html>`;

    const blob = new Blob([certHTML], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Certificate_${name}_AI_Wealth_Hub.html`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    // Show success message
    alert(`🎉 Certificate for "${name}" downloaded successfully! 🎉\n\n📂 Check your downloads folder.\n🖨️ You can open the HTML file and print it!`);
  };

  const handleSubmitWork = (e) => {
    e.preventDefault();
    alert('Thank you! Your work has been submitted. We will review and post it soon! 🎉');
    setSubmissionText('');
    setSubmissionFile(null);
  };

  return (
    <div className="bg-[#FAF8F5] text-stone-800 min-h-screen font-sans antialiased">
      
      {/* ===== HERO SECTION - KID FRIENDLY ===== */}
      <header className="relative overflow-hidden pt-12 pb-24 px-6 shadow-md bg-gradient-to-r from-[#FF6B6B] via-[#FFE66D] to-[#4ECDC4]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-8 items-center relative z-10">
          <div className="md:col-span-7 text-left space-y-6">
            <h1 className="text-5xl md:text-7xl font-black tracking-tight text-white leading-none drop-shadow-md">
              🚀 Play, Learn, <br />Enjoy & Repeat
            </h1>
            <p className="text-white/90 text-sm md:text-base max-w-md font-bold leading-relaxed">
              Empowering youth with interactive lessons, global financial literacy metrics, and cross-border analytics tools that fit your everyday routine seamlessly.
            </p>
          </div>
          <div className="md:col-span-5 flex flex-col items-center justify-center relative min-h-[320px]">
            <div className="relative w-full max-w-sm flex flex-col items-center justify-center">
              <div className="flex items-center justify-center gap-4 animate-bounce">
                <div className="w-20 h-20 bg-yellow-400 rounded-full shadow-2xl border-4 border-white flex items-center justify-center text-4xl transform -rotate-12">
                  🤖
                </div>
                <div className="w-28 h-28 bg-pink-400 rounded-full shadow-2xl border-4 border-white flex items-center justify-center text-5xl transform rotate-6">
                  🚀
                </div>
                <div className="w-20 h-20 bg-blue-400 rounded-full shadow-2xl border-4 border-white flex items-center justify-center text-4xl transform -rotate-6">
                  💰
                </div>
              </div>
              <div className="flex items-center justify-center gap-6 mt-2">
                <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg flex items-center gap-2 text-sm font-bold text-purple-700">
                  <span className="text-xl">⭐</span> 1000+ Kids
                </div>
                <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg flex items-center gap-2 text-sm font-bold text-pink-700">
                  <span className="text-xl">🏆</span> 5 Certificates
                </div>
              </div>
              <div className="bg-white border-2 border-yellow-400 px-5 py-2 rounded-2xl -mt-2 shadow-lg flex items-center space-x-2">
                <span className="text-lg">🎮</span>
                <span className="text-xs font-black text-purple-900 uppercase tracking-wider">Kids Learning Hub</span>
                <span className="text-lg">📚</span>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-10 left-10 text-4xl animate-bounce opacity-50">🌟</div>
        <div className="absolute bottom-10 right-10 text-4xl animate-bounce delay-100 opacity-50">✨</div>
        <div className="absolute top-20 right-20 text-3xl animate-bounce delay-200 opacity-30">🎈</div>
      </header>

      {/* ===== MAIN CONTENT ===== */}
      <main className="bg-[#EAF7F2] py-12 px-4 shadow-inner">
        <div className="max-w-6xl mx-auto space-y-16">

          {/* ===== SECTION 1: MISSION STATEMENT ===== */}
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

          {/* ===== SECTION 2: MEET THE FOUNDER - UNCHANGED ===== */}
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

          {/* ===== SECTION 3: THE TEAM ===== */}
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

          {/* ===== SECTION 4: CHUCK GARCIA WORKSHOP ===== */}
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

          {/* ===== SECTION 5: IMPORTANCE OF AI & FINANCIAL LITERACY ===== */}
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

          {/* ===== SECTION 6: EDUCATIONAL VIDEOS ===== */}
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

          {/* ===== SECTION 7: RESOURCES & ACTIVITIES ===== */}
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
              
              {/* ===== POWERPOINTS - BEAUTIFUL VERSION ===== */}
              <div className="bg-gradient-to-r from-purple-100 via-pink-100 to-rose-100 rounded-2xl p-6 shadow-lg border-2 border-purple-300">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-4xl animate-bounce">📊</span>
                  <h3 className="text-2xl font-bold text-purple-700">Beautiful PowerPoints</h3>
                </div>
                <p className="text-stone-700 mb-4 font-medium">✨ 5 attractive slides each with emojis - perfect for kids!</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* AI PPT Card */}
                  <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-md border-2 border-purple-200 hover:shadow-xl transition">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-3xl">🤖</span>
                      <span className="font-bold text-purple-700 text-lg">AI Presentation</span>
                    </div>
                    <div className="text-xs text-stone-500 space-y-1 mb-3">
                      <p>📌 Slide 1: What is AI?</p>
                      <p>📌 Slide 2: Where is AI used?</p>
                      <p>📌 Slide 3: Why learn AI?</p>
                      <p>📌 Slide 4: Benefits of AI</p>
                      <p>📌 Slide 5: AI in the Future</p>
                    </div>
                    <button 
                      onClick={() => downloadPPT(aiPPTContent, 'AI_What_Why_Benefits.ppt')} 
                      className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-4 py-2.5 rounded-full hover:scale-105 transition flex items-center justify-center gap-2 shadow-md hover:shadow-lg text-sm font-bold"
                    >
                      ⬇️ Download AI PPT
                    </button>
                  </div>

                  {/* Finance PPT Card */}
                  <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-md border-2 border-green-200 hover:shadow-xl transition">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-3xl">💰</span>
                      <span className="font-bold text-green-700 text-lg">Finance Presentation</span>
                    </div>
                    <div className="text-xs text-stone-500 space-y-1 mb-3">
                      <p>📌 Slide 1: What is Finance?</p>
                      <p>📌 Slide 2: Why learn Finance?</p>
                      <p>📌 Slide 3: How to Save Money</p>
                      <p>📌 Slide 4: Smart Spending</p>
                      <p>📌 Slide 5: Financial Future</p>
                    </div>
                    <button 
                      onClick={() => downloadPPT(financePPTContent, 'Finance_What_Why_Benefits.ppt')} 
                      className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white px-4 py-2.5 rounded-full hover:scale-105 transition flex items-center justify-center gap-2 shadow-md hover:shadow-lg text-sm font-bold"
                    >
                      ⬇️ Download Finance PPT
                    </button>
                  </div>
                </div>
              </div>

              {/* ===== VIDEOS & COURSES - FIXED WITH BLUE LINKS ===== */}
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-6 shadow-md border-2 border-blue-200">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">🎬</span>
                  <h3 className="text-2xl font-bold text-blue-700">Videos & Courses</h3>
                </div>
                <p className="text-stone-600 mb-4">Free video courses and educational links</p>
                <div className="flex flex-wrap gap-3">
                  <button 
                    onClick={downloadVideoLinks} 
                    className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-2.5 rounded-full hover:scale-105 transition shadow-md hover:shadow-lg text-sm font-bold"
                  >
                    📥 Download Videos & Courses (HTML with Blue Links)
                  </button>
                </div>
                <div className="mt-3 text-xs text-stone-500">
                  🔗 Includes YouTube playlists, free courses, interactive tools & more! 
                  <span className="text-blue-600 font-bold"> All links are blue and clickable!</span>
                </div>
              </div>

              {/* ===== RABBIT RACING GAME ===== */}
              <div className="bg-gradient-to-r from-yellow-50 via-orange-50 to-amber-50 rounded-2xl p-6 shadow-lg border-2 border-yellow-300">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-4xl animate-bounce">🐇</span>
                  <h3 className="text-2xl font-bold text-orange-700">Race the Rabbit! 🏁</h3>
                </div>
                <p className="text-stone-700 mb-4 font-medium">Answer correctly to make the rabbit hop forward! 🐇</p>
                
                {!gameStarted ? (
                  <button 
                    onClick={startGame} 
                    className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-8 py-3 rounded-full hover:scale-105 transition flex items-center gap-3 text-lg font-bold shadow-lg hover:shadow-xl mx-auto"
                  >
                    🚀 Start Racing!
                  </button>
                ) : (
                  <div className="bg-white rounded-xl p-6 shadow-inner">
                    
                    {/* RABBIT RACING TRACK */}
                    <div className="mb-6 bg-gradient-to-r from-green-100 to-yellow-100 rounded-xl p-4 border-2 border-green-300">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-bold text-green-700">🏁 Start</span>
                        <span className="text-sm font-bold text-orange-700">🏆 Finish</span>
                      </div>
                      <div className="relative h-14 bg-white rounded-full border-2 border-gray-300 overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-yellow-400 via-orange-400 to-green-400 rounded-full transition-all duration-700 flex items-center"
                          style={{ width: `${rabbitPosition}%` }}
                        >
                          <span 
                            className={`absolute text-4xl transition-all duration-700 ${showFeedback && feedbackMessage.includes('CORRECT') ? 'animate-bounce' : ''}`}
                            style={{ left: `calc(${rabbitPosition}% - 20px)` }}
                          >
                            🐇
                          </span>
                        </div>
                      </div>
                      <div className="flex justify-between mt-1 text-xs text-stone-500">
                        <span>0%</span>
                        <span className="font-bold text-orange-600">
                          {Math.round(rabbitPosition)}%
                        </span>
                        <span>100%</span>
                      </div>
                      <div className="text-center mt-2">
                        <span className="text-sm font-bold text-stone-600 bg-white px-4 py-1 rounded-full">
                          ⭐ Score: {score} points
                        </span>
                        <span className="text-sm font-bold text-green-600 bg-white px-4 py-1 rounded-full ml-2">
                          ✅ {correctAnswers}/{gameLevels.length} correct
                        </span>
                      </div>
                    </div>

                    {/* QUESTION */}
                    {!gameFinished ? (
                      <div>
                        <div className="mb-4">
                          <span className="text-sm font-semibold text-orange-600 bg-orange-100 px-3 py-1 rounded-full">
                            Level {currentLevel + 1} of {gameLevels.length}
                          </span>
                          <h4 className="text-xl font-bold text-gray-800 mt-2">{gameLevels[currentLevel].question}</h4>
                          <p className="text-xs text-stone-400 mt-1">{gameLevels[currentLevel].hint}</p>
                        </div>
                        <div className="space-y-3">
                          {gameLevels[currentLevel].options.map((opt, idx) => (
                            <button
                              key={idx}
                              onClick={() => !showFeedback && handleAnswer(idx)}
                              className={`block w-full text-left px-4 py-3 rounded-xl border-2 transition-all ${
                                showFeedback 
                                  ? 'cursor-default opacity-70' 
                                  : 'hover:bg-yellow-100 hover:border-yellow-400 bg-white hover:scale-[1.02]'
                              } ${
                                showFeedback && idx === gameLevels[currentLevel].correct ? 'border-green-500 bg-green-50' : ''
                              }`}
                            >
                              <span className="font-bold">{String.fromCharCode(65 + idx)}. </span>
                              {opt}
                              {showFeedback && idx === gameLevels[currentLevel].correct && ' ✅'}
                            </button>
                          ))}
                        </div>
                        {showFeedback && (
                          <div className={`mt-4 p-4 rounded-lg border-2 ${
                            feedbackMessage.includes('CORRECT') 
                              ? 'bg-green-100 border-green-400 text-green-700' 
                              : 'bg-red-100 border-red-400 text-red-700'
                          }`}>
                            <p className="font-bold text-lg">{feedbackMessage}</p>
                          </div>
                        )}
                      </div>
                    ) : (
                      /* COMPLETION SCREEN */
                      <div className="text-center py-6">
                        <div className="text-7xl mb-4 animate-bounce">🏆</div>
                        <h4 className="text-3xl font-bold mb-2 text-orange-600">🎉 RABBIT WINS! 🎉</h4>
                        <p className="text-xl font-semibold text-gray-700">Final Score: {score} points</p>
                        <p className="text-lg text-gray-600">Correct Answers: {correctAnswers} / {gameLevels.length}</p>
                        <div className="mt-4 p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl border-2 border-yellow-300">
                          <p className="text-lg font-bold text-gray-700">
                            {correctAnswers === gameLevels.length ? '🌟 PERFECT! You\'re a Genius! 🧠' : 
                             correctAnswers >= 8 ? '🌟 Excellent! Superstar Learner! ⭐' :
                             correctAnswers >= 6 ? '💪 Great job! Keep learning! 📚' :
                             correctAnswers >= 4 ? '📖 Good effort! Try again! 💪' :
                             '🎯 Keep practicing! You\'ll improve! 🌱'}
                          </p>
                        </div>
                        <div className="flex flex-wrap gap-4 justify-center mt-6">
                          <button 
                            onClick={resetGame} 
                            className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-8 py-3 rounded-full hover:scale-105 transition shadow-lg hover:shadow-xl font-bold"
                          >
                            🔄 Play Again
                          </button>
                          <button 
                            onClick={() => {
                              document.getElementById('certificateSection')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-full hover:scale-105 transition shadow-lg hover:shadow-xl font-bold"
                          >
                            🏆 Get Certificate
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                )}
                <div className="mt-3 text-xs text-stone-500 text-center">
                  🧠 10 fun levels about AI and Finance! Answer correctly to race the rabbit! 🐇
                </div>
              </div>

              {/* ===== SHARE YOUR WORK ===== */}
              <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border-2 border-dashed border-indigo-400 rounded-2xl p-6 flex flex-wrap items-center justify-between">
                <div className="flex items-center gap-4">
                  <span className="text-3xl">📤</span>
                  <div>
                    <p className="font-semibold text-indigo-800 text-lg">Share Your Work</p>
                    <p className="text-gray-600 text-sm">Submit your projects, worksheets, or creative work and get featured on our platform!</p>
                  </div>
                </div>
                <button 
                  onClick={() => document.getElementById('shareSection')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-white text-indigo-600 px-8 py-3 rounded-full border-2 border-indigo-400 hover:bg-indigo-50 transition shadow-sm font-bold"
                >
                  ✏️ Submit Now
                </button>
              </div>
            </div>
          </motion.section>

          {/* ===== SECTION 8: STUDENT SUBMISSION ===== */}
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

          {/* ===== SECTION 9: CERTIFICATES - FIXED WITH DOWNLOAD ===== */}
          <motion.section 
            id="certificateSection"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="bg-white rounded-[2rem] p-8 md:p-12 shadow-lg border-2 border-stone-100"
          >
            <h2 className="text-3xl md:text-4xl font-black text-stone-900 text-center mb-6">
              🎓 Earn Your Certificate
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-purple-100 via-pink-100 to-rose-100 rounded-3xl p-8 text-center border-4 border-dashed border-purple-400">
                <span className="text-7xl animate-bounce inline-block">📜</span>
                <h3 className="text-3xl font-bold text-purple-700 mt-3">🎉 Free Certificates for Kids! 🎉</h3>
                <p className="text-stone-700 max-w-2xl mx-auto mt-2 text-lg">
                  Complete our courses and earn <span className="font-bold text-purple-700">super cool certificates</span> 
                  with your name on them! Add to your portfolio, resume, or show your family! 🌟
                </p>
                
                {/* Certificate Cards */}
                <div className="grid md:grid-cols-3 gap-4 mt-6">
                  <div className="bg-white rounded-2xl p-5 shadow-lg border-2 border-purple-300 hover:scale-105 transition transform">
                    <div className="text-4xl">🤖</div>
                    <h4 className="font-bold text-lg text-purple-700 mt-2">AI Explorer</h4>
                    <p className="text-sm text-stone-500">Complete 5 AI lessons</p>
                    <div className="mt-3 bg-purple-100 rounded-full px-3 py-1 text-xs font-bold text-purple-700 inline-block">
                      🎯 5 Videos
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-2xl p-5 shadow-lg border-2 border-green-300 hover:scale-105 transition transform">
                    <div className="text-4xl">💰</div>
                    <h4 className="font-bold text-lg text-green-700 mt-2">Money Master</h4>
                    <p className="text-sm text-stone-500">Complete 5 Finance lessons</p>
                    <div className="mt-3 bg-green-100 rounded-full px-3 py-1 text-xs font-bold text-green-700 inline-block">
                      🎯 5 Videos
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-2xl p-5 shadow-lg border-2 border-yellow-300 hover:scale-105 transition transform">
                    <div className="text-4xl">🌟</div>
                    <h4 className="font-bold text-lg text-orange-700 mt-2">AI & Finance Pro</h4>
                    <p className="text-sm text-stone-500">Complete 10 combined lessons</p>
                    <div className="mt-3 bg-orange-100 rounded-full px-3 py-1 text-xs font-bold text-orange-700 inline-block">
                      🎯 10 Videos
                    </div>
                  </div>
                </div>

                {/* Certificate Download Form */}
                <div className="mt-6 p-6 bg-white/90 rounded-xl shadow-inner">
                  <p className="text-sm font-bold text-stone-700 mb-3">📝 Enter your name to download your certificate:</p>
                  <div className="flex flex-col sm:flex-row gap-3 items-center justify-center">
                    <input
                      type="text"
                      value={certificateName}
                      onChange={(e) => setCertificateName(e.target.value)}
                      placeholder="Enter your full name"
                      className="flex-1 px-4 py-2.5 rounded-full border-2 border-purple-300 focus:border-purple-500 focus:outline-none transition-all text-center sm:text-left"
                    />
                    <select
                      value={certificateType}
                      onChange={(e) => setCertificateType(e.target.value)}
                      className="px-4 py-2.5 rounded-full border-2 border-purple-300 focus:border-purple-500 focus:outline-none transition-all bg-white"
                    >
                      <option value="AI & Finance Explorer">AI & Finance Explorer</option>
                      <option value="AI Explorer">AI Explorer</option>
                      <option value="Money Master">Money Master</option>
                      <option value="AI & Finance Pro">AI & Finance Pro</option>
                    </select>
                    <button
                      onClick={() => downloadCertificate(certificateName, certificateType)}
                      className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-2.5 rounded-full font-bold hover:scale-105 transition shadow-lg hover:shadow-xl whitespace-nowrap"
                    >
                      📥 Download Certificate
                    </button>
                  </div>
                  <p className="text-xs text-stone-400 mt-3">
                    💡 Tip: Complete all 10 game levels to unlock all certificates!
                  </p>
                </div>

                <div className="mt-4 p-4 bg-green-50 rounded-xl border-2 border-green-200">
                  <p className="text-sm text-green-700">
                    ✅ <span className="font-bold">Your progress:</span> You have completed {correctAnswers} of {gameLevels.length} levels!
                    {correctAnswers === gameLevels.length ? ' 🎉 You can download all certificates!' : 
                     correctAnswers >= 5 ? ' 💪 Keep going! You\'re almost there!' :
                     ' 🚀 Start the game above to earn your certificate!'}
                  </p>
                </div>

                <button 
                  onClick={() => startGame()}
                  className="mt-4 px-8 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-full font-bold hover:shadow-lg transition-all text-sm hover:scale-105"
                >
                  🎮 Play the Game to Earn Certificate
                </button>
              </div>
            </div>
          </motion.section>

        </div>
      </main>

      {/* ===== FOOTER ===== */}
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
