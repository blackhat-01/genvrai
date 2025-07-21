import React from 'react';
import { 
  Home, 
  Building2, 
  Rocket, 
  Bell, 
  Globe, 
  FolderOpen, 
  Image, 
  Video, 
  Mic, 
  Music, 
  Settings,
  User
} from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

interface SidebarProps {
  activeItem?: string;
  onItemClick?: (item: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeItem = 'home', onItemClick }) => {
  const { isDark } = useTheme();

  const mainNavItems = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'business', icon: Building2, label: 'GenVR For Business' },
    { id: 'startup', icon: Rocket, label: "GenVR For StartUp's" },
    { id: 'updates', icon: Bell, label: 'Updates' },
  ];

  const exploreItems = [
    { id: 'public-feed', icon: Globe, label: 'Explore Public Feed' },
    { id: 'creations', icon: FolderOpen, label: "Your creation's" },
  ];

  const labsItems = [
    { id: 'image-labs', icon: Image, label: 'Image GenLabs' },
    { id: 'video-labs', icon: Video, label: 'Video GenLabs' },
    { id: 'voice-labs', icon: Mic, label: 'VoiceGenLabs' },
    { id: 'music-labs', icon: Music, label: 'Music GenLabs' },
  ];

  const handleItemClick = (itemId: string) => {
    onItemClick?.(itemId);
  };

  const NavItem = ({ item, isActive = false }: { item: any; isActive?: boolean }) => (
    <button
      onClick={() => handleItemClick(item.id)}
      className={`w-full flex items-center space-x-3 px-4 py-3 text-left rounded-lg transition-all duration-300 group ${
        isActive 
          ? isDark 
            ? 'bg-gray-900 text-white' 
            : 'bg-gray-100 text-gray-900'
          : isDark
            ? 'text-gray-400 hover:bg-gray-900 hover:text-white'
            : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
      }`}
    >
      <item.icon size={20} className="shrink-0" />
      <span className="text-sm font-medium">{item.label}</span>
    </button>
  );

  return (
    <div className={`w-72 flex flex-col h-screen shadow-sm fixed left-0 top-0 z-10 transition-colors duration-300 transform lg:translate-x-0 -translate-x-full ${
      isDark 
        ? 'bg-black border-r border-gray-800' 
        : 'bg-white border-r border-gray-200'
    }`}>
      {/* Header */}
      <div className="p-6">
        <span className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>GenVR</span>
      </div>

      {/* Navigation */}
      <div className="flex-1 px-4 space-y-8">
        {/* Main Navigation */}
        <div className="space-y-1">
          {mainNavItems.map((item) => (
            <NavItem key={item.id} item={item} isActive={activeItem === item.id} />
          ))}
        </div>

        {/* Explore Section */}
        <div className="space-y-1">
          {exploreItems.map((item) => (
            <NavItem key={item.id} item={item} isActive={activeItem === item.id} />
          ))}
        </div>

        {/* Labs Section */}
        <div className="space-y-3">
          <h3 className={`text-xs font-semibold uppercase tracking-wider px-4 ${
            isDark ? 'text-gray-500' : 'text-gray-500'
          }`}>
            Labs
          </h3>
          <div className="space-y-1">
            {labsItems.map((item) => (
              <NavItem key={item.id} item={item} isActive={activeItem === item.id} />
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className={`p-4 space-y-4 border-t transition-colors duration-300 ${
        isDark ? 'border-gray-900' : 'border-gray-200'
      }`}>
        <div className={`flex items-center justify-between text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
          <button className={`transition-colors ${
            isDark ? 'hover:text-white' : 'hover:text-gray-900'
          }`}>Support</button>
          <button className={`transition-colors ${
            isDark ? 'hover:text-white' : 'hover:text-gray-900'
          }`}>Documentation</button>
          <button className={`transition-colors ${
            isDark ? 'hover:text-white' : 'hover:text-gray-900'
          }`}>Our Policy's</button>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
              isDark ? 'bg-gray-800' : 'bg-gray-900'
            }`}>
              <User size={16} className={isDark ? 'text-gray-300' : 'text-white'} />
            </div>
            <div>
              <div className={`text-sm font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>Prateek</div>
              <div className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>52,940 Credits</div>
            </div>
          </div>
          <button className={`transition-colors ${
            isDark ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-900'
          }`}>
            <Settings size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;