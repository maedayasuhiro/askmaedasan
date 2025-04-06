// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* ファビコン */}
        <link rel="icon" href="/logo.png" type="image/png" />

        {/* ブラウザのテーマカラー（オプション） */}
        <meta name="theme-color" content="#E34234" />
        <meta name="msapplication-TileColor" content="#E34234" />

        {/* Instagram 埋め込み用 SDK */}
        <script async defer src="https://www.instagram.com/embed.js"></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
