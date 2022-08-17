// import { useState, useEffect, useCallback } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';

// import { HiOutlineMenuAlt1 } from 'react-icons/hi';
// import { GiHamburgerMenu } from 'react-icons/gi';
// import { GrClose } from 'react-icons/gr';
// import { ImSun } from 'react-icons/im';
// import { useTheme } from 'next-themes';
// import { FaRegBell } from 'react-icons/fa';
import { dashboard } from '../../variables/variables';

// const DashLayout = ({ children, active }) => {
//   const [mounted, SetMounted] = useState(false);
//   const [Navbar, setNavbar] = useState(false);
//   const [lock, setlock] = useState(false);
//   const [isshow, setisshow] = useState(false);
//   const { theme, setTheme } = useTheme('light');
//   const escFunction = useCallback((event) => {
//     if (event.keyCode === 27) {
//       setisshow(false);
//     }
//   }, []);
//   console.log(theme);
//   const changeBackground = () => {
//     if (window.scrollY > 15) {
//       setNavbar(true);
//     } else {
//       setNavbar(false);
//     }
//   };
//   useEffect(() => {
//     SetMounted(true);
//     return () => SetMounted(false);
//   }, []);
//   console.log('hello this is rendered again');
//   useEffect(() => {
//     window.addEventListener('scroll', changeBackground);
//   }, []);

//   useEffect(() => {
//     document.addEventListener('keydown', escFunction);

//     return () => {
//       document.removeEventListener('keydown', escFunction);
//     };
//   }, [escFunction]);
//   if (!mounted) {
//     return null;
//   }
//   return (
//     <div className="flex relative font-nunito  h-auto w-full bg-whiteback dark:bg-darkback  ">
//       <div
//         onMouseEnter={() => {
//           !lock && !isshow ? setisshow(true) : '';
//         }}
//         onMouseLeave={() => {
//           !lock && isshow ? setisshow(false) : '';
//         }}
//         className={`

//          ${isshow ? 'w-[280px]  ' : 'w-0 lg:w-[70px]'}
//          ${
//            lock && isshow
//              ? 'shadow-none sticky top-0 left-0'
//              : ' shadow-lg dark:shadow-white/30 '
//          }
//          ${lock ? '' : 'fixed left-0 top-0'}
//         bg-whiteback dark:bg-darkback flex-none flex flex-col   h-[100vh]  overflow-hidden  transition-all duration-300 ease-in-out backdrop-blur-sm z-[100] `}
//       >
//         <div className="min-w-[89px] px-2  object-contain flex items-center py-2 justify-between transition-all duration-300 delay-400 ease-linear ">
//           {isshow ? (
//             <div className="flex-none">
//               <Image
//                 className=" object-contain cursor-pointer"
//                 src={require('../../images/logo3.png')}
//                 height={45}
//                 alt={'logo'}
//               />
//             </div>
//           ) : (
//             <div className="flex-none">
//               <Image
//                 className="object-contain cursor-pointer"
//                 src={require('../../images/smalllogo.png')}
//                 width={45}
//                 height={45}
//                 alt={'logo'}
//               />
//             </div>
//           )}
//           <div
//             className={`${
//               isshow
//                 ? 'hidden xl:flex xl:justify-center xl:items-center dark:text-white text-gray-800  rounded-full ring-2 ring-gray-800 dark:ring-white p-1 cursor-pointer'
//                 : 'hidden'
//             }`}
//             onClick={() => setlock(!lock)}
//           >
//             <HiOutlineMenuAlt1 className="w-6 h-6 " />
//           </div>
//         </div>
//         <div className="pr-5 xl:pr-4 flex flex-col gap-2 mt-7 ">
//           {dashboard.map((item) => {
//             return (
//               <Link key={item.id} href={item.links}>
//                 <div
//                   key={item.id}
//                   className={`py-2 px-3 flex gap-4 items-center cursor-pointer overflow-hidden  ${
//                     active === item.id
//                       ? 'bg-gradient-to-r from-color1 to-active  '
//                       : ''
//                   } rounded-r-3xl hover:bg-black/20  `}
//                 >
//                   <div className="">{item.icon}</div>
//                   <div className="overflow-hidden whitespace-nowrap text-[15px] font-nunito font-semibold  text-gray-600 dark:text-gray-200">
//                     {item?.title}
//                   </div>
//                 </div>
//               </Link>
//             );
//           })}
//           <div className=""></div>
//         </div>
//       </div>
//       <div
//         className={`  ${
//           isshow && lock ? 'p-0 ' : 'pl-0 lg:pl-[80px]'
//         } flex flex-col w-full `}
//       >
//         {/*
//     navbar conatiner
//     */}

