import Head from 'next/head';


import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import LandingPage from '../components/LandingPage';
// import Cover from '../components/Cover';
export default function Home() {
  return (
    <div>
      <Navbar />
    <LandingPage />
     <Footer />
    </div>
  );
}
