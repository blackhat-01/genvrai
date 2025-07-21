import React, { useState } from 'react';
import { Search, Filter, Paperclip, ArrowRight } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const SearchBar: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const { isDark } = useTheme();

  return (
    <div className="relative max-w-4xl mx-auto">
      <div className={`relative rounded-2xl border overflow-hidden shadow-lg transition-colors duration-300 ${
        isDark 
          ? 'bg-gray-800 border-gray-700' 
          : 'bg-white border-gray-200'
      }`}>
        <div className="flex items-center px-6 py-4">
          <Search className={`mr-4 ${isDark ? 'text-gray-400' : 'text-gray-500'}`} size={20} />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Tell us what you want to create — we'll match you with the best model."
            className={`flex-1 bg-transparent text-lg focus:outline-none transition-colors duration-300 ${
              isDark 
                ? 'text-white placeholder-gray-400' 
                : 'text-gray-900 placeholder-gray-500'
            }`}
          />
          <button className={`ml-4 p-2 rounded-full transition-all duration-300 group ${
            isDark 
              ? 'bg-white hover:bg-gray-100' 
              : 'bg-gray-900 hover:bg-gray-800'
          }`}>
            <ArrowRight size={20} className={`group-hover:translate-x-0.5 transition-transform ${
              isDark ? 'text-gray-900' : 'text-white'
            }`} />
          </button>
        </div>
        
        <div className={`flex items-center space-x-4 px-6 py-4 border-t transition-colors duration-300 ${
          isDark 
            ? 'bg-gray-900 border-gray-700' 
            : 'bg-gray-50 border-gray-200'
        }`}>
          <button className={`flex items-center space-x-2 px-4 py-2 rounded-lg border transition-all duration-300 ${
            isDark 
              ? 'bg-blue-900 hover:bg-blue-800 border-blue-800 text-blue-300' 
              : 'bg-blue-50 hover:bg-blue-100 border-blue-200 text-blue-700'
          }`}>
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span className="text-sm font-medium">GenVR Play</span>
          </button>
          
          <button className={`flex items-center space-x-2 px-4 py-2 rounded-lg border transition-all duration-300 ${
            isDark 
              ? 'bg-gray-800 hover:bg-gray-700 border-gray-700 text-gray-300' 
              : 'bg-white hover:bg-gray-50 border-gray-200 text-gray-600'
          }`}>
            <Filter size={16} />
            <span className="text-sm font-medium">Filter</span>
          </button>
          
          <button className={`flex items-center space-x-2 px-4 py-2 rounded-lg border transition-all duration-300 ${
            isDark 
              ? 'bg-gray-800 hover:bg-gray-700 border-gray-700 text-gray-300' 
              : 'bg-white hover:bg-gray-50 border-gray-200 text-gray-600'
          }`}>
            <Paperclip size={16} />
            <span className="text-sm font-medium">Attachment</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;