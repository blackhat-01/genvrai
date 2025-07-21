import React from 'react';
import { Star, TrendingUp, Clock, Users } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const FeaturedModels: React.FC = () => {
  const { isDark } = useTheme();

  const featuredModels = [
    {
      name: 'DALL-E 3',
      category: 'Image Generation',
      description: 'Advanced text-to-image generation with exceptional detail and creativity',
      rating: 4.9,
      usage: '2.3M',
      trending: true,
      creationTime: '18s',
      image: 'https://images.pexels.com/photos/8439093/pexels-photo-8439093.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'GPT-4 Vision',
      category: 'Multimodal',
      description: 'Understand and analyze images with advanced language capabilities',
      rating: 4.8,
      usage: '1.8M',
      trending: true,
      creationTime: '25s',
      image: 'https://images.pexels.com/photos/8439093/pexels-photo-8439093.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Stable Video',
      category: 'Video Generation',
      description: 'Create high-quality videos from text prompts and images',
      rating: 4.7,
      usage: '890K',
      trending: false,
      creationTime: '32s',
      image: 'https://images.pexels.com/photos/8439093/pexels-photo-8439093.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'ElevenLabs Voice',
      category: 'Voice Synthesis',
      description: 'Natural voice cloning and text-to-speech generation',
      rating: 4.9,
      usage: '1.2M',
      trending: true,
      creationTime: '15s',
      image: 'https://images.pexels.com/photos/8439093/pexels-photo-8439093.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'MusicGen',
      category: 'Music Generation',
      description: 'Compose original music tracks from text descriptions',
      rating: 4.6,
      usage: '650K',
      trending: false,
      creationTime: '45s',
      image: 'https://images.pexels.com/photos/8439093/pexels-photo-8439093.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'CodeLlama',
      category: 'Code Generation',
      description: 'Advanced code generation and programming assistance',
      rating: 4.8,
      usage: '1.1M',
      trending: true,
      creationTime: '22s',
      image: 'https://images.pexels.com/photos/8439093/pexels-photo-8439093.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-8">
      <div className="text-center mb-16">
        <h2 className={`text-4xl font-bold mb-4 transition-colors duration-300 ${
          isDark ? 'text-white' : 'text-gray-900'
        }`}>
          Featured AI Models
        </h2>
        <p className={`text-xl max-w-3xl mx-auto transition-colors duration-300 ${
          isDark ? 'text-gray-300' : 'text-gray-600'
        }`}>
          Discover the most popular and powerful AI models in our library
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuredModels.map((model, index) => (
          <div
            key={model.name}
            className={`group rounded-2xl border overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2 ${
              isDark 
                ? 'bg-gray-800 border-gray-700' 
                : 'bg-white border-gray-200'
            }`}
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={model.image}
                alt={model.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              {model.trending && (
                <div className="absolute top-4 left-4 flex items-center space-x-1 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                  <TrendingUp size={12} />
                  <span>Trending</span>
                </div>
              )}
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                <div className="flex items-center space-x-1">
                  <Star size={12} className="text-yellow-500 fill-current" />
                  <span className="text-xs font-medium text-gray-900">{model.rating}</span>
                </div>
              </div>
            </div>
            
            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
                  {model.category}
                </span>
                <div className={`flex items-center space-x-1 transition-colors duration-300 ${
                  isDark ? 'text-gray-400' : 'text-gray-500'
                }`}>
                  <Users size={12} />
                  <span className="text-xs">{model.usage}</span>
                </div>
              </div>
              
              <h3 className={`text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors duration-300 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                {model.name}
              </h3>
              
              <p className={`text-sm leading-relaxed mb-4 transition-colors duration-300 ${
                isDark ? 'text-gray-400' : 'text-gray-600'
              }`}>
                {model.description}
              </p>
              
              <div className="flex items-center justify-between">
                <button className="text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors">
                  Try Model →
                </button>
                <div className={`flex items-center space-x-1 transition-colors duration-300 ${
                  isDark ? 'text-gray-500' : 'text-gray-400'
                }`}>
                  <Clock size={12} />
                  <span className="text-xs">Avg: {model.creationTime}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      <div className="text-center mt-12">
        <button className={`px-8 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 ${
          isDark 
            ? 'bg-white hover:bg-gray-100 text-gray-900' 
            : 'bg-gray-900 hover:bg-gray-800 text-white'
        }`}>
          View All Models
        </button>
      </div>
    </div>
  );
};

export default FeaturedModels;