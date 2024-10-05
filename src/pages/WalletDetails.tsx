import React from 'react';
import { useParams } from 'react-router-dom';
import { Wallet, CreditCard, ArrowUpDown } from 'lucide-react';

const WalletDetails: React.FC = () => {
  const { address } = useParams<{ address: string }>();

  // Placeholder data (replace with actual API calls)
  const walletData = {
    balance: '12.5 ETH',
    usdValue: '$23,750',
    tokens: [
      { name: 'Ethereum', symbol: 'ETH', balance: '12.5', value: '$23,750' },
      { name: 'USD Coin', symbol: 'USDC', balance: '1000', value: '$1,000' },
      { name: 'Aave', symbol: 'AAVE', balance: '10', value: '$800' },
    ],
    transactions: [
      { type: 'Swap', from: 'ETH', to: 'USDC', amount: '0.5 ETH', date: '2024-03-15' },
      { type: 'Transfer', from: 'This wallet', to: '0x1234...5678', amount: '100 USDC', date: '2024-03-14' },
      { type: 'Receive', from: '0x9876...5432', to: 'This wallet', amount: '5 AAVE', date: '2024-03-13' },
    ],
  };

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold mb-6">Wallet Details</h1>
      
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Wallet Address</h2>
          <Wallet className="text-blue-500" size={24} />
        </div>
        <p className="text-lg font-mono">{address}</p>
        <div className="mt-4">
          <p className="text-2xl font-bold">{walletData.balance}</p>
          <p className="text-gray-600">{walletData.usdValue}</p>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Token Balances</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-3 text-left">Token</th>
                <th className="p-3 text-right">Balance</th>
                <th className="p-3 text-right">Value</th>
              </tr>
            </thead>
            <tbody>
              {walletData.tokens.map((token, index) => (
                <tr key={index}>
                  <td className="p-3">{token.name} ({token.symbol})</td>
                  <td className="p-3 text-right">{token.balance}</td>
                  <td className="p-3 text-right">{token.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Recent Transactions</h2>
        <div className="space-y-4">
          {walletData.transactions.map((tx, index) => (
            <div key={index} className="flex items-center justify-between border-b pb-4">
              <div className="flex items-center">
                {tx.type === 'Swap' && <ArrowUpDown className="mr-2 text-yellow-500" />}
                {tx.type === 'Transfer' && <CreditCard className="mr-2 text-blue-500" />}
                {tx.type === 'Receive' && <CreditCard className="mr-2 text-green-500" />}
                <div>
                  <p className="font-semibold">{tx.type}</p>
                  <p className="text-sm text-gray-600">{tx.date}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-semibold">{tx.amount}</p>
                <p className="text-sm text-gray-600">{tx.from} → {tx.to}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WalletDetails;