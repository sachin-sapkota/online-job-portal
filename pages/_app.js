import '../styles/globals.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import { ThemeProvider } from 'next-themes';

export default function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <ThemeProvider attribute="class">
      {getLayout(<Component {...pageProps} />)}
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
