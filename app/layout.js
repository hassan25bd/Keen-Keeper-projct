import './globals.css';
import { TimelineProvider } from './context';
import { Toaster } from 'react-hot-toast';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'KeenKeeper - Keep Your Friendships Alive',
  description: 'Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='75' font-size='75' fill='%232d5a4f'>👥</text></svg>" />
      </head>
      <body>
        <TimelineProvider>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
          <Toaster position="top-right" />
        </TimelineProvider>
      </body>
    </html>
  );
}
