import React from 'react';
import SmartCalculator from '../components/SmartCalculator';

const CalculatorPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h1 className="text-5xl font-bold gradient-text mb-4">Smart Financial Calculator</h1>
          <p className="text-gray-300 text-lg">Track expenses, get AI investment suggestions, and plan your savings</p>
          <p className="text-gray-400 text-sm mt-2">Supports INR, USD, AED currencies</p>
        </div>
        <SmartCalculator />
      </div>
    </div>
  );
};

export default CalculatorPage;