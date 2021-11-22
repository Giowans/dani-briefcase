import { useCallback } from "react";
import Head from "next/head";
import PageLayout from "../src/layout/PageLayout/PageLayout";
import "../src/styles/global.css";

function MyApp({ Component, pageProps }) {
  const ParentComponent = useCallback(({ children }) => {
    return (
      <>
        <Head>
          <title>Daniel Aranda</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <PageLayout>{children}</PageLayout>
      </>
    );
  }, []);

  return (
    <ParentComponent {...pageProps}>
      <Component {...pageProps} />
    </ParentComponent>
  );
}

export default MyApp;
