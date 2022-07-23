import { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { CgGoogle, CgFacebook, CgTwitter } from 'react-icons/cg';
const login = () => {
  const router = useRouter();
  const [loggeduser, setloggeduser] = useState(false);
  const [user, Setuser] = useState({
    email: '',
    password: '',
  });
  const [usertype, setusertype] = useState('employee');
  const handleSubmit = async (e) => {
    e.preventDefault();
    const post = await axios.post('http://localhost:3000/api/login', {
      email: user.email,
      password: user.password,
      usertype: usertype,
    });
  };
  const getprofiles = () => {
    axios
      .get('http://localhost:3000/api/profile', { withCredentials: true })

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
        setloggeduser(false);
      });
  };

  useEffect(() => {
    getprofiles();
    console.log('logggedddd', loggeduser);
  }, []);
  useEffect(() => {
    if (loggeduser) {
      router.push('/');
    }
    if (!loggeduser) {
      router.push('/login');
    }
  }, [loggeduser]);
  return (
    <div className="">
      <Head>
        <title>Login</title>
      </Head>

      <div className=" pt-5 h-screen w-full flex justify-center items-center">
        <div className="grid items-center md:grid-cols-2 sm:grid-cols-1 grid-cols-1  justify-center    gap-3 md:gap-8 lg:gap-[5rem] text-gray-800">
          <div className="items-center justify-center mb-1 md:mb-0 min-w-[250px] min-h-auto  hidden md:flex md:max-w-[400px] md:max-h-[200px] z-[-1]">
            <Image
              src={require('../images/draw2.svg')}
              className="object-contain rounded-md"
              alt={''}
            />
          </div>
          <div className="min-w-[300px] bg-gray-300 dark:bg-darkcard p-5 rounded-xl w-[350px] max-w-[350px] flex items-center justify-center">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <div className="flex items-center justify-center mb-4 ">
                  <Image
                    className="object-contain "
                    src={require('../images/logo3.png')}
                    width={135}
                    height={45}
                    alt={'logo'}
                  />
                </div>
                <div className="flex justify-between items-center mb-4 gap-3">
                  <div
                    onClick={() => {
                      setusertype('employee');
                    }}
                    className={`bg-gray-200 p-3 rounded-xl font-bold font-sans text-sm text-center text-gray-700  transition-all duration-400 cursor-pointer ${
                      usertype == 'employee'
                        ? 'bg-indigo-700 text-white'
                        : 'hover:bg-indigo-200 hover:text-black'
                    }`}
                  >
                    Login as Freelancer
                  </div>
                  <div
                    onClick={() => {
                      setusertype('employer');
                    }}
                    className={`bg-gray-200 p-3 rounded-lg font-bold font-sans text-sm text-center text-gray-700  transition-all duration-400 cursor-pointer ${
                      usertype == 'employer'
                        ? 'bg-indigo-700 text-white'
                        : 'hover:bg-indigo-200 hover:text-black'
                    }`}
                  >
                    Login as Employers
                  </div>
                </div>

                <input
                  type="text"
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Email address"
                  onChange={(e) =>
                    Setuser((prev) => {
                      return { ...prev, email: e.target.value };
                    })
                  }
                  required
                />
              </div>

              <div className="mb-6 ">
                <input
                  type="password"
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Password"
                  onChange={(e) =>
                    Setuser((prev) => {
                      return { ...prev, password: e.target.value };
                    })
                  }
                  required
                />
              </div>

              <div className="flex justify-between items-center mb-6">
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
                type="submit"
                className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
              >
                Sign in
              </button>
              <div className="dark:text-white text-sm flex mt-2">
                Don't have a account?
                <Link href="/signup">
                  <div className="pl-1 text-indigo-600">Register</div>
                </Link>
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

export default login;
