import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle: React.FC = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`fixed top-6 right-6 z-20 p-3 rounded-full border transition-all duration-300 ${
        isDark
          ? 'bg-black border-gray-800 text-yellow-400 hover:bg-gray-900'
          : 'bg-white border-gray-200 text-gray-600 hover:bg-gray-50'
      } shadow-lg hover:shadow-xl transform hover:scale-105`}
      aria-label="Toggle theme"
    >
      {isDark ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
};

export default ThemeToggle;