import { CgInstagram, CgFacebook, CgTwitter, CgYoutube } from 'react-icons/cg';
import { AiFillApple, AiFillAndroid } from 'react-icons/ai';
import Image from 'next/image';
import Link from 'next/link';
// const Footer = () => {
//   return (
//     <div className="relative  pt-9 px-8  h-auto  min-w-[200px]   shadow-xl bg-footer text-gray-200 dark:bg-gray-800 dark:text-white    ">
//       <div className="gap-3 items-center justify-center p-5 flex-col  flex -top-16 md:-top-20 absolute h-[150px] md:h-[200px] w-[80vw] inset-x-0   rounded-3xl max-w-2xl mx-auto bg-gradient-to-br from-primary to-color1/95 backdrop-blur-sm ">
//         <div className="font-bold font-sans text-2xl  ">
//           Trust Us! We will build your success.
//         </div>
//         <div className="text-2xl text-center font-sans font-medium ">
//           <div className="inline-block pr-1">Know your capability</div>
//           <div className="inline-block bg-primary px-3 py-1 rounded-xl transition-all duration-150 hover:bg-primary/80 ">
//             < a href="/signup">Now</ a>
//           </div>
//         </div>
//       </div>

//       <div className="grid   gap-4 grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4">
//         <div className="flex flex-col">
//

//       <div className="grid   sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-6">
//         <div className="flex gap-2">
//           <div>Follow us</div>
//           <div className="flex border-[1px] rounded-full justify-center items-center w-[30px] h-[30px] p-[1px]">
//             <CgFacebook />
//           </div>
//           <div className="flex border-[1px] rounded-full justify-center items-center w-[30px] h-[30px] p-[1px]">
//             <CgInstagram />
//           </div>
//           <div className="flex border-[1px] rounded-full justify-center items-center w-[30px] h-[30px] p-[1px]">
//             <CgYoutube />
//           </div>
//           <div className="flex border-[1px] rounded-full justify-center items-center w-[30px] h-[30px] p-[1px]">
//             <CgTwitter />
//           </div>
//         </div>
//         <div className="flex gap-2 mt-2 md:mt-0">
//           <div>Mobile App</div>
//           <div className="flex border-[1px] rounded-full justify-center items-center w-[30px] h-[30px] p-[1px]">
//             < a href='/'iFillApple />
//           </div>
//           <div className="flex border-[1px] rounded-full justify-center items-center w-[30px] h-[30px] p-[1px]">
//             < a href='/'iFillAndroid />
//           </div>
//         </div>
//       </div>
//       <div className="pt-5 px-2">
//         <hr className="border-1 w-full border-white" />
//       </div>
//       <div className="flex text-sm gap-3 items-center justify-center mt-3">
//         <div>&copy;2022</div>
//         <div>Terms of Service</div>
//         <div>Privacy Policy</div>
//       </div>
//     </div>
//   );
// };

