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
import { MdSupportAgent } from 'react-icons/md';
import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/solid';

const LandingPage = () => {
  return (
    <div className="dark:bg-gray-900 pt-10">
      <div className=" grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2  pt-20 w-full ">
        <div className="relative flex flex-col   mt-6">
          <div className=" absolute mix-blend-multiply dark:mix-blend-soft-light    filter blur-xl  opacity-60 animate-blurry top-0 left-[25%] md:-left-4   w-40   md:w-72   h-40   md:h-72 bg-purple-300 rounded-full "></div>
          <div className="absolute mix-blend-multiply dark:mix-blend-soft-light  filter blur-xl opacity-60 animate-blurry top-0 left-[15%]  md:left-[180px]   w-40   md:w-72   h-40   md:h-72 bg-yellow-300 rounded-full"></div>
          <div className="absolute mix-blend-multiply dark:mix-blend-soft-light filter blur-xl  opacity-60 animate-blurry top-0 mt-9 left-[28%] md:left-20    w-40   md:w-72   h-40   md:h-72 bg-pink-300 rounded-full"></div>

          <div className="flex flex-col relative items-center justify-center">
            <div className="font-serif text-red-700">
              Find Your Next Dream Job
            </div>
            <div className="select-none font-sans text-4xl sm:text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
              <div> Dream Jobs </div>
              <div> find Talent, All</div>
              <div> in One Place. </div>
            </div>
            <div className="mt-5 ">
              <form className=" ">
                <div className="focus:bg-indigo-600 border-transparent flex items-center border-2 focus:outline-none border-white shadow-2xl w-full  py-2 pl-7 pr-2 rounded-[2.5rem] bg-white dark:bg-gray-800  ">
                  <div className="focus:outline-none border-none ">
                    <input
                      type="text"
                      className="border-transparent placeholder:font-bold placeholder-indigo-500 placeholder:text-xl focus:border-transparent border-4 appearance-none focus:ring-transparent dark:bg-gray-800 font-medium  "
                      placeholder="Search for any job"
                    />
                  </div>
                  <button className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-white font-bold py-2 px-4 rounded-3xl hover:bg-red-600">
                    Search
                  </button>
                </div>
              </form>
            </div>
            <div className="flex justify-center items-center mt-2 gap-2 text-sm font-mono font-bold">
              Learn more
              <HiArrowNarrowRight className="mt-1 cursor-pointer" />
            </div>
          </div>
        </div>
        <div className="hidden sm:hidden md:block object-contain z-[0]">
          <Image
            src={require('../images/cover.svg')}
            className="object-contain "
            alt={''}
          />
        </div>
      </div>

      <div className=" px-2 flex flex-col  mt-[3rem] select-none mb-[3rem]">
        <div className="text-center font-bold  text-primary tracking-widest text-4xl">
          More easier to find a job
        </div>
        <div className="text-center font-bold text-4xl tracking-widest text-primary ">
          with our platform
        </div>
        <div className="mt-2 tracking-wide  text-center px-7 text-md font-semibold mb-4">
          The following features make our service easier to help you find
          suitable job from various companies.
        </div>
        <div className="flex  gap-16 md:gap-10 lg:gap-16 md:flex-row flex-col justify-center text-center  md:items-start mt-2  ">
          <div className="mt-0 mx-auto md:mt-[100px] min-w-[200px] min-h-[180px] w-[280px] h-[190px]  md:w-[350px] md:h-[200px] bg-black/20 shadow-primary/60  drop-shadow-md shadow-2xl   p-4 rounded-xl flex flex-col items-center justify-center ">
            <div>
              <FaRegHandshake className="rounded-full overflow-hidden text-primary text-[5.5rem] dark:text-indigo-400 " />
            </div>
            <span className="font-bold font-sans tracking-wide ">
              Easy Applying
            </span>
            <span className=" text-sm tracking-wide font-semibold ">
              The process of applying for job is easier and faster.
            </span>
          </div>

          <div className="mt-0 mx-auto md:mt-[100px] min-w-[200px] min-h-[180px] w-[280px] h-[190px]  md:w-[350px] md:h-[200px] bg-black/20 shadow-primary/60  drop-shadow-md shadow-2xl   p-4 rounded-xl flex flex-col items-center justify-center ">
            <div className="">
              <FaSuitcase className=" rounded-full overflow-hidden  text-[5rem] text-primary dark:text-indigo-400  " />
            </div>
            <span className="font-semibold">Many vacancies</span>
            <span className=" text-sm tracking-wide font-semibold ">
              There are many job vacancies from various companies.
            </span>
          </div>

          <div className="mt-0 mx-auto md:mt-[100px] min-w-[200px] min-h-[180px] w-[280px] h-[190px]  md:w-[350px] md:h-[200px] bg-black/20 shadow-primary/60  drop-shadow-md shadow-2xl   p-4 rounded-xl flex flex-col items-center justify-center ">
            <div>
              <MdSupportAgent className="rounded-full overflow-hidden text-primary text-[5rem] dark:text-indigo-400  " />
            </div>
            <span className="font-semibold">Best Support</span>
            <span className=" text-sm tracking-wide font-semibold ">
              We provide the full support for job seekers for better results.
            </span>
          </div>
        </div>
      </div>

      <section className="mt-10 text-gray-800 dark:text-gray-200 ">
        <div className="container  px-4 py-12 flex justify-center">
          <div className="flex flex-col md:flex-row mx-4  ">
            <div className="  ">
              <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:bg-emerald-600">
                <h3 className="text-3xl font-semibold">Job Xa</h3>
                <span className="text-[15px] font-bold tracking-wider uppercase text-gray-600">
                  How to get your dream job?
                </span>
              </div>
            </div>
            <div className="relative col-span-12 md:px-10 px-4 sm:px-6 space-y-6 sm:col-span-7">
              <div className="[&>*]:pl-5 col-span-12  space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:bg-gray-300">
                <div className="flex flex-col items-center sm:items-start  sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-emerald-600">
                  <h3 className="text-lg md:text-xl font-semibold tracking-wide">
                    Register your Account
                  </h3>
                  <div className="mt-3 object-contain w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[320px] md:h-[320px] ">
                    <Image src={require('../images/time1.svg')} alt={''} />
                  </div>
                </div>
                <div className="flex items-center sm:items-start flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-emerald-600">
                  <h3 className="text-lg md:text-xl font-semibold tracking-wide">
                    Upload your Resume
                  </h3>
                  <div className="mt-3 object-contain w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[320px] md:h-[320px] ">
                    <Image src={require('../images/time2.svg')} alt={''} />
                  </div>
                </div>
                <div className="flex  items-center sm:items-start flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-emerald-600">
                  <h3 className="text-lg md:text-xl font-semibold tracking-wide">
                    Choose the best job
                  </h3>
                  <div className="mt-3 object-contain w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[320px] md:h-[320px] ">
                    <Image src={require('../images/time3.svg')} alt={''} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2  mt-8">
        <div className="sm:pl-5 px-5 md:pl-9">
          <div className="text-3xl font-sans tracking-wider text-footer font-bold  text-center sm:text-left te">
            Explore by Categories
          </div>
          <div className="text-sm text-slate-600 text-left mt-4 dark:text-gray-300 hidden sm:text-left">
            We provide many categories, choose a category according to your
            expertise to make it easier to find a job.
          </div>
          <div className="[&>*]:bg-footer/90 [&>*]:text-white [&>*]:shadow-lg [&>*]:dark:shadow-md [&>*]:dark:shadow-white/40  grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 mt-3 gap-4">
            <div className="group hover:bg-footer/80 transition-all duration-300 hover:text-white flex gap-3 items-center  rounded-lg py-4 px-3 shadow-md dark:bg-footer">
              <div className="text-footer dark:text-white bg-white rounded-[0.7rem] p-2 dark:bg-gray-700">
                <SiAppstore />
              </div>
              <div className="text-xs font-sans">App Development</div>
              <div></div>
            </div>

            <div className="group aspec hover:bg-footer/80 transition-all duration-300 hover:text-white flex gap-3 items-center  rounded-lg py-4 px-3 shadow-md dark:bg-footer">
              <div className="text-footer dark:text-white bg-white rounded-[0.7rem] p-2 dark:bg-gray-700">
                <RiMoneyDollarCircleFill />
              </div>
              <div className="text-xs font-sans">Finance</div>
              <div></div>
            </div>

            <div className="group hover:bg-footer/80 transition-all duration-300 hover:text-white flex gap-3 items-center  rounded-lg py-4 px-3 shadow-md dark:bg-footer">
              <div className="text-footer dark:text-white bg-white rounded-[0.7rem] p-2 dark:bg-gray-700">
                <SiAltiumdesigner />
              </div>
              <div className="text-xs font-sans">Graphics Design</div>
              <div></div>
            </div>

            <div className="group hover:bg-footer/80 transition-all duration-300 hover:text-white flex gap-3 items-center  rounded-lg py-4 px-3 shadow-md dark:bg-footer">
              <div className="text-footer dark:text-white bg-white rounded-[0.7rem] p-2 dark:bg-gray-700">
                <RiServiceFill />
              </div>
              <div className="text-xs font-sans">Services</div>
              <div></div>
            </div>

            <div className="group hover:bg-footer/80 transition-all duration-300 hover:text-white flex gap-3 items-center  rounded-lg py-4 px-3 shadow-md dark:bg-footer">
              <div className="text-footer dark:text-white bg-white rounded-[0.7rem] p-2 dark:bg-gray-700">
                <GiTeacher />
              </div>
              <div className="text-xs font-sans">Teacher</div>
              <div></div>
            </div>

            <div className="group hover:bg-footer/80 transition-all duration-300 hover:text-white flex gap-3 items-center  rounded-lg py-4 px-3 shadow-md dark:bg-footer">
              <div className="text-footer dark:text-white bg-white rounded-[0.7rem] p-2 dark:bg-gray-700">
                <MdOutlineSecurity />
              </div>
              <div className="text-xs font-sans">Security</div>
              <div className=""></div>
            </div>

            <div className="group hover:bg-footer/80 transition-all duration-300 hover:text-white flex gap-3 items-center  rounded-lg py-4 px-3 shadow-md dark:bg-footer">
              <div className="text-footer dark:text-white bg-white rounded-[0.7rem] p-2 dark:bg-gray-700">
                <CgWebsite />
              </div>
              <div className="text-xs font-sans">Web Development</div>
              <div></div>
            </div>

            <div className="group hover:bg-footer/80 transition-all duration-300 hover:text-white flex gap-3 items-center  rounded-lg py-4 px-3 shadow-md dark:bg-footer">
              <div className="text-footer dark:text-white bg-white rounded-[0.7rem] p-2 dark:bg-gray-700">
                <CgGames />
              </div>
              <div className="text-xs font-sans">Game Developers</div>
              <div></div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center ">
          <div className="flex flex-col items-center justify-center ">
            <div className="shadow-lg bg-footer/90 text-white rounded-3xl md:p-6 sm:p-5 p-5 mx-5 sm:mx-5  mt-9 flex flex-col divide-y divide-gray-600 gap-4 min-h-[280px] min-w-[280px] max-w-[410px] dark:bg-gray-700">
              <div className="font-bold font-sans text-lg text-center">
                Popular Categories
              </div>
              <div className="flex  ">
                <span className="flex-1 flex items-center  font-sans font-medium">
                  System analyst
                </span>
                <div className="bg-footer bg-opacity-60 text-indigo-600 px-3 py-1 mt-1 rounded-xl flex items-center justify-center">
                  2
                </div>
              </div>
              <div className="flex">
                <span className="flex-1 flex items-center   font-sans font-medium">
                  Frontend Developer
                </span>
                <div className="bg-footer bg-opacity-60 text-indigo-600 px-3 py-1 rounded-xl mt-1  flex items-center justify-center">
                  10
                </div>
              </div>
              <div className="flex">
                <span className="flex-1 flex items-center  font-sans font-medium">
                  Backend Developer
                </span>
                <div className="bg-footer bg-opacity-60 text-indigo-600 px-3 py-1 mt-1  rounded-xl flex items-center justify-center">
                  8
                </div>
              </div>
              <div className="flex">
                <span className="flex-1 flex items-center   font-sans font-medium">
                  Full stack Developer
                </span>
                <div className="bg-footer bg-opacity-60 text-indigo-600 px-3 py-1 mt-1  rounded-xl flex items-center justify-center">
                  7
                </div>
              </div>
            </div>

            <div className="shadow-md   min-w-[200px] max-w-[410px] select-none cursor-pointer  bg-footer/95 text-white hover:bg-footer/80 transition-all duration-300 dark:bg-slate-600 rounded-3xl  flex items-center justify-between mx-5 sm:mx-5 md:mx-[100px] my-3 px-5 py-3">
              <div>See All Categories</div>
              <HiArrowNarrowRight />
            </div>
          </div>
          <div className="hidden sm:block  md:block p-3 lg:hidden object-contain w-[400px] h-[400px] mt-9 pt-10">
            <Image src={require('../images/popular2.svg')} />
          </div>
        </div>
      </div>

      <div className="w-full px-4 pt-16 grid grid-cols-1  md:grid-cols-3 lg:grid-cols-5 pb-20">
        <div className="font-bold  underline underline-offset-8 mb-4 md:pl-6 mt-3 md:text-left text-center col-span-1 lg:col-span-2 text-3xl tracking-wide font-sans dark:text-gray-300 text-gray-700">
          Frequently asked Questions
        </div>
        <div className="[&>*]:mt-3 [&>*]:py-5 col-span-1  md:col-span-2 lg:col-span-3 mx-auto w-full max-w-lg rounded-2xl bg-transparent p-2">
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="border-2 dark:border-none border-opacity-60 shadow-md hover:shadow-lg transition-all duration-300 flex w-full justify-between rounded-lg bg-transparent px-4 py-3 text-left text-sm font-medium dark:text-gray-300  dark:ring-2 dark:ring-text-purple-900 dark:hover:bg-black/90 hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-600 focus-visible:ring-opacity-85">
                  <span className=" ">
                    How is JobXa different from other job boards?
                  </span>
                  <ChevronUpIcon
                    className={`${
                      open ? 'rotate-180 transform' : ''
                    } h-5 w-5 text-purple-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-600 dark:text-gray-200 font-sans">
                  JobXa is different form other online job boards in many ways.
                  It is a job board that is focused on the job seekers.
                  <br />
                  <ul className=" list-disc  ">
                    <li className="">
                      First, you won't find scams, too-good-to-be-true business
                      opportunities,ads, commision-only jobs.
                    </li>
                    <li>
                      Second, JobXa are the entire focus on the Job board.
                    </li>
                  </ul>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>

          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="border-2 dark:border-none border-opacity-60 shadow-md hover:shadow-lg transition-all duration-300 flex w-full justify-between rounded-lg bg-transparent px-4 py-3 text-left text-sm font-medium dark:text-gray-300  dark:ring-2 dark:ring-text-purple-900 dark:hover:bg-black/90 hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-600 focus-visible:ring-opacity-85">
                  <span>Can you help me find a job? </span>
                  <ChevronUpIcon
                    className={`${
                      open ? 'rotate-180 transform' : ''
                    } h-5 w-5 text-purple-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-600 dark:text-gray-200 font-sans">
                  Yes. JobXa offers a variety of tools to help you in your job
                  search, including:
                  <br />
                  <ul className=" list-disc  ">
                    <li className="">A list of our Career opportunities</li>
                    <li>
                      Our blog contains numerous articles on job search and
                      career opportunities.
                    </li>
                    <li>
                      We post various Jobs related post in our social media.
                    </li>
                    <li>We provide extensive customer service.</li>
                  </ul>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>

          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="border-2 dark:border-none border-opacity-60 shadow-md hover:shadow-lg transition-all duration-300 flex w-full justify-between rounded-lg bg-transparent px-4 py-3 text-left text-sm font-medium dark:text-gray-300  dark:ring-2 dark:ring-text-purple-900 dark:hover:bg-black/90 hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-600 focus-visible:ring-opacity-85">
                  <span>How do I apply for a position? </span>
                  <ChevronUpIcon
                    className={`${
                      open ? 'rotate-180 transform' : ''
                    } h-5 w-5 text-purple-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-600 dark:text-gray-200 font-sans">
                  Visit our Find work page and view our current job openings.
                  After reviewing the requirements, if your skills meet the
                  specific requirements for one or more positions, please click
                  “Apply for this Job” and complete all fields on the
                  application. If no position meets your current interest, you
                  can Submit Resume to us for future consideration.
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>

          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="border-2 dark:border-none border-opacity-60 shadow-md hover:shadow-lg transition-all duration-300 flex w-full justify-between rounded-lg bg-transparent px-4 py-3 text-left text-sm font-medium dark:text-gray-300  dark:ring-2 dark:ring-text-purple-900 dark:hover:bg-black/90 hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-600 focus-visible:ring-opacity-85">
                  <span>
                    I saw multiple positions on website, should I appply for
                    all?
                  </span>
                  <ChevronUpIcon
                    className={`${
                      open ? 'rotate-180 transform' : ''
                    } h-5 w-5 text-purple-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-600 dark:text-gray-200 font-sans">
                  Yes. Each position has a dedicated recruiter assigned to it.
                  When you apply to a position, the recruiter is notified of
                  your interest and will follow up with you in the event your
                  skills match the requirements of the position.
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>

          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="border-2 dark:border-none border-opacity-60 shadow-md hover:shadow-lg transition-all duration-300 flex w-full justify-between rounded-lg bg-transparent px-4 py-3 text-left text-sm font-medium dark:text-gray-300  dark:ring-2 dark:ring-text-purple-900 dark:hover:bg-black/90 hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-600 focus-visible:ring-opacity-85">
                  <span>What if no position match my skills? </span>
                  <ChevronUpIcon
                    className={`${
                      open ? 'rotate-180 transform' : ''
                    } h-5 w-5 text-purple-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-600 dark:text-gray-200 font-sans">
                  I no postion meets my current interest, you can Submit Resume
                  to us for future consideration. We can put it in our database
                  which will be searchable by recruiters when future position
                  arise.
                  <br />
                  <ul className=" list-disc  ">
                    <li className="">
                      First, you won't find scams, too-good-to-be-true business
                      opportunities,ads, commision-only jobs.
                    </li>
                    <li>
                      Second, JobXa are the entire focus on the Job board.
                    </li>
                  </ul>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>

          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="border-2 dark:border-none border-opacity-60 shadow-md hover:shadow-lg transition-all duration-300 flex w-full justify-between rounded-lg bg-transparent px-4 py-3 text-left text-sm font-medium dark:text-gray-300  dark:ring-2 dark:ring-text-purple-900 dark:hover:bg-black/90 hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-600 focus-visible:ring-opacity-85">
                  <span>How can I determine a fair pay for my skills? </span>
                  <ChevronUpIcon
                    className={`${
                      open ? 'rotate-180 transform' : ''
                    } h-5 w-5 text-purple-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-600 dark:text-gray-200 font-sans">
                  Typically employers will use your salary history to guide an
                  appropriate offer for your next position. It is common to
                  receive a moderate increase on your current total
                  compensation. If you would like review some independent
                  resources for compensation information, check out sites like
                  salary.com.
                  <br />
                  <ul className=" list-disc  ">
                    <li className="">
                      First, you won't find scams, too-good-to-be-true business
                      opportunities,ads, commision-only jobs.
                    </li>
                    <li>
                      Second, JobXa are the entire focus on the Job board.
                    </li>
                  </ul>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
