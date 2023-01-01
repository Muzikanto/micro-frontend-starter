import type { AppProps } from 'next/app'
import React from "react";
import {DefaultSeo} from "next-seo";

export default function App({ Component, pageProps }: AppProps & {Component: {getLayout?: React.FC}}) {
  const getLayout = Component.getLayout || ((page) => page)

  return <>
    <DefaultSeo/>
    {getLayout(<Component {...pageProps} />)}
    </>
}
