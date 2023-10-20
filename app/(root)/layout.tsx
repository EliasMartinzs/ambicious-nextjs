import '../globals.css';
import type { Metadata } from 'next';
import Providers from './providers';
import { ClerkProvider } from '@clerk/nextjs';
import { Montserrat } from 'next/font/google';
import { ReduxProvider } from './ReduxProvider';
import { ToastContainer } from 'react-toastify';

const montserrat = Montserrat({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['italic', 'normal'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider publishableKey="pk_test_ZW5vdWdoLWNvbGxpZS05Ny5jbGVyay5hY2NvdW50cy5kZXYk">
      <ReduxProvider>
        <html lang="en">
          <body>
            <Providers>
              <main className={montserrat.className}>{children}</main>
              <ToastContainer />
            </Providers>
          </body>
        </html>
      </ReduxProvider>
    </ClerkProvider>
  );
}
