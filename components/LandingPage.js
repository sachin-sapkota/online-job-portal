import Image from 'next/image';
import Link from 'next/link';
import { SiAppstore } from 'react-icons/si';
import { RiMoneyDollarCircleFill } from 'react-icons/ri';
import { SiAltiumdesigner } from 'react-icons/si';
import { RiServiceFill } from 'react-icons/ri';
import { GiTeacher } from 'react-icons/gi';
import { MdOutlineSecurity } from 'react-icons/md';
import { CgWebsite, CgGames } from 'react-icons/cg';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { FaSuitcase, FaRegHandshake } from 'react-icons/fa';
import { darkMode } from '../tailwind.config';
import { MdSupportAgent } from 'react-icons/md';

const LandingPage = () => {
  return (
    <div className="dark:bg-gray-900 pt-2">
      <div className=" grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2  pt-20">
        <div className="flex flex-col items-center justify-center">
          <div className="font-serif text-red-700">
            Find Your Next Dream Job
          </div>
          <div className="select-none font-sans text-4xl sm:text-4xl md:text-5xl font-bold">
            <div> Dream Jobs </div>
            <div> find Talent, All</div>
            <div> in One Place. </div>
          </div>
          <div className="mt-3 ">
            <form className=" ">
              <div className="flex items-center border-2 border-white shadow-2xl w-full  py-2 pl-7 pr-2 rounded-[2.5rem] bg-white dark:bg-gray-700  focus:border-blue-50">
                <input
                  type="text"
                  placeholder="Search Jobs"
                  className=" dark:bg-gray-700 focus:outline-none focus:shadow-outline focus:border-blue-500"
                />
                <button className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-white font-bold py-2 px-4 rounded-3xl hover:bg-red-600">
                  Search
                </button>
              </div>
            </form>
          </div>
          <div className="flex justify-center items-center mt-2 gap-2 text-sm font-mono font-bold">
            Learn more
            <HiArrowNarrowRight className="mt-1 cursor-pointer" />{' '}
          </div>
        </div>

        <div className="hidden sm:hidden md:block object-contain">
          <Image
            src={require('../images/cover.svg')}
            className="object-contain "
            alt={''}
          />
        </div>
      </div>

      <div className="flex flex-col mx-2 mt-9">
        <div className="text-center font-bold text-2xl">
          More easier to find a job{' '}
        </div>
        <div className="text-center font-bold text-2xl">with our platform </div>
        <div className="text-center px-7 text-sm font-semibold">
          The following features make our service easier to help you find
          suitable job from various companies.
        </div>
        <div className="flex sm:flex-row flex-col justify-center text-center items-center mt-2 gap-5 px-3">
          <div className="flex flex-col items-center justify-center ">
            <div>
              <FaRegHandshake className="text-indigo-600 text-[5.5rem] dark:text-indigo-400 " />
            </div>
            <span className="font-semibold">Easy Applying</span>
            <span className="font-thin text-sm ">
              The process of applying for job is easier and faster.
            </span>
          </div>

          <div className="flex flex-col items-center justify-center px-4">
            <div>
              <FaSuitcase className="text-indigo-600 text-[5rem] dark:text-indigo-400  " />
            </div>
            <span className="font-semibold">Many vacancies</span>
            <span className="font-thin text-sm ">
              There are many job vacancies from various companies.
            </span>
          </div>

          <div className="flex flex-col items-center justify-center ">
            <div>
              <MdSupportAgent className="text-indigo-600 text-[5rem] dark:text-indigo-400  " />
            </div>
            <span className="font-semibold">Best Support</span>
            <span className="font-thin text-sm ">
              We provide the full support for job seekers for better results.
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2  mt-8">
        <div className="sm:pl-5 px-5 md:pl-9">
          <div className="text-3xl font-medium text-left">
            Explore by Categories
          </div>
          <div className="text-sm text-slate-600 text-left mt-4 dark:text-gray-300">
            We provide many categories, choose a category according to your
            expertise to make it easier to find a job.
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 mt-3 gap-3">
            <div className=" dark:bg-gray-700 group bg-slate-200 hover:scale-[10px] hover:bg-indigo-400 hover:text-white flex gap-3 items-center justify-cente rounded-lg py-4 px-3 shadow-md">
              <div className="text-color1 bg-white rounded-[0.7rem] p- 2 dark:bg-gray-700">
                <SiAppstore />
              </div>
              <div className="text-xs font-sans">App Development</div>
              <div></div>
            </div>

            <div className="group bg-slate-200 hover:bg-indigo-400 hover:text-white flex gap-3 items-center justify-cente rounded-lg py-4 px-3 shadow-md dark:bg-gray-700">
              <div className="text-color1 bg-white rounded-[0.7rem] p-2 dark:bg-gray-700">
                <RiMoneyDollarCircleFill />
              </div>
              <div className="text-xs font-sans">Finance</div>
              <div></div>
            </div>

            <div className="group bg-slate-200 hover:bg-indigo-400 hover:text-white flex gap-3 items-center justify-cente rounded-lg py-4 px-3 shadow-md dark:bg-gray-700">
              <div className="text-color1 bg-white rounded-[0.7rem] p-2 dark:bg-gray-700">
                <SiAltiumdesigner />
              </div>
              <div className="text-xs font-sans">Graphics Design</div>
              <div></div>
            </div>

            <div className="group bg-slate-200 hover:bg-indigo-400 hover:text-white flex gap-3 items-center justify-cente rounded-lg py-4 px-3 shadow-md dark:bg-gray-700">
              <div className="text-color1 bg-white rounded-[0.7rem] p-2 dark:bg-gray-700">
                <RiServiceFill />
              </div>
              <div className="text-xs font-sans">Services</div>
              <div></div>
            </div>

            <div className="group bg-slate-200 hover:bg-indigo-400 hover:text-white flex gap-3 items-center justify-cente rounded-lg py-4 px-3 shadow-md dark:bg-gray-700">
              <div className="text-color1 bg-white rounded-[0.7rem] p-2 dark:bg-gray-700">
                <GiTeacher />
              </div>
              <div className="text-xs font-sans">Teacher</div>
              <div></div>
            </div>

            <div className="group bg-slate-200 hover:bg-indigo-400 hover:text-white flex gap-3 items-center justify-cente rounded-lg py-4 px-3 shadow-md dark:bg-gray-700">
              <div className="text-color1 bg-white rounded-[0.7rem] p-2 dark:bg-gray-700">
                <MdOutlineSecurity />
              </div>
              <div className="text-xs font-sans">Security</div>
              <div></div>
            </div>

            <div className="group bg-slate-200 hover:bg-indigo-400 hover:text-white flex gap-3 items-center justify-cente rounded-lg py-4 px-3 shadow-md dark:bg-gray-700">
              <div className="text-color1 bg-white rounded-[0.7rem] p-2 dark:bg-gray-700">
                <CgWebsite />
              </div>
              <div className="text-xs font-sans">Web Development</div>
              <div></div>
            </div>

            <div className="group bg-slate-200 hover:bg-indigo-400 hover:text-white flex gap-3 items-center justify-cente rounded-lg py-4 px-3 shadow-md dark:bg-gray-700">
              <div className="text-color1 bg-white rounded-[0.7rem] p-2 dark:bg-gray-700">
                <CgGames />
              </div>
              <div className="text-xs font-sans">Game Developers</div>
              <div></div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center ">
          <div className="flex flex-col items-center justify-center">
            <div className="bg-gray-200 rounded-3xl md:p-6 sm:p-5 p-5 mx-5 sm:mx-5  mt-9 flex flex-col divide-y gap-4 min-h-[280px] min-w-[280px] max-w-[410px] dark:bg-gray-700">
              <div className="font-bold font-sans text-lg text-center">
                Popular Categories
              </div>
              <div className="flex  ">
                <span className="flex-1 flex items-center  font-sans font-medium">
                  System analyst
                </span>
                <div className="bg-color1 bg-opacity-60 text-indigo-600 px-3 py-1 mt-1 rounded-xl flex items-center justify-center">
                  2
                </div>
              </div>
              <div className="flex">
                <span className="flex-1 flex items-center   font-sans font-medium">
                  Frontend Developer
                </span>
                <div className="bg-color1 bg-opacity-60 text-indigo-600 px-3 py-1 rounded-xl mt-1  flex items-center justify-center">
                  10
                </div>
              </div>
              <div className="flex">
                <span className="flex-1 flex items-center  font-sans font-medium">
                  Backend Developer
                </span>
                <div className="bg-color1 bg-opacity-60 text-indigo-600 px-3 py-1 mt-1  rounded-xl flex items-center justify-center">
                  8
                </div>
              </div>
              <div className="flex">
                <span className="flex-1 flex items-center   font-sans font-medium">
                  Full stack Developer
                </span>
                <div className="bg-color1 bg-opacity-60 text-indigo-600 px-3 py-1 mt-1  rounded-xl flex items-center justify-center">
                  7
                </div>
              </div>
            </div>

            <div className="min-w-[200px] max-w-[410px] select-none cursor-pointer  bg-gray-200 dark:bg-slate-600 rounded-3xl  flex items-center justify-between mx-5 sm:mx-5 md:mx-[100px] my-3 px-5 py-3">
              <div>See All Categories</div>
              <HiArrowNarrowRight />
            </div>
          </div>
          <div className="hidden sm:block  md:block p-3 lg:hidden">
            <Image src={require('../images/popular.svg')} />
          </div>
        </div>
       
      </div>
      <div className="flex justify-center items-center m-3 mt-4 ">
          <div className='w-[20rem]'>
            <Image src={require('../images/resume.svg')}></Image>
          </div>
          <div className='bg-gray-300 rounded-3xl p-5 flex flex-col items-center'>
            <div className='font-bold text-sm'>
              Upload your CV now to be headhunted by companies and apply to jobs
              with 1-click apply.
            </div>
            <div className='bg-indigo-300 rounded-2xl p-2  font-bold'><Link href="/cv" className="">
              Upload CV
            </Link></div>
            
          </div>
        </div>
    </div>
  );
};

export default LandingPage;
