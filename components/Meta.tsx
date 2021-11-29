import Head from "next/head";

type MetaPropTypes = {
  title: string;
  description: string;
  keywords: string[];
  image?: string;
  url?: string;
};

const HeadMeta = (props: MetaPropTypes) => {
  return (
    <Head>
      <title>{props.title}</title>
      <meta name="description" content={props.description} />
      <meta property="og:type" content="website" />
      <meta name="og:title" property="og:title" content={props.title} />
      <meta
        name="og:description"
        property="og:description"
        content={props.description}
      />
      <meta property="og:url" content={props.url || "https://internnova.co"} />
      <meta
        property="og:image"
        content={props.image || "https://www.internnova.co/assets/img/logo.png"}
      />

      <meta name="twitter:card" content="app" />
      <meta name="twitter:title" content={props.title} />
      <meta name="twitter:description" content={props.description} />
      <meta
        name="twitter:site"
        content={props.url || "https://internnova.co"}
      />
      <meta
        property="twitter:image"
        content={props.image || "https://www.internnova.co/assets/img/logo.png"}
      />

      <meta name="keywords" content={props.keywords.join(", ")} />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="canonical" href={props.url || "https://internnova.co"} />
    </Head>
  );
};

export default HeadMeta;
