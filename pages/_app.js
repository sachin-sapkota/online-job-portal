import '../styles/globals.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import { ThemeProvider } from 'next-themes';
import Layout from '../components/Layout';
import Head from 'next/head';
// import Avatar, { Cache, ConfigProvider } from 'react-avatar';

// const cache = new Cache({
//   // Keep cached source failures for up to 7 days
//   sourceTTL: 7 * 24 * 3600 * 1000,

//   // Keep a maximum of 20 entries in the source cache
//   sourceSize: 20,
// });

function MyApp({ Component, pageProps }) {
  return (
    // <ConfigProvider cache={cache}>
    <ThemeProvider attribute="class">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito&family=Ubuntu&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
