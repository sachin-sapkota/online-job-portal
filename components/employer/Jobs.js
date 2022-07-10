import { MdOutlinePayment, MdPayments } from 'react-icons/md';
import { BsCheckLg } from 'react-icons/bs';
import { MdWorkOutline } from 'react-icons/md';

const Jobs = () => {
  return (
    <div className="grid grid-flow-row grid-cols-1 mx-1 md:mx-10 ">
      <div className=" flex flex-col">
        <div className="text-xl sm:text-2xl md:text-3xl font-semibold mt-4 font-sans">
          Post a New Job
        </div>
      </div>
      <div className="flex flex-col  gap-6 mt-10 h-auto rounded-md p-5 pt-8 bg-white ">
        <div className="text-sm font-medium font-sans">Post Job</div>
        <div className="flex items-center justify-center gap-8">
          <div className="flex items-center justify-center gap-3 ">
            <div className="w-14 h-14 rounded-full bg-gray-200 p-1 flex items-center justify-center">
              <MdWorkOutline className="w-6 h-6 text-indigo-500" />
            </div>
            <div className="font-semibold ">Job Detail</div>
          </div>

          <div className="flex items-center justify-center gap-3 ">
            <div className="w-14 h-14 rounded-full bg-gray-200 p-1 flex items-center justify-center">
              <MdOutlinePayment className="w-6 h-6 text-indigo-500" />
            </div>
            <div className="font-semibold ">Payments</div>
          </div>

          <div className="flex items-center justify-center gap-3 ">
            <div className="w-14 h-14 rounded-full bg-gray-200 p-1 flex items-center justify-center">
              <BsCheckLg className="w-6 h-6 text-indigo-500" />
            </div>
            <div className="font-semibold ">Confirmation</div>
          </div>
        </div>

        <div>
          <form action="#" method="POST">
            <div className="shadow overflow-hidden sm:rounded-md">
              <div className="px-4 py-5 bg-white sm:p-6">
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6 ">
                    <label
                      htmlFor="job-title"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Job Title
                    </label>
                    <input
                      type="text"
                      name="job-title"
                      id="job-title"
                      autoComplete="job-tile"
                      className="mt-1  bg-gray-100 focus:bg-white focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      placeholder="Title"
                      required
                    />
                  </div>

                  <div className="col-span-6 ">
                    <label
                      htmlFor="job-description"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Job Description
                    </label>
                    <textarea
                      rows="9"
                      type="text"
                      name="job-description"
                      id="job-description"
                      autoComplete="job-description"
                      className="mt-1 bg-gray-100 focus:bg-white focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      placeholder="Description"
                      required
                    />
                  </div>

                  <div className="sm:col-span-3 col-span-6 ">
                    <label
                      htmlFor="email-address"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email Address
                    </label>
                    <input
                      type="text"
                      name="email-address"
                      id="email-address"
                      autoComplete="job-tile"
                      className="mt-1  bg-gray-100 focus:bg-white focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      placeholder="Email Address"
                      required
                    />
                  </div>

                  <div className="sm:col-span-3 col-span-6 ">
                    <label
                      htmlFor="use"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Job Title
                    </label>
                    <input
                      type="text"
                      name=""
                      id=""
                      autoComplete="job-tile"
                      className="mt-1  bg-gray-100 focus:bg-white focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      placeholder="Title"
                      required
                    />
                  </div>

                  <div className="sm:col-span-3 col-span-6 ">
                    <label
                      htmlFor="job-title"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Job Title
                    </label>
                    <input
                      type="text"
                      name="job-title"
                      id="job-title"
                      autoComplete="job-tile"
                      className="mt-1  bg-gray-100 focus:bg-white focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      placeholder="Title"
                      required
                    />
                  </div>

                  <div className="sm:col-span-3 col-span-6 ">
                    <label
                      htmlFor="job-title"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Job Title
                    </label>
                    <input
                      type="text"
                      name="job-title"
                      id="job-title"
                      autoComplete="job-tile"
                      className="mt-1  bg-gray-100 focus:bg-white focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      placeholder="Title"
                      required
                    />
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
