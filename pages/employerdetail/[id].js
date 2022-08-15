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
import Link from 'next/link';
import {
  GrLinkedinOption,
  GrInstagram,
  GrTwitter,
  GrFacebookOption,
} from 'react-icons/gr';

const employerdetail = (props) => {
  return (
    <div>
      <div className="w-full h-screen pt-10">
        {props?.employerdetail?.map((a, i) => {
          return (
            <div key={i} className="grid grid-cols-8  pt-[50px] ">
              <div className=" col-start-2 col-end-8   h-[300px]">
                {/* profile section */}
                <div className="flex flex-col ">
                  <div className="flex gap-2 items-center relative ">
                    <Avatar size="70px" className="rounded-md" name={a.name} />
                    <div className="flex flex-col gap-1">
                      <div className="font-bold  text-[22px] md:text-[25px] font-nunito capitalize">
                        {a.name}
                      </div>

                      <div className="flex gap-3 flex-wrap sm:flex-nowrap">
                        <div className="flex items-center gap-1 ">
                          <GoLocation />
                          <span className=" text-xs text-gray-500 font-nunito text-[14px]">
                            {a.address}
                          </span>
                        </div>

                        <div className="flex items-center gap-1  ">
                          <CgTimer />
                          <span className="text-xs text-gray-500 font-nunito text-[14px]">
                            {a.est_date}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className=" gap-3 lg:flex hidden absolute right-1 top-1">
                      <span className=" bg-blue-700 text-white rounded-md text-center font-nunito text-[13px] py-2  px-3 cursor-pointer place-self-center ">
                        Follow
                      </span>
                      <div className="cursor-pointer bg-gray-200 py-3 px-3  rounded-md flex items-center justify-center">
                        <BsFillBookmarkHeartFill className="text-indigo-700 w-3 h-3" />{' '}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col mt-4 ">
                    <div className="flex gap-3 lg:hidden">
                      <span className="flex-1 bg-blue-700 text-white rounded-md text-center font-nunito text-[13px] py-2 place-self-center ">
                        Follow
                      </span>
                      <div className="bg-gray-200 py-3 px-3  rounded-md flex items-center justify-center">
                        <BsFillBookmarkHeartFill className="text-indigo-700 w-3 h-3" />{' '}
                      </div>
                    </div>

                    <div className="bg-gray-200 dark:bg-darkcard p-5 grid grid-cols-1 sm:grid-cols-2  gap-4 mt-5 rounded-md">
                      <div className="flex items-center justify-start gap-4">
                        <BsCalendar4 className="w-[0.90rem] h-[0.90rem]  text-indigo-400" />
                        <div className="flex flex-col ">
                          <span className="font-nunito text-[14px] font-semibold">
                            Est. Date :
                          </span>
                          <span className="font-nunito text-[14px] text-gray-700 dark:text-gray-400 ">
                            {a.est_date}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center justify-start gap-4">
                        <GoLocation className="w-[0.98rem] h-[0.98rem]  text-indigo-400" />
                        <div className="flex flex-col ">
                          <span className="font-nunito text-[14px] font-semibold">
                            Location:
                          </span>
                          <span className="font-nunito text-[14px] text-gray-700 dark:text-gray-400 ">
                            {a.address}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center justify-start gap-4">
                        <GiSandsOfTime className="w-[0.98rem] h-[0.98rem]  text-indigo-400" />
                        <div className="flex flex-col ">
                          <span className="font-nunito text-[14px] font-semibold">
                            Sector:
                          </span>
                          <span className="font-nunito text-[14px] text-gray-700 dark:text-gray-400 ">
                            {a.sector}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center justify-start gap-4">
                        <RiMoneyDollarBoxLine className="w-[0.98rem] h-[0.98rem]  text-indigo-400" />
                        <div className="flex flex-col ">
                          <span className="font-nunito text-[14px] font-semibold">
                            Website
                          </span>
                          <span className="font-nunito text-[14px]  text-blue-700 dark:text-blue-400 underline">
                            <Link href={a.website}>Click here</Link>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* About section */}
                  <div className="mt-8 block">
                    <span className="font-nunito block text-[14px] font-semibold   ">
                      Job Description
                    </span>
                    <span className="inline-block text-[13px]  mt-2 font-nunito text-gray-800 dark:text-gray-300">
                      {a.description}
                    </span>
                  </div>
                </div>

                {/* 
                   contact us */}
                <div className="px-5 py-7 mt-5 bg-gray-200 dark:bg-darkcard rounded-md flex flex-col gap-3">
                  <span className="font-nunito font-semibold text-[12px] ">
                    Contact Us
                  </span>
                  <form>
                    <div className="flex flex-col gap-4 ">
                      <input
                        type="text"
                        placeholder="Name"
                        className="dark:bg-darkback w-full placeholder:font-nunito placeholder:text-[13px] placeholder:font-semibold placeholder:text-gray-400 px-2 py-1 rounded-md text-gray-700 border border-gray-300 focus:outline-none focus:border-gray-500"
                      />
                      <input
                        type="email"
                        placeholder="Email"
                        className="dark:bg-darkback w-full placeholder:font-nunito placeholder:text-[13px] placeholder:font-semibold placeholder:text-gray-400 px-2 py-1 rounded-md text-gray-700 border border-gray-300 focus:outline-none focus:border-gray-500"
                      />
                      <textarea
                        rows="6"
                        placeholder="Message"
                        className=" dark:bg-darkback w-full resize-none   placeholder:font-nunito placeholder:text-[13px] placeholder:font-semibold placeholder:text-gray-400 px-2 py-1 rounded-md text-gray-700 border border-gray-300 focus:outline-none focus:border-gray-500"
                      ></textarea>
                      <button className="resize-none font-nunito text-[13px] font-semibold  w-full px-2 py-2 rounded-md text-white bg-blue-700 hover:bg-blue-500 focus:outline-none focus:border-indigo-500">
                        Send Message
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default employerdetail;

export async function getServerSideProps(context) {
  const id = context.query.id;
  context.res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  );
  const response = await fetch(
    `http://localhost:3000/api/user/getemployerdetail/${id}`
  );
  const employerdetail = await response.json();

  return { props: { employerdetail } };
}
