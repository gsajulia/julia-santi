import RootLayout from "@/layout";
import "../globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RootLayout>
      <Head>
        <title>Júlia</title>
        <link rel="icon" href="/profile-cartoon.png" />
      </Head>
      <Component {...pageProps} />
    </RootLayout>
  );
}

export default MyApp;
