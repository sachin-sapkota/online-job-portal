import Head from 'next/head';
import LandingPage from '../components/LandingPage';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Job Xa</title>
      </Head>
      <LandingPage />
    </Layout>
  );
}
