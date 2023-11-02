import '../globals.css';
import type { Metadata } from 'next';
import Providers from './providers';
import { Montserrat } from 'next/font/google';
import { ReduxProvider } from './ReduxProvider';
import { ToastContainer } from 'react-toastify';
import { ClerkProvider } from '@clerk/nextjs';
import { dark } from '@clerk/themes';
import FormDataProvider from '@/context/FormDataContext';
import ProSidebar from '@/components/config/ProSidebar';
import CentralImage from '@/components/CentralImage';
import Footer from '@/components/Footer';

const montserrat = Montserrat({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['italic', 'normal'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Ambicious',
  description: 'Faça seu melhor.',
};

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
            <body>
              <Providers>
                <main className={montserrat.className}>
                  <CentralImage />
                  {children}
                  <ToastContainer />
                  <div className="fixed inset-y-0 right-0 p-5">
                    <ProSidebar />
                  </div>
                  <Footer />
                </main>
              </Providers>
            </body>
          </html>
        </FormDataProvider>
      </ReduxProvider>
    </ClerkProvider>
  );
}
