import dynamic from 'next/dynamic';
import { AppPage } from '../utils/next';
import { internalFunc } from 'ui-utils';
import { Example } from 'ui-kit';
import Layout from '../components/Layout/Layout';

// @ts-ignore
const SharedComponent = dynamic(() => import('shared/shared-component'), {
  ssr: true,
});

const Home: AppPage = function () {
  return (
    <>
      <p>Main content</p>

      <SharedComponent />

      <Example />

      <p>{internalFunc()}</p>
    </>
  );
};

Home.getLayout = (children) => <Layout>{children}</Layout>;

export default Home;
