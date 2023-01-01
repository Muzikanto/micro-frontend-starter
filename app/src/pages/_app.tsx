import type { AppProps } from 'next/app';
import React from 'react';
import { DefaultSeo } from 'next-seo';
import { AppPage } from '../utils/next';

export default function App({ Component, pageProps }: AppProps & { Component: AppPage }) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <>
      <DefaultSeo />

      {getLayout(<Component {...pageProps} />)}
    </>
  );
}
