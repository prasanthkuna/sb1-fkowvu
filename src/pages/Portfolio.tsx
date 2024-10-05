import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { Wallet, TrendingUp, DollarSign } from 'lucide-react';

const Portfolio: React.FC = () => {
  // Placeholder data (replace with actual API calls)
  const portfolioData = {
    totalValue: '$125,750',
    dailyChange: '+$3,250 (+2.65%)',
    assets: [
      { name: 'Ethereum', value: 75000, color: '#627EEA' },
      { name: 'Bitcoin', value: 30000, color: '#F7931A' },
      { name: 'USDC', value: 15000, color: '#2775CA' },
      { name: 'Aave', value: 5750, color: '#B6509E' },
    ],
    performanceData: [
      { name: 'Jan', value: 100000 },
      { name: 'Feb', value: 110000 },
      { name: 'Mar', value: 105000 },
      { name: 'Apr', value: 120000 },
      { name: 'May', value: 125750 },
    ],
  };

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold mb-6">Portfolio Overview</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Total Value</h2>
            <Wallet className="text-blue-500" size={24} />
          </div>
          <p className="text-3xl font-bold">{portfolioData.totalValue}</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">24h Change</h2>
            <TrendingUp className="text-green-500" size={24} />
          </div>
          <p className="text-3xl font-bold text-green-500">{portfolioData.dailyChange}</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Assets</h2>
            <DollarSign className="text-yellow-500" size={24} />
          </div>
          <p className="text-3xl font-bold">{portfolioData.assets.length}</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Asset Allocation</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={portfolioData.assets}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={80}
                label
              >
                {portfolioData.assets.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Portfolio Performance</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={portfolioData.performanceData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#4F46E5" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Asset Breakdown</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-3 text-left">Asset</th>
                <th className="p-3 text-right">Balance</th>
                <th className="p-3 text-right">Value</th>
                <th className="p-3 text-right">Allocation</th>
              </tr>
            </thead>
            <tbody>
              {portfolioData.assets.map((asset, index) => (
                <tr key={index} className="border-t">
                  <td className="p-3">{asset.name}</td>
                  <td className="p-3 text-right">-</td>
                  <td className="p-3 text-right">${asset.value.toLocaleString()}</td>
                  <td className="p-3 text-right">{((asset.value / parseInt(portfolioData.totalValue.slice(1).replace(',', ''))) * 100).toFixed(2)}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;