import Navbar from './Navbar';
import Footer from './Footer';
import { useRouter } from 'next/router';
import Commandp from './Commandp';

const Layout = ({ children }) => {
  const route = useRouter();

  // const Navbarlinks = ['/', '/findjob', '/blogs', '/about', '/findpeople'];
  return (
    <div>
      <Commandp />
      {route.pathname.startsWith('/employee') ||
      route.pathname.startsWith('/employer') ? (
        ''
      ) : (
        <Navbar />
      )}

      {children}
      {route.pathname === '/' ? <Footer /> : ''}
    </div>
  );
};

export default Layout;
