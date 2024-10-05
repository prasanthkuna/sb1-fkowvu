import React from 'react';
import { Link } from 'react-router-dom';
import { BarChart2, Wallet, Layers, PieChart } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold flex items-center">
          <BarChart2 className="mr-2" />
          DeBank Clone
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link to="/" className="flex items-center hover:text-blue-200">
                <BarChart2 className="mr-1" size={18} />
                Dashboard
              </Link>
            </li>
            <li>
              <Link to="/protocols" className="flex items-center hover:text-blue-200">
                <Layers className="mr-1" size={18} />
                Protocols
              </Link>
            </li>
            <li>
              <Link to="/portfolio" className="flex items-center hover:text-blue-200">
                <PieChart className="mr-1" size={18} />
                Portfolio
              </Link>
            </li>
            <li>
              <button className="bg-blue-500 hover:bg-blue-400 px-4 py-2 rounded-full flex items-center">
                <Wallet className="mr-1" size={18} />
                Connect Wallet
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;