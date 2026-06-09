import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AIHubPage from './pages/AIHubPage';
import FinanceHubPage from './pages/FinanceHubPage';
import VideoPlayerPage from './pages/VideoPlayerPage';
import DashboardPage from './pages/DashboardPage';
import CalculatorPage from './pages/CalculatorPage';
import Contact from './pages/ContactPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black">
        <Header />
        <main className="pt-16">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/ai-hub" element={<AIHubPage />} />
            <Route path="/finance-hub" element={<FinanceHubPage />} />
            <Route path="/video/:id" element={<VideoPlayerPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/calculators" element={<CalculatorPage />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;