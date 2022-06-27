import Link from 'next/link';
import { CgInstagram, CgFacebook, CgTwitter, CgYoutube } from 'react-icons/cg';
import { AiFillApple, AiFillAndroid } from 'react-icons/ai';
const Footer = () => {
  return (
    <div className="  ">
      <div className="pl-5  h-auto  min-w-[340px]  shadow-xl bg-footer text-gray-200 dark:bg-gray-700 dark:text-white    ">
        <div className="flex items-center justify-center py-5 ">
          <div className="min-w-[82px] cursor-pointer select-none flex border-transparent bg-indigo-800 text-white items-center rounded-md m-2 px-2 py-1 text-xl font-bold font-sans tracking-wide ">
            Job Xa
            {/* <Image src={require('../images/logo.png')} width={100} height={100} alt={'logo'} /> */}
          </div>
        </div>

        <div className="grid  gap-4 grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4">
          <div className="flex flex-col">
            <div className="font-bold mb-1 ">For Client</div>
            <div className="flex flex-col text-xs font-sans">
              <div>
                <Link href="/faqs">How to Hire</Link>
              </div>
              <Link href="/faqs">Marketplace</Link>
              <Link href="/faqs">Hire an Agency</Link>

              <Link href="/faqs">Project Catatlog</Link>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="font-bold mb-1">For Skilled</div>
            <div className="flex flex-col text-xs font-sans">
              <Link href="/faqs">How to Find Work</Link>

              <Link href="/faqs">Find Freelance Jobs</Link>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="font-bold mb-1">Resources</div>
            <div className="flex flex-col text-xs font-sans">
              <Link href="/faqs">Help & Support</Link>
              <Link href="/faqs">Sucess Stories</Link>
              <Link href="/faqs">Reviews</Link>
              <Link href="/faqs">Blog</Link>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="font-bold mb-1">Company</div>
            <div className="text-xs flex flex-col font-sans">
              <Link href="/faqs">About Us</Link>

              <Link href="/faqs">Trust, Safety and Security</Link>
              <Link href="/faqs">Contact Us</Link>
            </div>
          </div>
        </div>

        <div className="grid   sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-6">
          <div className="flex gap-2">
            <div>Follow us</div>
            <div className="flex border-[1px] rounded-full justify-center items-center w-[30px] h-[30px] p-[1px]">
              <CgFacebook />
            </div>
            <div className="flex border-[1px] rounded-full justify-center items-center w-[30px] h-[30px] p-[1px]">
              <CgInstagram />
            </div>
            <div className="flex border-[1px] rounded-full justify-center items-center w-[30px] h-[30px] p-[1px]">
              <CgYoutube />
            </div>
            <div className="flex border-[1px] rounded-full justify-center items-center w-[30px] h-[30px] p-[1px]">
              <CgTwitter />
            </div>
          </div>
          <div className="flex gap-2 mt-2 md:mt-0">
            <div>Mobile App</div>
            <div className="flex border-[1px] rounded-full justify-center items-center w-[30px] h-[30px] p-[1px]">
              <AiFillApple />
            </div>
            <div className="flex border-[1px] rounded-full justify-center items-center w-[30px] h-[30px] p-[1px]">
              <AiFillAndroid />
            </div>
          </div>
        </div>
        <div className="pt-5 px-2">
          <hr className="border-1 w-full border-white" />
        </div>
        <div className="flex text-sm gap-3 items-center justify-center mt-3">
          <div>&copy;2022</div>
          <div>Terms of Service</div>
          <div>Privacy Policy</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
