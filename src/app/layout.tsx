import type { Metadata } from "next";

import "./globals.css";
import {IBM_Plex_Sans} from "next/font/google";
import { cn } from "@/lib/utils";
import {
  ClerkProvider,
  
} from '@clerk/nextjs'

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

const IBMPlex = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ['500','600','700'],
});

export const metadata: Metadata = {
  title: "Imaginify",
  description: "AI-powered Image Generator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider appearance={{
      variables:{colorPrimary:'#6c47ff'}
    }}>
    <html lang="en">
      <body
        className={cn("font-IBMPlex antialiased", IBMPlex.variable)}
      >
        {children}
      </body>
    </html>
    </ClerkProvider>
  );
}
