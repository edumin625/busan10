import React, { useState } from 'react';
import { ThemeStrategy } from '../types';
import { generateThemeInfographic } from '../services/geminiService';

interface ThemeCardProps {
  theme: ThemeStrategy;
}

const ThemeCard: React.FC<ThemeCardProps> = ({ theme }) => {
  const [image, setImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    setLoading(true);
    const result = await generateThemeInfographic(theme);
    setImage(result);
    setLoading(false);
  };

  return (
    <div className="group relative bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 hover:border-slate-500 transition-all duration-300 flex flex-col h-full">
      {/* Visual Header */}
      <div className={`h-48 w-full bg-gradient-to-br ${theme.color} flex items-center justify-center relative`}>
        {image ? (
          <img src={image} alt={theme.title} className="w-full h-full object-cover animate-fade-in" />
        ) : (
          <div className="text-center p-4">
             {loading ? (
                 <div className="flex flex-col items-center gap-2">
                     <div className="w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
                     <span className="text-white font-bold text-sm">AI 디자인 생성 중...</span>
                 </div>
             ) : (
                <>
                    <h3 className="text-2xl font-black text-white/90 drop-shadow-md mb-1">{theme.keywordKr}</h3>
                    <p className="text-white/60 font-medium text-sm tracking-widest uppercase">{theme.keyword}</p>
                </>
             )}
          </div>
        )}
        
        {!image && !loading && (
            <button 
                onClick={handleGenerate}
                className="absolute bottom-4 right-4 bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/40 text-white text-xs px-3 py-1.5 rounded-full flex items-center gap-1 transition-all"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                </svg>
                AI 이미지 생성
            </button>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col">
        <h4 className="text-xl font-bold mb-2 text-white">{theme.title}</h4>
        <p className="text-slate-400 text-sm mb-4 line-clamp-3 flex-1">{theme.description}</p>
        
        <div className="space-y-3">
            <div>
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">주요 명소</span>
                <div className="flex flex-wrap gap-2 mt-1">
                    {theme.locations.map(loc => (
                        <span key={loc} className="px-2 py-1 bg-slate-700 text-slate-200 text-xs rounded-md">
                            {loc}
                        </span>
                    ))}
                </div>
            </div>
            
            <div className="pt-3 border-t border-slate-700">
                <span className="text-xs text-slate-500">추천 대상: </span>
                <span className="text-xs text-slate-300 font-medium">{theme.target}</span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeCard;