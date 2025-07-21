import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import ThemeToggle from './components/ThemeToggle';
import { ThemeProvider, useTheme } from './contexts/ThemeContext';

function AppContent() {
  const [activeMenuItem, setActiveMenuItem] = useState('home');
  const { isDark } = useTheme();

  const handleMenuItemClick = (item: string) => {
    setActiveMenuItem(item);
  };

  return (
    <div className={`min-h-screen flex transition-colors duration-300 ${
      isDark ? 'bg-black' : 'bg-gray-50'
    }`}>
      {/* Subtle grid pattern */}
      <div className={`fixed inset-0 ${isDark ? 'opacity-[0.05]' : 'opacity-[0.02]'}`}>
        <div className={`absolute inset-0 bg-[linear-gradient(${
          isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'
        }_1px,transparent_1px),linear-gradient(90deg,${
          isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'
        }_1px,transparent_1px)] bg-[size:20px_20px]`}></div>
      </div>

      {/* Theme Toggle */}
      <ThemeToggle />

      {/* Sidebar - Hidden on mobile */}
      <Sidebar activeItem={activeMenuItem} onItemClick={handleMenuItemClick} />
      
      {/* Main Content */}
      <div className="flex-1">
        <MainContent />
      </div>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;