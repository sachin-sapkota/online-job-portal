import DashLayout from '../../components/employee/DashLayout';
import { BsPlus } from 'react-icons/bs';
import { useState } from 'react';
import { MdClose } from 'react-icons/md';
import axios from 'axios';
import useSWR, { useSWRConfig } from 'swr';
import api from '../../api/api';
const resume = () => {
  const { mutate } = useSWRConfig();
  const [showed, setshowed] = useState(false);
  const [education, seteducation] = useState({
    title: '',
    institute: '',
    from: '',
    to: '',
    description: '',
  });
  const fetcher = (url) => api.get(url).then((res) => res.data);

  const { data, error } = useSWR('/api/employee/geteducation', fetcher);

  const submited = async (e) => {
    e.preventDefault();
    e.target.reset();
    setshowed(false);

    await axios
      .post(
        'http://localhost:3000/api/employee/posteducation',
        {
          education,
        },
        { withCredentials: true }
      )
      .then((res) => {
        console.log(res);
        // if (res.data?.success) {
        //   if (res?.data?.like) {
        //     toast.success('Added to liked jobs!');
        //   } else {
        //     toast.success('Removed from liked jobs!');
        //   }
        // }
      })
      .catch((err) => console.log(err));
    mutate('http://localhost:3000/api/employee/geteducation', true);
  };

  return (
    <div className="h-screen w-full">
      <div className=" flex flex-col w-full ">
        <div className="text-xl md:text-3xl font-semibold ">Resume</div>
      </div>
      <div className="bg-gray-200 p-5 dark:bg-gray-600 mb-5">
        <div className="text-xl font-semibold mt-5">
          Fill the details and get your professional C.V. ready in seconds.
        </div>
        <div className="text-sm text-red-400 dark:text-red-300">
          Fill the form wisel as this data can be seen and download by the
          employer. Mind to not fill any personal details other than personal
          qualification and skills.
        </div>
      </div>

      <div className="flex flex-col w-full">
        {/* Education */}
        <div className="flex flex-col">
          <div className=" flex justify-between items-center ">
            <span className="text-lg font-semibold ">Education</span>
            <button
              onClick={() => setshowed(true)}
              className="flex items-center gap-2  text-md md:text-lg hover:translate-y-0.5 transition-all bg-blue-500 hover:bg-blue-700 text-white py-2 px-3 md:px-4 rounded-full focus:outline-none focus:shadow-outline"
              type="submit"
            >
              <span className="md:block">
                <BsPlus className="w-7 h-7" />
              </span>
              <span className="text-lg font-semibold">Add Education</span>
            </button>
          </div>
          <div className="relative w-full">
            <div
              className={`${
                showed
                  ? ' bg-white/50 w-full h-[550px]  rounded-md  dark:bg-black/50 backdrop-blur-sm   '
                  : 'h-0 w-full'
              } absolute overflow-hidden transition-all ease-in-out duration-600 z-[10] `}
            >
              <div className=" border-indigo-600 flex flex-col">
                <form onSubmit={submited} className="p-5 pt-7 relative">
                  <span
                    onClick={() => setshowed(false)}
                    className="cursor-pointer dark:text-white text-black absolute right-1 top-1"
                  >
                    <MdClose className="w-7 h-7 " />
                  </span>
                  <div className=" grid grid-cols-2 gap-2  ">
                    <div className="col-span-2 flex  flex-col justify-center  ">
                      <div className="font-semibold text-gray-800 dark:text-gray-300">
                        Title <span className="text-red-700"> *</span>
                      </div>
                      <input
                        placeholder="e.g. Master's Degree"
                        className="rounded-md dark:bg-darkback"
                        type="text"
                        onChange={(e) =>
                          seteducation((prev) => {
                            return { ...prev, title: e.target.value };
                          })
                        }
                      />
                    </div>
                    <div className=" col-span-2 sm:col-span-1 flex  flex-col  justify-center  ">
                      <div className="font-semibold">
                        From <span className="text-red-700"> *</span>
                      </div>
                      <input
                        className="rounded-md dark:bg-darkback"
                        type="number"
                        onChange={(e) =>
                          seteducation((prev) => {
                            return { ...prev, from: e.target.value };
                          })
                        }
                        required
                      />
                    </div>
                    <div className="sm:col-span-1 col-span-2 flex  flex-col justify-center  ">
                      <div className="font-semibold">
                        To Date <span className="text-red-700"> *</span>
                      </div>
                      <input
                        className="rounded-md dark:bg-darkback"
                        type="number"
                        onChange={(e) =>
                          seteducation((prev) => {
                            return { ...prev, to: e.target.value };
                          })
                        }
                        required
                      />
                    </div>

                    <div className=" col-span-2 flex  flex-col justify-center  ">
                      <div className="font-semibold">
                        Institution <span className="text-red-700"> *</span>
                      </div>
                      <input
                        className="rounded-md dark:bg-darkback"
                        type="text"
                        onChange={(e) =>
                          seteducation((prev) => {
                            return { ...prev, institute: e.target.value };
                          })
                        }
                        required
                      />
                    </div>

                    <div className=" col-span-2 flex  flex-col justify-center  ">
                      <div className="font-semibold">Description </div>
                      <textarea
                        rows="5"
                        className="rounded-md dark:bg-darkback"
                        type="text"
                        onChange={(e) =>
                          seteducation((prev) => {
                            return { ...prev, description: e.target.value };
                          })
                        }
                      />
                    </div>
                  </div>
                  <button
                    onClick={() => setshowed(true)}
                    className="mt-4 flex items-center gap-2  text-md md:text-lg hover:translate-y-0.5 transition-all bg-blue-500 hover:bg-blue-700 text-white py-2 px-3 md:px-4 rounded-full focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    <span className="text-lg font-semibold">Add Education</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
          {/*           
            education map */}
          {data?.map((a, i) => {
            return (
              <div key={i} className="pl-5">
                <ol className="relative border-l border-gray-200 dark:border-gray-700">
                  <li className="mb-10 ml-6">
                    <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                      <svg
                        aria-hidden="true"
                        className="w-3 h-3 text-blue-600 dark:text-blue-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </span>
                    <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                      {a.title}
                    </h3>
                    <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                      {a.fromdate} - {a.todate}
                    </time>
                    <p className="mb-1 text-base font-normal text-gray-700 dark:text-gray-300">
                      {a.institute}
                    </p>
                    <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                      {a.description}
                    </p>
                  </li>
                </ol>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default resume;
resume.getLayout = function getLayout(page) {
  return <DashLayout active="profile">{page}</DashLayout>;
};
