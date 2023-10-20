import '../globals.css';
import { Inter } from 'next/font/google';
import { ReduxProvider } from '../(root)/ReduxProvider';
import { ClerkProvider } from '@clerk/nextjs';
import { dark } from '@clerk/themes';
import FormDataProvider from '@/context/FormDataContext';

export const metadata = {
  title: 'Next.js 13 with Clerk',
};

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
      publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
    >
      <ReduxProvider>
        <FormDataProvider>
          <html lang="en">
            <body>{children}</body>
          </html>
        </FormDataProvider>
      </ReduxProvider>
    </ClerkProvider>
  );
}
