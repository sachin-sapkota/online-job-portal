import DashLayout from '../../components/employee/DashLayout';
import useSWR from 'swr';
import api from '../../api/api';
import Avatar from 'react-avatar';
import { RiMoneyDollarCircleLine } from 'react-icons/ri';
import { BiBriefcase } from 'react-icons/bi';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { AiOutlineFieldTime } from 'react-icons/ai';
import { BsBookmark, BsBookmarkFill } from 'react-icons/bs';
import Link from 'next/link';
const appliedjobs = () => {
  const fetcher = async (url) => api.get(url).then((res) => res.data);
  console.log(fetcher);
  const { data, error } = useSWR('api/employee/appliedjobs', fetcher);

  if (!data && typeof data === undefined) return <div>'Loading...'</div>;
  console.log(data);
  return (
    <div className="w-full h-screen flex flex-col">
      <div className=" h-[180px] min-h-[180px] w-full flex items-center justify-center bg-gray-200  dark:bg-darkback ">
        <span className="text-5xl font-black">Applied Jobs</span>
      </div>
      <div className="  min-w-[260px] h-auto  rounded-md grid  grid-cols-1 lg:grid-cols-2 gap-4 p-3 ">
        {data?.results.map((b, i) => {
          return (
            <Link key={i} href={`/jobs/${b.id}`}>
              <div
                className=" group h-[95px] border-[1px] backdrop-blur-sm dark:bg-darkcard cursor-pointer
 border-indigo-100 rounded-lg p-4 dark:border-indigo-600/50
 flex justify-start gap-3 hover:shadow-xl
transition-all duration-200 ease-in-out   font-nunito"
              >
                <div>
                  <Avatar
                    className="rounded-md font-bold font-nunito group-hover:translate-y-[-1px] group-hover:shadow-lg transition-all duration-400  "
                    color={'brown'}
                    name={b.employer_name}
                    size={40}
                  />
                </div>
                <div className="flex  flex-col w-full ">
                  <span className="text-[15px] first-letter:capitalize font-bold font-nunito mb-2 text-gray-800 dark:text-gray-300">
                    {b.title}
                  </span>
                  <div className="grid grid-cols-2 items-stretch sm:grid-cols-4 gap-1 whitespace-nowrap">
                    <div
                      className="flex gap-1 text-ellipsis overflow-hidden  text-gray-600 dark:text-gray-400 font-semibold 
text-[13px] font-nunito cursor-pointer items-center capitalize"
                    >
                      <BiBriefcase className="w-4 h-4 max-w-4 max-w-4 flex-none" />
                      <div className="text-ellipsis overflow-hidden">
                        {b.employer_name}
                      </div>
                    </div>
                    <div className="flex gap-1 overflow-hidden text-gray-600 dark:text-gray-400 text-xs  cursor-pointer items-center">
                      <HiOutlineLocationMarker className="w-4 h-4 max-w-4 max-w-4 flex-none" />
                      <div className="  ">{b.city}</div>
                    </div>
                    <div className="hidden md:flex gap-1 text-gray-600 dark:text-gray-400 text-xs  cursor-pointer items-center">
                      <AiOutlineFieldTime className="w-4 h-4 max-w-4 max-w-4 flex-none" />
                      <div>{b.deadline}</div>
                    </div>
                    <div className="hidden md:flex gap-1 text-gray-600 dark:text-gray-400 text-xs  cursor-pointer items-center ">
                      <RiMoneyDollarCircleLine className="w-4 h-4 max-w-4 max-w-4 flex-none" />
                      <div>{b.salary_amt}</div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default appliedjobs;

appliedjobs.getLayout = function getLayout(page) {
  return <DashLayout active="appliedjobs">{page}</DashLayout>;
};
