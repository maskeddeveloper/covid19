import Head from 'next/head'


export default function Header() {
    return (   
    <Head>
        <title> مناطق التخفيف من تدابير الحجر الصحي بالمملكة المغربية </title>
        <link rel="icon" href="/favicon.ico" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
       
            <script async src="https://www.googletagmanager.com/gtag/js?id=G-EE2X0VV9FM"></script>
            <script>
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
            
              gtag('config', 'G-EE2X0VV9FM');
            </script>
              `,
          }}
        />
      </Head>)

 }

