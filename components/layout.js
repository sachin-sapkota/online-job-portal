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
      {path === '/' ? <Navbar /> : ''}

      {children}
      {path === '/' ? <Footer /> : null}
    </div>
  );
};

export default Layout;
