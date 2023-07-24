"use client";

import { Providers } from "./providers";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import "node_modules/react-modal-video/css/modal-video.css";
import "../styles/index.css";
import dynamic from 'next/dynamic'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const CrispWithNoSSR = dynamic(
    () => import('../components/crisp')
  )
  
  return (
    <html suppressHydrationWarning lang="en">
      <head > 
       <CrispWithNoSSR />
      </head>
      <body className="dark:bg-black">
        <Providers>
          <Header />
          {children}
          <Footer />
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}