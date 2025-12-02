import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');
  return {
    plugins: [react()],
    define: {
      // Vercel 환경 변수(API_KEY)를 코드 내의 process.env.API_KEY로 치환
      'process.env.API_KEY': JSON.stringify(env.API_KEY)
    }
  };
});