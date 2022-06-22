import { useEffect, useState } from 'react';
import { BiShow, BiHide } from 'react-icons/bi';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import { CgGoogle, CgFacebook, CgTwitter } from 'react-icons/cg';
import axios from 'axios';
const signup = () => {
  const [usertype, setusertype] = useState('employee');
  const [showpass, setshowpass] = useState(false);
  const [valid, setvalid] = useState(false);
  const [user, Setuser] = useState({
    name: '',
    username: '',
    email: '',
    number: '',
    password: '',
    usertype: '',
  });
  const checkpass = () => {
    if (user.password.length >= 8) {
      setvalid(true);
    }

    if (user.password == user.confpassword) {
      setvalid(true);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios
      .post('/sign-up', user)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <div className="">
      <Navbar />
      <div className=" pt-8 h-screen w-screen flex justify-center items-center">
        <div className="grid items-center md:grid-cols-2 sm:grid-cols-1 grid-cols-1 grid-rows-1 md:grid-rows-1 justify-center    gap-3 md:gap-8 lg:gap-[5rem] text-gray-800">
          <div className=" hidden md:flex items-center justify-center mb-4 md:mb-0 min-w-[250px] min-h-[250px] max-h-[300px] max-w-[300px] sm:max-w-[300px] md:max-w-[400px] md:max-h-[400px] z-[-1]">
            <Image
              src={require('../images/draw2.svg')}
              className="object-contain rounded-md"
              alt={''}
            />
          </div>
          <div className="min-w-[300px] max-w-[300px] flex items-center justify-center">
            <form onSubmit={handleSubmit}>
              <div className="flex justify-between items-center mb-4">
                <div
                  onClick={() => {
                    setusertype('employee');
                  }}
                  className={`bg-gray-200 p-3 rounded-xl font-bold font-sans text-xl text-gray-700  transition-all duration-400 cursor-pointer ${
                    usertype == 'employee'
                      ? 'bg-indigo-700 text-white'
                      : 'hover:bg-indigo-200 hover:text-black'
                  }`}
                >
                  Freelancer
                </div>
                <div
                  onClick={() => {
                    setusertype('employer');
                  }}
                  className={`bg-gray-200 p-3 rounded-xl font-bold font-sans text-xl text-gray-700  transition-all duration-400 cursor-pointer ${
                    usertype == 'employer'
                      ? 'bg-indigo-700 text-white'
                      : 'hover:bg-indigo-200 hover:text-black'
                  }`}
                >
                  Post a Job
                </div>
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className=" block w-full px-4 py-1 text-base  bg-gray-300 font-semibold text-gray-700  bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Name"
                  onChange={(e) =>
                    Setuser((prev) => {
                      return { ...prev, name: e.target.value };
                    })
                  }
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className=" block w-full px-4 py-1 text-base  bg-gray-300 font-semibold text-gray-700  bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="username"
                  onChange={(e) =>
                    Setuser((prev) => {
                      return { ...prev, username: e.target.value };
                    })
                  }
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  className=" block w-full px-4 py-1 text-base  bg-gray-300 font-semibold text-gray-700  bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Email address"
                  onChange={(e) =>
                    Setuser((prev) => {
                      return { ...prev, email: e.target.value };
                    })
                  }
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="tel"
                  className="block w-full px-4 py-1text-base  bg-gray-300 font-semibold text-gray-700  bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Mobile Number"
                  onChange={(e) =>
                    Setuser((prev) => {
                      return { ...prev, number: e.target.value };
                    })
                  }
                  required
                />
              </div>
              <div onFocus={console.log('changed')}>
                <div className="mb-3 relative  ">
                  <div
                    onClick={() => setshowpass(!showpass)}
                    className=" flex   absolute right-0 inset-y-0 items-center cursor-pointer pr-3 text-gray-600 transition-all duration-200 "
                  >
                    {showpass ? (
                      <BiHide className="w-6 h-6 antialiased" />
                    ) : (
                      <BiShow className="w-6 h-6 antialiased" />
                    )}
                  </div>
                  <input
                    type={showpass ? 'text' : 'password'}
                    className="form-control block w-full px-4 py-2 text-base  bg-gray-300 font-semibold text-gray-700  bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Password"
                    onChange={(e) =>
                      Setuser((prev) => {
                        return { ...prev, password: e.target.value };
                      })
                    }
                    required
                  />
                </div>
                <div className="mb-2 relative ">
                  <div
                    onClick={() => setshowpass(!showpass)}
                    className=" flex   absolute right-0 inset-y-0 items-center cursor-pointer pr-3 text-gray-600 transition-all duration-200 "
                  >
                    {showpass ? (
                      <BiHide className="w-6 h-6 antialiased" />
                    ) : (
                      <BiShow className="w-6 h-6 antialiased" />
                    )}
                  </div>
                  <input
                    type={showpass ? 'text' : 'password'}
                    className="form-control block w-full px-4 py-2 text-base  bg-gray-300 font-semibold text-gray-700  bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Confirm Password"
                    onChange={(e) =>
                      Setuser((prev) => {
                        return { ...prev, confpassword: e.target.value };
                      })
                    }
                    required
                  />
                </div>
              </div>
              <div className="mb-4"></div>

              <div className="flex justify-between items-center mb-5">
                <div className="form-group form-check">
                  <input
                    type="checkbox"
                    className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    id="exampleCheck3"
                  />
                  <label
                    className=" inline-block text-gray-800    dark:text-white"
                    htmlFor=""
                  >
                    Remember me
                  </label>
                </div>
                <a
                  href="#!"
                  className="text-blue-600 hover:text-blue-700 focus:text-blue-700 active:text-blue-800 duration-200 transition ease-in-out"
                >
                  Forgot password?
                </a>
              </div>
              <button
                onMouseEnter={() => checkpass()}
                disabled={
                  user.password !== user.confpassword ||
                  user.name == null ||
                  user.number == null ||
                  user.password == null ||
                  user.email == null ||
                  user.confpassword == null ||
                  user.username == null
                    ? true
                    : false
                }
                type="submit"
                className={`inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full ${
                  valid ? 'cursor-pointer' : 'cursor-not-allowed'
                } `}
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
              >
                Sign in
              </button>
              <div className="dark:text-white text-sm flex mt-2">
                Don't have a account?
                <div className="pl-1 text-indigo-600">
                  <Link href="/signup">Register </Link>
                </div>
              </div>
              <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5 dark:text-white">
                <p className="text-center font-semibold mx-4 mb-0">OR</p>
              </div>
              <div className="flex gap-4 items-center justify-start">
                <div className="pr-4 font-semibold dark:text-white">
                  Sign in with
                </div>
                <div className="shadow-md flex border-[1px] rounded-full justify-center items-center w-[40px] h-[40px] p-[1px] bg-indigo-700 border-none  text-white">
                  <CgGoogle />
                </div>
                <div className="shadow-md flex border-[1px] rounded-full justify-center items-center w-[40px] h-[40px] p-[1px] bg-indigo-700 border-none text-white">
                  <CgFacebook />
                </div>

                <div className="shadow-md flex border-[1px] rounded-full justify-center items-center border-none w-[40px] h-[40px] p-[1px] bg-indigo-700 text-white">
                  <CgTwitter />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default signup;
