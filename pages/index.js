import Head from 'next/head';
import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import LandingPage from '../components/LandingPage';
import axios from 'axios';
// import Cover from '../components/Cover';
export default function Home() {
  // useEffect(() => {
  //   const getData = () => {
  //     const data = axios.get('/').then((res) => res.data);
  //     console.log(data);
  //   };
  //   getData();
  // }, []);

  return (
    <div className="">
      <Head>
        <title>Job Xa</title>
      </Head>

      <LandingPage />
    </div>
  );
}
