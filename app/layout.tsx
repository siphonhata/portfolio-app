'use client'
import "./globals.css";


// app/layout.tsx
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { ThemeProvider } from '@/app/context/ThemeContext';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <NextThemesProvider attribute="class" defaultTheme="system" enableSystem>
          <ThemeProvider>
            {children}
          </ThemeProvider>
        </NextThemesProvider>
      </body>
    </html>
  );
}