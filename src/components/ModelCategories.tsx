import React from 'react';
import { Image, Video, Mic, Music, Brain, Zap, Sparkles, Code } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const ModelCategories: React.FC = () => {
  const { isDark } = useTheme();

  const categories = [
    {
      icon: Image,
      title: 'Image Generation',
      description: 'Create stunning visuals with AI-powered image models',
      modelCount: 45,
      iconColor: 'text-blue-600'
    },
    {
      icon: Video,
      title: 'Video Generation',
      description: 'Generate dynamic video content with advanced AI',
      modelCount: 32,
      iconColor: 'text-purple-600'
    },
    {
      icon: Mic,
      title: 'Voice Synthesis',
      description: 'Transform text to natural-sounding speech',
      modelCount: 28,
      iconColor: 'text-green-600'
    },
    {
      icon: Music,
      title: 'Music Generation',
      description: 'Compose original music with AI creativity',
      modelCount: 24,
      iconColor: 'text-orange-600'
    },
    {
      icon: Brain,
      title: 'Language Models',
      description: 'Advanced text processing and generation',
      modelCount: 56,
      iconColor: 'text-pink-600'
    },
    {
      icon: Code,
      title: 'Code Generation',
      description: 'AI-powered programming assistance',
      modelCount: 18,
      iconColor: 'text-indigo-600'
    },
    {
      icon: Zap,
      title: 'Real-time Models',
      description: 'Lightning-fast AI processing capabilities',
      modelCount: 12,
      iconColor: 'text-yellow-600'
    },
    {
      icon: Sparkles,
      title: 'Experimental',
      description: 'Cutting-edge research models',
      modelCount: 10,
      iconColor: 'text-gray-600'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-8">
      <div className="text-center mb-16">
        <h2 className={`text-4xl font-bold mb-4 transition-colors duration-300 ${
          isDark ? 'text-white' : 'text-gray-900'
        }`}>
          Browse by Category
        </h2>
        <p className={`text-xl max-w-3xl mx-auto transition-colors duration-300 ${
          isDark ? 'text-gray-300' : 'text-gray-600'
        }`}>
          Discover AI models organized by their capabilities and use cases
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category, index) => (
          <div
            key={category.title}
            className={`group p-6 rounded-xl border hover:shadow-md transition-all duration-300 cursor-pointer ${
              isDark 
                ? 'bg-gray-800 border-gray-700 hover:bg-gray-750' 
                : 'bg-white border-gray-200 hover:bg-gray-50'
            }`}
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 rounded-lg transition-colors duration-300 ${
                isDark ? 'bg-gray-700' : 'bg-gray-100'
              }`}>
                <category.icon size={24} className={category.iconColor} />
              </div>
              <span className={`text-sm font-semibold px-3 py-1 rounded-full ${
                isDark 
                  ? 'bg-gray-700 text-gray-400' 
                  : 'bg-gray-100 text-gray-600'
              }`}>
                {category.modelCount} models
              </span>
            </div>
            
            <h3 className={`text-lg font-semibold mb-2 transition-colors duration-300 ${
              isDark 
                ? 'text-white' 
                : 'text-gray-900'
            }`}>
              {category.title}
            </h3>
            
            <p className={`text-sm leading-relaxed transition-colors duration-300 ${
              isDark ? 'text-gray-400' : 'text-gray-500'
            }`}>
              {category.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ModelCategories;