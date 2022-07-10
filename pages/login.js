import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import { CgGoogle, CgFacebook, CgTwitter } from 'react-icons/cg';
const login = () => {
  const router = useRouter();
  const [user, Setuser] = useState({
    email: '',
    password: '',
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    axios.post('http://localhost:3000/api/login', {
      email: user.email,
      password: user.password,
    });
    router
      .push('/employee')
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <div className="">
      <Head>
        <title>Login</title>
      </Head>
      <Navbar />
      <div className=" py-8 h-screen w-screen flex justify-center items-center">
        <div className="grid items-center md:grid-cols-2 sm:grid-cols-1 grid-cols-1 grid-rows-2 md:grid-rows-1 justify-center    gap-3 md:gap-8 lg:gap-[5rem] text-gray-800">
          <div className="flex items-center justify-center mb-4 md:mb-0 min-w-[250px] min-h-[250px] max-h-[300px] max-w-[300px] sm:max-w-[300px] md:max-w-[400px] md:max-h-[400px] z-[-1]">
            <Image
              src={require('../images/draw2.svg')}
              className="object-contain rounded-md"
              alt={''}
            />
          </div>
          <div className="min-w-[300px] max-w-[300px] flex items-center justify-center">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <input
                  type="text"
                  className="form- block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
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
                Don't have a account?{' '}
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
