import '../styles/globals.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import { ThemeProvider } from 'next-themes';
import Layout from '../components/Layout';

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
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
