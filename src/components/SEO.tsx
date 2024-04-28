'use client'
import React from 'react';


import poppins from '../../public/fonts/poppins-regular-webfont.woff2';
import { usePathname } from 'next/navigation';


interface SEOProps {
  title: string;
  description: string;
  canonical: string;
  image: string;
}

const SEO: React.FC<SEOProps> = ({ title, description, image, canonical }) => {
    const currentPath = usePathname() || '/';

  const site = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  const imageURL = new URL(image, site).toString();
  const canonicalURL = canonical
    ? new URL(canonical, site)
    : new URL(currentPath, site);

  return (
    <>
      <title>{title}</title>

      <meta charSet="UTF-8" />
      <meta name="description" content={description} />

      <link rel="preconnect" href="https://cdn.laplacitadelivery.dev" />
      <link rel="preload" href={poppins} as="font" type="font/woff2" crossOrigin="" />


        <link rel="canonical" href={canonicalURL.href} />
      <meta name="viewport" content="width=device-width" />
      <meta name="theme-color" content="#FFFFFF" />

      <meta name="keywords" content="comida, opciones, menús" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@laplacitadelivery" />
      <meta name="twitter:creator" content="@laplacitadelivery" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={new URL(image, imageURL).toString()} />

      <meta name="og:image" content={new URL(image, imageURL).toString()} />
      <meta name="og:title" content={title} />
      <meta name="og:description" content={description} />
      <meta name="og:url" content={imageURL} />
      <meta name="og:site_name" content="Fia Valencia" />
      <meta name="og:type" content="website" />
      <meta name="og:locale" content="es_ES" />

      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />

      <link rel="icon" type="image/svg+xml" href="/delivery.ico" />
      <link rel="apple-touch-icon" href="/delivery.ico" />

      <link rel="icon" type="image/svg+xml" href="/delivery.ico" />
      <meta name="msapplication-config" content="/browserconfig.xml" />

      {/* <script src="/registerSW.js"></script> */}
      <link rel="manifest" href="/manifest.webmanifest" />
    </>
  );
};

export default SEO;