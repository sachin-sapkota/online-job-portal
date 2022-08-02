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
import toast, { Toaster } from 'react-hot-toast';
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

  useEffect(() => {
    window.addEventListener('scroll', changeBackground);
    SetMounted(true);
  }, []);
  const escFunction = useCallback((event) => {
    if (event.keyCode === 27) {
      setHam(false);
    }
  }, []);
  const { data, error, isValidating } = useSWR(
    'http://localhost:3000/api/user/userprofile',
    async (apiURL) => await fetch(apiURL).then((res) => res.json())
  );
  const [logged, setLogged] = useState(typeof data?.data?.name !== 'undefined');

  useEffect(() => {
    document.addEventListener('keydown', escFunction);

    return () => {
      document.removeEventListener('keydown', escFunction);
    };
  }, [escFunction]);

  const toggle = () => {
    setHam(!Ham);
  };

  const handleLogout = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:3000/api/user/logout', {
      withCredentials: true,
    });
    router.reload();
  };

  useEffect(() => {
    if (typeof data !== typeof undefined) {
      if (data?.data?.name !== undefined) {
        setLogged(true);
      } else {
        setLogged(false);
      }
    }
    if (error) {
      setLogged(false);
    }
  }, [data, error, isValidating]);
  if (!mounted) {
    return null;
  }
  console.log(data);
  return (
    <div className="relative ">
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={6}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          className: '',
          duration: 1000,
          style: {
            background: '#363636',
            color: '#fff',
          },

          success: {
            duration: 3000,
            theme: {
              primary: 'green',
              secondary: 'black',
            },
          },
        }}
      />
      <div
        className={`${
          Navbar
            ? ` w-full ring-1 ring-opacity-5 ring-gray-300/80 dark:ring-gray-800/10 py-1  px-3 justify-between sm:justify-between md:justify-center transition duration-300 bg-whiteback bg-opacity-90 backdrop-blur-sm ease-in flex h-[65px]  fixed  dark:bg-black/40 shadow-2xl z-[100]`
            : 'flex justify-between sm:justify-between md:justify-center bg-transparent absolute  h-[70px] py-1  w-full mt-1 pr-2  '
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
          <div
            className={`${
              data?.data?.usertype === 'employee' ? 'hidden' : ''
            } hover:translate-y-[-1px] cursor-pointer active:text-red-600   `}
          >
            <Link href="/findworker"> Find Worker</Link>
          </div>
          <div
            className={`${
              data?.data?.usertype === 'employer' ? 'hidden' : ''
            } hover:translate-y-[-1px] cursor-pointer active:text-red-600   `}
          >
            <Link href="/findjob">Find Work</Link>
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
            className="md:hidden  block sm:block  font-light "
            onClick={toggle}
          >
            <CgCloseR className="dark:text-white text-black text-3xl" />
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
                ? 'text-gray-900 dark:text-white font-bold flex justify-center items-center border-2  shadow-sm border-indigo-600 rounded-md px-2 hover:bg-indigo-700 hover:text-white  '
                : 'flex justify-center items-center border-2 font-medium shadow-sm border-indigo-600 rounded-md px-2 hover:bg-indigo-700 hover:text-white text-black dark:text-white'
            } ${
              logged ? 'hidden' : ' '
            } font-nunito font-bold whitespace-nowrap text-lg
   `}
          >
            <Link href="/login"> Login</Link>
          </div>

          <button
            className=" rounded-full inset-y-0 my-auto  p-1 md:order-first transition linear duration-200"
            onClick={() => {
              setTheme(theme === 'light' ? 'dark' : 'light');
              toast(
                theme === 'light'
                  ? 'Dark mode enabled!'
                  : 'Light mode enabled!',
                {
                  icon: '👏',
                  style: {
                    borderRadius: '10px',
                    background: '#333',
                    color: '#fff',
                  },
                }
              );
            }}
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
                    name={data?.data?.name?.split(' ')[0]}
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
                <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-200 overflow-hidden dark:divide-gray-700 rounded-md shadow-xl ring-1 ring-black ring-opacity-5 focus:outline-none bg-black/20 backdrop-blur-sm">
                  <div className="flex flex-col items-center py-2 gap-1 bg-gray-300/80 dark:bg-black/70 backdrop-blur-sm">
                    <Avatar
                      name={data?.data?.name?.split(' ')[0]}
                      size="40px"
                      textSizeRatio={3}
                      className="rounded-full"
                    ></Avatar>
                    <div className="capitalize font-semibold text-gray-800 dark:text-gray-300">
                      {data?.data?.name}
                    </div>
                    <span className="text-sm text-gray-600 dark:text-gray-500">
                      @{data?.data?.username}
                    </span>
                  </div>

                  <div className="px-1 py-1 bg-gray-200 dark:bg-footer rounded-b-md  font-nunito ">
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
