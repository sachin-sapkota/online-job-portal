import '../styles/globals.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import { ThemeProvider } from 'next-themes';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Layout from '../components/Layout';
import useSWR from 'swr';
import api from '../api/api';
import Image from 'next/image';
import SyncLoader from 'react-spinners/SyncLoader';

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();
  console.log(router.pathname);
  const fetcher = async (url) => api.get(url).then((res) => res.data);

  const { data, error } = useSWR('api/user/getusertype', fetcher);

  useEffect(() => {
    router.prefetch('/');
  }, []);

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

  if (!data && !error)
    return (
      <div className="flex items-center justify-center h-screen w-screen">
        <SyncLoader />
      </div>
    );
  const getLayout = Component.getLayout || ((page) => page);
  const load = () => {
    router.push('/');
  };
  var allowed = true;
  if (data?.success) {
    if (router.pathname.startsWith('/employee/') && data?.data !== 'employee') {
      allowed = false;
    }
    if (
      router.pathname.startsWith('/employers/') &&
      data?.data !== 'employer'
    ) {
      allowed = false;
    }
  } else {
    if (router.pathname.startsWith('/employee/')) {
      allowed = false;
    }
    if (router.pathname.startsWith('/employers/')) {
      allowed = false;
    }
  }
  return (
    <ThemeProvider attribute="class">
      {allowed ? (
        <Layout>{getLayout(<Component {...pageProps} />)}</Layout>
      ) : (
        <Layout>
          <div className="w-screen h-screen grid grid-cols-1 md:grid-cols-2 place-items-center pt-5 place-content-center">
            <div className="w-[300px] h-[300px] lg:w-[400px] md:h-[400px]">
              <Image
                className="object-contain  w-[100px] h-[100px] lg:w-[400px] md:h-[400px]"
                src={require('../images/Image.png')}
              />
            </div>

            <div className="flex flex-col items-center gap-1 px-4">
              <span className=" text-3xl md:text-6xl font-black text-center  ">
                Oops!
              </span>
              <span className=" text-3xl md:text-6xl font-black text-center   ">
                404 Page Not Found...
              </span>
              <span className="md:text-xl text-lg  font-semibold text-center ">
                We can't seem to find the page you are looking for.
              </span>
              <div className="flex gap-5 mt-8">
                <button
                  onClick={() => router.push('/')}
                  className="rounded-xl py-3 px-5 text-white dark:text-black bg-black dark:bg-blue-500 shadow-md font-bold  "
                >
                  Home
                </button>
                <button
                  onClick={() => router.back()}
                  className="rounded-xl py-3 px-5 text-white dark:text-black bg-black dark:bg-blue-500 shadow-md font-bold  "
                >
                  Go Back
                </button>
              </div>
            </div>
          </div>
        </Layout>
      )}
    </ThemeProvider>
  );
}
