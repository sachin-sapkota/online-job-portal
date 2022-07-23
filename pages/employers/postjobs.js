import { MdOutlinePayment, MdPayments } from 'react-icons/md';
import { BsCheckLg } from 'react-icons/bs';
import { MdWorkOutline } from 'react-icons/md';
import Maps from '../../components/Map/Map';
import { useState, useEffect } from 'react';
import DashLayout from '../../components/employer/Dashlayout';
import Multiselect from '../../components/Multiselect';
import axios from 'axios';
export default function Jobs() {
  const [items, setItems] = useState(['john', 'milos', 'steph', 'kathreine']);
  const [defaultValueItems, setdefaultValue] = useState([]);
  const [query, setquery] = useState('');

  const filterdata = query
    ? items.filter((data) => data.toLowerCase().includes(query.toLowerCase()))
    : [];

  const addTag = (item) => {
    if (!defaultValueItems.includes(item)) {
      setdefaultValue(defaultValueItems.concat(item));
    }
  };

  const removeTag = (item) => {
    const filtered = defaultValueItems.filter((e) => e !== item);
    setdefaultValue(filtered);
  };

  const [point, setpoint] = useState({
    latitude: '',
    longitude: '',
  });
  const [job, setjob] = useState({
    title: '',
    description: '',
    sector: '',
    website: '',
    salary_time: '',
    deadline: '',
    salary_amt: '',
    job_type: '',
    experience: '',
    skills: [],
    qualification: '',
    state: '',
    city: '',
    address: '',
    zipcode: '',
    latitude: '',
    longitude: '',
  });
  useEffect(() => {
    setjob((prev) => {
      return {
        ...prev,
        latitude: point.latitude,
        longitude: point.longitude,
      };
    });
  }, [point]);
  useEffect(() => {
    const jobs = JSON.parse(localStorage.getItem('job'));
    if (jobs) {
      setjob(jobs);
    }
  }, []);
  useEffect(() => {
    window.localStorage.setItem('job', JSON.stringify(job));
  }, [job]);

  const handlesubmit = (e) => {
    e.preventDefault();
    // localStorage.clear();
    axios
      .post('http://localhost:3000/api/employer/postjob', job)

      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <div className="grid grid-flow-row grid-cols-1 mx-1 md:mx-10 p-3 ">
        <div className=" flex flex-col">
          <div className="text-xl sm:text-2xl md:text-3xl font-semibold mt-4 font-sans">
            Post a New Job
          </div>
        </div>
        <div className="flex flex-col dark:bg-darkback  gap-6 mt-10 h-auto rounded-md p- pt-8 bg-white ">
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

          <div className="grid grid-flow-row grid-cols-1 mx-2 md:mx-5 ">
            <form onSubmit={handlesubmit}>
              <div className="flex flex-col gap-5  px-5">
                <div className="flex flex-col   gap-6 mt-2 md:mt-6 h-auto rounded-md  pt-8 ">
                  <div className="shadow overflow- sm:rounded-md">
                    <div className="px-4 py-5 bg-whiteback [&>*]:text-gray-900  [&>*]:dark:text-gray-300 dark:bg-darkcard sm:p-6">
                      <div className=" [&>*]:text-gray-900  [&>*]:dark:text-gray-300 grid grid-cols-6 gap-6">
                        <div className=" [&>*]:text-gray-900  [&>*]:dark:text-gray-300 col-span-6 ">
                          <label
                            htmlFor="title"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Job Title
                            <span className="text-red-600 dark:text-red-300">
                              *
                            </span>
                          </label>
                          <input
                            type="text"
                            name="title"
                            id="jobtitle"
                            className="mt-1 focus:ring-indigo-500  dark:bg-black/20  bg-white focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 dark:border-gray-600 rounded-md "
                            required
                            placeholder="Example: Web Developer needed to create a responsive ecommerce website"
                            onChange={(e) =>
                              setjob((prev) => {
                                return { ...prev, title: e.target.value };
                              })
                            }
                            value={job.title}
                          />
                        </div>
                        <div className="col-span-6 ">
                          <label
                            htmlFor="jobdescription"
                            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                          >
                            Job Description
                            <span className="text-red-600 dark:text-red-300">
                              *
                            </span>
                          </label>
                          <div className="mt-1">
                            <textarea
                              id="description"
                              name="description"
                              rows={10}
                              className="shadow-sm dark:bg-black/20 focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 dark:border-gray-600 rounded-md"
                              required
                              onChange={(e) =>
                                setjob((prev) => {
                                  return {
                                    ...prev,
                                    description: e.target.value,
                                  };
                                })
                              }
                              value={job.description}
                            />
                          </div>
                        </div>
                        <div className=" [&>*]:text-gray-900  [&>*]:dark:text-gray-300 col-span-6 sm:col-span-3">
                          <label
                            htmlFor="deadline"
                            className="block text-sm font-medium text-gray-700"
                          >
                            deadline
                            <span className="text-red-600 dark:text-red-300">
                              *
                            </span>
                          </label>
                          <input
                            type="date"
                            name="deadline"
                            id="deadline"
                            className="mt-1 focus:ring-indigo-500  dark:bg-black/20  bg-white focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 dark:border-gray-600 rounded-md"
                            required
                            onChange={(e) =>
                              setjob((prev) => {
                                return { ...prev, deadline: e.target.value };
                              })
                            }
                            value={job.deadline}
                          />
                        </div>

                        <div className=" [&>*]:text-gray-900   [&>*]:dark:text-gray-300 col-span-6 sm:col-span-3">
                          <label
                            htmlFor="sector"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Job Sector
                            <span className="text-red-600 dark:text-red-300">
                              *
                            </span>
                          </label>
                          <select
                            id="sector"
                            name="sector"
                            className=" mr-2 block w-full py-2 px-3 border dark:bg-black/20 text-gray-900 dark:text-gray-500 border-gray-300 dark:border-gray-600  rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            onChange={(e) =>
                              setjob((prev) => {
                                return { ...prev, sector: e.target.value };
                              })
                            }
                          >
                            <option defaultValue disabled>
                              Choose sector
                            </option>
                            <option className="dark:bg-darkcard/90 bg-white ">
                              Aerospace
                            </option>

                            <option className="dark:bg-darkcard/90 bg-white ">
                              Agriculture &amp; Forestry
                            </option>

                            <option className="dark:bg-darkcard/90 bg-white ">
                              Art &amp; Design
                            </option>

                            <option className="dark:bg-darkcard/90 bg-white ">
                              Automotive
                            </option>

                            <option className="dark:bg-darkcard/90 bg-white ">
                              Aviation
                            </option>

                            <option className="dark:bg-darkcard/90 bg-white ">
                              Education
                            </option>

                            <option className="dark:bg-darkcard/90 bg-white ">
                              Energy &amp; Utilities
                            </option>

                            <option className="dark:bg-darkcard/90 bg-white ">
                              Engineering &amp; Architecture
                            </option>

                            <option className="dark:bg-darkcard/90 bg-white ">
                              Fashion &amp; Beauty
                            </option>

                            <option className="dark:bg-darkcard/90 bg-white ">
                              Finance &amp; Accounting
                            </option>

                            <option className="dark:bg-darkcard/90 bg-white ">
                              Food &amp; Beverage
                            </option>

                            <option className="dark:bg-darkcard/90 bg-white ">
                              Government &amp; Public Sector
                            </option>

                            <option className="dark:bg-darkcard/90 bg-white ">
                              Health &amp; Fitness
                            </option>

                            <option className="dark:bg-darkcard/90 bg-white ">
                              HR &amp; Business Services
                            </option>

                            <option className="dark:bg-darkcard/90 bg-white ">
                              Legal
                            </option>

                            <option className="dark:bg-darkcard/90 bg-white ">
                              Manufacturing &amp; Construction
                            </option>

                            <option className="dark:bg-darkcard/90 bg-white ">
                              Media &amp; Entertainment
                            </option>

                            <option className="dark:bg-darkcard/90 bg-white ">
                              Military &amp; Defense
                            </option>

                            <option className="dark:bg-darkcard/90 bg-white ">
                              Mining
                            </option>

                            <option className="dark:bg-darkcard/90 bg-white ">
                              Real Estate
                            </option>

                            <option className="dark:bg-darkcard/90 bg-white ">
                              Retail &amp; Consumer Goods
                            </option>

                            <option className="dark:bg-darkcard/90 bg-white ">
                              Sales &amp; Marketing
                            </option>

                            <option className="dark:bg-darkcard/90 bg-white ">
                              Science &amp; Medicine
                            </option>

                            <option className="dark:bg-darkcard/90 bg-white ">
                              Sports &amp; Recreation
                            </option>

                            <option className="dark:bg-darkcard/90 bg-white ">
                              Supply Chain &amp; Logistics
                            </option>

                            <option className="dark:bg-darkcard/90 bg-white ">
                              Tech &amp; IT
                            </option>

                            <option className="dark:bg-darkcard/90 bg-white ">
                              Transportation &amp; Warehousing
                            </option>

                            <option className="dark:bg-darkcard/90 bg-white ">
                              Travel &amp; Hospitality
                            </option>
                          </select>
                        </div>

                        <div className=" [&>*]:text-gray-900  [&>*]:dark:text-gray-300 col-span-6 sm:col-span-3">
                          <label
                            htmlFor="website"
                            className="block text-sm font-medium "
                          >
                            Website
                          </label>
                          <div className="mt-1 flex rounded-md shadow-sm">
                            <span className="dark:bg-black/20 inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 dark:border-gray-600 bg-gray-50 text-gray-500 text-sm">
                              https://
                            </span>
                            <input
                              type="text"
                              name="company-website"
                              id="company-website"
                              className="focus:ring-indigo-500 dark:bg-black/20  focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300 dark:border-gray-600"
                              placeholder="www.example.com"
                              onChange={(e) =>
                                setjob((prev) => {
                                  return { ...prev, website: e.target.value };
                                })
                              }
                              value={job.website}
                            />
                          </div>
                        </div>

                        <div className="col-span-6 sm:col-span-3  gap-3">
                          <label
                            htmlFor="Salary"
                            className="block text-sm font-medium text-gray-900 dark:text-gray-300"
                          >
                            Salary
                            <span className="text-red-600 dark:text-red-300">
                              *
                            </span>
                          </label>
                          <div className="mt-1 flex rounded-md shadow-sm">
                            <select
                              onChange={(e) =>
                                setjob((prev) => {
                                  return {
                                    ...prev,
                                    salary_time: e.target.value,
                                  };
                                })
                              }
                              id="salary-duration"
                              name="salary-duration"
                              className=" mr-2 block w-1/2 py-2 px-3 border dark:bg-black/20 text-gray-900 dark:text-gray-500 border-gray-300 dark:border-gray-600  rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            >
                              <option defaultValue disabled>
                                Salary duration{' '}
                              </option>
                              <option className="dark:bg-darkcard/90 bg-white ">
                                Monthly
                              </option>
                              <option className="dark:bg-darkcard/90 bg-white ">
                                Weekly
                              </option>
                              <option className="dark:bg-darkcard/90 bg-white ">
                                Hourly
                              </option>
                              <option className="dark:bg-darkcard/90 bg-white ">
                                Negotiable
                              </option>
                            </select>
                            <input
                              disabled={job.salary_time === 'Negotiable'}
                              type="text"
                              name="salary-amount"
                              id="salary-amount"
                              className="pl-2  dark:bg-black/20 bg-white focus:ring-indigo-500  focus:border-indigo-500  block w-1/2 rounded-none rounded-l-md sm:text-sm border-gray-300 dark:border-gray-600"
                              placeholder="Salary"
                              onChange={(e) =>
                                setjob((prev) => {
                                  return {
                                    ...prev,
                                    salary_amt: e.target.value,
                                  };
                                })
                              }
                              value={job.salary_amt}
                            />
                            <span className="dark:bg-black/20 inline-flex items-center px-3 rounded-r-md border border-l-0 border-gray-300 dark:border-gray-600 bg-gray-50 text-gray-500 text-sm">
                              NPR
                            </span>
                          </div>
                        </div>

                        <div className="col-span-6 sm:col-span-3  gap-3">
                          <label
                            htmlFor="jobtype"
                            className="block text-sm font-medium text-gray-900 dark:text-gray-300"
                          >
                            Job Type
                            <span className="text-red-600 dark:text-red-300">
                              *
                            </span>
                          </label>
                          <div className="mt-1 flex rounded-md shadow-sm">
                            <select
                              onChange={(e) =>
                                setjob((prev) => {
                                  return { ...prev, job_type: e.target.value };
                                })
                              }
                              id="jobtype"
                              name="jobtype"
                              className=" mr-2 block w-full py-2 px-3 border dark:bg-black/20 text-gray-900 dark:text-gray-500 border-gray-300 dark:border-gray-600  rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            >
                              <option defaultValue disabled>
                                Choose Jobtype
                              </option>
                              <option className="dark:bg-darkcard/90 bg-white ">
                                Freelance
                              </option>
                              <option className="dark:bg-darkcard/90 bg-white ">
                                Fulltime
                              </option>
                              <option className="dark:bg-darkcard/90 bg-white ">
                                Parttime
                              </option>
                              <option className="dark:bg-darkcard/90 bg-white ">
                                Temporary
                              </option>
                            </select>
                          </div>
                        </div>

                        <div className="col-span-6 sm:col-span-3  gap-3">
                          <label
                            htmlFor="Experience"
                            className="block text-sm font-medium text-gray-900 dark:text-gray-300"
                          >
                            Experience
                            <span className="text-red-600 dark:text-red-300">
                              *
                            </span>
                          </label>
                          <div className="mt-1 flex rounded-md shadow-sm">
                            <select
                              onChange={(e) =>
                                setjob((prev) => {
                                  return {
                                    ...prev,
                                    experience: e.target.value,
                                  };
                                })
                              }
                              id="experience"
                              name="experience"
                              className=" mr-2 block w-full py-2 px-3 border dark:bg-black/20 text-gray-900 dark:text-gray-500 border-gray-300 dark:border-gray-600  rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            >
                              {' '}
                              <option defaultValue disabled>
                                Choose experience
                              </option>
                              <option className="dark:bg-darkcard/90 bg-white ">
                                Fresh
                              </option>
                              <option className="dark:bg-darkcard/90 bg-white ">
                                Less than 1 year
                              </option>
                              <option className="dark:bg-darkcard/90 bg-white ">
                                2 years
                              </option>
                              <option className="dark:bg-darkcard/90 bg-white ">
                                3 years
                              </option>
                              <option className="dark:bg-darkcard/90 bg-white ">
                                4 years
                              </option>
                              <option className="dark:bg-darkcard/90 bg-white ">
                                5 years
                              </option>
                              <option className="dark:bg-darkcard/90 bg-white ">
                                6 years+
                              </option>
                            </select>
                          </div>
                        </div>
                        <div className="col-span-6     gap-3">
                          <label
                            htmlFor="qualification"
                            className="block text-sm font-medium text-gray-900 dark:text-gray-300"
                          >
                            Required skills
                          </label>
                          <Multiselect setjob={setjob} />
                        </div>
                        <div className="col-span-6 sm:col-span-3  gap-3">
                          <label
                            htmlFor="qualification"
                            className="block text-sm font-medium text-gray-900 dark:text-gray-300"
                          >
                            Minimum Qualification
                            <span className="text-red-600 dark:text-red-300">
                              *
                            </span>
                          </label>
                          <div className="mt-1 flex rounded-md shadow-sm">
                            <select
                              onChange={(e) =>
                                setjob((prev) => {
                                  return {
                                    ...prev,
                                    qualification: e.target.value,
                                  };
                                })
                              }
                              id="qualification"
                              name="qualification"
                              className=" mr-2 block w-full py-2 px-3 border dark:bg-black/20 text-gray-900 dark:text-gray-500 border-gray-300 dark:border-gray-600  rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            >
                              <option defaultValue disabled>
                                Choose qualification
                              </option>
                              <option className="dark:bg-darkcard/90 bg-white ">
                                High School or Equivalent
                              </option>
                              <option className="dark:bg-darkcard/90 bg-white ">
                                Bachelor's degree
                              </option>
                              <option className="dark:bg-darkcard/90 bg-white ">
                                Master's degree
                              </option>
                              <option className="dark:bg-darkcard/90 bg-white ">
                                Doctorate
                              </option>
                              <option className="dark:bg-darkcard/90 bg-white ">
                                Diploma
                              </option>
                              <option className="dark:bg-darkcard/90 bg-white ">
                                Phd.
                              </option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-transparent flex flex-col h-auto rounded-md">
                  <span>
                    <span className="font-medium font-sans dark:text-gray-400 text-gray-800">
                      Address/ location
                    </span>
                  </span>

                  <div className="shadow overflow- sm:rounded-md">
                    <div className="px-4 py-5 bg-white dark:bg-darkcard sm:p-6 flex flex-col">
                      <div className="grid grid-cols-6 gap-6">
                        <div className=" [&>*]:text-gray-900  [&>*]:dark:text-gray-300 col-span-6 sm:col-span-3">
                          <label
                            htmlFor="country"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Country
                            <span className="text-red-600 dark:text-red-300">
                              *
                            </span>
                          </label>
                          <select
                            id="country"
                            name="country"
                            autoComplete="size-of-company"
                            required
                            className=" appearance-none mt-1 block w-full py-2 px-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-black/20 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          >
                            <option
                              defaultValue
                              className="dark:bg-darkcard/90 bg-white "
                            >
                              Nepal
                            </option>
                          </select>
                        </div>

                        <div className=" [&>*]:text-gray-900  [&>*]:dark:text-gray-300 col-span-6 sm:col-span-3">
                          <label
                            htmlFor="state"
                            className="block text-sm font-medium text-gray-700"
                          >
                            State
                            <span className="text-red-600 dark:text-red-300">
                              *
                            </span>
                          </label>
                          <select
                            onChange={(e) =>
                              setjob((prev) => {
                                return { ...prev, state: e.target.value };
                              })
                            }
                            id="state"
                            name="state"
                            autoComplete="size-of-company"
                            required
                            className=" appearance-none mt-1 block w-full py-2 px-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-black/20 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          >
                            <option defaultValue disabled>
                              Choose state
                            </option>
                            <option className="dark:bg-darkcard/90 bg-white ">
                              Province No. 1
                            </option>
                            <option className="dark:bg-darkcard/90 bg-white ">
                              Madhesh Province
                            </option>
                            <option className="dark:bg-darkcard/90 bg-white ">
                              Bagmati Province
                            </option>
                            <option className="dark:bg-darkcard/90 bg-white ">
                              Gandaki Province
                            </option>
                            <option className="dark:bg-darkcard/90 bg-white ">
                              Lumbini Province
                            </option>
                            <option className="dark:bg-darkcard/90 bg-white ">
                              Karnali Province
                            </option>
                            <option className="dark:bg-darkcard/90 bg-white ">
                              Sudurpashchim Province
                            </option>
                          </select>
                        </div>

                        <div className=" [&>*]:text-gray-900  [&>*]:dark:text-gray-300 col-span-6 sm:col-span-3">
                          <label
                            htmlFor="city"
                            className="block text-sm font-medium text-gray-700"
                          >
                            City
                            <span className="text-red-600 dark:text-red-300">
                              *
                            </span>
                          </label>
                          <input
                            onChange={(e) =>
                              setjob((prev) => {
                                return { ...prev, city: e.target.value };
                              })
                            }
                            value={job.city}
                            type="text"
                            name="city"
                            id="city"
                            autoComplete="city"
                            className="mt-1 focus:ring-indigo-500  dark:bg-black/20  bg-white focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 dark:border-gray-600 rounded-md"
                          />
                        </div>

                        <div className=" [&>*]:text-gray-900  [&>*]:dark:text-gray-300 col-span-6 sm:col-span-3">
                          <label
                            htmlFor="address"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Address
                            <span className="text-red-600 dark:text-red-300">
                              *
                            </span>
                          </label>
                          <input
                            onChange={(e) =>
                              setjob((prev) => {
                                return { ...prev, address: e.target.value };
                              })
                            }
                            value={job.address}
                            type="text"
                            name="address"
                            id="address"
                            autoComplete="address"
                            className="mt-1 focus:ring-indigo-500  dark:bg-black/20  bg-white focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 dark:border-gray-600 rounded-md"
                          />
                        </div>

                        <div className=" [&>*]:text-gray-900  [&>*]:dark:text-gray-300 col-span-6 sm:col-span-3">
                          <label
                            htmlFor="zip"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Zip Code
                            <span className="text-red-600 dark:text-red-300">
                              *
                            </span>
                          </label>
                          <input
                            onChange={(e) =>
                              setjob((prev) => {
                                return { ...prev, zipcode: e.target.value };
                              })
                            }
                            value={job.zipcode}
                            type="number"
                            name="zip"
                            id="zip"
                            autoComplete="zip"
                            className="mt-1 focus:ring-indigo-500  dark:bg-black/20  bg-white focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 dark:border-gray-600 rounded-md"
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
                            value={job.latitude}
                            name="latitude"
                            className="mt-1 focus:ring-indigo-500  dark:bg-black/20  bg-white focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 dark:border-gray-600 rounded-md"
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
                            value={job.longitude}
                            autoComplete="zip"
                            className="mt-1 focus:ring-indigo-500  dark:bg-black/20  bg-white focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-600 rounded-md"
                            readOnly
                          />
                        </div>
                      </div>
                      <p className="mt-6 text-gray-700 dark:text-gray-400 text-sm">
                        Click on the map or drag marker to set the location.
                      </p>
                      <div className="inset-0 m-auto w-full h-[40vh] rounded-md mt-2 inline-flex">
                        <Maps setpoint={setpoint} />
                      </div>
                      <div className="px-4 py-3 mt-6 text-right sm:px-6 flex justify-end ">
                        <button
                          type="submit"
                          className="inline-flex justify-center py-2 px-8 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                          Save
                        </button>
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
      </div>
    </div>
  );
}
Jobs.getLayout = function getLayout(page) {
  return <DashLayout active="postjob">{page}</DashLayout>;
};
