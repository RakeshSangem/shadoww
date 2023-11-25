import React from 'react';
import Head from 'next/head';
import Navbar from './Navbar';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <div className="flex flex-col min-h-screen max-w-7xl mx-auto">
      <Head>
        <title>Box Shadow Generator by Rakesh Sangem</title>
        <meta name="description" content="Generate box shadow css" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <main className="flex-1 min-h-full">{children}</main>
    </div>
  );
}
