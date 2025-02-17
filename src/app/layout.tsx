import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ロックシステム/ホワイト企業認定PLATINUM',
  description: '大阪・東京・名古屋を拠点にするシステム開発企業、株式会社ロックシステムの公式webサイト。ブラック企業をやっつけろ！をスローガンにテコの原理でエンジニアが楽チンな社会を作る',
  openGraph: {
    title: 'ロックシステム/ホワイト企業認定PLATINUM',
    description: `大阪・東京・名古屋を拠点にするシステム開発企業、株式会社ロックシステムの公式webサイト。ブラック企業をやっつけろ！をスローガンにテコの原理でエンジニアが楽チンな社会を作る`,
    url: 'https://rocksystem.co.jp/',
    type: 'website',
    locale: 'ja_JP',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ja'>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
