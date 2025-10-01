import React from 'react';
import '../styles/globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <title>TMM Playeras - Próximamente</title>
        
        {/* Meta básicas */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="TMM Playeras - Distribuidora mayorista de playeras de calidad. Próximamente disponible." />
        <meta name="keywords" content="TMM, playeras, camisetas, ropa, distribuidora, mayorista, moda, calidad" />
        <meta name="author" content="TMM Playeras" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph / Facebook */}
        <meta property="og:title" content="TMM Playeras - Próximamente" />
        <meta property="og:description" content="Distribuidora mayorista de playeras de calidad. Muy pronto disponible." />
        <meta property="og:image" content="/apple-icon.png" />
        <meta property="og:url" content="https://tmmplayeras.com" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="TMM Playeras - Próximamente" />
        <meta name="twitter:description" content="Distribuidora mayorista de playeras de calidad. Muy pronto disponible." />
        <meta name="twitter:image" content="/apple-icon.png" />
        <meta name="twitter:url" content="https://tmmplayeras.com" />

        {/* Iconos */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon.png" type="image/png" />
        <link rel="icon" sizes="180x180" href="/icon.ico" type="image/ico" />
        <link rel="icon" sizes="any" href="/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  )
}
