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
        <meta name="author" content="Rakesh Sangem" />
        <meta
          name="keywords"
          content="box shadow, css, generator, rakesh sangem"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta
          property="og:title"
          content="Box Shadow Generator by Rakesh Sangem"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://box-shadow.vercel.app/" />
        <meta property="og:description" content="Generate box shadow css" />
        <meta
          property="og:image"
          content="https://box-shadow.vercel.app/og-image.png"
        />
      </Head>

      <Navbar />
      <main className="flex-1 min-h-full">{children}</main>
    </div>
  );
}
