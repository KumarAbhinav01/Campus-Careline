import { Providers } from "./providers";
import "node_modules/react-modal-video/css/modal-video.css";
import "../styles/index.css";
import dynamic from 'next/dynamic'
import { ClerkProvider } from "@clerk/nextjs/app-beta";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const CrispWithNoSSR = dynamic(
    () => import('@/components/Crisp')
  )
  
  return (
    <html suppressHydrationWarning lang="en">
      <head > 
       <CrispWithNoSSR />
      </head>
      <ClerkProvider >
        <body className="dark:bg-black">
          <Providers>
            {children}
          </Providers>
        </body>
      </ClerkProvider>
    </html>
  );
}