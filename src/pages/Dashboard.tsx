import React from 'react';
import { BarChart2, TrendingUp, DollarSign } from 'lucide-react';

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold mb-6">DeFi Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Total Value Locked</h2>
            <BarChart2 className="text-blue-500" size={24} />
          </div>
          <p className="text-3xl font-bold">$52.4B</p>
          <p className="text-green-500 mt-2">+2.5% (24h)</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Trading Volume (24h)</h2>
            <TrendingUp className="text-green-500" size={24} />
          </div>
          <p className="text-3xl font-bold">$8.7B</p>
          <p className="text-red-500 mt-2">-1.2% (24h)</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Total Market Cap</h2>
            <DollarSign className="text-yellow-500" size={24} />
          </div>
          <p className="text-3xl font-bold">$1.23T</p>
          <p className="text-green-500 mt-2">+0.8% (24h)</p>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Top DeFi Protocols</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-3 text-left">Protocol</th>
                <th className="p-3 text-right">TVL</th>
                <th className="p-3 text-right">24h Change</th>
                <th className="p-3 text-right">7d Change</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3">Aave</td>
                <td className="p-3 text-right">$5.2B</td>
                <td className="p-3 text-right text-green-500">+1.2%</td>
                <td className="p-3 text-right text-red-500">-0.5%</td>
              </tr>
              <tr>
                <td className="p-3">Curve</td>
                <td className="p-3 text-right">$4.8B</td>
                <td className="p-3 text-right text-green-500">+0.8%</td>
                <td className="p-3 text-right text-green-500">+2.1%</td>
              </tr>
              <tr>
                <td className="p-3">Uniswap</td>
                <td className="p-3 text-right">$4.1B</td>
                <td className="p-3 text-right text-red-500">-0.3%</td>
                <td className="p-3 text-right text-green-500">+1.7%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;