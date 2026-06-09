import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaRupeeSign, FaDollarSign, FaMoneyBillWave } from 'react-icons/fa';

const SmartCalculator = () => {
  const [currency, setCurrency] = useState('INR');
  const [salary, setSalary] = useState(50000);
  const [expenses, setExpenses] = useState({
    food: 10000,
    billsLoans: 5000,
    entertainment: 3000,
    transport: 2000,
    rent: 20000,
    utilities: 4000,
  });
  
  const [aiSuggestion, setAiSuggestion] = useState('');

  const exchangeRates = {
    INR: 1,
    USD: 83,
    AED: 22.5
  };

  const formatCurrency = (amount) => {
    const converted = amount / exchangeRates[currency];
    const symbols = { INR: '₹', USD: '$', AED: 'د.إ' };
    return `${symbols[currency]} ${converted.toLocaleString('en-IN', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`;
  };

  const updateExpense = (key, value) => {
    setExpenses({ ...expenses, [key]: Math.max(0, Number(value)) });
  };

  const totalExpenses = Object.values(expenses).reduce((a, b) => a + b, 0);
  const savings = salary - totalExpenses;
  const savingsPercentage = ((savings / salary) * 100).toFixed(1);

  useEffect(() => {
    if (savings > 0) {
      const suggestions = [
        `💡 Invest ${formatCurrency(savings * 0.5)} in mutual funds → Will double in ~5 years (15% returns)`,
        `💰 Put ${formatCurrency(savings * 0.3)} in fixed deposit → Safe growth at 7-8% annually`,
        `📈 Start SIP of ${formatCurrency(savings * 0.4)} monthly → Build wealth over time`,
        `🏦 Keep ${formatCurrency(savings * 0.2)} as emergency fund → Financial security`,
        `🚀 High-growth: ${formatCurrency(savings * 0.3)} in index funds → Market-linked returns`,
        `💎 Gold investment: ${formatCurrency(savings * 0.25)} in Sovereign Gold Bonds → 2.5% interest + appreciation`,
        `📊 Your savings rate is ${savingsPercentage}% → Aim for 30% for financial freedom`,
      ];
      setAiSuggestion(suggestions[Math.floor(Math.random() * suggestions.length)]);
    } else {
      setAiSuggestion('⚠️ Try reducing expenses by 10% to start saving. Cut unnecessary subscriptions and eating out.');
    }
  }, [savings, savingsPercentage, currency]);

  return (
    <div className="max-w-4xl mx-auto">
      <div className="glass-card p-8">
        <h2 className="text-3xl font-bold gradient-text text-center mb-6">Smart Savings Calculator</h2>
        
        <div className="flex justify-center gap-4 mb-8">
          {['INR', 'USD', 'AED'].map((cur) => (
            <button
              key={cur}
              onClick={() => setCurrency(cur)}
              className={`px-6 py-2 rounded-xl font-semibold transition-all flex items-center gap-2 ${
                currency === cur 
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white' 
                  : 'bg-white/10 hover:bg-white/20 text-gray-300'
              }`}
            >
              {cur === 'INR' && <FaRupeeSign />}
              {cur === 'USD' && <FaDollarSign />}
              {cur === 'AED' && <FaMoneyBillWave />}
              {cur}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2 text-gray-300">Monthly Salary / Income</label>
              <input
                type="number"
                value={salary}
                onChange={(e) => setSalary(Number(e.target.value))}
                className="w-full px-4 py-3 bg-white/10 rounded-xl border border-white/20 focus:border-purple-500 focus:outline-none text-white text-lg"
              />
            </div>

            <h3 className="text-lg font-semibold mb-4 text-white">Monthly Expenses</h3>
            
            <div className="space-y-3">
              <div className="flex gap-3 items-center">
                <label className="w-28 text-sm text-gray-300">Food & Groceries</label>
                <input type="number" value={expenses.food} onChange={(e) => updateExpense('food', e.target.value)} className="flex-1 px-3 py-2 bg-white/10 rounded-lg text-white" />
              </div>
              <div className="flex gap-3 items-center">
                <label className="w-28 text-sm text-gray-300">Bills & Loans</label>
                <input type="number" value={expenses.billsLoans} onChange={(e) => updateExpense('billsLoans', e.target.value)} className="flex-1 px-3 py-2 bg-white/10 rounded-lg text-white" />
              </div>
              <div className="flex gap-3 items-center">
                <label className="w-28 text-sm text-gray-300">Entertainment</label>
                <input type="number" value={expenses.entertainment} onChange={(e) => updateExpense('entertainment', e.target.value)} className="flex-1 px-3 py-2 bg-white/10 rounded-lg text-white" />
              </div>
              <div className="flex gap-3 items-center">
                <label className="w-28 text-sm text-gray-300">Transport</label>
                <input type="number" value={expenses.transport} onChange={(e) => updateExpense('transport', e.target.value)} className="flex-1 px-3 py-2 bg-white/10 rounded-lg text-white" />
              </div>
              <div className="flex gap-3 items-center">
                <label className="w-28 text-sm text-gray-300">Rent / EMI</label>
                <input type="number" value={expenses.rent} onChange={(e) => updateExpense('rent', e.target.value)} className="flex-1 px-3 py-2 bg-white/10 rounded-lg text-white" />
              </div>
              <div className="flex gap-3 items-center">
                <label className="w-28 text-sm text-gray-300">Utilities</label>
                <input type="number" value={expenses.utilities} onChange={(e) => updateExpense('utilities', e.target.value)} className="flex-1 px-3 py-2 bg-white/10 rounded-lg text-white" />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-white/5 rounded-xl p-4">
              <p className="text-gray-400 text-sm">Total Monthly Expenses</p>
              <p className="text-2xl font-bold text-red-400">{formatCurrency(totalExpenses)}</p>
            </div>
            
            <div className="bg-white/5 rounded-xl p-4">
              <p className="text-gray-400 text-sm">Monthly Savings</p>
              <p className={`text-3xl font-bold ${savings >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                {formatCurrency(Math.abs(savings))}
                {savings < 0 && ' (Deficit)'}
              </p>
              <p className="text-sm mt-1 text-gray-400">Savings Rate: {savingsPercentage}%</p>
            </div>

            <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl p-4 border border-purple-500/30">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl">🤖</span>
                <p className="font-semibold text-purple-300">AI Investment Suggestion</p>
              </div>
              <p className="text-sm leading-relaxed text-gray-200">{aiSuggestion}</p>
            </div>

            {savings > 0 && (
              <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-xl p-4">
                <p className="text-sm font-semibold mb-2 text-green-300">💪 Smart Money Moves:</p>
                <ul className="text-xs space-y-1 text-gray-300">
                  <li>• Invest 50% of savings in equity mutual funds</li>
                  <li>• Put 30% in debt funds for stability</li>
                  <li>• Keep 20% in high-interest savings account</li>
                  <li>• Increase SIP by 10% every year</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmartCalculator;