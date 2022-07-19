import { Menu, Transition } from '@headlessui/react';
import { Fragment, useEffect, useRef, useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/solid';
import { MdOutlineRemoveRedEye, MdLocationPin } from 'react-icons/md';
import Link from 'next/link';
import { TbPencil } from 'react-icons/tb';
import { RiDeleteBinLine } from 'react-icons/ri';
import DashLayout from '../../components/employer/Dashlayout';
export default function Manage() {
  const [active, setActive] = useState('Last 6 Months');

  return (
    <div>
      <div className="grid grid-flow-row grid-cols-1 mx-1 md:mx-10 ">
        <div className=" flex flex-col">
          <div className="text-lg sm:text-2xl md:text-3xl font-semibold mt-4 font-sans">
            Manage Jobs
          </div>
        </div>

        <div className="bg-white rounded-md  p-3 dark:bg-gray-900">
          <div className="flex items-center justify-between mt-4 px-3">
            <div className="text-sm font-medium font-sans ">
              My Posted Job Listing
            </div>
            <div className="relative z-[1]">
              <Menu as="div" className="relative inline-block text-left ">
                <div>
                  <Menu.Button className="inline-flex w-full justify-center rounded-md bg-black dark:bg-gray-200 dark:text-gray-700 bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                    {active}
                    <ChevronDownIcon
                      className="ml-2 -mr-1 h-5 w-5 dark:text-gray-700 text-white hover:text-violet-100"
                      aria-hidden="true"
                    />
                  </Menu.Button>
                </div>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className=" absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-500 rounded-md bg-black/30 backdrop-blur-sm shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="px-1 py-1 ">
                      <Menu.Item>
                        <button
                          onClick={() => setActive('Last 12 Months')}
                          className={`${
                            active == 'Last 12 Months'
                              ? 'bg-violet-500 text-white'
                              : 'text-gray-900 dark:text-white '
                          }  font-bold tracking-widest font-sans group flex w-full items-center rounded-md px-3 py-2 text-sm`}
                        >
                          Last 12 Months
                        </button>
                      </Menu.Item>
                      <Menu.Item>
                        <button
                          onClick={() => setActive('Last 6 Months')}
                          className={`${
                            active == 'Last 6 Months'
                              ? 'bg-violet-500 text-white'
                              : 'text-gray-900 dark:text-white'
                          }  font-bold tracking-widest font-sans group flex w-full items-center rounded-md px-3 py-2 text-sm`}
                        >
                          Last 6 Months
                        </button>
                      </Menu.Item>

                      <Menu.Item>
                        <button
                          onClick={() => setActive('Last 3 Months')}
                          className={`${
                            active == 'Last 3 Months'
                              ? 'bg-violet-500 text-white'
                              : 'text-gray-900 dark:text-white'
                          } font-bold tracking-widest font-sans  group flex w-full items-center rounded-md px-3 py-2 text-sm`}
                        >
                          Last 3 Months
                        </button>
                      </Menu.Item>

                      <Menu.Item>
                        <button
                          onClick={() => setActive('All')}
                          className={`${
                            active == 'All'
                              ? 'bg-violet-500 text-white'
                              : 'text-gray-900 dark:text-white'
                          } group  font-bold tracking-widest font-sans flex w-full items-center rounded-md px-3 py-2 text-sm`}
                        >
                          All
                        </button>
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
          </div>

          <div className="mt-8 -z-3  ">
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6   py-4 font-sans">
                      Title
                    </th>
                    <th scope="col" className="px-6 py-3  hidden md:table-cell">
                      Application
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3   hidden md:table-cell "
                    >
                      Created and Expiry Date
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 hidden sm:table-cell  "
                    >
                      Status
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Action
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {data.map((a) => {
                    return (
                      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                        >
                          <div className="flex flex-col gap-1 items-start min-w-[150px]  ">
                            <p className="min-w-[150px] truncate  overflow-hidden text-sm font-sans  whitespace-nowrap">
                              {a.title}
                            </p>
                            <span className="flex items-center gap-1  text-gray-400">
                              <MdLocationPin className="w-4 h-4" />
                              <span className="text-sm  w-[130px] truncate overflow-hidden whitespace-nowrap">
                                london, paris
                              </span>
                            </span>
                          </div>
                        </th>

                        <td className="px-6 py-4 text-indigo-500  hidden md:table-cell">
                          10 Applied
                        </td>
                        <td className="px-6 py-4  hidden md:table-cell">
                          2014-1
                        </td>
                        <td className="px-6 py-4  hidden sm:table-cell">
                          Active
                        </td>
                        <td className="px-6 py-4 ">
                          <div className="flex items-center justify-start gap-3">
                            <div>
                              <Link href="#">
                                <div className=" flex cursor-pointer   focus:outline-none hover:bg-gray-300  justify-center items-center w-8 h-8 rounded-xl bg-gray-200 ">
                                  <MdOutlineRemoveRedEye className="text-indigo-500 w-5 h-5" />
                                </div>
                              </Link>
                            </div>
                            <div className="hidden lg:block">
                              <Link href="#">
                                <div className=" flex cursor-pointer   focus:outline-none hover:bg-gray-300  justify-center items-center w-8 h-8 rounded-xl bg-gray-200 ">
                                  <TbPencil className="text-indigo-500 w-5 h-5" />
                                </div>
                              </Link>
                            </div>

                            <div>
                              <Link href="#">
                                <div className=" flex cursor-pointer   focus:outline-none hover:bg-gray-300  justify-center items-center w-8 h-8 rounded-xl bg-gray-200 ">
                                  <RiDeleteBinLine className="text-indigo-500 w-5 h-5" />
                                </div>
                              </Link>
                            </div>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Manage.getLayout = function getLayout(page) {
  return <DashLayout active="managejob">{page}</DashLayout>;
};

export const data = [
  {
    jobid: 1,
    title: 'Senior developer in React',
    location: 'usa ',
    application: '10 Applied',
    created: '2014-1-3',
    status: 'Active',
  },
  {
    jobid: 2,
    title: 'graphic developer',
    location: 'nepal ',
    application: '5 Applied',
    created: '2021-5-4',
    status: 'Finished',
  },
  {
    jobid: 3,
    title: 'User interface',
    location: 'britain',
    application: '50 Applied',
    created: '2023-3-1',
    status: 'Active',
  },
  {
    jobid: 4,
    title: 'Senior developer in React',
    location: 'chitan ',
    application: '10 Applied',
    created: '2014-1-3',
    status: 'Active',
  },
  {
    jobid: 4,
    title: 'Senior developer in React',
    location: 'usa ',
    application: '10 Applied',
    created: '2014-1-3',
    status: 'Active',
  },
  {
    jobid: 4,
    title: 'Senior developer in React',
    location: 'usa ',
    application: '10 Applied',
    created: '2014-1-3',
    status: 'Active',
  },
];
