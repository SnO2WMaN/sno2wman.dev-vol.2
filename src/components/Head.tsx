import Head from "next/head";
import React from "react";

type Props = Partial<{
  title: string;
  description: string;
  keyword: string[];
  url: string;
}>;

const Header: React.FC<Props> = ({ title, description, keyword, url }) => (
  <>
    <Head>
      {title && (
        <>
          <title>{title}</title>
          <meta property="og:title" content={title} />
          <meta property="og:site_name" content={title} />
          <meta name="twitter:title" content={title} />
        </>
      )}
      {description && (
        <>
          <meta property="og:description" content={description} />
          <meta name="twitter:description" content={description} />
        </>
      )}
      {keyword && (
        <>
          <meta name="keywords" content={keyword.join(",")} />
        </>
      )}
      {url && (
        <>
          <meta property="og:url" content={url} />
          <link rel="canonical" href={url} />
        </>
      )}
      <link rel="shortcut icon" href="https://sno2wman.dev/favicon.png" />
      <meta name="twitter:url" content="https://sno2wman.dev/ogp.png" />
      <meta property="og:image" content="https://sno2wman.dev/ogp.png" />
      <meta name="twitter:image" content="https://sno2wman.dev/ogp.png" />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@SnO2WMaN" />
    </Head>
  </>
);
export default Header;
