'use client';

import { NextUIProvider } from '@nextui-org/react';
import { ThemeProvider } from 'next-themes';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="city"
        enableSystem
        themes={[
          'wanella',
          'abyss',
          'noturn',
          'fortune',
          'ancient',
          'castily',
          'city',
          'lightmontain',
          'library',
        ]}
      >
        {children}
      </ThemeProvider>
    </NextUIProvider>
  );
}
