import { IoMdNotificationsOutline } from 'react-icons/io';
import { AiOutlineHeart } from 'react-icons/ai';
import {
  RiSuitcaseLine,
  RiDeleteBinLine,
  RiSuitcase2Fill,
} from 'react-icons/ri';
import { TbMessageCircle } from 'react-icons/tb';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';
import { useState, useEffect } from 'react';
import { MdBusinessCenter } from 'react-icons/md';
import { BsHeartFill } from 'react-icons/bs';
import { GiSuitcase } from 'react-icons/gi';
const Dashboard = () => {
  const [active, setActive] = useState(false);
  const data = {
    labels: [1, 2, 3, 4, 5, 6, 7],
    datasets: [
      {
        label: 'Applied Jobs',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  };

  return (
    <div className="grid grid-flow-row  ">
      <div className=" flex flex-col">
        <div className="text-xl md:text-3xl font-semibold mt-4">
          Hello , Sachin!
        </div>
        <div className="text-sm text-gray-600">Ready to jump back in?</div>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-10 ">
        <div className="flex justify-between items-center bg-white  px-3 py-3 rounded-md">
          <div className=" bg-gray-200 text-indigo-500 w-10 h-10 flex items-center justify-center rounded-md">
            <RiSuitcaseLine className="w-7 h-7 " />
          </div>
          <div className="flex flex-col text-right">
            <div className="text-sm font-medium text-indigo-500">22</div>
            <div className="text-xs font-medium">Applied Jobs</div>
          </div>
        </div>
        <div className="flex justify-between items-center bg-white  px-3 py-3 rounded-md">
          <div className=" bg-gray-200 text-red-500 w-10 h-10 flex items-center justify-center rounded-md">
            <IoMdNotificationsOutline className="w-7 h-7 " />
          </div>
          <div className="flex flex-col text-right ">
            <div className="text-sm font-medium text-red-500">272</div>
            <div className="text-xs font-medium">Job Alerts</div>
          </div>
        </div>

        <div className="flex justify-between items-center bg-white  px-3 py-3 rounded-md">
          <div className=" bg-gray-200 text-orange-700 w-10 h-10 flex items-center justify-center rounded-md">
            <TbMessageCircle className="w-7 h-7 " />
          </div>
          <div className="flex flex-col text-right">
            <div className="text-sm font-medium text-orange-300">92</div>
            <div className="text-xs font-medium">Messages</div>
          </div>
        </div>

        <div className="flex justify-between items-center bg-white  px-3 py-3 rounded-md">
          <div className=" bg-gray-200 text-red-800 w-10 h-10 flex items-center justify-center rounded-md">
            <AiOutlineHeart className="w-7 h-7 " />
          </div>
          <div className="flex flex-col text-right">
            <div className="text-sm font-medium text-red-800">9</div>
            <div className="text-xs font-medium">Shortlist</div>
          </div>
        </div>
      </div>
      <div className="grid  grid-cols-2  lg:grid-cols-3 mt-8 gap-4 items-center ">
        <div className="col-span-2 bg-white  h-auto w-aut rounded-md p-2 object-contain">
          <div>
            <Line
              data={data}
              options={{
                title: {
                  display: true,
                  text: 'Average Rainfall per month',
                  fontSize: 20,
                },
                legend: {
                  display: true,
                  position: 'right',
                },
              }}
            />
          </div>
        </div>
        <div className="bg-white min-w-[220px] w-auto  max-h-[30vw] rounded-md pt-4 px-5 hover:overflow-scroll overflow-hidden no-scrollbar hidden md:hidden lg:flex lg:flex-col">
          <div className="text-sm  font-medium font-sans ">Notifications</div>
          <div className="flex flex-col gap-4 text-xs mt-2 ">
            {message.map((message) => {
              const a = (
                <div className="flex items-center ">
                  <div className="rounded-full min-w-[30px] min-h-[30px] w-7 h-7  flex items-center justify-center  bg-gray-200 text-indigo-600">
                    <RiSuitcaseLine />
                  </div>
                  <div className=" font-medium px-1"> {message.Name}</div>
                  <div className="whitespace-nowrap"> Applied for a job</div>
                  <div className="whitespace-nowrap px-1 font-medium text-indigo-400">
                    {message.post}
                  </div>
                </div>
              );
              return a;
            })}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 bg-white   w-full  rounded-md h-auto p-3 mt-10 mb-3">
        <div className="text-sm font-medium font-sans w-full pt-2 ">
          Jobs Applied Recently
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 mt-5 w gap-3  ">
          {appliedjobs.map((b) => {
            const a = (
              <div className=" h-[80px] border-[1px] border-indigo-100 rounded-lg p-2 flex justify-start gap-3 items-center hover:shadow-xl hover:translate-y-[-2px] transform-gpu transition-all duration-300 ease-in-out   ">
                <div>{b.icons}</div>
                <div className="flex  flex-col font-sans font-medium">
                  <span className="text-sm">{b.title}</span>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 whitespace-nowrap">
                    <div className="flex gap-1 text-gray-400 text-xs font-sans cursor-pointer">
                      <MdBusinessCenter /> <div>{b.company}</div>
                    </div>
                    <div className="flex gap-1 text-gray-400 text-xs font-sans cursor-pointer">
                      <MdBusinessCenter /> <div>{b.location}</div>
                    </div>
                    <div className="flex gap-1 text-gray-400 text-xs font-sans cursor-pointer">
                      <MdBusinessCenter /> <div>{b.date}</div>
                    </div>
                    <div className="flex gap-1 text-gray-400 text-xs font-sans cursor-pointer ">
                      <MdBusinessCenter /> <div>{b.salary_range}</div>
                    </div>
                  </div>
                </div>
              </div>
            );
            return a;
          })}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
export const message = [
  { Name: 'Sachin', post: 'WebDeveloper' },

  { Name: 'Samir', post: 'UIdesigner' },

  { Name: 'sajan', post: 'flutter developer' },
  { Name: 'Bhusi', post: 'full stack developer' },
  { Name: 'sunil', post: 'graphic designer' },
  { Name: 'Roshan', post: 'backend developer' },
  { Name: 'Roshan', post: 'backend developer' },
  { Name: 'sunil', post: 'graphic designer' },
  { Name: 'sunil', post: 'graphic designer' },
  { Name: 'sunil', post: 'graphic designer' },
  { Name: 'sunil', post: 'graphic designer' },
];

export const appliedjobs = [
  {
    icons: <RiSuitcaseLine className="w-7 h-7 " />,
    title: 'Web Developer',
    company: 'Google',
    location: 'Bangalore',
    date: '1st Jan 2020',
    salary_range: 'Rs25k-30k',
    status: 'Applied',
    link: '/dashboard/appliedjobs',
  },
  {
    icons: <AiOutlineHeart className="w-7 h-7 " />,
    title: 'Web Developer',
    company: 'Google',
    location: 'Bangalore',
    date: '1st Jan 2020',
    status: 'Applied',
    salary_range: 'Rs25k-30k',
    link: '/dashboard/appliedjobs',
  },
  {
    icons: <RiSuitcaseLine className="w-7 h-7 " />,
    title: 'Web Developer',
    company: 'Google',
    location: 'Bangalore',
    date: '1st Jan 2020',
    status: 'Applied',
    salary_range: 'Rs25k-30k',
    link: '/dashboard/appliedjobs',
  },
  {
    icons: <RiSuitcaseLine className="w-7 h-7 " />,
    title: 'Web Developer',
    company: 'Google',
    location: 'Bangalore',
    date: '1st Jan 2020',
    status: 'Applied',
    salary_range: 'Rs25k-1130k',
    link: '/dashboard/appliedjobs',
  },
  {
    icons: <RiSuitcaseLine className="w-7 h-7 " />,
    title: 'Web Developer',
    company: 'Google',
    location: 'Bangalore',
    date: '1st Jan 2020',
    status: 'Applied',
    salary_range: 'Rs25k-30k',
    link: '/dashboard/appliedjobs',
  },
  {
    icons: <RiSuitcaseLine className="w-7 h-7 " />,
    title: 'Web Developer',
    company: 'Google',
    location: 'Bangalore',
    date: '1st Jan 2020',
    status: 'Applied',
    salary_range: 'Rs25k-1130k',
    link: '/dashboard/appliedjobs',
  },
];
