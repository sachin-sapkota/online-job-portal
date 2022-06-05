import Image from 'next/image';
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
          ? ' transition duration-300 bg-black bg-opacity-10 backdrop-blur-sm ease-in flex h-12 fixed w-full shadow-md '
          : 'flex bg-transparent absolute  h-12  w-full   '
      }`}
    >
      <div className="flex border-transparent bg-indigo-800 text-white items-center rounded-md m-2 px-2 py-1 text-xl font-bold font-sans tracking-wide ">
        Job Xa
        {/* <Image src={require('../images/logo.png')} width={100} height={100} alt={'logo'} /> */}
      </div>
      <div className="flex-1 flex justify-center items-center gap-4 font-sans font-bold">
        <div className="  ">Find Worker</div>
        <div className="  ">Find Work</div>
        <div className=" ">Explore</div>
      </div>
      <div className=" flex my-[0.46rem] gap-3">
        <a
          href="#"
          className="w-full flex items-center justify-center px-2 py-1 border border-transparent rounded-md shadow-sm  font-medium text-white bg-indigo-600 hover:bg-indigo-700"
        >
          Sign up
        </a>
        <div className='flex justify-center items-center border-2 font-medium shadow-sm border-indigo-600 rounded-md px-2 hover:bg-indigo-700 hover:text-white'>
          <a href="#" className="  whitespace-nowrap ">
            Sign in
          </a>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
