import React, { useState } from 'react';
import { Search, Filter } from 'lucide-react';

const ProtocolExplorer: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('all');

  // Placeholder data (replace with actual API calls)
  const protocols = [
    { name: 'Aave', category: 'Lending', tvl: '$5.2B', apy: '3.5%' },
    { name: 'Uniswap', category: 'DEX', tvl: '$4.1B', volume: '$1.2B' },
    { name: 'Curve', category: 'DEX', tvl: '$4.8B', volume: '$890M' },
    { name: 'MakerDAO', category: 'Lending', tvl: '$7.5B', apy: '2.8%' },
    { name: 'Compound', category: 'Lending', tvl: '$3.2B', apy: '3.2%' },
    { name: 'Synthetix', category: 'Derivatives', tvl: '$1.8B', volume: '$450M' },
  ];

  const filteredProtocols = protocols.filter(protocol => 
    protocol.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (category === 'all' || protocol.category.toLowerCase() === category)
  );

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold mb-6">Protocol Explorer</h1>
      
      <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4">
        <div className="relative w-full md:w-1/2">
          <input
            type="text"
            placeholder="Search protocols..."
            className="w-full pl-10 pr-4 py-2 border rounded-lg"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
        </div>
        <div className="flex items-center space-x-2 w-full md:w-auto">
          <Filter className="text-gray-400" size={20} />
          <select
            className="border rounded-lg px-4 py-2"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="all">All Categories</option>
            <option value="lending">Lending</option>
            <option value="dex">DEX</option>
            <option value="derivatives">Derivatives</option>
          </select>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-4 text-left">Protocol</th>
              <th className="p-4 text-left">Category</th>
              <th className="p-4 text-right">TVL</th>
              <th className="p-4 text-right">APY / Volume</th>
            </tr>
          </thead>
          <tbody>
            {filteredProtocols.map((protocol, index) => (
              <tr key={index} className="border-t">
                <td className="p-4">
                  <div className="font-semibold">{protocol.name}</div>
                </td>
                <td className="p-4">{protocol.category}</td>
                <td className="p-4 text-right">{protocol.tvl}</td>
                <td className="p-4 text-right">{protocol.apy || protocol.volume}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProtocolExplorer;