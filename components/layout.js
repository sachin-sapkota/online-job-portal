import Navbar from './Navbar';
import Footer from './Footer';
import { useRouter } from 'next/router';
const layout = ({ children }) => {
  const route = useRouter();
  const path = route.pathname;
  return (
    <div>
      <Navbar />
      {children}
      {path === '/' ? <Footer /> : null}
    </div>
  );
};

export default layout;
