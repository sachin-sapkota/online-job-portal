const Profile = () => {
  return (
    <div className="grid grid-flow-row grid-cols-1 mx-1 md:mx-10 ">
      <div className=" flex flex-col">
        <div className="text-xl md:text-3xl font-semibold mt-4">
          Company Profile
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col  gap-6 mt-10 h-auto rounded-md p-5 pt-8 bg-white ">
          <div className="flex justify-start items-center gap-5">
            {/* logo here */}
            <div className="w-[100px] h-[100px] rounded-md object-contain overflow-hidden bg-orange-500"></div>
            <div className="flex flex-col gap-3 justify-center ">
              <div className=" text-indigo-500">
                <form>
                  <label
                    htmlFor="file-upload"
                    className="relative cursor-pointer bg-gray-200 py-2 px-3 rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                  >
                    <span>Browser Logo</span>
                    <input
                      id="file-upload"
                      name="file-upload"
                      type="file"
                      className="sr-only"
                    />
                  </label>
                </form>
              </div>
              <div className="text-gray-500 text-xs text-left">
                Max file size is 1MB , Minimum dimension 720 x 520 And suitable
                file are .jpeg and .png
              </div>
            </div>
          </div>
          <form action="#" method="POST">
            <div className="shadow overflow-hidden sm:rounded-md">
              <div className="px-4 py-5 bg-white sm:p-6">
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="company-name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="company-name"
                      id="company-name"
                      autoComplete="given-name"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      required
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="email-adress"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email-adress"
                      id="email-adress"
                      autoComplete="email-adress"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      required
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="phone-number"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Phone Number
                    </label>
                    <input
                      type="text"
                      name="phone-number"
                      id="phone-number"
                      autoComplete="phone"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      required
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="website"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Website
                    </label>
                    <div className="mt-1 flex rounded-md shadow-sm">
                      <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                        http://
                      </span>
                      <input
                        type="text"
                        name="company-website"
                        id="company-website"
                        className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                        placeholder="www.example.com"
                      />
                    </div>
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="established-date"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Est.Since
                    </label>
                    <input
                      type="date"
                      name="established-date"
                      id="established-date"
                      autoComplete="established-date"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="size-of-company"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Size of Company
                    </label>
                    <select
                      id="size-of-company"
                      name="size-of-company"
                      autoComplete="size-of-company"
                      className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    >
                      <option>Micro-sized business</option>
                      <option>Small-sized business</option>
                      <option>Medium-sized business</option>
                      <option>Large-sized business</option>
                    </select>
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="allow-search"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Allow in Search and Listing
                    </label>
                    <select
                      id="allow-search"
                      name="allow-search"
                      autoComplete="allow-search"
                      className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    >
                      <option>Yes</option>
                      <option>No</option>
                    </select>
                  </div>

                  <div className="col-span-6 ">
                    <label
                      htmlFor="about-company"
                      className="block text-sm font-medium text-gray-700"
                    >
                      About Company
                    </label>
                    <div className="mt-1">
                      <textarea
                        id="about"
                        name="about"
                        rows={3}
                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                        placeholder=""
                        defaultValue={''}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-4 py-3 bg-gray-50 text-right sm:px-6 flex justify-start ">
                <button
                  type="submit"
                  className="inline-flex justify-center py-2 px-8 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="bg-white flex flex-col p-4 h-auto rounded-md">
          <span>
            <span className="font-medium font-sans"> Social Network</span>
            <span className="text-xs font-medium text-red-800">
              Not required
            </span>
          </span>
          <form action="#" method="POST">
            <div className="shadow overflow-hidden sm:rounded-md">
              <div className="px-4 py-5 bg-white sm:p-6">
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="facebook"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Facebook
                    </label>
                    <input
                      type="text"
                      name="company-name"
                      id="company-name"
                      autoComplete="given-name"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="whatsapp"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Whatsapp
                    </label>
                    <input
                      type="text"
                      name="whatsapp"
                      id="whatsapp"
                      autoComplete="given-name"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="Twitter"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Facebook
                    </label>
                    <input
                      type="text"
                      name="Twitter"
                      id="Twitter"
                      autoComplete="Twitter"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="linkedin"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Linkedin
                    </label>
                    <input
                      type="text"
                      name="linkedin"
                      id="linkedin"
                      autoComplete="linkedin"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>

        <div className="bg-white flex flex-col p-4 h-auto rounded-md">
          <span>
            <span className="font-medium font-sans"> Contact Information</span>
          </span>
          <form action="#" method="POST">
            <div className="shadow overflow-hidden sm:rounded-md">
              <div className="px-4 py-5 bg-white sm:p-6">
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="country"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Country
                    </label>
                    <select
                      id="size-of-company"
                      name="size-of-company"
                      autoComplete="size-of-company"
                      className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    >
                      <option>Nepal</option>
                    </select>
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="city"
                      className="block text-sm font-medium text-gray-700"
                    >
                      City
                    </label>
                    <input
                      type="text"
                      name="city"
                      id="city"
                      autoComplete="city"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="address"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Company Address
                    </label>
                    <input
                      type="text"
                      name="address"
                      id="address"
                      autoComplete="address"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="zip"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Zip Code
                    </label>
                    <input
                      type="number"
                      name="zip"
                      id="zip"
                      autoComplete="zip"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="text-center text-sm font-medium text-gray-500 py-4 ">
        Copyright &copy; JobXa{' '}
      </div>
    </div>
  );
};

export default Profile;
