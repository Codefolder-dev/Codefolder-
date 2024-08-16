import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/components/Navbar/Navbar";
import MobileNavbar from "@/components/Navbar/navbar2";

export const metadata: Metadata = {
  title: "CodeFolder",
  description:
    "Welcome to CodeFolder, the comprehensive platform designed to elevate your coding experience. Whether you're a seasoned developer or just starting your journey, CodeFolder offers the tools, resources, and community you need to excel.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" sizes="40x20" href="/favicon2.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,opsz,wght@0,6..96,400..900;1,6..96,400..900&family=Comfortaa:wght@300..700&family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&family=Noto+Serif+Display:ital,wght@0,100..900;1,100..900&family=Teko:wght@300..700&family=Vina+Sans&display=swap"
          rel="stylesheet"
        />

        {/* <!-- Google Tag Manager --> */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-W6T3FS96');
            `,
          }}
        ></script>
        {/* <!-- End Google Tag Manager --> */}
      </head>
      <body className="bg-slate-950 w-screen overflow-x-hidden text-white">
        <Navbar/>
<MobileNavbar/>
        {children}
        {/* <!-- Google Tag Manager (noscript) --> */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-W6T3FS96"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* <!-- End Google Tag Manager (noscript) --> */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-YCGMJ1FNJ4"
        >

        </script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-YCGMJ1FNJ4');
            `,
          }}
        >

        </script>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-4T41WVHBYX"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-4T41WVHBYX');
            `,
          }}
        >



        </script>
      </body>
    </html>
  );
}
