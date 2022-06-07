import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [Navbar, setNavbar] = useState(false);
  const changeBackground = () => {
    if (window.scrollY > 300) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', changeBackground);
  }, []);

  return (
    <div
      className={`${
        Navbar
          ? ' transition duration-300 bg-black bg-opacity-30 backdrop-blur-sm ease-in flex h-12 fixed w-full shadow-lg z-10 text-white '
          : 'flex bg-transparent absolute  h-12  w-full mt-2 pr-2 '
      }`}
    >
      <div className="cursor-pointer select-none flex border-transparent bg-indigo-800 text-white items-center rounded-md m-2 px-2 py-1 text-xl font-bold font-sans tracking-wide ">
        Job Xa
        {/* <Image src={require('../images/logo.png')} width={100} height={100} alt={'logo'} /> */}
      </div>
      <div className="select-none flex-1 flex justify-center items-center gap-4 font-sans font-semibold font-sm">
        <div className="  ">Find Worker</div>
        <div className="  ">Find Work</div>
        <div className=" ">Explore</div>
        <div className=" ">Blog</div>
        <div className=" ">About Us</div>
      </div>
      <div className="select-none flex my-[0.46rem] gap-3">
       <div className='flex items-center whitespace-nowrap font-medium'>
        <Link className="" href="/login">
          Apply as Freelancer
        </Link>
        </div>

        <a
          href="#"
          className="w-full flex items-center justify-center px-2 py-1 border border-transparent rounded-md shadow-sm  font-medium text-white bg-indigo-600 hover:bg-indigo-700"
        >
          Hire Top Talent
        </a>
        <div
          className={`${
            Navbar
              ? 'text-white flex justify-center items-center border-2 font-medium shadow-sm border-indigo-600 rounded-md px-2 hover:bg-indigo-700 hover:text-white  '
              : 'flex justify-center items-center border-2 font-medium shadow-sm border-indigo-600 rounded-md px-2 hover:bg-indigo-700 hover:text-white text-black'
          }`}
        >
          <a href="#" className="  whitespace-nowrap ">
            Sign in
          </a>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
