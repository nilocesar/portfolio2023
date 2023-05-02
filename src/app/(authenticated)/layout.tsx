import '../styles/globals.css';

import { Footer } from '../components/Footer';
import { Sidebar } from '../components/Sidebar';

export const metadata = {
  title: 'Spotify',
  description: 'Listen to music'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-zinc-900 text-zinc-50">
        <div className="h-screen flex flex-col">
          <div className="flex flex-1">
            <Sidebar />
            {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
