import { BiSearch } from 'react-icons/bi';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';
import useSWR from 'swr';
import Avatar from 'react-avatar';
import { RiMoneyDollarCircleLine } from 'react-icons/ri';
import { BiBriefcase } from 'react-icons/bi';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { AiOutlineFieldTime } from 'react-icons/ai';
const findjob = () => {
  const router = useRouter();
  console.log(router.query.search);
  const [searchstatus, setsearchstatus] = useState(false);
  const [search, setsearch] = useState(
    router.query?.search !== undefined ? router.query?.search : ''
  );
  const [tempsearch, settempsearch] = useState('');
  const [datas, setdata] = useState([]);
  console.log(router.pathname);
  useEffect(() => {
    if (searchstatus) {
      const timer = setTimeout(() => setsearch(tempsearch), 800);
      return () => clearTimeout(timer);
    }
  }, [tempsearch]);

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
  if (!data) return 'Loading...';

  const jobdata =
    typeof datas != 'undefined' && datas.length > 0 ? datas : data;

  return (
    <div className=" w-full flex flex-col h-auto bg-whiteback">
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

      <div className="pt-10 h-[250px] min-h-[250px] w-full flex items-center justify-center bg-gray-200">
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
              className="pl-10  pr-[88px] form-control block w-[460px] min-w-[260px] h-md placeholder:text-sm  placeholder:font-nunito text-normal font-normal text-gray-700 rounded-md bg-white bg-clip-padding border border-solid border-gray-300  transition ease-in-out  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Search"
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
      <div className="grid grid-cols-8  mt-8 scroll-smooth gap-7">
        {/* <div className=" col-start-2  col-end-4  h-auto   bg-gray-300 rounded-md"></div> */}
        <div className=" md:col-start-4 md:col-end-8 col-start-2 col-end-8   h-auto  rounded-md flex flex-col gap-4 p-3">
          {jobdata?.map((b, i) => {
            return (
              <div
                key={i}
                className=" group h-[95px] border-[1px]
                 backdrop-blur-sm dark:bg-gray-700
                  border-indigo-100 rounded-lg p-4 
                  flex justify-start gap-3 
                  hover:shadow-xl
                 hover:translate-y-[-2px] transform-gpu 
                 transition-all duration-200 ease-in-out  relative font-nunito"
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
                  <span className="text-[15px] first-letter:capitalize font-extrabold font-nunito mb-2">
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
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default findjob;
// const fetcher = (url) => fetch(url).then((res) => res.json());
// const API = 'http://localhost:3000/api/user/getalljobs';
// export async function getServerSideProps() {
//   const repoInfo = await fetcher(API);
//   return {
//     props: {
//       datas: {
//         [API]: repoInfo,
//       },
//     },
//   };
// }
