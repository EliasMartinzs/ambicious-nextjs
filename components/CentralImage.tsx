'use client';
import Image from 'next/image';
import MenuOptions from './config/MenuOptions';
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

type ThemeType = {
  wanella: string;
  abyss: string;
  noturn: string;
  fortune: string;
  ancient: string;
  castily: string;
};

export default function CentralImage() {
  const { resolvedTheme } = useTheme();
  const [theme, setTheme] = useState<any>('');

  useEffect(() => {
    const theme = localStorage.getItem('theme');

    setTheme(theme);
  }, []);

  const themeImages = {
    wanella: '/themes/wanella.webp',
    abyss: '/themes/abyss.webp',
    noturn: '/themes/notturn.webp',
    fortune: '/themes/fortune.webp',
    ancient: '/themes/ancient.webp',
    castily: '/themes/castily.webp',
  };

  //@ts-ignore
  let src: string = themeImages[theme] || '/themes/wanella.webp';

  return (
    <section className="w-full h-32 relative overflow-hidden">
      <Image
        src={src}
        alt="mystical"
        className="object-cover object-center saturate-200"
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
        priority
      />
      <div className="absolute inset-y-0 right-0 m-5"></div>
    </section>
  );
}
