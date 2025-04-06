// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* ファビコン */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* テーマカラー */}
        <meta name="theme-color" content="#E34234" />
        <meta name="msapplication-TileColor" content="#E34234" />

        {/* Instagram SDK */}
        <script async defer src="https://www.instagram.com/embed.js"></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
