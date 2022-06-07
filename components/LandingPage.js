import Image from 'next/image';
import { SiAppstore } from 'react-icons/si';
import { RiMoneyDollarCircleFill } from 'react-icons/ri';
import { SiAltiumdesigner } from 'react-icons/si';
import { RiServiceFill } from 'react-icons/ri';
import { GiTeacher } from 'react-icons/gi';
import { MdOutlineSecurity } from 'react-icons/md';
import { CgWebsite, CgGames } from 'react-icons/cg';
import { HiArrowNarrowRight } from 'react-icons/hi';

const LandingPage = () => {
  return (
    <div className="bg-gradient-to-tr  from-color1 to-color2">
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
              <div className="flex items-center border-2 border-white shadow-2xl w-full  py-2 pl-7 pr-2 rounded-[2.5rem] bg-white  focus:border-blue-50">
                <input
                  type="text"
                  placeholder="Search Jobs"
                  className="focus:outline-none"
                />
                <button className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-white font-bold py-2 px-4 rounded-3xl hover:bg-red-600">
                  Search
                </button>
              </div>
            </form>
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
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2  mt-8">
        <div className="sm:pl-5 px-5 md:pl-9">
          <div className="text-3xl font-medium text-left">
            Explore by Categories
          </div>
          <div className="text-sm text-slate-600 text-left mt-4">
            We provide many categories, choose a category according to your
            expertise to make it easier to find a job.
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 mt-3 gap-3">
            <div className="group bg-slate-200 hover:scale-[10px] hover:bg-indigo-400 hover:text-white flex gap-3 items-center justify-cente rounded-lg py-4 px-3 shadow-md">
              <div className="text-color1 bg-white rounded-[0.7rem] p-2">
                <SiAppstore />
              </div>
              <div className="text-xs font-sans">App Development</div>
              <div></div>
            </div>

            <div className="group bg-slate-200 hover:bg-indigo-400 hover:text-white flex gap-3 items-center justify-cente rounded-lg py-4 px-3 shadow-md">
              <div className="text-color1 bg-white rounded-[0.7rem] p-2">
                <RiMoneyDollarCircleFill />
              </div>
              <div className="text-xs font-sans">Finance</div>
              <div></div>
            </div>

            <div className="group bg-slate-200 hover:bg-indigo-400 hover:text-white flex gap-3 items-center justify-cente rounded-lg py-4 px-3 shadow-md">
              <div className="text-color1 bg-white rounded-[0.7rem] p-2">
                <SiAltiumdesigner />
              </div>
              <div className="text-xs font-sans">Graphics Design</div>
              <div></div>
            </div>

            <div className="group bg-slate-200 hover:bg-indigo-400 hover:text-white flex gap-3 items-center justify-cente rounded-lg py-4 px-3 shadow-md">
              <div className="text-color1 bg-white rounded-[0.7rem] p-2">
                <RiServiceFill />
              </div>
              <div className="text-xs font-sans">Services</div>
              <div></div>
            </div>

            <div className="group bg-slate-200 hover:bg-indigo-400 hover:text-white flex gap-3 items-center justify-cente rounded-lg py-4 px-3 shadow-md">
              <div className="text-color1 bg-white rounded-[0.7rem] p-2">
                <GiTeacher />
              </div>
              <div className="text-xs font-sans">Teacher</div>
              <div></div>
            </div>

            <div className="group bg-slate-200 hover:bg-indigo-400 hover:text-white flex gap-3 items-center justify-cente rounded-lg py-4 px-3 shadow-md">
              <div className="text-color1 bg-white rounded-[0.7rem] p-2">
                <MdOutlineSecurity />
              </div>
              <div className="text-xs font-sans">Security</div>
              <div></div>
            </div>

            <div className="group bg-slate-200 hover:bg-indigo-400 hover:text-white flex gap-3 items-center justify-cente rounded-lg py-4 px-3 shadow-md">
              <div className="text-color1 bg-white rounded-[0.7rem] p-2">
                <CgWebsite />
              </div>
              <div className="text-xs font-sans">Web Development</div>
              <div></div>
            </div>

            <div className="group bg-slate-200 hover:bg-indigo-400 hover:text-white flex gap-3 items-center justify-cente rounded-lg py-4 px-3 shadow-md">
              <div className="text-color1 bg-white rounded-[0.7rem] p-2">
                <CgGames />
              </div>
              <div className="text-xs font-sans">Game Developers</div>
              <div></div>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="bg-white rounded-3xl md:p-6 sm:p-5 p-5 mx-5 sm:mx-5 md:mx-[100px] mt-9 flex flex-col divide-y gap-4 min-h-[280px] min-w-[280px]">
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

          <div className="min-w-[200px] select-none cursor-pointer  bg-white rounded-3xl  flex items-center justify-between mx-5 sm:mx-5 md:mx-[100px] my-3 px-5 py-3">
            <div>See All Categories</div>
            <HiArrowNarrowRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
