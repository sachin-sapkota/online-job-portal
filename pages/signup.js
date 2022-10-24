import { useEffect, useState, useRef } from 'react';
import { BiShow, BiHide } from 'react-icons/bi';

import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

import { CgGoogle, CgFacebook, CgTwitter } from 'react-icons/cg';
import axios from 'axios';
import { GiCheckMark } from 'react-icons/gi';
import useSWR from 'swr';
import { useRouter } from 'next/router';
import toast, { Toaster } from 'react-hot-toast';
const email_regex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
const password_regex = /^(?=.*?[a-z])(?=.*?[0-9]).{8,}$/;
const username_regex = /^(?=.*?[a-z])(?=.*?[0-9]).{4,}$/;
const name_regex = /^[a-zA-Z]+ [a-zA-Z]+$/;
const number_regex = /(98|97)\d{8}/g;
import api from '../api/api';
const signup = () => {
  const router = useRouter();
  const [usertype, setusertype] = useState('employee');
  const [showpass, setshowpass] = useState(false);
  const [valid, setvalid] = useState(false);
  const [user, Setuser] = useState({
    name: '',
    username: '',
    email: '',
    number: '',
    password: '',
    confpassword: '',
  });

  const userRef = useRef();

  const [validusername, setvalidusername] = useState(false);
  const [usernamefocus, setusernamefocus] = useState(false);

  const [validnumber, setvalidnumber] = useState(false);
  const [numberfocus, setnumberfocus] = useState(false);

  const [validname, setvalidname] = useState(false);
  const [namefocus, setnamefocus] = useState(false);

  const [validpwd, setvalidpwd] = useState(false);
  const [pwdfocus, setpwdfocus] = useState(false);

  const [validmatch, setvalidmatch] = useState(false);
  const [matchfocus, setmatchfocus] = useState(false);

  const [validemail, setvalidemail] = useState(false);
  const [emailfocus, setemailfocus] = useState(false);

  const [loggeduser, setloggeduser] = useState(false);

  useEffect(() => {
    const result = name_regex.test(user.name);

    setvalidname(result);
  }, [user.name]);
  useEffect(() => {
    const result = number_regex.test(user.number);
    setvalidnumber(result);
  }, [user.number]);

  useEffect(() => {
    const result = email_regex.test(user.email);
    setvalidemail(result);
  }, [user.email]);
  useEffect(() => {
    const result = username_regex.test(user.username);
    setvalidusername(result);
  }, [user.username]);

  useEffect(() => {
    const result = password_regex.test(user.password);

    setvalidpwd(result);
    const match = user.password === user.confpassword;
    setvalidmatch(match);
  }, [user.password, user.confpassword]);

  const checkpass = () => {
    if (user.password.length >= 8) {
      setvalid(true);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    e.target.reset();
    if (usertype === 'employee') {
      await api
        .post('/api/employee/register', {
          name: user.name,
          email: user.email,
          password: user.password,
          confPassword: user.confpassword,
          usertype: usertype,
          number: user.number,
          username: user.username,
        })
        .then((res) => {
          console.log(res?.data);
          res?.data?.msg !== undefined ? toast.success(res?.data?.msg) : '';
          if (res?.data?.success) {
            router.push('/');
          }
        })
        .catch((err) =>
          err?.response?.data?.msg !== undefined
            ? toast.error(err?.response?.data?.msg)
            : ''
        );
    } else {
      await api
        .post('/api/employer/register', {
          name: user.name,
          email: user.email,
          password: user.password,
          confPassword: user.confpassword,
          usertype: usertype,
          number: user.number,
          username: user.username,
        })
        .then((res) => {
          res?.data?.msg !== undefined
            ? toast.success('Sign up Successfull!')
            : '';
          if (res?.data?.success) {
            router.push('/');
          }
        })
        .catch((err) =>
          err?.response?.data?.msg !== undefined
            ? toast.error(err?.response?.data?.msg)
            : ''
        );
    }
  };

  const getprofiles = () => {
    axios
      .get('http://localhost:3000/api/user/userstate', {
        withCredentials: true,
      })

      .then((res) => {
        console.log(res.data);
        if (res?.data?.success) {
          setloggeduser(true);
        } else {
          setloggeduser(false);
        }
      })
      .catch((err) => {
        console.log(err);
        // err?.data?.msg !== undefined ? toast.error(err.data.msg) : '';
        setloggeduser(false);
      });
  };

  useEffect(() => {
    getprofiles();
  }, []);
  useEffect(() => {
    if (loggeduser) {
      router.push('/');
    }
    if (!loggeduser) {
    }
  }, [loggeduser]);

  return (
    <>
      {true ? (
        <div className="">
          <Head>
            <title>Sign up</title>
          </Head>
          <Toaster
            position="top-center"
            reverseOrder={false}
            gutter={6}
            containerClassName=""
            containerStyle={{}}
            toastOptions={{
              className: '',
              duration: 1000,
              style: {
                background: '#363636',
                color: '#fff',
              },

              success: {
                duration: 3000,
                theme: {
                  primary: 'green',
                  secondary: 'black',
                },
              },
            }}
          />
          <div className=" pt-8 w-full  h-screen  flex justify-center items-center bg-whiteback dark:bg-darkback">
            <div className="grid items-center md:grid-cols-2 sm:grid-cols-1 grid-cols-1 grid-rows-1 md:grid-rows-1 justify-center    gap-3 md:gap-8 lg:gap-[5rem] text-gray-800">
              <div>
                <Image
                  className="object-contain "
                  src={require('../images/popular2.svg')}
                  width={400}
                  height={400}
                  alt={'logo'}
                />
              </div>
              <div className="min-w-[350px] p-5 py-8 rounded-xl dark:bg-darkback max-w-[360px] flex flex-col items-center justify-center">
                <div className="flex items-center justify-center mb-4 ">
                  <Image
                    className="object-contain "
                    src={require('../images/logo3.png')}
                    width={135}
                    height={45}
                    alt={'logo'}
                  />
                </div>
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
                  <div className="mb-2 flex flex-col">
                    <div className="flex gap-1 relative">
                      <input
                        type="text"
                        ref={userRef}
                        autcomplete="off"
                        className=" block w-full px-4 py-1 text-base  bg-gray-300 font-semibold text-gray-700  bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        placeholder="Name"
                        onChange={(e) =>
                          Setuser((prev) => {
                            return { ...prev, name: e.target.value };
                          })
                        }
                        required
                        onFocus={() => setnamefocus(true)}
                        onBlur={() => setnamefocus(false)}
                      />
                      <GiCheckMark
                        className={
                          validname
                            ? ' absolute right-2  inset-y-0 my-auto  w-5 h-5 '
                            : 'hidden'
                        }
                      />
                    </div>

                    <div
                      className={
                        namefocus && user.name && !validname
                          ? 'text-left text-[10px]  text-red-500'
                          : 'hidden'
                      }
                    >
                      Name should be alphabets and should include Full Name!
                    </div>
                  </div>
                  <div className="mb-3 flex flex-col">
                    <div className="flex relative">
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
                        onFocus={() => setusernamefocus(true)}
                        onBlur={() => setusernamefocus(false)}
                      />
                      <GiCheckMark
                        className={
                          validusername
                            ? ' absolute right-2  inset-y-0 my-auto  w-5 h-5 '
                            : 'hidden'
                        }
                      />
                    </div>

                    <div
                      className={
                        usernamefocus && user.username && !validusername
                          ? 'text-left text-[10px]  text-red-500 '
                          : 'hidden'
                      }
                    >
                      <ul>
                        <li>Username should be alphanumeric.</li>
                        <li>Username should have atleast four characters.</li>
                      </ul>
                    </div>
                  </div>
                  <div className="mb-3">
                    <div>
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
                        onFocus={() => setemailfocus(true)}
                        onBlur={() => setemailfocus(false)}
                      />
                    </div>
                    <div
                      className={
                        emailfocus && user.email && !validemail
                          ? 'text-left text-[10px]  text-red-500 '
                          : 'hidden'
                      }
                    >
                      Email format incorrect!
                    </div>
                  </div>
                  <div className="mb-3 flex flex-col">
                    <div className="relative flex">
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
                        onFocus={() => setnumberfocus(true)}
                        onBlur={() => setnumberfocus(false)}
                      />
                      <GiCheckMark
                        className={
                          validnumber
                            ? ' absolute right-2  inset-y-0 my-auto  w-5 h-5 '
                            : 'hidden'
                        }
                      />
                    </div>

                    <div
                      className={
                        numberfocus && user.number && !validnumber
                          ? 'text-left text-[10px]  text-red-500 '
                          : 'hidden'
                      }
                    >
                      Number format incorrect!
                    </div>
                  </div>
                  <div>
                    <div className="mb-3 relative  ">
                      <div>
                        <div
                          onClick={() => setshowpass(!showpass)}
                          className=" flex absolute right-0 inset-y-0 items-center cursor-pointer pr-3 text-gray-600 transition-all duration-200 "
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
                          onFocus={() => setpwdfocus(true)}
                          onBlur={() => setpwdfocus(false)}
                        />
                      </div>

                      <div
                        className={
                          pwdfocus && user.password && !validpwd
                            ? 'text-left text-[10px]  text-red-500 '
                            : 'hidden'
                        }
                      >
                        <ul>
                          <li> Enter the valid password!</li>
                          <li>Password should contain letter and number!</li>
                        </ul>
                      </div>
                    </div>
                    <div className="mb-2  ">
                      <div className="relative">
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
                              return {
                                ...prev,
                                confpassword: e.target.value,
                              };
                            })
                          }
                          required
                          onFocus={() => setmatchfocus(true)}
                          onBlur={() => setmatchfocus(false)}
                        />
                      </div>

                      <div
                        className={
                          matchfocus && user.confpassword && !validmatch
                            ? 'text-left text-[10px]  text-red-500 '
                            : 'hidden'
                        }
                      >
                        <ul>
                          <li>Enter the same password as above!</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="mb-4"></div>

                  <div className="flex justify-between items-center mb-5">
                    <div className="form-group form-check">
                      <input
                        type="checkbox"
                        className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                        id="exampleCheck3"
                        required
                      />
                      <label
                        className=" inline-block text-gray-800    dark:text-white"
                        htmlFor=""
                      >
                        I agree to privacy terms
                      </label>
                    </div>
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
                    Sign up
                  </button>
                  <div className="dark:text-white text-sm flex mt-2">
                    Already have a account?
                    <div className="pl-1 text-indigo-600">
                      <Link href="/login">Login </Link>
                    </div>
                  </div>
                  {/* <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5 dark:text-white">
                    <div className="text-center font-semibold mx-4 mb-0">
                      OR
                    </div>
                  </div> */}
                  {/* <div className="flex gap-4 items-center justify-start">
                    <div className="pr-4 font-semibold dark:text-white">
                      Sign up with
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
                  </div> */}
                </form>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default signup;
