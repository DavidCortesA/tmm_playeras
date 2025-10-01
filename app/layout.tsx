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
        <link rel='apple-touch-icon' sizes='180x180' href='/apple-icon.png' type='image/png' />
        <link rel='icon' sizes='180x180' href='/icon.ico' type='image/ico' />
        <link rel='icon' sizes='any' href='/favicon.ico' />
      </head>
      <body>{children}</body>
    </html>
  )
}