//         <div
//           className={`${
//             Navbar
//               ? ' rounded-b-xl   backdrop-blur-sm dark:bg-darkcard/80 bg-white/80 shadow-md'
//               : ''
//           } gap-2 z-10 sticky  top-0 flex w-full justify-between transition-all duration-100 ease-in-out delay-100 items-center h-[67px]  `}
//         >
//           <div
//             onClick={() => setisshow(!isshow)}
//             className="lg:invisible  flex-none object-contain rounded-full p-2 transition-all duration-300 cursor-pointer   "
//           >
//             <div className="flex-none flex items-center justify-center">
//               <Image
//                 className="object-contain cursor-pointer"
//                 src={require('../../images/smalllogo.png')}
//                 width={45}
//                 height={45}
//                 alt={'logo'}
//               />
//             </div>
//           </div>
//           <div className="flex items-center gap-6 px-2 ">
//             <div
//               className=" rounded-full  dark:text-gray-400 text-gray-800 hover:bg-white/10  p-1 md:order-first transition ease-in-out duration-500"
//               onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
//             >
//               {theme === 'light' ? (
//                 <ImSun className="  w-6  h-6 " />
//               ) : (
//                 <ImSun className="text-gray-800  dark:text-gray-400 w-6  h-6 " />
//               )}
//             </div>

//             <div className="text-gray-800 dark:text-gray-400">
//               <FaRegBell className="w-6 h-6" />
//             </div>

//             <div className="rounded-full p-2 bg-gray-300 w-9 h-9"></div>
//           </div>
//         </div>

//         {/*
// child container */}

