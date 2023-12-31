'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

import { lightThemes, themes } from '@/constants';
import { cn } from '@/lib/utils';

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  const switchTheme = (them: string) => {
    setTheme(them);

    location.reload();
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex flex-col text-foreground">
      <h3 className="text-lg font-bold">Temas Dark</h3>
      <div className="flex flex-col gap-y-2 mt-3 text-sm font-medium">
        {themes.map(them => {
          const isActive =
            theme === them
              ? 'border-b border-primary-500 pb-2 text-primary-500 font-bold'
              : '';
          return (
            <p
              key={them}
              className={cn(
                'capitalize w-full cursor-pointer text-base',
                isActive,
              )}
              onClick={() => switchTheme(them)}
            >
              {them}
            </p>
          );
        })}
      </div>
      <br />
      <h3 className="text-lg font-bold">Temas Light</h3>
      <div className="flex flex-col gap-y-2 mt-3 text-sm font-medium">
        {lightThemes.map(them => {
          const isActive =
            theme === them
              ? 'border-b border-primary-500 pb-2 text-primary-500 font-bold'
              : '';
          return (
            <p
              key={them}
              className={cn(
                'capitalize w-full cursor-pointer text-base',
                isActive,
              )}
              onClick={() => switchTheme(them)}
            >
              {them}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default ThemeSwitch;
