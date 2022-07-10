import { Dialog, Transition, Combobox } from '@headlessui/react';
import { Fragment, useEffect, useState } from 'react';
import { SearchIcon } from '@heroicons/react/outline';
import { useRouter } from 'next/router';
const Commandp = () => {
  let [isOpen, setIsOpen] = useState(false);
  const [query, setquery] = useState('');
  const router = useRouter();
  //  (event.metaKey || event.ctrlKey)
  useEffect(() => {
    const onkeydown = (event) => {
      if (event.key == 'Escape') {
        setIsOpen(!isOpen);
      }
    };
    window.addEventListener('keydown', onkeydown);
    return () => {
      window.removeEventListener('keydown', onkeydown);
    };
  }, [isOpen]);

  const filterdata = query
    ? datas.filter((data) =>
        data.title.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  return (
    <Transition.Root
      show={isOpen}
      as={Fragment}
      afterLeave={() => setquery('')}
    >
      <Dialog
        as="div"
        className="fixed inset-0 px-12 pt-[25vh] overflow-y-auto  "
        onClose={setIsOpen}
      >
        <Transition.Child
          enter="duration- 200 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="duration- 200 ease-in"
          leaveFrom=" opacity-100"
          leaveTo=" opacity-0"
        >
          <Dialog.Overlay className="fixed inset-0 bg-black/60 dark:bg-white/30 opacity-90 backdrop-blur-xl   " />
        </Transition.Child>

        <Transition.Child
          enter="duration- 200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration- 200 ease-in  "
          leaveFrom=" opacity-100 scale-100"
          leaveTo=" opacity-0 scale-95"
        >
          <Combobox
            as="div"
            onChange={(data) => {
              setIsOpen(false);
              router.push(`${data.links}`);
            }}
            className="relative divide-y dark:divide-gray-700 divide-gray-300  overflow-hidden max-w-md dark:bg-footer bg-gray-200  rounded-xl mx-auto shadow-2xl ring-1 ring-black/10"
          >
            <div className="flex items-center px-3">
              <SearchIcon className="dark:text-gray-300 w-6 h-6 text-gray-500" />
              <Combobox.Input
                placeholder="Search..."
                onChange={(event) => {
                  setquery(event.target.value);
                }}
                className="dark:text-gray-200 dark:placeholder:text-gray-400 w-full border-0 bg-transparent focus:ring-0 text-sm text-gray-800 placeholder:text-gray-400"
              />
            </div>

            {filterdata.length > 0 ? (
              <Combobox.Options static className="max-h-96 ">
                {filterdata.map((data) => (
                  <Combobox.Option
                    key={data.id}
                    value={data}
                    className=" text-sm"
                  >
                    {({ active }) => (
                      <div
                        className={`px-4 py-2 transition-all duration-400  ${
                          active
                            ? 'bg-indigo-600 dark:bg-primary'
                            : 'bg-white dark:bg-footer'
                        }`}
                      >
                        <div
                          className={`${
                            active
                              ? 'text-white'
                              : 'text-gray-900 dark:text-gray-400'
                          }`}
                        >
                          {data.title}
                        </div>
                      </div>
                    )}
                  </Combobox.Option>
                ))}
              </Combobox.Options>
            ) : null}
            {query && filterdata.length == 0 && (
              <p className=" px-3 py-2 text-sm text-gray-500">
                No results found
              </p>
            )}
          </Combobox>
        </Transition.Child>
      </Dialog>
    </Transition.Root>
  );
};
export default Commandp;

export const datas = [
  {
    id: 1,
    title: 'Employee Dashboard',
    links: '/employee',
  },
  { id: 2, title: 'Employer Dashboard', links: '/employer' },
  { id: 3, title: 'Find Jobs', links: '/findjobs' },
  {
    id: 4,
    title: 'Messages',
    links: '/messages',
  },
  {
    id: 5,
    title: 'Notification',
    links: '/notification',
  },
  {
    id: 6,
    title: 'View profile',
    link: '/profile',
  },
];
