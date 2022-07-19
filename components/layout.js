import Navbar from './Navbar';
import Footer from './Footer';
import { useRouter } from 'next/router';
import Commandp from './Commandp';

const Layout = ({ children }) => {
  const route = useRouter();
  console.log(route);

  return (
    <div>
      <Commandp />
      {route.pathname === '/' || '/findjob' ? <Navbar /> : ''}

      {children}
      {route.pathname === '/' ? <Footer /> : ''}
    </div>
  );
};

export default Layout;
