import Navbar from './Navbar';
import Footer from './Footer';
import { useRouter } from 'next/router';
import Commandp from './Commandp';

const Layout = ({ children }) => {
  const route = useRouter();
  const path = route.pathname;
  return (
    <div>
      <Commandp />
      <Navbar />

      {children}
      <Footer />
    </div>
  );
};

export default Layout;
