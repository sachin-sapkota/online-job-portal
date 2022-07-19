import DashLayout from '../../components/employee/DashLayout';
import { BsBriefcase } from 'react-icons/bs';
import { FiHeart } from 'react-icons/fi';
import { MdMonetizationOn, MdOutlineMonetizationOn } from 'react-icons/md';
import { IoMdNotificationsOutline } from 'react-icons/io';
import BarChart from '../../components/employee/Barchart';
import { useState } from 'react';

export const UserData = [
  {
    id: 1,
    JobApplied: 23,
    JobNotification: 72,
    FavouriteJobs: 48,
  },
];
export default function Dashboard() {
  const [userData, setUserData] = useState({
    labels: ['JobApplied', 'JobNotification', 'FavouriteJobs'],
    datasets: [
      {
        label: '',
        data: [
          UserData[0].JobApplied,
          UserData[0].JobNotification,
          UserData[0].FavouriteJobs,
        ],
        backgroundColor: [
          'rgba(75,192,192,1)',
          '#ecf0f1',
          '#50AF95',
          '#f3ba2f',
          '#2a71d0',
        ],
      },
    ],
  });
  return (
    <div>
      <div className="px-4">
        <div className=" flex flex-col ">
          <div className="text-xl md:text-3xl font-semibold mt-4">
            Hello , Sachin!
          </div>
          <div className="text-sm text-gray-600">Ready to jump back in?</div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-10 ">
          <div className="flex justify-between items-center  bg-white dark:bg-gray-700  px-3 py-3 rounded-md">
            <div className=" bg-whiteback dark:bg-darkcard text-indigo-500 w-10 h-10 flex items-center justify-center rounded-md">
              <BsBriefcase className="w-7 h-7 " />
            </div>
            <div className="flex flex-col text-right">
              <div className="text-sm font-medium text-indigo-500">22</div>
              <div className="text-xs font-medium">Applied Jobs</div>
            </div>
          </div>
          <div className="flex justify-between items-center bg-white  dark:bg-gray-700  px-3 py-3 rounded-md">
            <div className=" bg-whiteback  dark:bg-darkcard text-red-500 w-10 h-10 flex items-center justify-center rounded-md">
              <IoMdNotificationsOutline className="w-7 h-7 " />
            </div>
            <div className="flex flex-col text-right ">
              <div className="text-sm font-medium text-red-500">272</div>
              <div className="text-xs font-medium">Job Notifications</div>
            </div>
          </div>

          <div className="flex justify-between items-center bg-white  dark:bg-gray-700  px-3 py-3 rounded-md">
            <div className=" bg-whiteback text-orange-700  dark:bg-darkcard w-10 h-10 flex items-center justify-center rounded-md">
              <MdMonetizationOn className="w-7 h-7 " />
            </div>
            <div className="flex flex-col text-right">
              <div className="text-sm font-medium text-orange-300">92</div>
              <div className="text-xs font-medium">Subscription</div>
            </div>
          </div>

          <div className="flex justify-between items-center  dark:bg-gray-700 bg-white  px-3 py-3 rounded-md">
            <div className=" bg-whiteback text-red-800  dark:bg-darkcard w-10 h-10 flex items-center justify-center rounded-md">
              <FiHeart className="w-7 h-7 " />
            </div>
            <div className="flex flex-col text-right">
              <div className="text-sm font-medium text-red-800">9</div>
              <div className="text-xs font-medium">Favourite Jobs</div>
            </div>
          </div>
        </div>
        {/* Bar chart */}
        <div className="flex  w-full lg:w-3/4 h-auto mt-6 p-7 text-gray-800 dark:text-gray-400 bg-white dark:bg-darkcard rounded-md shadow-md">
          <BarChart chartData={userData} />
        </div>
        <div className="flex flex-col mt-6 bg-white dark:bg-darkcard rounded-md p-2 ">
          <span className="text-xl font-sans  dark:text-gray-400 text-gray-800 ">
            Jobs Applied Recently
          </span>
          <div className="flex bg-whiteback  rounded-md p-5">
            <div className="w-9 h-9 rounded-full bg-indigo-500"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

Dashboard.getLayout = function getLayout(page) {
  return <DashLayout active="dashboard">{page}</DashLayout>;
};
