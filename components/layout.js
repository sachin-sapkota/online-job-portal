import Navbar from './Navbar';
import Footer from './Footer';
import { useRouter } from 'next/router';
import Commandp from './Commandp';

const Layout = ({ children }) => {
  const route = useRouter();

  const Navbarlinks = ['/', '/findjob', '/blogs', '/about', '/findpeople'];
  return (
    <div>
      <Commandp />
      {Navbarlinks.includes(route.pathname) ? <Navbar /> : ''}

      {children}
      {route.pathname === '/' ? <Footer /> : ''}
    </div>
  );
};

export default Layout;
