import { Transition } from '@headlessui/react';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { MdOutlineClose } from 'react-icons/md';
import { HiOutlineMenuAlt1 } from 'react-icons/hi';
import { GiHamburgerMenu } from 'react-icons/gi';
const DashLayout = ({ children, props }) => {
  const [lock, setlock] = useState(false);
  const [isshow, setisshow] = useState(false);

  return (
    // ${lock ? '' : 'absolute'}
    <div className="flex relative ">
      <div
        className={`
         ${isshow ? 'w-[300px] ' : ''}
        
        bg-black flex-none flex flex-col shadow-2xl  h-[100vh]  overflow-hidden lg:w-[100px] transition-all duration-300 ease-in-out `}
      >
        <div className="min-w-[89px] px-2  object-contain flex items-center py-2 justify-between ">
          <Image
            className="object-contain cursor-pointer"
            src={require('../../images/logo3.png')}
            width={125}
            height={40}
            alt={'logo'}
          />
          <div
            className="hidden xl:flex xl:justify-center xl:items-center text-white  rounded-full ring-1 ring-white dark:ring-white p-1 cursor-pointer"
            onClick={() => setlock(!lock)}
          >
            <HiOutlineMenuAlt1 className="w-6 h-6 " />
          </div>
          <div
            className=" flex items-center justify-between xl:hidden text-white cursor-pointer"
            onClick={() => setisshow(!isshow)}
          >
            <MdOutlineClose className="w-7 h-7 " />
          </div>
        </div>
      </div>

      <div className="pt-[50px] relative">
        {children}
        <div
          onClick={() => setisshow(!isshow)}
          className={`${
            false
              ? 'hidden'
              : 'fixed bottom-5 right-5 bg-gray-800/40 hover:bg-gray-800/50 rounded-full text-white p-4 cursor-pointer dark:bg-gray-300 dark:text-gray-800 transition-all duration-200 '
          }`}
        >
          <GiHamburgerMenu className=" w-6 h-6 filter backdrop:blur-2xl  " />
        </div>
      </div>
    </div>
  );
};

export default DashLayout;
