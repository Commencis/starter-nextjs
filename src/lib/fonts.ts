import localFont from 'next/font/local';

export const FontRoboto = localFont({
  variable: '--font-roboto',
  display: 'swap',
  fallback: ['system-ui', 'sans-serif'],
  src: [
    {
      path: '../assets/fonts/Roboto.ttf',
      style: 'normal',
    },
    {
      path: '../assets/fonts/Roboto-Italic.ttf',
      style: 'italic',
    },
  ],
});
