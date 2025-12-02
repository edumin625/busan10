import React, { useState, useEffect } from 'react';
import { ThemeStrategy } from '../types';
import { generateThemeInfographic } from '../services/geminiService';

interface ThemeCardProps {
  theme: ThemeStrategy;
}

const ThemeCard: React.FC<ThemeCardProps> = ({ theme }) => {
  const [image, setImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [cooldown, setCooldown] = useState(0);

  // Timer effect for cooldown
  useEffect(() => {
    let timer: any;
    if (cooldown > 0) {
      timer = setInterval(() => {
        setCooldown((prev) => {
          if (prev <= 1) return 0;
          return prev - 1;
        });
      }, 1000);
    }
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [cooldown]);

  const handleGenerate = async () => {
    if (cooldown > 0) return;

    setLoading(true);
    setError(null);
    try {
      const result = await generateThemeInfographic(theme);
      setImage(result);
    } catch (err: any) {
      if (err.isRateLimit) {
        setCooldown(err.retryDelay);
        setError(err.message);
      } else {
        setError(err.message || "이미지를 생성할 수 없습니다. 다시 시도해주세요.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="group relative bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 hover:border-slate-500 transition-all duration-300 flex flex-col h-full">
      {/* Visual Header */}
      <div className={`h-48 w-full bg-gradient-to-br ${theme.color} flex items-center justify-center relative`}>
        {image ? (
          <img src={image} alt={theme.title} className="w-full h-full object-cover animate-fade-in" />
        ) : (
          <div className="text-center p-4 w-full px-8">
             {loading ? (
                 <div className="flex flex-col items-center gap-2">
                     <div className="w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
                     <span className="text-white font-bold text-sm">AI 디자인 생성 중...</span>
                 </div>
             ) : error ? (
                <div className="flex flex-col items-center gap-2 animate-fade-in">
                    <span className="text-2xl">⚠️</span>
                    <span className="text-white font-bold text-xs whitespace-pre-wrap">{error}</span>
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
                disabled={cooldown > 0}
                className={`absolute bottom-4 right-4 backdrop-blur-md border text-white text-xs px-3 py-1.5 rounded-full flex items-center gap-1 transition-all ${
                  cooldown > 0 
                    ? 'bg-red-500/20 border-red-500/40 cursor-not-allowed text-red-100' 
                    : 'bg-white/20 hover:bg-white/30 border-white/40 cursor-pointer'
                }`}
            >
                {cooldown > 0 ? (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 animate-pulse" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    {cooldown}초 후 가능
                  </>
                ) : error ? (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
                    </svg>
                    재시도
                  </>
                ) : (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                    </svg>
                    AI 이미지 생성
                  </>
                )}
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
