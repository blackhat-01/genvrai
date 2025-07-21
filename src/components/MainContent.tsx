import React from 'react';
import SearchBar from './SearchBar';
import CompanyLogos from './CompanyLogos';
import ModelCategories from './ModelCategories';
import FeaturedModels from './FeaturedModels';
import { ChevronDown } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const MainContent: React.FC = () => {
  const { isDark } = useTheme();

  return (
    <div className="ml-72">
      {/* Main Content Area */}
      <div className="min-h-screen flex items-center justify-center px-8 py-16 pb-32">
        <div className="max-w-6xl mx-auto text-center space-y-8">
          {/* Hero Section */}
          <div className="space-y-6">
            <h1 className={`text-5xl md:text-6xl font-bold leading-tight transition-colors duration-300 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              Explore Our{' '}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                225+AI Model
              </span>{' '}
              Library
            </h1>
            
            <p className={`text-xl max-w-3xl mx-auto leading-relaxed transition-colors duration-300 ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Dive into a diverse collection of over 225 advanced AI models,
              <br />
              curated across various categories for all your needs.
            </p>
          </div>

          {/* Search Bar */}
          <div className="pt-8">
            <SearchBar />
          </div>

          {/* Company Logos */}
          <CompanyLogos />

          {/* Scroll Indicator */}
          <div className="flex justify-center pt-16">
            <button 
              onClick={() => {
                const nextSection = document.getElementById('model-categories');
                nextSection?.scrollIntoView({ behavior: 'smooth' });
              }}
              className={`p-3 rounded-full border shadow-sm transition-all duration-300 group ${
                isDark 
                  ? 'bg-gray-800 hover:bg-gray-700 border-gray-700' 
                  : 'bg-white hover:bg-gray-50 border-gray-200'
              }`}
            >
              <ChevronDown size={24} className={`group-hover:translate-y-0.5 transition-all ${
                isDark 
                  ? 'text-gray-400 group-hover:text-gray-200' 
                  : 'text-gray-400 group-hover:text-gray-600'
              }`} />
            </button>
          </div>
        </div>
      </div>

      {/* Model Categories Section */}
      <div id="model-categories" className={`py-20 transition-colors duration-300 ${
        isDark ? 'bg-gray-800' : 'bg-white'
      }`}>
        <ModelCategories />
      </div>

      {/* Featured Models Section */}
      <div className={`py-20 transition-colors duration-300 ${
        isDark ? 'bg-gray-900' : 'bg-gray-50'
      }`}>
        <FeaturedModels />
      </div>
    </div>
  );
};

export default MainContent;