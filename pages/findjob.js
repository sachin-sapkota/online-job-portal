import { BiSearch } from 'react-icons/bi';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';
import useSWR, { useSWRConfig } from 'swr';
import Avatar from 'react-avatar';
import { RiMoneyDollarCircleLine } from 'react-icons/ri';
import { BiBriefcase } from 'react-icons/bi';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { AiOutlineFieldTime } from 'react-icons/ai';
import { BsBookmark, BsBookmarkFill } from 'react-icons/bs';
import Link from 'next/link';

const findjob = () => {
  const { mutate } = useSWRConfig();
  const router = useRouter();

  const [searchstatus, setsearchstatus] = useState(false);
  const [search, setsearch] = useState(
    router.query?.search !== undefined ? router.query?.search : ''
  );
  const [tempsearch, settempsearch] = useState('');
  const [datas, setdata] = useState([]);

  const getlikedjob = (url) => fetch(url).then((res) => res.json());
  const getfavjobs = useSWR(
    'http://localhost:3000/api/employee/getfavjob',
    getlikedjob
  );

  const profile = useSWR(
    'http://localhost:3000/api/user/userprofile',
    async (apiURL) => await fetch(apiURL).then((res) => res.json())
  );

  useEffect(() => {
    if (searchstatus) {
      const timer = setTimeout(() => setsearch(tempsearch), 800);
      return () => clearTimeout(timer);
    }
  }, [tempsearch]);

  const like_job = (url, data) =>
    axios.post(url, data, { withCredentials: true }).then((res) => res.data);

  useEffect(() => {
    if (search?.trim().length > 0) {
      const searchjobByName = async () => {
        await axios
          .get(
            `http://localhost:3000/api/user/searchjobByName?name=${search.trim()}`
          )
          .then((response) => {
            response.data?.success !== undefined
              ? toast.error('Job not found')
              : '';
            setdata(response?.data);
          });
      };

      searchjobByName();
    }
    if (search.trim().length == 0) {
      setdata();
    }
  }, [search]);

  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data, error } = useSWR(
    'http://localhost:3000/api/user/getalljobs',
    fetcher
  );

  if (error) return 'An error has occurred.';
  if (!data && typeof data === undefined) return 'Loading...';
  console.log(profile?.data?.data);
  const jobdata =
    typeof datas != 'undefined' && datas.length > 0 ? datas : data;

  const like = async (id) => {
    console.log(id, 'id');
    const data = {
      job_id: id,
    };

    await axios
      .post(
        'http://localhost:3000/api/employee/postfavjob',
        {
          data,
        },
        { withCredentials: true }
      )
      .then((res) => {
        if (res.data?.success) {
          if (res?.data?.like) {
            toast.success('Added to liked jobs!');
          } else {
            toast.success('Removed from liked jobs!');
          }
        }
      })
      .catch((err) => router.push('/login'));

    mutate('http://localhost:3000/api/employee/getfavjob');
  };

  const favjobs =
    getfavjobs?.data !== undefined && getfavjobs?.data[0]?.job_id !== undefined
      ? [getfavjobs.data.map((a) => a.job_id)][0]
      : [];
  console.log(favjobs);
  return (
    <div className=" w-full flex flex-col h-screen bg-whiteback dark:bg-darkback">
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

      <div className="pt-10 h-[180px] min-h-[180px] w-full flex items-center justify-center bg-gray-200  dark:bg-darkback ">
        <form>
          <div className="relative ">
            <BiSearch className="absolute left-2 w-6 h-6 inset-y-0 my-auto text-gray-500 " />
            <input
              type="text"
              onChange={(e) => {
                settempsearch(e.target.value);
                setsearchstatus(true);
              }}
              value={
                router.query?.search !== undefined &&
                tempsearch === '' &&
                searchstatus == false
                  ? router.query.search
                  : tempsearch
              }
              className="pl-10 dark:bg-darkcard dark:border-gray-600  pr-[88px] form-control  w-[260px] max-w-[400px] h-md placeholder:text-sm  placeholder:font-nunito text-normal font-normal text-gray-700 rounded-md bg-white bg-clip-padding border border-solid border-gray-300  transition ease-in-out  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Search for any jobs"
            />
            <button
              type="submit"
              className="absolute  right-0 top-0 h-7 text-sm font-nunito inset-y-0 my-auto mr-[6px] w-[80px]   bg-blue-600 text-white rounded shadow-lg"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
            >
              Search
            </button>
          </div>
        </form>
      </div>
      <div className="flex mt-8 scroll-smooth px-9 ">
        {/* <div className=" w-[200px] flex-none h-auto   bg-gray-300 dark:bg-darkcard rounded-md"></div> */}
        <div className=" flex-1 min-w-[260px] h-auto  rounded-md grid  grid-cols-1 lg:grid-cols-2 gap-4 p-3 ">
          {jobdata?.map((b, i) => {
            return (
              <div className="relative z-0" key={i}>
                <div
                  onClick={() => like(b.id)}
                  className={`${
                    profile?.data?.data?.usertype === 'employer'
                      ? 'hidden '
                      : ''
                  }absolute z-[1] top-3 right-3 cursor-cell flex-none`}
                >
                  {favjobs.includes(b.id) ? (
                    <BsBookmarkFill className="w-4 h-4 " />
                  ) : (
                    <BsBookmark className="w-4 h-4 " />
                  )}
                </div>
                <Link href={`/jobs/${b.id}`}>
                  <div
                    className=" group h-[95px] border-[1px]
                 backdrop-blur-sm dark:bg-darkcard cursor-pointer
                  border-indigo-100 rounded-lg p-4 dark:border-indigo-600/50
                  flex justify-start gap-3 
                  hover:shadow-xl
              
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
                          <BiBriefcase className="w-4 h-4 max-w-4 max-w-4 flex-none" />{' '}
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
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default findjob;
