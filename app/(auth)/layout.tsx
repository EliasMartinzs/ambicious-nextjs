import '../globals.css';
import { Inter } from 'next/font/google';
import { ReduxProvider } from '../(root)/ReduxProvider';

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
    <ReduxProvider>
      <html lang="en">
        <body>{children}</body>
      </html>
    </ReduxProvider>
  );
}
