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
        <title>Shadoww Gen</title>
        <meta name="description" content="Create beautiful box shadows" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="author" content="Rakesh Sangem" />
        <meta
          name="keywords"
          content="box shadow, css, generator, rakesh sangem, box shadow generator, shadoww gen, shadoww-gen, shadoww-gen.vercel.app, shadoww-gen.vercel, shadoww-gen.vercel.app"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta
          property="og:title"
          content="Box Shadow Generator by Rakesh Sangem"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://shadoww-gen.vercel.app/" />
        <meta
          property="og:description"
          content="Create beautiful box shadows"
        />
        <meta property="og:image" content="/shadoww-gen.webp" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="https://shadoww-gen.vercel.app" />
        <meta name="twitter:title" content="Shadoww Gen" />
        <meta
          name="twitter:description"
          content="Create beautiful box shadows"
        />
        <meta
          name="twitter:image:src"
          content="https://shadoww-gen.vercel.app/shadoww-gen.webp"
        />
        <meta
          name="twitter:image"
          content="https://shadoww-gen.vercel.app/shadoww-gen.webp"
        />
      </Head>

      <Navbar />
      <main className="flex-1 min-h-full">{children}</main>
    </div>
  );
}
