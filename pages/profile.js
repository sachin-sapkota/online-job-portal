import { SiWorkplace } from 'react-icons/si';
import { GoVerified } from 'react-icons/go';
import { GrAchievement } from 'react-icons/gr';
import { BsFillHeartFill, BsLink45Deg } from 'react-icons/bs';
import { FcRating } from 'react-icons/fc';
import { MdLocationOn, MdOutlineBusinessCenter } from 'react-icons/md';
import { useState } from 'react';
import Link from 'next/link';
import Overview from '../components/Overview';
import Works from '../components/Works';
import Portfolio from '../components/Portfolio';
import { useCallback, useEffect } from 'react';
import Navbar from '../components/Navbar';
import { GiAchievement } from 'react-icons/gi';

const profile = () => {
  const [like, SetLike] = useState(false);
  const [active, SetActive] = useState('Overview');
  const arr = ['Overview', 'Works', 'Portfolio'];
  const arrow = useCallback(
    (event) => {
      if (event.keyCode === 39) {
        SetActive(arr[(arr.indexOf(active) + 1) % arr.length]);
      }

      if (event.keyCode === 37) {
        arr = arr.reverse();
        SetActive(arr[(arr.indexOf(active) + 1) % arr.length]);
      }
    },
    [active]
  );
  useEffect(() => {
    document.addEventListener('keydown', arrow);

    return () => {
      document.removeEventListener('keydown', arrow);
    };
  }, [arrow]);

  return (
    <div>
      <Navbar />
      <div className="flex flex-col pt-9  ">
        <div className="grid grid-cols-4">
          <div className="col-start-2 col-span-2 flex-col flex items-center gap-2 mt-5 ">
            <div className="rounded-full p-1 border-[3px] border-orange-500  bg-transparent">
              <div className="rounded-full w-[6rem] h-[6rem] bg-gray-400 "></div>
            </div>

            <div className="flex flex-col pt-1 items-center">
              <div className="flex gap-4 justify-center">
                <div className="text-xl font-sans font-bold text-center">
                  Sachin Sapkota
                </div>
                <div className="mt-1">
                  <GoVerified className="text-orange-600" />
                </div>
              </div>
              <div>@username</div>
              <div className="flex gap-2 items-center">
                <MdLocationOn className="text-indigo-500" />
                <div className="text-sm">Kathmandu, Nepal</div>
              </div>
              <div className="text-sm font-sans text-gray-500">
                Brand Consultant and content creator
              </div>
              <div className="flex items-center justify-center text-sm font-sans font-semibold">
                <BsLink45Deg />
                <Link href="https://www.facebook.com"> Portfolio site </Link>
              </div>
              <div className="flex gap-4 justify-center my-1 "></div>
              <div className="flex gap-4">
                <div className="cursor-pointer shadow-md bg-indigo-500 text-white px-3 py-1 rounded-3xl font-bold font-sans select-none">
                  Hire
                </div>
                <div className="cursor-pointer shadow-md bg-indigo-500 text-white px-3 py-1 rounded-3xl font-bold font-sans select-none">
                  Invite
                </div>
              </div>
              <div className="flex gap-3 items-center justify-center mt-5 select-none">
                <div className="bg-gray-300 flex flex-col w-[8rem] h-[3rem] rounded-xl px-2 py-1 ">
                  <div className="whitespace-nowrap text-center text-sm font-sans font-semibold dark:text-black">
                    Average Rating
                  </div>
                  <div className="flex justify-center gap-2">
                    <FcRating />
                    <div className="text-center text-sm font-bold text-gray-600">
                      4.5
                    </div>
                  </div>
                </div>

                <div className="bg-gray-300 flex flex-col w-[8rem] h-[3rem] rounded-xl px-2 py-1 ">
                  <div className="whitespace-nowrap text-center text-sm font-sans font-semibold text-black">
                    Job done
                  </div>
                  <div className="flex justify-center gap-2">
                    <div className="text-center text-sm font-bold text-gray-600">
                      46
                    </div>
                  </div>
                </div>

                <div className="bg-gray-300 flex flex-col w-[8rem] h-[3rem] rounded-xl px-2 py-1 ">
                  <div className="whitespace-nowrap text-center text-sm font-sans font-semibold text-black">
                    Total Earning
                  </div>
                  <div className="flex justify-center gap-2">
                    <div className="text-center text-sm font-bold text-gray-600">
                      Rs.43000
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-start-4 mt-2">
            <div
              onClick={() => SetLike(!like)}
              className=" cursor-pointer flex border-[1px] border-solid rounded-full justify-center items-center w-[30px] h-[30px] p-[1px]"
            >
              <BsFillHeartFill className={`${like ? 'text-red-500' : ''}`} />
            </div>
          </div>
        </div>

        <div className="bg-gray-300 w-auto h-[600px] mt-6 m-14 border-t-[3px] border-red-300 dark:bg-gray-600">
          <div className="flex flex-col ">
            <div className="flex justify-center gap-16 select-none  ">
              <div
                onClick={() => SetActive('Overview')}
                className={`${
                  active === 'Overview'
                    ? 'text-gray-700 border-t-2 border-red-600 dark:text-white'
                    : 'text-gray-500 border-t-2 border-transparent dark:text-gray-300'
                } text-xl font-sans font-semibold flex items-center transition-all duration-200  justify-center gap-2 cursor-pointer pt-2`}
              >
                <GiAchievement />
                <div>Overview</div>
              </div>
              <div
                onClick={() => SetActive('Works')}
                className={`${
                  active === 'Works'
                    ? 'text-gray-700 border-t-2 border-red-600 dark:text-white'
                    : 'text-gray-500 border-t-2 border-transparent dark:text-gray-300'
                } text-xl font-sans font-semibold flex items-center justify-center gap-2 cursor-pointer pt-2 transition-all duration-200 `}
              >
                <MdOutlineBusinessCenter /> <div>Works</div>
              </div>

              <div
                onClick={() => SetActive('Portfolio')}
                className={` ${
                  active === 'Portfolio'
                    ? 'text-gray-700 border-t-2 border-red-600 dark:text-white'
                    : 'text-gray-500 border-t-2 border-transparent dark:text-gray-300'
                } text-xl font-sans font-semibold flex items-center justify-center  pt-2 transition-all duration-200 gap-2 cursor-pointer`}
              >
                <SiWorkplace />
                <div>Portfolio</div>
              </div>
            </div>
            <div>
              {active === 'Overview' ? <Overview /> : null}
              {active === 'Works' ? <Works /> : null}
              {active === 'Portfolio' ? <Portfolio /> : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default profile;
