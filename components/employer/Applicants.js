import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/solid';
import Image from 'next/image';

const Applicants = () => {
  return (
    <div className="grid grid-flow-row grid-cols-1 mx-1 md:mx-10 ">
      <div className=" flex flex-col">
        <div className="text-xl sm:text-2xl md:text-3xl font-semibold mt-4 font-sans">
          All Applicants
        </div>
      </div>

      <div className="flex flex-col bg-white rounded-md p-3">
        <div className=" flex justify-between items-center">
          <span className="text-sm font-sans font-medium">Applicants</span>
        </div>
        <div className=" w-full pt-5">
          <div className="w-full rounded-2xl bg-white p-2">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                    <div className="grid grid-cols-6 my-2 items-center w-full ">
                      <span className="col-span-3 text-sm text-indigo-500s">
                        Product designer
                      </span>
                      <span className="text-sm text-indigo-500">Total: 45</span>
                      <span className="text-sm text-red-500 ">Approved: 3</span>
                      <span className="text-sm text-red-500">Rejected: 7</span>
                    </div>
                    <ChevronUpIcon
                      className={`${
                        open ? 'rotate-180 transform' : ''
                      } h-5 w-5 text-purple-500 mt-2`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500 h-[200px]">
                    {/* <div className="grid md:grid-cols-2 grid-cols-1 ">
                      <div className="flex gap-2 border-2 border-indigo-300 p-3">
                        <div className="rounded-full overflow-hidden  w-[80px] h-[80px]  ">
                          <Image
                            src={require('../../images/pic1.jpg')}
                            width={200}
                            height={200}
                            alt={''}
                            className="object-cover"
                          />
                        </div>
                      </div>
                    </div> */}

                    <div className="grid grid-cols-1 lg:grid-cols-2 mt-5 md:px-6 px-2 gap-3  ">
                      {appliedjobs.map((b) => {
                        const a = (
                          <div className="md:px-8  h-[80px] border-[1px] backdrop-blur-sm dark:bg-gray-700 border-indigo-100 rounded-lg p-2 flex justify-start gap-3 items-center hover:shadow-xl hover:translate-y-[-2px] transform-gpu transition-all duration-300 ease-in-out   ">
                            <div>{b.profilelink}</div>
                            <div className="flex  flex-col font-sans font-medium">
                              <span className="text-sm">{b.title}</span>
                              <div className="grid grid-cols-2  sm:grid-cols-4 gap-3 whitespace-nowrap">
                                <div className="flex gap-1 text-gray-400 text-xs font-sans cursor-pointer">
                                  <MdBusinessCenter /> <div>{b.location}</div>
                                </div>
                                <div className="flex gap-1 text-gray-400 text-xs font-sans cursor-pointer">
                                  <MdBusinessCenter /> <div>{b.date}</div>
                                </div>
                                <div className="flex gap-1 text-gray-400 text-xs font-sans cursor-pointer ">
                                  <MdBusinessCenter />
                                  <div>{b.salary_range}</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                        return a;
                      })}
                    </div>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Applicants;

export const contacts = [];
