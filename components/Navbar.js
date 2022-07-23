import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useEffect, useCallback, useRef, Fragment } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { CgCloseR } from 'react-icons/cg';
import { useTheme } from 'next-themes';
import { RiSunFill } from 'react-icons/ri';
import { MdDarkMode } from 'react-icons/md';
import axios from 'axios';
import Avatar from 'react-avatar';
import useSWR from 'swr';
import { Menu, Transition } from '@headlessui/react';

const Navbar = () => {
  const [mounted, SetMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [Navbar, setNavbar] = useState(false);
  const [Ham, setHam] = useState(false);
  const router = useRouter();

  const changeBackground = () => {
    if (window.scrollY > 300) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  const { data, error, isValidating } = useSWR(
    'http://localhost:3000/api/user/userprofile',
    async (apiURL) => await fetch(apiURL).then((res) => res.json())
  );
  console.log(data);
  const [logged, setLogged] = useState(typeof data?.name !== 'undefined');

  useEffect(() => {
    async function logger() {
      if (typeof data?.name !== typeof undefined) {
        setLogged(true);
      } else {
        setLogged(false);
      }
    }

    logger();
  }, [data, error]);

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
  const handleLogout = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:3000/api/logout', {
      withCredentials: true,
    });
    router.reload();
  };

  return (
    <div className="relative ">
      <div
        className={`${
          Navbar
            ? ` w-full  px-3 rounded-b-md justify-between sm:justify-between md:justify-center transition duration-300 bg-gray-400 bg-opacity-90 backdrop-blur-sm ease-in flex h-[60px]  fixed  dark:bg-black/40 shadow-2xl z-[100]`
            : 'flex justify-between sm:justify-between md:justify-center bg-transparent absolute  h-[60px]  w-full mt-1 pr-2  '
        } select-none  `}
      >
        <div className="inset-y-0 my-auto ">
          <Image
            className="object-contain"
            src={require('../images/logo3.png')}
            width={125}
            height={40}
            alt={'logo'}
          />
        </div>
        <div className="  mx-1 flex md:hidden sm:flex order-last justify-center items-center ">
          <GiHamburgerMenu className="cursor-pointer " onClick={toggle} />
        </div>
        <div className="select-none hidden sm:hidden md:flex-1 md:flex justify-center items-center gap-4 font-nunito font-bold  text-sm">
          <div className=" hover:translate-y-[-1px] cursor-pointer active:text-red-600   ">
            <Link href="/findworker"> Find Worker</Link>
          </div>
          <div className="hover:translate-y-[-1px] cursor-pointer active:text-red-600   ">
            <Link href="/findwork">Find Work</Link>
          </div>
          <div className="hover:translate-y-[-1px] cursor-pointer active:text-red-600   ">
            <Link href="/explore">Explore</Link>
          </div>
          <div className="hover:translate-y-[-1px] cursor-pointer active:text-red-600   ">
            <Link href="/blog">Blog</Link>
          </div>
          <div className="hover:translate-y-[-1px] cursor-pointer active:text-red-600   ">
            <Link href="/aboutus">About Us</Link>
          </div>
        </div>
        <div
          className={`${
            Ham
              ? `fixed    md:hidden select-none h-screen  flex flex-col sm:flex-col  order-last  sm:order-last inset-0 left-1/4 uppercase bg-white dark:bg-darkcard    ${
                  !Navbar ? 'backdrop-blur-sm' : ' '
                }  justify-center items-center gap-5 font-nunito font-bold  text-md animate-animate_left_on z-[100]  `
              : 'hidden'
          }`}
        >
          <div
            className="md:hidden  block sm:block cursor-cell font-light "
            onClick={toggle}
          >
            <CgCloseR className="text-white text-3xl" />
          </div>

          <div className="hover:translate-y-[-1px]  cursor-pointer active:text-red-600   ">
            <Link href="/findworker"> Find Worker</Link>
          </div>
          <div className="hover:translate-y-[-1px] cursor-pointer active:text-red-600   ">
            <Link href="/">Find Work</Link>
          </div>
          <div className="hover:translate-y-[-1px] cursor-pointer active:text-red-600   ">
            <Link href="/">Explore</Link>
          </div>
          <div className="hover:translate-y-[-1px] cursor-pointer active:text-red-600   ">
            <Link href="/">Blog</Link>
          </div>
          <div className="hover:translate-y-[-1px] cursor-pointer active:text-red-600   ">
            <Link href="/">About Us</Link>
          </div>
          <div className={`${logged ? 'hidden' : ' '}`}>
            <Link href="/login">
              <>Apply as Freelancer</>
            </Link>
          </div>
        </div>

        <div className="select-none  flex my-[0.46rem] gap-3">
          <div
            className={`${
              Navbar
                ? 'text-white flex justify-center items-center border-2 font-medium shadow-sm border-indigo-600 rounded-md px-2 hover:bg-indigo-700 hover:text-white  '
                : 'flex justify-center items-center border-2 font-medium shadow-sm border-indigo-600 rounded-md px-2 hover:bg-indigo-700 hover:text-white text-black dark:text-white'
            } ${
              logged ? 'hidden' : ' '
            } font-nunito font-bold whitespace-nowrap 
   `}
          >
            <Link href="/login"> Login</Link>
          </div>

          <button
            className=" rounded-full  p-1 md:order-first transition ease-in-out duration-200"
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          >
            {theme === 'light' ? <MdDarkMode /> : <RiSunFill />}
          </button>
          <div
            className={`${
              logged ? 'flex hover:cursor-pointer z-[10]' : 'hidden'
            }`}
          >
            <Menu
              as="div"
              className="relative inline-block text-left place-self-center"
            >
              <div>
                <Menu.Button className="inline-flex w-full justify-center items-center  ">
                  <Avatar
                    name={data?.name?.split(' ')[0]}
                    size="31px"
                    textSizeRatio={3}
                    className="rounded-full "
                  ></Avatar>
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="transform opacity-0 scale-195"
                enterTo="transform opacity-100 scale-200"
                leave="transition ease-in duration-175"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-195"
              >
                <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-200 dark:divide-gray-700 rounded-md shadow-xl ring-1 ring-black ring-opacity-5 focus:outline-none bg-white dark:bg-darkcard">
                  <div className="flex flex-col items-center py-2 gap-1 bg-gray-300">
                    <Avatar
                      name={data?.name?.split(' ')[0]}
                      size="40px"
                      textSizeRatio={3}
                      className="rounded-full"
                    ></Avatar>
                    <div className="capitalize font-semibold text-gray-800 dark:text-gray-400">
                      {data?.name}
                    </div>
                    <span className="text-sm text-gray-600 dark:text-gray-500">
                      @{data?.username}
                    </span>
                  </div>

                  <div className="px-1 py-1 bg-gray-200 dark:bg-darkcard rounded-b-md  font-nunito ">
                    <Menu.Item>
                      {({ active }) => (
                        <div
                          className={`${
                            active
                              ? 'bg-indigo-600 text-white'
                              : 'dark:text-gray-400 text-gray-800'
                          }  flex w-full items-center group-hover:bg-indigo-800 hover:cursor-pointer hover:bg-indigo-300   rounded-md px-2 py-2 text-sm`}
                        >
                          <Link href="/employee/profile">Dashboard</Link>
                        </div>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <div
                          className={`${
                            active
                              ? 'bg-indigo-600 text-white'
                              : 'dark:text-gray-400 text-gray-800'
                          }  flex w-full items-center group-hover:bg-indigo-800  hover:bg-indigo-300   rounded-md px-2 py-2 text-sm`}
                        >
                          <Link href="/employee/profile">My Profile</Link>
                        </div>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <div
                          className={`${
                            active
                              ? 'bg-indigo-600 text-white'
                              : 'dark:text-gray-400 '
                          }  flex w-full items-center group-hover:bg-indigo-800 hover:cursor-pointer hover:bg-indigo-300   rounded-md px-2 py-2 text-sm`}
                        >
                          <Link href="/employee/profile">Applied Jobs</Link>
                        </div>
                      )}
                    </Menu.Item>

                    <Menu.Item>
                      {({ active }) => (
                        <div
                          className={`${
                            active
                              ? 'bg-indigo-600 text-white'
                              : 'dark:text-gray-400 text-gray-800'
                          }  flex w-full items-center group-hover:bg-indigo-800 hover:cursor-pointer hover:bg-indigo-300   rounded-md px-2 py-2 text-sm`}
                        >
                          <Link href="/employee/profile">Favourite Jobs</Link>
                        </div>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <div
                          onClick={handleLogout}
                          className={`${
                            active
                              ? 'bg-indigo-600 text-white'
                              : 'dark:text-gray-400 text-gray-800'
                          }  flex w-full items-center group-hover:bg-indigo-800 hover:cursor-pointer hover:bg-indigo-300   rounded-md px-2 py-2 text-sm`}
                        >
                          Logout
                        </div>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
