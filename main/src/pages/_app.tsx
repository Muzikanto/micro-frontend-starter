import type { AppProps } from 'next/app'
import React from "react";
import {DefaultSeo} from "next-seo";

export default function App({ Component, pageProps }: AppProps) {
  return <>
    <DefaultSeo/>
    <Component {...pageProps} />
    </>
}
