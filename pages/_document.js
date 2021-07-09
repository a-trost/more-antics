// pages/_document.js
import Document, { Html, Head, Main, NextScript } from "next/document";
import { createResolver } from "next-slicezone/resolver";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    await createResolver();
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <script
            async
            defer
            src="https://static.cdn.prismic.io/prismic.js?new=true&repo=some-antics-stream"
          ></script>
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
