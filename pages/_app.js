import '../styles/globals.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import { ThemeProvider } from 'next-themes';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Layout from '../components/Layout';
export default function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChangeError = (err, url) => {
      if (err.cancelled) {
        console.log(`Route to ${url} was cancelled!`);
      }
    };

    router.events.on('routeChangeError', handleRouteChangeError);

    return () => {
      router.events.off('routeChangeError', handleRouteChangeError);
    };
  }, []);
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <ThemeProvider attribute="class">
      <Layout>{getLayout(<Component {...pageProps} />)}</Layout>
    </ThemeProvider>
  );
}

// const router = useRouter();
// if (router.pathname.startsWith("/employee") && role !== "employee") {
//   allowed = false;
// }
// if (router.pathname.startsWith("/customer") && role !== "customer") {
//   allowed = false;
// }
// const ComponentToRender = allowed ? Component : Home;
// return <ComponentToRender {...pageProps} />
