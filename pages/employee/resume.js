import DashLayout from '../../components/employee/DashLayout';
import { BsPlus } from 'react-icons/bs';
import { useState } from 'react';
import { MdClose } from 'react-icons/md';
const resume = () => {
  const [showed, setshowed] = useState(false);
  const [education, seteducation] = useState({
    title: '',
    institute: '',
    from: '',
    to: '',
    description: '',
  });
  const [data, setdata] = useState([
    {
      education1: 'hello',
    },
  ]);

  const submited = (e) => {
    e.preventDefault();
    e.target.reset();
    setshowed(false);
    setdata([...data, education]);
  };
  console.log(data);
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
          Fill the form wisely as this data can be seen and download by the
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
                  ? ' bg-white/50 w-full h-[500px]  rounded-md  dark:bg-black/50 backdrop-blur-sm   '
                  : 'h-0 w-full'
              } absolute overflow-hidden transition-all ease-in-out duration-400 `}
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
          {/* <div className={`${! ? "hidden" : ""}`}>
                            <form onSubmit={createTopic} className="mt-5 p-6 flex flex-col shadow-md">
                                <input className="font-sans shadow appearance-none border focus:outline-blue-800 focus:shadow-none border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight" type="text" placeholder="Topic"
                                    onChange={(e) =>
                                        setTopic((prev) => {
                                            return { ...prev, title: e.target.value }
                                        })} required />
                                <textarea className="resize h-[200px] font-sans shadow appearance-none border focus:outline-blue-800 focus:shadow-none border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight" type="text" placeholder="Content"
                                    onChange={(e) =>
                                        setTopic((prev) => {
                                            return { ...prev, Content: e.target.value }
                                        })} required />
                                <div className='mt-5 mb-5'>
                                    <button onClick={() => {
                                        setAddTopic(false)
                                    }}
                                        className="float-left flex items-center gap-2 font-sans text-lg hover:translate-y-0.5 transition-all bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                                        Cancel
                                    </button>
                                    <button
                                        className="float-right flex items-center gap-2 font-sans text-lg hover:translate-y-0.5 transition-all bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit"
                                    >
                                        Add
                                    </button>
                                </div>
                            </form>
                        </div> */}
        </div>
      </div>
    </div>
  );
};

export default resume;
resume.getLayout = function getLayout(page) {
  return <DashLayout active="profile">{page}</DashLayout>;
};
