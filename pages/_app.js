import '../styles/globals.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import { ThemeProvider } from 'next-themes';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Layout from '../components/Layout';
import useSWR from 'swr';
import api from '../api/api';
import errorpage from './errorpage';

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();
  console.log(router.pathname);
  const fetcher = async (url) => api.get(url).then((res) => res.data);

  const { data, error } = useSWR('api/user/getusertype', fetcher);
  var allowed = true;
  if (error) {
    router.push('/');
  }
  if (!data && typeof data === undefined) return <div>'Loading...'</div>;

  if (router.pathname.startsWith('/employee/') && data?.data !== 'employee') {
    allowed = false;
  }
  if (router.pathname.startsWith('/employers/') && data?.data !== 'employer') {
    allowed = false;
  }

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
  const ComponentToRender = allowed ? Component : errorpage;
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <ThemeProvider attribute="class">
      <Layout>{getLayout(<ComponentToRender {...pageProps} />)}</Layout>
    </ThemeProvider>
  );
}
