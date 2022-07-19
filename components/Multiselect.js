import { Dialog, Transition, Combobox } from '@headlessui/react';
import { Fragment, useEffect, useState } from 'react';

const Multiselect = ({ setjob }) => {
  const [items, setItems] = useState(['john', 'milos', 'steph', 'kathreine']);
  const [selectedItems, setSelected] = useState([]);
  let [isOpen, setIsOpen] = useState(true);
  const [query, setquery] = useState('');

  const filterdata = query
    ? items.filter((data) => data.toLowerCase().includes(query.toLowerCase()))
    : [];

  const addTag = (item) => {
    if (!selectedItems.includes(item)) {
      setSelected(selectedItems.concat(item));
    }
  };

  const removeTag = (item) => {
    const filtered = selectedItems.filter((e) => e !== item);
    setSelected(filtered);
  };

  useEffect(() => {
    setjob({
      skills: selectedItems,
    });
  }, [selectedItems]);

  return (
    <Transition.Root
      show={isOpen}
      as={Fragment}
      afterLeave={() => setquery('')}
    >
      <div className="rounded-md overflow-y-auto w-full  ">
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
              addTag(data);
              setquery(' ');
            }}
            className="relative divide-y dark:divide-gray-700 divide-gray-300  overflow-hidden w-full dark:bg-footer bg-gray-200  mx-auto shadow-2xl ring-1 ring-black/10"
          >
            <div className="flex flex-auto flex-wrap">
              {selectedItems.map((tag, index) => {
                return (
                  <div
                    key={index}
                    className="flex justify-center items-center m-1 font-medium py-1 px-2 rounded-full text-teal-700 bg-teal-100 border border-teal-300 "
                  >
                    <div className="text-xs font-normal leading-none max-w-full flex-initial">
                      {tag}
                    </div>
                    <div className="flex flex-auto flex-row-reverse">
                      <div onClick={() => removeTag(tag)}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="100%"
                          height="100%"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-x cursor-pointer hover:text-teal-400 rounded-full w-4 h-4 ml-2"
                        >
                          <line x1="18" y1="6" x2="6" y2="18"></line>
                          <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                      </div>
                    </div>
                  </div>
                );
              })}
              <div className="flex-1">
                <Combobox.Input
                  autoComplete="false"
                  placeholder=""
                  onChange={(event) => {
                    setquery(event.target.value);
                  }}
                  className="dark:text-gray-200 dark:placeholder:text-gray-400 w-full border-0 bg-transparent focus:ring-0 text-sm text-gray-800 placeholder:text-gray-400"
                />
              </div>
            </div>

            {filterdata.length > 0 ? (
              <Combobox.Options static className="max-h-[400px] ">
                {filterdata.map((data) => (
                  <Combobox.Option key={data} value={data} className=" text-sm">
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
                          {data}
                        </div>
                      </div>
                    )}
                  </Combobox.Option>
                ))}
              </Combobox.Options>
            ) : (
              <Combobox.Options static className="max-h-[400px] ">
                {query && filterdata.length == 0 && (
                  <Combobox.Option
                    key={query}
                    value={query}
                    className=" text-sm"
                  >
                    {({ active }) => (
                      <div
                        className={`px-4 py-2 transition-all duration-400  ${
                          active
                            ? 'bg-gray-300  dark:bg-gray-700'
                            : 'bg-white dark:bg-gray-600'
                        }`}
                      >
                        <div
                          className={`${
                            active
                              ? 'text-gray-900 dark:text-gray-100'
                              : 'text-gray-600 dark:text-gray-200'
                          }`}
                        >
                          {query}
                        </div>
                      </div>
                    )}
                  </Combobox.Option>
                )}
              </Combobox.Options>
            )}
          </Combobox>
        </Transition.Child>
      </div>
    </Transition.Root>
  );
};

export default Multiselect;
