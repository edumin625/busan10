import { ThemeStrategy, SentimentData, Flashcard } from './types';

export const SENTIMENT_DATA: SentimentData[] = [
  { name: '긍정 (기대/인정)', value: 64.7, fill: '#3b82f6' }, // Blue
  { name: '부정 (새로움 부족)', value: 35.3, fill: '#ef4444' }, // Red
];

export const TOP_LIKED_LOCATIONS = [
  { name: '다대포해수욕장', likes: 24, category: '자연/힐링' },
  { name: '기장 권역', likes: 24, category: '숨은 명소' },
  { name: '유엔기념공원', likes: 10, category: '역사' },
  { name: '블루라인파크', likes: 7, category: '트렌드' },
];

export const THEMES: ThemeStrategy[] = [
  {
    id: 'theme1',
    keyword: 'Hidden',
    keywordKr: '숨은 명소 (기장)',
    title: '기장 시크릿 로드',
    description: '동부산의 보석 같은 드라이브 코스. 대나무 숲, 절벽 위 성당, 그리고 바다와 가장 가까운 사찰을 만나보세요.',
    locations: ['아홉산숲', '죽성성당', '해동용궁사', '일광/임랑 해수욕장'],
    target: '드라이브족, 커플, 사진가',
    color: 'from-green-400 to-emerald-600',
  },
  {
    id: 'theme2',
    keyword: 'Trend',
    keywordKr: '최신 트렌드',
    title: '블루라인 & 그린레일웨이',
    description: '바다 위를 달리는 열차와 산책로. 스카이캡슐과 해변열차로 부산의 해안 절경을 비교하며 즐기세요.',
    locations: ['블루라인파크', '미포', '청사포', '그린레일웨이'],
    target: 'MZ세대, 뚜벅이 여행자',
    color: 'from-blue-400 to-cyan-600',
  },
  {
    id: 'theme3',
    keyword: 'Deep',
    keywordKr: '역사와 심도',
    title: '평화와 역사의 길',
    description: '역사의 아픔을 기억하고 평화를 기리는 여정. 국립일제강제동원역사관과 유엔기념공원을 잇는 코스.',
    locations: ['일제강제동원역사관', '유엔기념공원', '유엔평화문화특구'],
    target: '가족 여행객, 역사 탐방',
    color: 'from-amber-400 to-orange-600',
  },
  {
    id: 'theme4',
    keyword: 'Local',
    keywordKr: '현지인 바이브',
    title: '다대포의 밤 (Night Vibe)',
    description: '현지인이 꼽는 최고의 일몰 명소. 고우니 생태길의 야경과 낙조분수의 낭만을 즐겨보세요.',
    locations: ['고우니 생태길', '낙조분수', '현지인 맛집'],
    target: '혼행족, 감성 여행자',
    color: 'from-purple-400 to-pink-600',
  },
];

export const GAME_FLASHCARDS: Flashcard[] = [
  {
    id: 1,
    question: "영화 '군도' 촬영지이자 400년 된 대나무 숲이 있어 힐링하기 좋은 기장의 명소는?",
    answer: "아홉산숲",
    hint: "기장군에 위치하며 피톤치드 가득한 숲입니다."
  },
  {
    id: 2,
    question: "레트로한 감성의 '스카이캡슐'을 타고 해안 절경을 감상할 수 있는 핫플레이스는?",
    answer: "해운대 블루라인파크",
    hint: "미포에서 청사포를 연결합니다."
  },
  {
    id: 3,
    question: "현지인들이 '찐' 일몰 맛집으로 꼽으며, 거대한 음악 분수가 있는 서부산 명소는?",
    answer: "다대포해수욕장",
    hint: "부산 서쪽에 위치하며 넓은 백사장이 특징입니다."
  },
  {
    id: 4,
    question: "드라마 세트장으로 지어진 바다 위 절벽의 이국적인 성당은?",
    answer: "죽성성당",
    hint: "인생샷 명소로 유명하며 기장에 있습니다."
  }
];