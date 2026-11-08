import tailwindcss from '@tailwindcss/vite';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    build: {
      rollupOptions: {
        input: {
          main: path.resolve(__dirname, 'index.html'),
          metier: path.resolve(__dirname, 'pages/metier.html'),
          menace: path.resolve(__dirname, 'pages/menace.html'),
          quantum: path.resolve(__dirname, 'pages/quantum.html'),
          pqc: path.resolve(__dirname, 'pages/pqc.html'),
          missions: path.resolve(__dirname, 'pages/missions.html'),
          competences: path.resolve(__dirname, 'pages/competences.html'),
          formation: path.resolve(__dirname, 'pages/formation.html'),
          simulation: path.resolve(__dirname, 'pages/simulation.html'),
          quiz: path.resolve(__dirname, 'pages/quiz.html'),
          faq: path.resolve(__dirname, 'pages/faq.html'),
        },
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