const Footer = () => {
  return (
    <div className="relative font-nunito text-sm bg-deep-purple-accent-400 dark:bg-darkback">
      <svg
        className="absolute top-0 w-full h-6 -mt-5 sm:-mt-10 sm:h-16 dark:text-darkback text-deep-purple-accent-400"
        preserveAspectRatio="none"
        viewBox="0 0 1440 54"
      >
        <path
          fill="currentColor"
          d="M0 22L120 16.7C240 11 480 1.00001 720 0.700012C960 1.00001 1200 11 1320 16.7L1440 22V54H1320C1200 54 960 54 720 54C480 54 240 54 120 54H0V22Z"
        />
      </svg>
      <div className="px-4 pt-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="grid gap-10 row-gap-10 mb-8 lg:grid-cols-6 ">
          <div className="md:max-w-md lg:col-span-2 flex flex-col mx-auto">
            <div className="flex items-center justify-center  inset-x-0 mx-auto  ">
              <div className="min-w-[82px] cursor-pointer select-none flex object-contain ">
                <Image
                  className="object-contain"
                  src={require('../images/logo3.png')}
                  width={150}
                  height={100}
                  alt={'logo'}
                />
              </div>
            </div>
            <div className="mt-1 lg:max-w-sm">
              <p className="text-xs text-center px-16 text-deep-purple-100">
                JOB XA is the freelancing platform for the modern day
                freelancers and employers who want to find the best talent for
                their projects.
              </p>
            </div>
          </div>

          {/* <div className="font-bold mb-1 ">For Client</div>
//           <div className="flex flex-col text-xs font-sans">
//             <div>
//               < a href="/faqs">How to Hire</ a>
//             </div>
//             < a href="/faqs">Marketplace</ a>
//             < a href="/faqs">Hire an Agency</ a>

//             < a href="/faqs">Project Catatlog</ a>
//           </div>
//         </div>

//         <div className="flex flex-col">
//           <div className="font-bold mb-1">For Skilled</div>
//           <div className="flex flex-col text-xs font-sans">
//             < a href="/faqs">How to Find Work</ a>

//             < a href="/faqs">Find Freelance Jobs</ a>
//           </div>
//         </div>

//         <div className="flex flex-col">
//           <div className="font-bold mb-1">Resources</div>
//           <div className="flex flex-col text-xs font-sans">
//             < a href="/faqs">Help & Support</ a>
//             < a href="/faqs">Sucess Stories</ a>
//             < a href="/faqs">Reviews</ a>
//             < a href="/faqs">Blog</ a>
//           </div>
//         </div>

//         <div className="flex flex-col">
//           <div className="font-bold mb-1">Company</div>
//           <div className="text-xs flex flex-col font-sans">
//             < a href="/faqs">About Us</ a>

//             < a href="/faqs">Trust, Safety and Security</ a>
//             < a href="/faqs">Contact Us</ a>
//           </div>
//         </div>
//       </div> */}

          <div className="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-4">
            <div>
              <p className="font-semibold tracking-wide text-teal-accent-400">
                For Freelancers
              </p>
              <ul className="mt-2 space-y-2">
                <li>
                  <div className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400">
                    <Link href="/">Find Job</Link>
                  </div>
                </li>
                <li>
                  <div className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400">
                    <Link href="/">How to find job</Link>
                  </div>
                </li>
                <li>
                  <div className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400">
                    FAQ
                    <Link href="/">FAQ's</Link>
                  </div>
                </li>
                <li>
                  <div className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400">
                    <Link href="/employee/profile">Profile</Link>
                  </div>
                </li>
                <li>
                  <div className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400">
                    <Link href="/employee/profile">Portfolio</Link>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-semibold tracking-wide text-teal-accent-400">
                For Employers
              </p>
              <ul className="mt-2 space-y-2">
                <li>
                  <div className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400">
                    <Link href="/employer/profile">Find worker</Link>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-semibold tracking-wide text-teal-accent-400">
                Company
              </p>
              <ul className="mt-2 space-y-2">
                <li>
                  <div className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400">
                    <Link href="/">About Us</Link>
                  </div>
                </li>

                <li>
                  <div className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400">
                    <Link href="/">Resources </Link>
                  </div>
                </li>

                <li>
                  <div className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400">
                    <Link href="/">Review </Link>
                  </div>
                </li>
                <li>
                  <div className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400">
                    <Link href="/">Help and Support </Link>
                  </div>
                </li>
                <li>
                  <div className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400">
                    <Link href="/">Blog</Link>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between pt-5 pb-10 border-t border-deep-purple-accent-200 sm:flex-row">
          <p className="text-sm text-gray-100">
            © Copyright 2022 JOB XA.. All rights reserved.
          </p>
          <div className="flex items-center mt-4 space-x-4 sm:mt-0">
            <div className="transition-colors duration-300 text-deep-purple-100 hover:text-teal-accent-400">
              <a href="/">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                  <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
                </svg>
              </a>
            </div>
            <div className="transition-colors duration-300 text-deep-purple-100 hover:text-teal-accent-400">
              <a href="/">
                <svg viewBox="0 0 30 30" fill="currentColor" className="h-6">
                  <circle cx="15" cy="15" r="4" />
                  <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z" />
                </svg>
              </a>
            </div>
            <div className="transition-colors duration-300 text-deep-purple-100 hover:text-teal-accent-400">
              <a href="/">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                  <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