//         <div className={``}>
//           <div className="relative">
//             {children}
//             <div
//               onClick={() => setisshow(!isshow)}
//               className={`
//               ${lock ? 'hidden' : ''}
//           fixed bottom-5 right-5 lg:hidden bg-gray-800/40 hover:bg-gray-800/50 rounded-full text-white p-4 cursor-pointer dark:bg-gray-300 dark:text-gray-800 transition-all duration-200
//           `}
//             >
//               <GiHamburgerMenu
//                 className={` ${
//                   isshow ? 'hidden' : 'w-6 h-6 filter backdrop:blur-2xl'
//                 }  `}
//               />
//               <GrClose
//                 className={` ${
//                   isshow ? 'w-6 h-6 filter backdrop:blur-2xl ' : 'hidden'
//                 }  `}
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DashLayout;
import api from '../../api/api';
import { useState, useEffect, useCallback, Fragment } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Avatar from 'react-avatar';
import { Menu, Transition } from '@headlessui/react';
import { HiOutlineMenuAlt1 } from 'react-icons/hi';
import { GiHamburgerMenu } from 'react-icons/gi';
import { GrClose } from 'react-icons/gr';
import { ImSun } from 'react-icons/im';
import { useTheme } from 'next-themes';
import { FaRegBell } from 'react-icons/fa';
import useSWR from 'swr';
const DashLayout = ({ children, active }) => {
  const [mounted, SetMounted] = useState(false);
  const [Navbar, setNavbar] = useState(false);
  const [lock, setlock] = useState(false);
  const [isshow, setisshow] = useState(false);
  const { theme, setTheme } = useTheme('light');
  const escFunction = useCallback((event) => {
    if (event.keyCode === 27) {
      setisshow(false);
    }
  }, []);

  const handleLogout = async (e) => {
    e.preventDefault();
    await api.post('/api/user/logout').catch((ee) => console.log(ee));
    router.reload();
  };

  const changeBackground = () => {
    if (window.scrollY > 15) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  useEffect(() => {
    SetMounted(true);
    return () => SetMounted(false);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', changeBackground);
  }, []);

  useEffect(() => {
    document.addEventListener('keydown', escFunction);

    return () => {
      document.removeEventListener('keydown', escFunction);
    };
  }, [escFunction]);

  const { data, error, isValidating } = useSWR(
    '/api/user/userprofile',
    async (apiURL) =>
      await api
        .get(apiURL)
        .then((res) => res.data)
        .catch((err) => console.log(err))
  );
  const [logged, setLogged] = useState(typeof data?.data?.name !== 'undefined');

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
  return (
    <div className="flex relative font-nunito  h-auto w-full bg-whiteback dark:bg-darkback  ">
      <div
        onMouseEnter={() => {
          !lock && !isshow ? setisshow(true) : '';
        }}
        onMouseLeave={() => {
          !lock && isshow ? setisshow(false) : '';
        }}
        className={`
      
         ${isshow ? 'w-[280px]  ' : 'w-0 lg:w-[70px]'} 
         ${
           lock && isshow
             ? 'shadow-none sticky top-0 left-0'
             : ' shadow-lg dark:shadow-white/30 '
         }
         ${lock ? '' : 'fixed left-0 top-0'}
        bg-whiteback dark:bg-darkback flex-none flex flex-col   h-[100vh]  overflow-hidden  transition-all duration-300 ease-in-out backdrop-blur-sm z-[100] `}
      >
        <div className="min-w-[89px] px-2  object-contain flex items-center py-2 justify-between transition-all duration-300 delay-400 ease-linear ">
          {isshow ? (
            <div className="flex-none">
              <Image
                className=" object-contain cursor-pointer"
                src={require('../../images/logo3.png')}
                width={125}
                height={45}
                alt={'logo'}
              />
            </div>
          ) : (
            <div className="flex-none">
              <Image
                className="object-contain cursor-pointer"
                src={require('../../images/smalllogo.png')}
                width={45}
                height={45}
                alt={'logo'}
              />
            </div>
          )}
          <div
            className={`${
              isshow
                ? 'hidden xl:flex xl:justify-center xl:items-center dark:text-white text-gray-800  rounded-full ring-2 ring-gray-800 dark:ring-white p-1 cursor-pointer'
                : 'hidden'
            }`}
            onClick={() => setlock(!lock)}
          >
            <HiOutlineMenuAlt1 className="w-6 h-6 " />
          </div>
        </div>
        <div className="pr-5 xl:pr-4 flex flex-col gap-2 mt-7 ">
          {dashboard.map((item) => {
            return (
              <Link key={item.id} href={item.links}>
                <div
                  key={item.id}
                  className={`py-2 px-3 flex gap-4 items-center cursor-pointer overflow-hidden  ${
                    active === item.id
                      ? 'bg-gradient-to-r from-color1 to-active  '
                      : ''
                  } rounded-r-3xl hover:bg-black/20  `}
                >
                  <div className="">{item.icon}</div>
                  <div className="overflow-hidden whitespace-nowrap text-[15px] font-extrabold tracking-wider  text-gray-900 dark:text-gray-300 ">
                    {item?.title}
                  </div>
                </div>
              </Link>
            );
          })}
          <div className=""></div>
        </div>
      </div>
      <div
        className={`  ${
          isshow && lock ? 'p-0 ' : 'pl-0 lg:pl-[80px]'
        } flex flex-col w-full `}
      >
        {/*  
    navbar conatiner
    */}

        <div
          className={`${
            Navbar
              ? ' rounded-b-xl   backdrop-blur-sm dark:bg-darkcard/80 bg-white/80 shadow-md'
              : ''
          } gap-2 z-10 sticky  top-0 flex w-full justify-between transition-all duration-100 ease-in-out delay-100 items-center h-[67px]  `}
        >
          <div
            onClick={() => setisshow(!isshow)}
            className="lg:invisible  flex-none object-contain rounded-full p-2 transition-all duration-300 cursor-pointer   "
          >
            <div className="flex-none flex items-center justify-center">
              <Image
                className="object-contain cursor-pointer"
                src={require('../../images/smalllogo.png')}
                width={45}
                height={45}
                alt={'logo'}
              />
            </div>
          </div>
          <div className="flex items-center gap-6 px-2 ">
            <div
              className=" rounded-full  dark:text-gray-400 text-gray-800 hover:bg-white/10  p-1 md:order-first transition ease-in-out duration-500"
              onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            >
              {theme === 'light' ? (
                <ImSun className="  w-6  h-6 " />
              ) : (
                <ImSun className="text-gray-800  dark:text-gray-400 w-6  h-6 " />
              )}
            </div>

            <div className="text-gray-800 dark:text-gray-400">
              <FaRegBell className="w-6 h-6" />
            </div>

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
                    <div className="flex flex-col items-center py-2 gap-1 bg-gray-300/80 dark:bg-black/10 backdrop-blur-sm">
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
                            <Link href="/employers/dashboard">Dashboard</Link>
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
                            <div
                              className={`${
                                data?.data?.usertype === 'employer'
                                  ? 'hidden'
                                  : ''
                              } `}
                            >
                              <Link href={`/employeedetail/${data?.data?.id}`}>
                                My Profile
                              </Link>
                            </div>
                            <div
                              className={`${
                                data?.data?.usertype === 'employee'
                                  ? 'hidden'
                                  : ''
                              } `}
                            >
                              <Link href={`/employerdetail/${data?.data?.id}`}>
                                My Profile
                              </Link>
                            </div>
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

        {/* 
child container */}

        <div className={``}>
          <div className="relative">
            {children}
            <div
              onClick={() => setisshow(!isshow)}
              className={`
              ${lock ? 'hidden' : ''}
          fixed bottom-5 right-5 lg:hidden bg-gray-800/40 hover:bg-gray-800/50 rounded-full text-white p-4 cursor-pointer dark:bg-gray-300 dark:text-gray-800 transition-all duration-200 
          `}
            >
              <GiHamburgerMenu
                className={` ${
                  isshow ? 'hidden' : 'w-6 h-6 filter backdrop:blur-2xl'
                }  `}
              />
              <GrClose
                className={` ${
                  isshow ? 'w-6 h-6 filter backdrop:blur-2xl ' : 'hidden'
                }  `}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashLayout;
