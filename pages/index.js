import Head from 'next/head';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import LandingPage from '../components/LandingPage';
// import Cover from '../components/Cover';
export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Job Xa</title>
      </Head>
      <Navbar />
      <LandingPage />
      <Footer />
    </div>
  );
}
