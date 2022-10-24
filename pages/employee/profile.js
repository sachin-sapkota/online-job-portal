import DashLayout from '../../components/employee/DashLayout';
import Maps from '../../components/Map/Map';
import { useState } from 'react';
import api from '../../api/api';
export default function profile() {
  const [point, setpoint] = useState({
    latitude: 0,
    longitude: 0,
  });
  const [data, setdata] = useState({
    name: '',
    email: '',
    number: '',
    website: '',
    dob: '',
    salary_time: '',
    salary_amt: '',
    allow_search: '',
    category: '',
    description: '',
    fb: '',
    wa: '',
    li: '',
    city: '',
    address: '',
    zipcode: '',
  });
  const handlesubmit = (e) => {
    e.preventDefault();
    api
      .post('/api/employee/editprofile', data)
      .then((res) => res.data)
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <div className="grid grid-flow-row grid-cols-1 mx-2 md:mx-5 ">
        <div className=" flex flex-col">
          <div className="text-xl md:text-3xl font-semibold ">Profile</div>
        </div>
        <form onSubmit={handlesubmit}>
          <div className="flex flex-col gap-5  px-5">
            <div className="flex flex-col   gap-6 mt-2 md:mt-6 h-auto rounded-md  pt-8 ">
              <div className="flex flex-col md:flex-row justify-start items-start md:items-center gap-5">
                {/* logo here */}

                <div className="w-[100px] h-[100px] rounded-full object-contain overflow-hidden bg-orange-500"></div>
                <div className="flex flex-col gap-3 justify-center ">
                  <div className=" text-indigo-500">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer bg-gray-200 py-2 px-3 rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                    >
                      <span>Upload Profile pic.</span>
                      <input
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        className="sr-only"
                      />
                    </label>
                  </div>
                  <div className="text-gray-500 text-xs text-left">
                    Max file size is 1MB , Minimum dimension 720 x 520 And
                    suitable file are .jpeg and .png
                  </div>
                </div>
              </div>

              <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-whiteback [&>*]:text-gray-900  [&>*]:dark:text-gray-300 dark:bg-darkcard sm:p-6">
                  <div className=" [&>*]:text-gray-900  [&>*]:dark:text-gray-300 grid grid-cols-6 gap-6">
                    <div className=" [&>*]:text-gray-900  [&>*]:dark:text-gray-300 col-span-6 sm:col-span-3">
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        autoComplete="name"
                        className="mt-1 focus:ring-indigo-500  dark:bg-black/20  bg-white focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md "
                        onChange={(e) =>
                          setdata((prev) => {
                            return { ...prev, name: e.target.value };
                          })
                        }
                      />
                    </div>

                    <div className=" [&>*]:text-gray-900  [&>*]:dark:text-gray-300 col-span-6 sm:col-span-3">
                      <label
                        htmlFor="email-adress"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Email Address{' '}
                      </label>
                      <input
                        type="email"
                        name="email-adress"
                        id="email-adress"
                        autoComplete="email-adress"
                        className="mt-1 focus:ring-indigo-500  dark:bg-black/20  bg-white focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        onChange={(e) =>
                          setdata((prev) => {
                            return { ...prev, email: e.target.value };
                          })
                        }
                      />
                    </div>

                    <div className=" [&>*]:text-gray-900  [&>*]:dark:text-gray-300 col-span-6 sm:col-span-3">
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
                        className="mt-1 focus:ring-indigo-500  dark:bg-black/20  bg-white focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        onChange={(e) =>
                          setdata((prev) => {
                            return { ...prev, number: e.target.value };
                          })
                        }
                      />
                    </div>

                    <div className=" [&>*]:text-gray-900  [&>*]:dark:text-gray-300 col-span-6 sm:col-span-3">
                      <label
                        htmlFor="website"
                        className="block text-sm font-medium "
                      >
                        Website
                      </label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <span className="dark:bg-black/20 inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                          https://
                        </span>
                        <input
                          type="text"
                          name="company-website"
                          id="company-website"
                          className="focus:ring-indigo-500 dark:bg-black/20  focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                          placeholder="www.example.com"
                          onChange={(e) =>
                            setdata((prev) => {
                              return { ...prev, website: e.target.value };
                            })
                          }
                        />
                      </div>
                    </div>

                    <div className=" [&>*]:text-gray-900  [&>*]:dark:text-gray-300 col-span-6 sm:col-span-3">
                      <label
                        htmlFor="dob"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                      >
                        Date of Birth
                      </label>
                      <input
                        type="date"
                        name="dob"
                        id="dob"
                        autoComplete="dob"
                        className="mt-1 focus:ring-indigo-500  dark:bg-black/20  bg-white focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        onChange={(e) =>
                          setdata((prev) => {
                            return { ...prev, dob: e.target.value };
                          })
                        }
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3  gap-3">
                      <label
                        htmlFor="Salary"
                        className="block text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Salary
                      </label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <select
                          id="salary-duration"
                          name="salary-duration"
                          className=" mr-2 block w-1/2 py-2 px-3 border dark:bg-black/20 text-gray-900 dark:text-gray-500 border-gray-300  rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          onChange={(e) =>
                            setdata((prev) => {
                              return { ...prev, salary_time: e.target.value };
                            })
                          }
                        >
                          <option className="dark:bg-darkcard/90 bg-white ">
                            Monthly
                          </option>
                          <option className="dark:bg-darkcard/90 bg-white ">
                            Weekly
                          </option>
                          <option className="dark:bg-darkcard/90 bg-white ">
                            Hourly
                          </option>
                        </select>
                        <input
                          type="text"
                          name="salary-amount"
                          id="salary-amount"
                          className="pl-2  dark:bg-black/20 bg-white focus:ring-indigo-500  focus:border-indigo-500  block w-1/2 rounded-none rounded-l-md sm:text-sm border-gray-300"
                          placeholder="Salary"
                          onChange={(e) =>
                            setdata((prev) => {
                              return { ...prev, salary_amt: e.target.value };
                            })
                          }
                        />
                        <span className="dark:bg-black/20 inline-flex items-center px-3 rounded-r-md border border-l-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                          NPR
                        </span>
                      </div>
                    </div>

                    <div className=" [&>*]:text-gray-900  [&>*]:dark:text-gray-300 col-span-6 sm:col-span-3">
                      <label
                        htmlFor="allow-search"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                      >
                        Allow in Search and Listing
                      </label>
                      <select
                        id="allow-search"
                        name="allow-search"
                        autoComplete="allow-search"
                        className=" dark:bg-black/20 appearance-none transition bg-clip-padding ease-in-out mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        onChange={(e) =>
                          setdata((prev) => {
                            return { ...prev, allow_search: e.target.value };
                          })
                        }
                      >
                        <option className="dark:bg-darkcard/90 bg-white ">
                          Yes
                        </option>
                        <option className="dark:bg-darkcard/90 bg-white ">
                          No
                        </option>
                      </select>
                    </div>
                    <div className=" [&>*]:text-gray-900  [&>*]:dark:text-gray-300 col-span-6 sm:col-span-3">
                      <label
                        htmlFor="category"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Category
                      </label>
                      <select
                        id="category"
                        name="category"
                        className="dark:bg-black/20 mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        onChange={(e) =>
                          setdata((prev) => {
                            return { ...prev, category: e.target.value };
                          })
                        }
                      >
                        <option className="dark:bg-darkcard/90 bg-white ">
                          Accounting/Finance
                        </option>
                        <option className="dark:bg-darkcard/90 bg-white ">
                          App Development
                        </option>
                        <option className="dark:bg-darkcard/90 bg-white ">
                          Backend Developer
                        </option>
                        <option className="dark:bg-darkcard/90 bg-white ">
                          Banking
                        </option>
                        <option className="dark:bg-darkcard/90 bg-white ">
                          Beauty
                        </option>
                        <option className="dark:bg-darkcard/90 bg-white ">
                          Biotechnology
                        </option>
                        <option className="dark:bg-darkcard/90 bg-white ">
                          Call Center
                        </option>
                        <option className="dark:bg-darkcard/90 bg-white ">
                          Career
                        </option>
                        <option className="dark:bg-darkcard/90 bg-white ">
                          Customer Service
                        </option>
                        <option className="dark:bg-darkcard/90 bg-white ">
                          Design
                        </option>
                        <option className="dark:bg-darkcard/90 bg-white ">
                          Development
                        </option>
                        <option className="dark:bg-darkcard/90 bg-white ">
                          Digital Marketing
                        </option>
                        <option className="dark:bg-darkcard/90 bg-white ">
                          Education
                        </option>
                        <option className="dark:bg-darkcard/90 bg-white ">
                          Engineering
                        </option>
                        <option className="dark:bg-darkcard/90 bg-white ">
                          Fashion
                        </option>
                        <option className="dark:bg-darkcard/90 bg-white ">
                          Food
                        </option>
                        <option className="dark:bg-darkcard/90 bg-white ">
                          Frontend Developer
                        </option>
                        <option className="dark:bg-darkcard/90 bg-white ">
                          Health
                        </option>
                        <option className="dark:bg-darkcard/90 bg-white ">
                          Hospitality
                        </option>
                        <option className="dark:bg-darkcard/90 bg-white ">
                          Human Resources
                        </option>
                        <option className="dark:bg-darkcard/90 bg-white ">
                          Information Technology
                        </option>
                        <option className="dark:bg-darkcard/90 bg-white ">
                          Insurance
                        </option>
                        <option className="dark:bg-darkcard/90 bg-white ">
                          Legal
                        </option>
                        <option className="dark:bg-darkcard/90 bg-white ">
                          Management
                        </option>
                        <option className="dark:bg-darkcard/90 bg-white ">
                          Marketing
                        </option>
                        <option className="dark:bg-darkcard/90 bg-white ">
                          Media
                        </option>
                        <option className="dark:bg-darkcard/90 bg-white ">
                          Medical
                        </option>
                        <option className="dark:bg-darkcard/90 bg-white ">
                          Mobile
                        </option>
                        <option className="dark:bg-darkcard/90 bg-white ">
                          NGO
                        </option>
                        <option className="dark:bg-darkcard/90 bg-white ">
                          Photography
                        </option>
                        <option className="dark:bg-darkcard/90 bg-white ">
                          Real Estate
                        </option>
                        <option className="dark:bg-darkcard/90 bg-white ">
                          Retail
                        </option>
                        <option className="dark:bg-darkcard/90 bg-white ">
                          Sales
                        </option>
                        <option className="dark:bg-darkcard/90 bg-white ">
                          Sciences
                        </option>
                        <option className="dark:bg-darkcard/90 bg-white ">
                          Social Media
                        </option>
                        <option className="dark:bg-darkcard/90 bg-white ">
                          Software
                        </option>
                        <option className="dark:bg-darkcard/90 bg-white ">
                          Sports
                        </option>
                        <option className="dark:bg-darkcard/90 bg-white ">
                          Technology
                        </option>
                        <option className="dark:bg-darkcard/90 bg-white ">
                          Telecom
                        </option>
                        <option className="dark:bg-darkcard/90 bg-white ">
                          Travel
                        </option>
                        <option className="dark:bg-darkcard/90 bg-white ">
                          Web Development
                        </option>
                        <option className="dark:bg-darkcard/90 bg-white ">
                          Writing
                        </option>
                      </select>
                    </div>

                    <div className="col-span-6 ">
                      <label
                        htmlFor="about-yourself"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                      >
                        Candidate Description
                      </label>
                      <div className="mt-1">
                        <textarea
                          id="about"
                          name="about"
                          rows={10}
                          className="shadow-sm dark:bg-black/20 focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                          defaultValue={''}
                          onChange={(e) =>
                            setdata((prev) => {
                              return { ...prev, description: e.target.value };
                            })
                          }
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-transparent flex flex-col  h-auto rounded-md">
              <span>
                <span className="font-medium text-gray-800 dark:text-gray-400 font-sans">
                  Social Network
                </span>
                <span className="text-xs font-medium text-red-800 dark:text-red-400 pl-3 ">
                  Not
                </span>
              </span>

              <div className="  shadow overflow-hidden sm:rounded-md">
                <div className="dark:bg-darkcard px-4 py-5 bg-white sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className=" [&>*]:text-gray-900  [&>*]:dark:text-gray-300 col-span-6 sm:col-span-3">
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
                        className="mt-1 focus:ring-indigo-500  dark:bg-black/20  bg-white focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        onChange={(e) =>
                          setdata((prev) => {
                            return { ...prev, fb: e.target.value };
                          })
                        }
                      />
                    </div>

                    <div className=" [&>*]:text-gray-900  [&>*]:dark:text-gray-300 col-span-6 sm:col-span-3">
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
                        className="mt-1 focus:ring-indigo-500  dark:bg-black/20  bg-white focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        onChange={(e) =>
                          setdata((prev) => {
                            return { ...prev, wa: e.target.value };
                          })
                        }
                      />
                    </div>

                    <div className=" [&>*]:text-gray-900  [&>*]:dark:text-gray-300 col-span-6 sm:col-span-3">
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
                        className="mt-1 focus:ring-indigo-500  dark:bg-black/20  bg-white focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        onChange={(e) =>
                          setdata((prev) => {
                            return { ...prev, li: e.target.value };
                          })
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-transparent flex flex-col h-auto rounded-md">
              <span>
                <span className="font-medium font-sans dark:text-gray-400 text-gray-800">
                  Contact Information
                </span>
              </span>

              <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-white dark:bg-darkcard sm:p-6 flex flex-col">
                  <div className="grid grid-cols-6 gap-6">
                    <div className=" [&>*]:text-gray-900  [&>*]:dark:text-gray-300 col-span-6 sm:col-span-3">
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
                        className=" appearance-none mt-1 block w-full py-2 px-3 border border-gray-300 bg-white dark:bg-black/20 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      >
                        <option className="dark:bg-darkcard/90 bg-white selected">
                          Nepal
                        </option>
                      </select>
                    </div>

                    <div className=" [&>*]:text-gray-900  [&>*]:dark:text-gray-300 col-span-6 sm:col-span-3">
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
                        className="mt-1 focus:ring-indigo-500  dark:bg-black/20  bg-white focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        onChange={(e) =>
                          setdata((prev) => {
                            return { ...prev, city: e.target.value };
                          })
                        }
                      />
                    </div>

                    <div className=" [&>*]:text-gray-900  [&>*]:dark:text-gray-300 col-span-6 sm:col-span-3">
                      <label
                        htmlFor="address"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Address{' '}
                      </label>
                      <input
                        type="text"
                        name="address"
                        id="address"
                        autoComplete="address"
                        className="mt-1 focus:ring-indigo-500  dark:bg-black/20  bg-white focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        onChange={(e) =>
                          setdata((prev) => {
                            return { ...prev, address: e.target.value };
                          })
                        }
                      />
                    </div>

                    <div className=" [&>*]:text-gray-900  [&>*]:dark:text-gray-300 col-span-6 sm:col-span-3">
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
                        className="mt-1 focus:ring-indigo-500  dark:bg-black/20  bg-white focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        onChange={(e) =>
                          setdata((prev) => {
                            return { ...prev, zipcode: e.target.value };
                          })
                        }
                      />
                    </div>
                    <div className=" [&>*]:text-gray-900  [&>*]:dark:text-gray-300 col-span-6 sm:col-span-3">
                      <label
                        htmlFor="latitude"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Latitude
                      </label>
                      <input
                        type="number"
                        value={point.latitude}
                        name="latitude"
                        className="mt-1 focus:ring-indigo-500  dark:bg-black/20  bg-white focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        readOnly
                      />
                    </div>
                    <div className=" [&>*]:text-gray-900  [&>*]:dark:text-gray-300 col-span-6 sm:col-span-3">
                      <label
                        htmlFor=" Longitude"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Longitude
                      </label>
                      <input
                        type="number"
                        name="longitude"
                        id="longitude"
                        value={point.longitude}
                        autoComplete="zip"
                        className="mt-1 focus:ring-indigo-500  dark:bg-black/20  bg-white focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        readOnly
                      />
                    </div>
                  </div>
                  <div className="inset-0 m-auto w-[80vw] h-[40vh] rounded-md mt-8 inline-flex">
                    <Maps setpoint={setpoint} />
                  </div>
                  <div className="px-4 py-3 bg-whiteback dark:bg-darkcard text-right sm:px-6 flex justify-start ">
                    <div
                      onClick={handlesubmit}
                      type="submit"
                      className="inline-flex justify-center py-2 px-8 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Save
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
        <div className="text-center text-sm font-medium text-gray-500 py-4 ">
          Copyright &copy; JobXa
        </div>
      </div>
    </div>
  );
}

profile.getLayout = function getLayout(page) {
  return <DashLayout active="profile">{page}</DashLayout>;
};
