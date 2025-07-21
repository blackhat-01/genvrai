import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

const CompanyLogos: React.FC = () => {
  const { isDark } = useTheme();

  const companies = [
    { name: 'SeedHealth', logo: 'SeedHealth' },
    { name: 'Pentagram', logo: 'Pentagram' },
    { name: 'Alibaba', logo: 'Alibaba' },
    { name: 'NYU', logo: 'NYU' },
    { name: 'Harvey', logo: 'Harvey' },
    { name: "Levi's", logo: "levi's" },
    { name: 'NBCUniversal', logo: 'NBCUniversal' },
    { name: 'Microsoft', logo: 'Microsoft' },
    { name: 'Google', logo: 'Google' },
    { name: 'OpenAI', logo: 'OpenAI' },
  ];

  return (
    <div className="mt-12 lg:mt-16 max-w-4xl mx-auto px-4">
      <div className="relative overflow-hidden">
        <div className="flex animate-marquee space-x-8 sm:space-x-12 opacity-60">
          {[...companies, ...companies].map((company, index) => (
            <div
              key={`${company.name}-${index}`}
              className={`font-medium text-sm sm:text-lg transition-all duration-300 cursor-pointer transform hover:scale-105 whitespace-nowrap ${
                isDark 
                  ? 'text-gray-500 hover:text-gray-300' 
                  : 'text-gray-400 hover:text-gray-600'
              }`}
              style={{ 
                fontFamily: index % 3 === 0 ? 'serif' : index % 3 === 1 ? 'sans-serif' : 'inherit',
                fontWeight: index % 4 === 2 ? '600' : index % 4 === 3 ? 'bold' : '400'
              }}
            >
              {company.logo}
            </div>
          ))}
        </div>
      </div>
      
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default CompanyLogos;