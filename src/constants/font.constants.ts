import localFont from 'next/font/local';

export const FONT_ROBOTO = localFont({
  display: 'swap',
  variable: '--font-roboto',
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
