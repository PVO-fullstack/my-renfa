import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="ua">
      <Head>
        <link rel="icon" type="image/x-icon" href="/icon.ico"></link>
      </Head>
      <body className="main">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
