// src/app/layout.tsx
import React from 'react';
import './globals.css';

export const metadata = {
  title: '電子機器紹介 | アフィリエイトサイト',
  description: '最新の電子機器を紹介するアフィリエイトサイトです',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}