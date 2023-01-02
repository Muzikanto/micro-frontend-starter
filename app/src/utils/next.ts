import { NextPage } from 'next';

export type AppPage = NextPage & { getLayout?: (children: JSX.Element) => JSX.Element };
