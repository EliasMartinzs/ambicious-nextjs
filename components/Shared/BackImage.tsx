'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function BackImage() {
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
    <div className="w-full h-full relative">
      <Image
        src={src}
        alt="mystical"
        className="object-cover object-center saturate-200"
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
        priority
      />
    </div>
  );
}
