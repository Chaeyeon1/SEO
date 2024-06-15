import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Chaeyeon_SEO',
  description: '김수돌과 신채돌의 개발 일기',
  keywords: ['김수돌', '신채돌', 'SEO', '개발', '일기'],
  verification: {
    google: 'Ot9R1wLIt3DP15IpoikrTHTptAcVxD5f-MX5poEjgrQ',
    other: {
      'naver-site-verification': 'Ot9R1wLIt3DP15IpoikrTHTptAcVxD5f-MX5poEjgrQ',
    },
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
