import React, { useState } from 'react';
import { GAME_FLASHCARDS } from '../constants';
import { Flashcard } from '../types';

const HiddenGemGame: React.FC = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  
  const currentCard: Flashcard = GAME_FLASHCARDS[currentCardIndex];

  const handleNext = () => {
    setIsFlipped(false);
    setTimeout(() => {
        setCurrentCardIndex((prev) => (prev + 1) % GAME_FLASHCARDS.length);
    }, 200);
  };

  const handlePrev = () => {
    setIsFlipped(false);
    setTimeout(() => {
        setCurrentCardIndex((prev) => (prev - 1 + GAME_FLASHCARDS.length) % GAME_FLASHCARDS.length);
    }, 200);
  };

  return (
    <div className="max-w-2xl mx-auto py-8">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">
           부산 숨은 명소 찾기
        </h2>
        <p className="text-slate-400 text-sm">여러분의 '부산 잘알' 레벨을 테스트해보세요!</p>
      </div>

      <div className="relative h-64 w-full perspective-1000 group cursor-pointer" onClick={() => setIsFlipped(!isFlipped)}>
        <div className={`relative w-full h-full duration-500 transform-style-3d transition-transform ${isFlipped ? 'rotate-y-180' : ''}`}>
          
          {/* Front Face */}
          <div className="absolute w-full h-full backface-hidden bg-slate-800 rounded-2xl border border-slate-600 p-8 flex flex-col items-center justify-center shadow-2xl">
            <span className="absolute top-4 left-4 text-xs font-bold text-slate-500">질문 (QUESTION) {currentCardIndex + 1}/{GAME_FLASHCARDS.length}</span>
            <div className="text-4xl mb-4">❓</div>
            <h3 className="text-xl font-bold text-center text-white mb-4">{currentCard.question}</h3>
            <p className="text-slate-400 text-xs mt-4 animate-pulse">클릭하여 정답 확인</p>
          </div>

          {/* Back Face */}
          <div className="absolute w-full h-full backface-hidden bg-gradient-to-br from-indigo-900 to-slate-900 rounded-2xl border border-indigo-500 p-8 flex flex-col items-center justify-center shadow-2xl rotate-y-180">
            <span className="absolute top-4 left-4 text-xs font-bold text-indigo-300">정답 (ANSWER)</span>
            <div className="text-4xl mb-4">💎</div>
            <h3 className="text-2xl font-bold text-center text-white mb-2">{currentCard.answer}</h3>
            <p className="text-indigo-200 text-sm text-center bg-indigo-900/50 px-4 py-2 rounded-lg">
                💡 힌트: {currentCard.hint}
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center mt-8 px-4">
        <button 
            onClick={handlePrev}
            className="px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded-lg text-white text-sm font-medium transition-colors"
        >
            이전 문제
        </button>
        <div className="flex gap-2">
            {GAME_FLASHCARDS.map((_, idx) => (
                <div key={idx} className={`w-2 h-2 rounded-full ${idx === currentCardIndex ? 'bg-blue-500' : 'bg-slate-700'}`}></div>
            ))}
        </div>
        <button 
            onClick={handleNext}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-lg text-white text-sm font-medium transition-colors"
        >
            다음 도전
        </button>
      </div>
      
      <style>{`
        .perspective-1000 { perspective: 1000px; }
        .transform-style-3d { transform-style: preserve-3d; }
        .backface-hidden { backface-visibility: hidden; }
        .rotate-y-180 { transform: rotateY(180deg); }
      `}</style>
    </div>
  );
};

export default HiddenGemGame;