import { Dialog, Transition, Combobox } from '@headlessui/react';
import { Fragment, useEffect, useState } from 'react';
import { SearchIcon } from '@heroicons/react/outline';
import { useRouter } from 'next/router';
const Multiselect = () => {
  const [dropdown, setDropdown] = useState(false);

  const [items, setItems] = useState(['john', 'milos', 'steph', 'kathreine']);

  const [selectedItems, setSelected] = useState([]);
  let [isOpen, setIsOpen] = useState(false);
  const [query, setquery] = useState('');
  const router = useRouter();

  const toogleDropdown = () => {
    setDropdown(!dropdown);
  };

  const filterdata = query
    ? items.filter((data) =>
        data.titletoLowerCase().includes(query.toLowerCase())
      )
    : [];
  const addTag = (item) => {
    if (!selectedItems.includes(item)) {
      setSelected(selectedItems.concat(item));
      setDropdown(false);
    }
  };
  // removes item from multiselect
  const removeTag = (item) => {
    const filtered = selectedItems.filter((e) => e !== item);
    setSelected(filtered);
  };

  return (
    <>
      {/* <div className="autcomplete-wrapper">
      <div className="autcomplete">
        <div className="w-full flex flex-col items-center mx-auto">
          <div className="w-full">
            <div className="flex flex-col items-center relative">
              <div className="w-full ">
                <div className="my-2 p-1 flex border border-gray-200 bg-white rounded ">
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
                      <input
                        placeholder=""
                        className="bg-transparent p-1 px-2 appearance-none outline-none h-full w-full text-gray-800"
                      />
                    </div>
                  </div>
                  <div
                    className="text-gray-300 w-8 py-1 pl-2 pr-1 border-l flex items-center border-gray-200"
                    onClick={toogleDropdown}
                  >
                    <button className="cursor-pointer w-6 h-6 text-gray-600 outline-none focus:outline-none">
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
                        className="feather feather-chevron-up w-4 h-4"
                      >
                        <polyline points="18 15 12 9 6 15"></polyline>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {dropdown ? (
              <Dropdown list={items} addItem={addTag}></Dropdown>
            ) : null}
          </div>
        </div>
      </div>
    </div> */}

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
              }}
              className="relative divide-y dark:divide-gray-700 divide-gray-300  overflow-hidden max-w-md dark:bg-footer bg-gray-200  rounded-xl mx-auto shadow-2xl ring-1 ring-black/10"
            >
              {/* <Combobox.Input
                placeholder="Search..."
                onChange={(event) => {
                  setquery(event.target.value);
                }}
                className="dark:text-gray-200 dark:placeholder:text-gray-400 w-full border-0 bg-transparent focus:ring-0 text-sm text-gray-800 placeholder:text-gray-400"
              /> */}

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
                    placeholder=""
                    onChange={(event) => {
                      setquery(event.target.value);
                    }}
                    className="dark:text-gray-200 dark:placeholder:text-gray-400 w-full border-0 bg-transparent focus:ring-0 text-sm text-gray-800 placeholder:text-gray-400"
                  />
                </div>
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
    </>
  );
};

export default Multiselect;
