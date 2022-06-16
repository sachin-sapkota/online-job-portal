import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, useCallback } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { CgCloseR } from 'react-icons/cg';
import { useTheme } from 'next-themes';
import { RiSunFill } from 'react-icons/ri';
import { MdDarkMode } from 'react-icons/md';

const Navbar = () => {
  const [mounted, SetMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [Navbar, setNavbar] = useState(false);
  const [Ham, setHam] = useState(false);
  const changeBackground = () => {
    if (window.scrollY > 300) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeBackground);
    SetMounted(true);
  }, []);
  const escFunction = useCallback((event) => {
    if (event.keyCode === 27) {
      setHam(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener('keydown', escFunction);

    return () => {
      document.removeEventListener('keydown', escFunction);
    };
  }, [escFunction]);

  const toggle = () => {
    setHam(!Ham);
  };
  if (!mounted) {
    return null;
  }
  return (
    <div
      className={`${
        Navbar
          ? `  justify-between sm:justify-between md:justify-center transition duration-300 bg-black bg-opacity-30 backdrop-blur-sm ease-in flex h-12  w-full shadow-lg fixed text-white dark:bg-black/40 z-[100]`
          : 'flex justify-between sm:justify-between md:justify-center bg-transparent absolute  h-12  w-full mt-2 pr-2 z-[100] '
      } `}
    >
      <div className="min-w-[82px] cursor-pointer select-none flex border-transparent bg-indigo-800 text-white items-center rounded-md m-2 px-2 py-1 text-xl font-bold font-sans tracking-wide ">
        <Link href="/"> Job Xa</Link>
        {/* <Image src={require('../images/logo.png')} width={100} height={100} alt={'logo'} /> */}
      </div>
      <div className="  mx-1 flex md:hidden sm:flex order-last justify-center items-center ">
        <GiHamburgerMenu className="cursor-pointer " onClick={toggle} />
      </div>
      <div className="select-none hidden sm:hidden md:flex-1 md:flex justify-center items-center gap-4 font-sans font-semibold font-sm">
        <div className="hover:translate-y-[-1px] cursor-pointer active:text-red-600   ">
          <Link href="/findworker"> Find Worker</Link>
        </div>
        <div className="  ">Find Work</div>
        <div className=" ">Explore</div>
        <div className=" ">Blog</div>
        <div className=" ">About Us</div>
      </div>
      <div
        className={`${
          Ham
            ? `fixed  bottom-0  md:hidden select-none h-[440px] sm:rounded-bl-[250px] rounded-bl-[180px]  flex flex-col sm:flex-col  order-last  sm:order-last inset-0 left-1/4 uppercase bg-black/60 backdrop-blur-sm   ${
                !Navbar ? 'backdrop-blur-sm' : 'backdrop-blur-none'
              } text-white  justify-center items-center gap-4 font-sans font-semibold font-sm animate-animate_left  `
            : 'hidden'
        }`}
      >
        <div
          className="md:hidden  block sm:block cursor-cell font-light"
          onClick={toggle}
        >
          <CgCloseR className="text-white text-3xl" />
        </div>

        <div className="  ">Find Worker</div>
        <div className="  ">Find Work</div>
        <div className=" ">Explore</div>
        <div className=" ">Blog</div>
        <div className=" ">About Us</div>
        <div className="md:hidden ">Apply as Freelancer</div>
        <div className="md:hidden ">Hire Top Talent</div>
      </div>

      <div className="select-none  flex my-[0.46rem] gap-3">
        <div className="hidden sm:hidden md:hidden lg-block whitespace-nowrap font-semibold">
          <Link className="" href="/login">
            Apply as Freelancer
          </Link>
        </div>

        <a
          href="#"
          className="min-w-[127px] flex items-center justify-center px-2 py-1 border border-transparent rounded-md shadow-sm  font-medium text-white bg-indigo-600 hover:bg-indigo-700"
        >
          Hire Top Talent
        </a>
        <div
          className={`${
            Navbar
              ? 'text-white flex justify-center items-center border-2 font-medium shadow-sm border-indigo-600 rounded-md px-2 hover:bg-indigo-700 hover:text-white  '
              : 'flex justify-center items-center border-2 font-medium shadow-sm border-indigo-600 rounded-md px-2 hover:bg-indigo-700 hover:text-white text-black dark:text-white'
          }`}
        >
          <a href="#" className="  whitespace-nowrap  ">
            Sign in
          </a>
        </div>
        <button
          className="md:order-first transition ease-in-out duration-500"
          onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        >
          {' '}
          {theme === 'light' ? <MdDarkMode /> : <RiSunFill />}
        </button>
      </div>
    </div>
  );
};
export default Navbar;
