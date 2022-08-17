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
import toast, { Toaster } from 'react-hot-toast';
import useSWR from 'swr';
import Link from 'next/link';
// import {
//   GrLinkedinOption,
//   GrInstagram,
//   GrTwitter,
//   GrFacebookOption,
// } from 'react-icons/gr';
import api from '../../api/api';
const job = (props) => {
  const applyjob = async (id) => {
    const data = await api.post('/api/employee/applyjob', { id });
    const msg = data.data.msg;
    typeof msg !== 'undefined' ? toast.success(msg) : '';
  };
  return (
    <div className="w-full h-screen pt-10">
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
      {props?.job?.map((a, i) => {
        return (
          <div key={i} className="grid grid-cols-8  pt-[50px] scroll-smooth">
            <div className=" col-start-2 col-end-8 lg:col-end-6  h-[300px]">
              {/* profile section */}
              <div className="flex flex-col ">
                <div className="flex gap-2 items-center ">
                  <div className="flex flex-col gap-1">
                    <div className="font-bold  text-[22px] md:text-[25px] font-nunito capitalize">
                      {a.title}
                    </div>
                    <div className="text-[18px] first-letter:capitalize  font-nunito font-bold dark:text-indigo-400 text-indigo-600  ">
                      {a.employer_name}
                    </div>
                    <div className="flex gap-3 flex-wrap sm:flex-nowrap">
                      <div className="flex items-center gap-1 ">
                        <GoLocation />
                        <span className=" text-xs text-gray-500 font-nunito text-[14px]">
                          {a.city}, Nepal
                        </span>
                      </div>
                      <div className="flex  gap-1">
                        <TbReportMoney />
                        <span className="text-[14px] font-nunito text-gray-500">
                          {a.salary_time !== 'negotiable'
                            ? 'Rs' + a.salary_amt + '/' + a.salary_time
                            : 'Negotiable'}
                        </span>
                      </div>
                      <div className="flex items-center gap-1  ">
                        <CgTimer />
                        <span className="text-xs text-gray-500 font-nunito text-[14px]">
                          {a.post_date.split('T')[0]}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col mt-4 ">
                  <div
                    className="flex gap-3 lg:hidden select-none cursor-pointer "
                    onClick={() => applyjob(a.id)}
                  >
                    <span className="flex-1 bg-blue-700 capitalize text-white rounded-md text-center font-nunito text-[13px] py-2 place-self-center ">
                      apply for job
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
                          Date Posted:
                        </span>
                        <span className="font-nunito text-[14px] text-gray-700 dark:text-gray-400 ">
                          {a.post_date}
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
                          {a.address}, {a.city}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-start gap-4">
                      <GiSandsOfTime className="w-[0.98rem] h-[0.98rem]  text-indigo-400" />
                      <div className="flex flex-col ">
                        <span className="font-nunito text-[14px] font-semibold">
                          Deadline
                        </span>
                        <span className="font-nunito text-[14px] text-gray-700 dark:text-gray-400 ">
                          {a.deadline}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-start gap-4">
                      <RiMoneyDollarBoxLine className="w-[0.98rem] h-[0.98rem]  text-indigo-400" />
                      <div className="flex flex-col ">
                        <span className="font-nunito text-[14px] font-semibold">
                          Salary
                        </span>
                        <span className="font-nunito text-[14px] text-gray-700 dark:text-gray-400 ">
                          {a.salary_time !== 'negotiable'
                            ? 'Rs' + a.salary_amt + '/' + a.salary_time
                            : 'Negotiable'}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-start gap-4">
                      <AiOutlineUser className="w-[0.98rem] h-[0.98rem]  text-indigo-400" />
                      <div className="flex flex-col ">
                        <span className="font-nunito text-[14px] font-semibold">
                          Job Sector:
                        </span>
                        <span className="font-nunito text-[14px] text-gray-700 dark:text-gray-400 ">
                          {a.sector}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-start gap-4">
                      <TbLanguage className="w-4 h-5  text-indigo-400" />
                      <div className="flex flex-col ">
                        <span className="font-nunito text-[14px] font-semibold">
                          Job Type:
                        </span>
                        <span className="font-nunito text-[14px] text-gray-700 dark:text-gray-400 ">
                          {a.job_type}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-start gap-4">
                      <FaGraduationCap className="w-3 h-3 text-indigo-400" />
                      <div className="flex flex-col ">
                        <span className="font-nunito text-[14px] font-semibold">
                          Qualification:
                        </span>
                        <span className="font-nunito text-[14px] text-gray-700 dark:text-gray-400 ">
                          {a.qualification}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-start gap-4">
                      <AiOutlineUser className="w-[0.98rem] h-[0.98rem]  text-indigo-400" />
                      <div className="flex flex-col ">
                        <span className="font-nunito text-[14px] font-semibold">
                          Min. Experience:
                        </span>
                        <span className="font-nunito text-[14px] text-gray-700 dark:text-gray-400 ">
                          {a.experience}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* 
                        skills */}
                  <div className="flex flex-col py-5 px-5 mt-5 rounded-md  gap-3 bg-gray-200 dark:bg-darkcard">
                    <span className="font-nunito font-semibold text-[14px]">
                      Required Skills
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {a.skills.split(',').map((a, i) => {
                        return (
                          <span className="whitespace-nowrap rounded-md px-2 py-1 font-semibold bg-white dark:bg-white/20 font-nunito text-[13px] text-gray-700 dark:text-white">
                            {a}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                </div>
                {/* About section */}
                <div className="mt-8 block">
                  <span className=" block text-[14px] font-semibold   ">
                    Job Description
                  </span>
                  <span className="inline-block text-[13px]  mt-2 font-nunito text-gray-800 dark:text-gray-300">
                    {a.description}
                  </span>
                </div>
                {/*   Education */}
                <div className="flex flex-col mt-3">
                  <span className="font-nunito text-[14px] font-semibold mt-8">
                    Key Responsibilities
                  </span>
                  <span className="inline-block text-[13px]  mt-2 font-nunito text-gray-800 dark:text-gray-300">
                    {a.keyres}
                  </span>
                </div>
                {/* 
                         work and experience */}
                <div className="flex flex-col mt-3">
                  <span className="font-nunito text-[14px] font-semibold mt-8">
                    Skills and Experience
                  </span>
                  <span className="inline-block text-[13px]  mt-2 font-nunito text-gray-800 dark:text-gray-300">
                    {a.skillsandexperience}
                  </span>
                </div>

                <div className="flex flex-col mt-3">
                  <span className="font-nunito text-[14px] font-semibold mt-8">
                    Things to do before applying?
                  </span>
                  <div className="block">
                    <ol className="text-[13px] font-nunito">
                      <li>Complete Profile.</li>
                      <li>Update a resume at JobXa.</li>
                      <li>Submit the Proposal for the {a.title}.</li>
                      <li>
                        Read our Blog if needed help for writing proposal.
                      </li>
                      <li>
                        Email us if you want to withdraw your application.
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>

            {/* Check email if needed.Enroll in the course or prepare for interview
            questions.Inform InternSathi if (in case) you want to withdraw your
            application for a Frontend Developer internship in Kathmandu. For
            any inquiries, email us or ask questions on internsathi chat icon.
            (click on the company name, visit the company profile, and click on
            send a message.) Apply for More Frontend Development Internship */}
            {/* 
            another section */}
            <div className="hidden lg:flex lg:flex-col col-span-2 p-0 lg:px-4">
              <div className="flex flex-col">
                <div
                  className="cursor-pointer select-none flex gap-3"
                  onClick={() => applyjob(a.id)}
                >
                  <span className="flex-1  bg-blue-700 text-white rounded-md text-center font-nunito text-[13px] py-2 ">
                    Apply For Job
                  </span>
                  <div className="bg-gray-200 py-2 px-3 rounded-md flex items-center justify-center flex-none">
                    <BsFillBookmarkHeartFill className="text-indigo-700 w-3 h-3" />{' '}
                  </div>
                </div>

                <div className="bg-gray-200 dark:bg-darkcard p-5 flex flex-col gap-4 mt-5 rounded-md">
                  <div className="flex items-center justify-start  gap-4">
                    <Avatar
                      name={a.employer_name}
                      size="60px"
                      textSizeRatio={3}
                      className="rounded-lg "
                    ></Avatar>
                    <span className="flex flex-col">
                      <span className="text-lg font-semibold capitalize">
                        {a.employer_name}
                      </span>

                      <span className="text-sm ">
                        <Link href={`/employerdetail/${a.employer_id}`}>
                          View company profile
                        </Link>
                      </span>
                    </span>
                  </div>
                </div>
                {/* 
                        socail media */}

                {/* 
                        skills */}

                <div className="flex flex-col py-5 px-5 mt-5 rounded-md  gap-3 bg-gray-200 dark:bg-darkcard">
                  <span className="font-nunito font-semibold text-[14px]">
                    Required Skills
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {a.skills.split(',').map((a, i) => {
                      return (
                        <span className="whitespace-nowrap rounded-md px-2 py-1 font-semibold bg-white dark:bg-white/20 font-nunito text-[13px] text-gray-700 dark:text-white">
                          {a}
                        </span>
                      );
                    })}
                  </div>
                </div>

                {/* 
                         contact us */}
                <div className="px-5 py-7 mt-5 bg-gray-200 dark:bg-darkcard rounded-md flex flex-col gap-3">
                  <span className="font-nunito font-semibold text-[15px] ">
                    Contact Us
                  </span>
                  <form>
                    <div className="flex flex-col gap-4 ">
                      <input
                        type="text"
                        placeholder="Name"
                        className="dark:bg-white/20 dark:border-gray-600 w-full placeholder:font-nunito placeholder:text-[13px] placeholder:font-semibold placeholder:text-gray-400 px-2 py-1 rounded-md text-gray-700 border border-gray-300 focus:outline-none focus:border-gray-500"
                      />
                      <input
                        type="email"
                        placeholder="Email"
                        className="dark:bg-white/20 dark:border-gray-600 w-full placeholder:font-nunito placeholder:text-[13px] placeholder:font-semibold placeholder:text-gray-400 px-2 py-1 rounded-md text-gray-700 border border-gray-300 focus:outline-none focus:border-gray-500"
                      />
                      <textarea
                        rows="6"
                        placeholder="Message"
                        className="dark:bg-white/20 dark:border-gray-600 w-full resize-none   placeholder:font-nunito placeholder:text-[13px] placeholder:font-semibold placeholder:text-gray-400 px-2 py-1 rounded-md text-gray-700 border border-gray-300 focus:outline-none focus:border-gray-500"
                      ></textarea>
                      <button className="resize-none font-nunito text-[13px] font-semibold  w-full px-2 py-2 rounded-md text-white bg-blue-700 hover:bg-blue-500 focus:outline-none focus:border-indigo-500">
                        Send Message
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      {job.id}
    </div>
  );
};

export default job;

export async function getServerSideProps(context) {
  const id = context.query.id;
  context.res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  );
  const response = await fetch(
    `http://localhost:3000/api/user/getjobbyid/${id}`
  );
  const job = await response.json();

  return { props: { job } };
}
