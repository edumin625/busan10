import React from 'react';
import { THEMES } from './constants';
import AnalysisChart from './components/AnalysisChart';
import ThemeCard from './components/ThemeCard';
import HiddenGemGame from './components/HiddenGemGame';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-200 selection:bg-blue-500 selection:text-white">
      {/* Sticky Header */}
      <nav className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-lg border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🌊</span>
              <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
                부산 관광<span className="font-thin text-slate-400 ml-1">2.0</span>
              </h1>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#analysis" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">데이터 분석</a>
              <a href="#themes" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">신규 전략</a>
              <a href="#game" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">퀴즈</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-16 lg:pt-32 lg:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <span className="inline-block py-1 px-3 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold tracking-wide uppercase mb-6">
                제안서 V2.0
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-6">
                데이터 기반 <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-teal-400 to-emerald-400">
                    부산 신규 관광 콘텐츠
                </span>
            </h1>
            <p className="mt-4 text-xl text-slate-400 max-w-2xl mx-auto">
                "유명 관광지 Top 10"을 넘어, VOC 분석을 통해 확인된 숨은 명소와 현지 감성을 담은 새로운 부산 여행을 제안합니다.
            </p>
        </div>
        
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl opacity-20 pointer-events-none">
            <div className="absolute top-20 left-20 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
            <div className="absolute top-20 right-20 w-72 h-72 bg-emerald-600 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
      </section>

      {/* Analytics Section */}
      <section id="analysis" className="py-16 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-10">
                <h2 className="text-2xl font-bold text-white mb-2">왜 새로운 콘텐츠인가?</h2>
                <p className="text-slate-400">51건의 고관여 시청자 댓글 심층 분석 결과, '새로움'과 '숨은 명소'에 대한 갈망이 확인되었습니다.</p>
            </div>
            <AnalysisChart />
        </div>
      </section>

      {/* Themes Section */}
      <section id="themes" className="py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                    <h2 className="text-3xl font-bold text-white mb-2">4가지 핵심 전략</h2>
                    <p className="text-slate-400 max-w-xl">
                        "새로운 게 없다"는 불만을 해소할 4가지 맞춤형 테마: 숨은 명소, 최신 트렌드, 역사적 깊이, 현지 감성.
                    </p>
                </div>
                <div className="text-right hidden md:block">
                     <span className="text-xs text-slate-500 block">Gemini 2.5 기술 활용</span>
                     <span className="text-xs text-slate-600">카드를 클릭하여 AI 인포그래픽 생성</span>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {THEMES.map(theme => (
                    <ThemeCard key={theme.id} theme={theme} />
                ))}
            </div>
        </div>
      </section>

      {/* Game Section */}
      <section id="game" className="py-16 bg-slate-900 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <HiddenGemGame />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-black text-center text-slate-600 text-sm border-t border-slate-800">
        <p>© 2025 데이터 기반 부산 신규 관광 콘텐츠 개발 제안 (V2.0).</p>
        <p className="mt-2 text-xs">React & Gemini 2.5로 제작됨</p>
      </footer>
    </div>
  );
};

export default App;