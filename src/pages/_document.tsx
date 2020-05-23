import classnames from "classnames";
import Document, { Head, Html, Main, NextScript } from "next/document";
import React from "react";

export default class MyDocument extends Document {
  render() {
    return (
      <Html className={classnames("overflow-y-hidden")}>
        <Head>
          <link
            rel="stylesheet"
            href="https://fonts.xz.style/serve/inter.css"
          />
          <link
            rel="stylesheet"
            href="https://fonts.xz.style/serve/jetbrains-mono.css"
          />
        </Head>
        <body className={classnames("overflow-y-hidden")}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
