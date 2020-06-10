import Head from 'next/head'

import Document, { Html, Main, NextScript } from "next/document"


export default function Header() {
    return (   
    <Head>
        <title> مناطق التخفيف من تدابير الحجر الصحي بالمملكة المغربية </title>
        <link rel="icon" href="/favicon.ico" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-EE2X0VV9FM"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
       
   
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
            
              gtag('config', 'G-EE2X0VV9FM');
      
              `,
          }}
        />
      </Head>)

 }

