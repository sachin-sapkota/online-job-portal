import { BiSearch } from 'react-icons/bi';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
const findjob = () => {
  const router = useRouter();
  const [searchstatus, setsearchstatus] = useState(false);
  const [search, setsearch] = useState('');
  const [tempsearch, settempsearch] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => setsearch(tempsearch), 800);
    return () => clearTimeout(timer);
  }, [tempsearch]);
  useEffect(() => {
    console.log(search);
  }, [search]);
  return (
    <div className=" w-full flex flex-col h-screen">
      <div className="pt-10 h-[250px] w-full flex items-center justify-center bg-gray-200">
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
        <div className=" col-start-2 col-end-4  h-[300px]   bg-gray-300 rounded-md"></div>
        <div className=" col-start-4 col-end-8  h-[300px] bg-gray-200 rounded-md"></div>
      </div>
    </div>
  );
};

export default findjob;
