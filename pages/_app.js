import Head from 'next/head';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
      <link rel="icon" type="image/svg+xml" href="/icons/favicon.ico" />
        <title>Standard chartered</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
