import Head from 'next/head';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen w-full"></div> <Footer />
    </div>
  );
}
