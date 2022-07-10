import Avatar from 'react-avatar';
import { CgTimer } from 'react-icons/cg';
import { GoLocation } from 'react-icons/go';
import { TbReportMoney } from 'react-icons/tb';
import { BsFillBookmarkHeartFill, BsCalendar4 } from 'react-icons/bs';
import { FaGraduationCap } from 'react-icons/fa';
import { TbLanguage } from 'react-icons/tb';
import { AiOutlineUser } from 'react-icons/ai';
import { RiMoneyDollarBoxLine } from 'react-icons/ri';
import { GiSandsOfTime } from 'react-icons/gi';
import {
  GrLinkedinOption,
  GrInstagram,
  GrTwitter,
  GrFacebookOption,
} from 'react-icons/gr';
const profiles = () => {
  return (
    <div className="grid grid-cols-8  mt-[90px] scroll-smooth">
      <div className=" col-start-2 col-end-6  h-[300px]">
        {/* profile section */}
        <div className="flex flex-col ">
          <div className="flex gap-4 items-center">
            {/* <div className="bg-indigo-600 rounded-full h-12 w-12"></div> */}
            <div>
              <Avatar
                size="75px"
                className="rounded-full font-opensans font-bold antialiased "
                color={Avatar.getRandomColor('sitebase', [
                  'red',
                  'green',
                  'blue',
                ])}
                name="Sachin Sapkota"
              />
            </div>
            <div className="flex flex-col gap-1">
              <div className="font-bold text-xl font-nunito capitalize">
                Sachin Sapkota
              </div>
              <div className="text-[13px] font-nunito font-bold dark:text-indigo-400 text-indigo-600  ">
                Web Development
              </div>
              <div className="flex items-center gap-1 ">
                <GoLocation />
                <span className="text-xs text-gray-500 font-nunito text-[11px]">
                  Nepal, Kathmandu
                </span>
              </div>
              <div className="flex  gap-1">
                <TbReportMoney />
                <span className="text-[11px] font-nunito text-gray-500">
                  Rs 98 / hour
                </span>
              </div>
              <div className="flex items-center gap-1">
                <CgTimer />
                <span className="text-xs text-gray-500 font-nunito text-[11px]">
                  Member since Aug 18 2020
                </span>
              </div>
            </div>
          </div>
          {/* About section */}

          <div className="mt-8 block">
            <span className="font-nunito text-[13px] font-semibold   ">
              Candidates About
            </span>
            <span className="inline-block text-[12px]  mt-2 font-nunito text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit
            </span>
          </div>
          {/*   Education */}
          <div className="flex flex-col mt-3">
            <span className="font-nunito text-sm font-semibold mt-8">
              Education
            </span>
            <ol className="[&>*]:mt-8 ml-3 mt-1 border-l-2 border-gray-400 border-dotted ">
              <li className="">
                <div className="flex gap-4 pl-5 relative">
                  <Avatar
                    size="20px"
                    className="rounded-full bg-gray-200 border-3 border-white absolute -left-[0.39rem]"
                    name="Bacherlors"
                  />
                  <div className="flex flex-col ">
                    <div className="flex items-center gap-3 ">
                      <span className="text-[12px] font-nunito font-semibold">
                        Bachelors in arts
                      </span>
                      <span className="  py-[2px] px-3 rounded-2xl text-center  text-red-600 bg-gray-200 text-[10px] font-nunito font-semibold">
                        2012-2014
                      </span>
                    </div>
                    <span className="text-[11px] font-semibold font-nunito text-red-600 capitalize">
                      college name
                    </span>
                    <span className="tracking-[0.2px] mt-3 text-left text-[11px]  font-nunito">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </span>
                  </div>
                </div>
              </li>
              <li className="">
                <div className="flex gap-4 pl-5 relative">
                  <Avatar
                    size="20px"
                    className="rounded-full bg-gray-200 border-3 border-white absolute -left-[0.39rem]"
                    name="Bacherlors"
                  />
                  <div className="flex flex-col ">
                    <div className="flex items-center gap-3 ">
                      <span className="text-[12px] font-nunito font-semibold">
                        Bachelors in arts
                      </span>
                      <span className="  py-[2px] px-3 rounded-2xl text-center  text-red-600 bg-gray-200 text-[10px] font-nunito font-semibold">
                        2012-2014
                      </span>
                    </div>
                    <span className="text-[11px] font-semibold font-nunito text-red-600 capitalize">
                      college name
                    </span>
                    <span className="tracking-[0.2px] mt-3 text-left text-[11px]  font-nunito">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </span>
                  </div>
                </div>
              </li>

              <li className="">
                <div className="flex gap-4 pl-5 relative">
                  <Avatar
                    size="20px"
                    className="rounded-full bg-gray-200 border-3 border-white absolute -left-[0.39rem]"
                    name="Bacherlors"
                  />
                  <div className="flex flex-col ">
                    <div className="flex items-center gap-3 ">
                      <span className="text-[12px] font-nunito font-semibold">
                        Bachelors in arts
                      </span>
                      <span className="  py-[2px] px-3 rounded-2xl text-center  text-red-600 bg-gray-200 text-[10px] font-nunito font-semibold">
                        2012-2014
                      </span>
                    </div>
                    <span className="text-[11px] font-semibold font-nunito text-red-600 capitalize">
                      college name
                    </span>
                    <span className="tracking-[0.2px] mt-3 text-left text-[11px]  font-nunito">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </span>
                  </div>
                </div>
              </li>

              <li className="">
                <div className="flex gap-4 pl-5 relative">
                  <Avatar
                    size="20px"
                    className="rounded-full bg-gray-200 border-3 border-white absolute -left-[0.39rem]"
                    name="Bacherlors"
                  />
                  <div className="flex flex-col ">
                    <div className="flex items-center gap-3 ">
                      <span className="text-[12px] font-nunito font-semibold">
                        Bachelors in arts
                      </span>
                      <span className="  py-[2px] px-3 rounded-2xl text-center  text-red-600 bg-gray-200 text-[10px] font-nunito font-semibold">
                        2012-2014
                      </span>
                    </div>
                    <span className="text-[11px] font-semibold font-nunito text-red-600 capitalize">
                      college name
                    </span>
                    <span className="tracking-[0.2px] mt-3 text-left text-[11px]  font-nunito">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </span>
                  </div>
                </div>
              </li>
            </ol>
          </div>
          {/* 
work and experience */}
          <div className="mt-7">
            <span className="font-nunito text-sm font-semibold ">
              Work & Experience
            </span>
            <ol className=" ml-3 mt-4  border-l-2 border-gray-400 border-dotted ">
              <li className="">
                <div className="flex gap-4 pl-5 relative">
                  <Avatar
                    size="20px"
                    className="rounded-full bg-indigo-300 border-3 border-white absolute -left-[0.39rem]"
                    name="Bacherlors"
                  />
                  <div className="flex flex-col ">
                    <div className="flex items-center gap-3 ">
                      <span className="text-[12px] font-nunito font-semibold">
                        Bachelors in arts
                      </span>
                      <span className="  py-[2px] px-3 rounded-2xl text-center  text-indigo-600 bg-indigo-200 text-[10px] font-nunito font-semibold">
                        2012-2014
                      </span>
                    </div>
                    <span className="text-[11px] font-semibold font-nunito text-indigo-600 capitalize">
                      college name
                    </span>
                    <span className="tracking-[0.2px] mt-3 text-left text-[11px]  font-nunito">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </span>
                  </div>
                </div>
              </li>

              <li className="">
                <div className="flex gap-4 pl-5 relative">
                  <Avatar
                    size="20px"
                    className="rounded-full bg-indigo-300 border-3 border-white absolute -left-[0.39rem]"
                    name="Bacherlors"
                  />
                  <div className="flex flex-col ">
                    <div className="flex items-center gap-3 ">
                      <span className="text-[12px] font-nunito font-semibold">
                        Bachelors in arts
                      </span>
                      <span className="  py-[2px] px-3 rounded-2xl text-center  text-indigo-600 bg-indigo-200 text-[10px] font-nunito font-semibold">
                        2012-2014
                      </span>
                    </div>
                    <span className="text-[11px] font-semibold font-nunito text-indigo-600 capitalize">
                      college name
                    </span>
                    <span className="tracking-[0.2px] mt-3 text-left text-[11px]  font-nunito">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </span>
                  </div>
                </div>
              </li>
            </ol>
          </div>
        </div>
        <div className="mt-7 ">
          <span className="font-nunito text-sm font-semibold ">Portfolio</span>
          <div className="flex flex-nowrap overflow-x-auto gap-4 no-scrollbar ">
            <div className="w-[130px] h-[130px] min-w-[130px] min-h-[130px] rounded-lg bg-gray-200 "></div>
            <div className="w-[130px] h-[130px] min-w-[130px] min-h-[130px] rounded-lg bg-gray-200 "></div>
            <div className="w-[130px] h-[130px] min-w-[130px] min-h-[130px] rounded-lg bg-gray-200 "></div>
            <div className="w-[130px] h-[130px] min-w-[130px] min-h-[130px] rounded-lg bg-gray-200 "></div>
            <div className="w-[130px] h-[130px] min-w-[130px] min-h-[130px] rounded-lg bg-gray-200 "></div>
          </div>
        </div>
      </div>
      {/* 
      another section */}
      <div className=" col-span-2 p-0 lg:px-4">
        <div className="flex flex-col">
          <div className="flex gap-3">
            <span className="flex-1 bg-blue-700 text-white rounded-md text-center font-nunito text-[13px] py-1 ">
              Download CV
            </span>
            <div className="bg-gray-200 py-1 px-2  rounded-md flex items-center justify-center">
              <BsFillBookmarkHeartFill className="text-indigo-700 w-3 h-3" />{' '}
            </div>
          </div>

          <div className="bg-gray-200 p-5 flex flex-col gap-4 mt-5 rounded-md">
            <div className="flex items-center justify-start gap-4">
              <BsCalendar4 className="w-[0.90rem] h-[0.90rem]  text-indigo-400" />
              <div className="flex flex-col ">
                <span className="font-nunito text-[11px] font-semibold">
                  Experience
                </span>
                <span className="font-nunito text-[11px] text-gray-700 ">
                  3 Years
                </span>
              </div>
            </div>

            <div className="flex items-center justify-start gap-4">
              <GiSandsOfTime className="w-[0.98rem] h-[0.98rem]  text-indigo-400" />
              <div className="flex flex-col ">
                <span className="font-nunito text-[11px] font-semibold">
                  Age
                </span>
                <span className="font-nunito text-[11px] text-gray-700 ">
                  23 Years
                </span>
              </div>
            </div>

            <div className="flex items-center justify-start gap-4">
              <RiMoneyDollarBoxLine className="w-[0.98rem] h-[0.98rem]  text-indigo-400" />
              <div className="flex flex-col ">
                <span className="font-nunito text-[11px] font-semibold">
                  Current Salary
                </span>
                <span className="font-nunito text-[11px] text-gray-700 ">
                  30000
                </span>
              </div>
            </div>

            <div className="flex items-center justify-start gap-4">
              <AiOutlineUser className="w-[0.98rem] h-[0.98rem]  text-indigo-400" />
              <div className="flex flex-col ">
                <span className="font-nunito text-[11px] font-semibold">
                  Gender
                </span>
                <span className="font-nunito text-[11px] text-gray-700 ">
                  Male
                </span>
              </div>
            </div>

            <div className="flex items-center justify-start gap-4">
              <TbLanguage className="w-4 h-5  text-indigo-400" />
              <div className="flex flex-col ">
                <span className="font-nunito text-[11px] font-semibold">
                  Language
                </span>
                <span className="font-nunito text-[11px] text-gray-700 ">
                  English , German , Spanish
                </span>
              </div>
            </div>

            <div className="flex items-center justify-start gap-4">
              <FaGraduationCap className="w-3 h-3 text-indigo-400" />
              <div className="flex flex-col ">
                <span className="font-nunito text-[11px] font-semibold">
                  Educational Level
                </span>
                <span className="font-nunito text-[11px] text-gray-700 ">
                  Masters Degree
                </span>
              </div>
            </div>
          </div>
          {/* 
socail media */}
          <div className="p-5 flex mt-5 justify-between rounded-md bg-gray-200 ">
            <span className="font-nunito font-semibold text-[11px]">
              Social media
            </span>
            <div className="flex gap-2">
              <GrFacebookOption className="w-3 h-3 text-indigo-400" />
              <GrTwitter className="w-3 h-3 text-indigo-400" />
              <GrInstagram className="w-3 h-3 text-indigo-400" />
              <GrLinkedinOption className="w-3 h-3 text-indigo-400" />
            </div>
          </div>
          {/* 
skills */}
          <div className="flex flex-col py-5 px-5 mt-5 rounded-md  gap-3 bg-gray-200">
            <span className="font-nunito font-semibold text-[11px]">
              Professional Skills
            </span>
            <div className="flex flex-wrap gap-2">
              <span className="whitespace-nowrap rounded-md px-2 py-1 font-semibold bg-white font-nunito text-[10px] text-gray-700">
                app Development
              </span>
              <span className=" whitespace-nowrap rounded-md px-2 py-1 font-semibold bg-white font-nunito text-[10px] text-gray-700">
                website Development
              </span>
              <span className="whitespace-nowrap rounded-md px-2 py-1 font-semibold bg-white font-nunito text-[10px] text-gray-700">
                flutter
              </span>
              <span className="whitespace-nowrap rounded-md px-2 py-1 font-semibold bg-white font-nunito text-[10px] text-gray-700">
                seo marketing
              </span>
            </div>
          </div>
          {/* 
contact us */}
          <div className="px-5 py-7 mt-5 bg-gray-200 rounded-md flex flex-col gap-3">
            <span className="font-nunito font-semibold text-[12px] ">
              Contact Us
            </span>
            <form>
              <div className="flex flex-col gap-4 ">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full placeholder:font-nunito placeholder:text-[13px] placeholder:font-semibold placeholder:text-gray-400 px-2 py-1 rounded-md text-gray-700 border border-gray-300 focus:outline-none focus:border-gray-500"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full placeholder:font-nunito placeholder:text-[13px] placeholder:font-semibold placeholder:text-gray-400 px-2 py-1 rounded-md text-gray-700 border border-gray-300 focus:outline-none focus:border-gray-500"
                />
                <input
                  typte="text-area"
                  placeholder="Message"
                  className="w-full placeholder:font-nunito placeholder:text-[13px] placeholder:font-semibold placeholder:text-gray-400 px-2 py-1 rounded-md text-gray-700 border border-gray-300 focus:outline-none focus:border-gray-500"
                />
                <button className="font-nunito text-[13px] font-semibold  w-full px-2 py-2 rounded-md text-white bg-blue-700 hover:bg-blue-500 focus:outline-none focus:border-indigo-500">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default profiles;
