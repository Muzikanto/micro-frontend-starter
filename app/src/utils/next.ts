import { NextPage } from 'next';
import React from 'react';
import { AppContext, AppProps } from 'next/app';
import { AppInitialProps } from 'next/dist/shared/lib/utils';

export type AppPage = NextPage & { getLayout?: (children: JSX.Element) => JSX.Element };
export type AppRoot = React.FC<AppProps & { Component: AppPage; theme: string; lang: string }> & {
  getInitialProps: (ctx: AppContext) => Promise<AppInitialProps>;
};
