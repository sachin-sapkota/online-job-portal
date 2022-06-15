import Navbar from '../components/Navbar';
import { MdOutlineSpaceDashboard } from 'react-icons/md';
import { RiUser2Line } from 'react-icons/ri';
import { FiArrowRightCircle } from 'react-icons/fi';
import { RiSuitcaseLine, RiDeleteBinLine } from 'react-icons/ri';
import { RiContactsBookLine } from 'react-icons/ri';
import { AiOutlineHeart } from 'react-icons/ai';
import { TbMessageCircle } from 'react-icons/tb';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { AiOutlineLogout } from 'react-icons/ai';
import { useState, useEffect } from 'react';
import { GiRaiseZombie, GiShamblingZombie } from 'react-icons/gi';
import { GiHamburgerMenu } from 'react-icons/gi';
import Dashboard from '../components/Dashboard';

const Employer = () => {
  const [active, setActive] = useState('Dashboard');
  const [dash, SetDash] = useState(true);
  return (
    <div>
      <div className="bg-white">
        {' '}
        <Navbar />
      </div>

      <div className="">
        <div
          className={` ${dash ? 'flex justify-start' : 'grid grid-cols-5'}   `}
        >
          <div
            className={` ${
              dash
                ? 'w-[60px] items-center justify-start h-[140vh]  '
                : 'min-w-[250px] w-[300px] px-[3rem] shadow-xl  items-start h-full  fixed animate-animates'
            }  select-none h-[128vh] bg-white flex flex-col  gap-6 pt-[100px]   `}
          >
            <div
              onClick={() => SetDash(!dash)}
              className={`cursor-pointer text-bg-gray-400`}
            >
              <GiHamburgerMenu />
            </div>
            <div
              onClick={() => setActive('Dashboard')}
              className={` ${
                dash
                  ? 'justify-center p-2'
                  : ' min-w-[160px] w-[170px] justify-start gap-2 '
              } transition-all duration-400 ease-linear cursor-pointer flex items-center   font-sans font-medium text-sm  ${
                active === 'Dashboard'
                  ? 'bg-gray-200 text-indigo-400 rounded-md pl-2  py-2'
                  : 'text-gray-400'
              }`}
            >
              <MdOutlineSpaceDashboard
                className={`${dash ? 'md:w-7 w-5 h-5 md:h-7' : ''}`}
              />
              <div className={`${dash ? 'hidden' : ''}`}>Dashboard</div>
            </div>
            <div
              onClick={() => setActive('Profile')}
              className={` ${
                dash
                  ? 'justify-center p-2'
                  : ' min-w-[160px] w-[170px] justify-start gap-2 '
              } transition-all duration-400 ease-linear cursor-pointer flex items-center   font-sans font-medium text-sm  ${
                active === 'Profile'
                  ? 'bg-gray-200 text-indigo-400 rounded-md pl-2  py-2'
                  : 'text-gray-400'
              }`}
            >
              <RiUser2Line
                className={`${dash ? 'md:w-7 w-5 h-5 md:h-7' : ''}`}
              />{' '}
              <div className={`${dash ? 'hidden' : ''}`}>Company Profile</div>
            </div>
            <div
              onClick={() => setActive('Jobs')}
              className={` ${
                dash
                  ? 'justify-center p-2'
                  : ' min-w-[160px] w-[170px] justify-start gap-2 '
              } transition-all duration-400 ease-linear cursor-pointer flex items-center   font-sans font-medium text-sm  ${
                active === 'Jobs'
                  ? 'bg-gray-200 text-indigo-400 rounded-md pl-2  py-2'
                  : 'text-gray-400'
              }`}
            >
              <FiArrowRightCircle
                className={`${dash ? 'md:w-7 w-5 h-5 md:h-7' : ''}`}
              />
              <div className={`${dash ? 'hidden' : ''}`}>Post a New Job</div>
            </div>
            <div
              onClick={() => setActive('Manage')}
              className={` ${
                dash
                  ? 'justify-center p-2'
                  : ' min-w-[160px] w-[170px] justify-start gap-2 '
              } transition-all duration-400 ease-linear cursor-pointer flex items-center   font-sans font-medium text-sm  ${
                active === 'Manage'
                  ? 'bg-gray-200 text-indigo-400 rounded-md pl-2  py-2'
                  : 'text-gray-400'
              }`}
            >
              <RiSuitcaseLine
                className={`${dash ? 'md:w-7 w-5 h-5 md:h-7' : ''}`}
              />
              <div className={`${dash ? 'hidden' : ''}`}>Manage Jobs</div>
            </div>
            <div
              onClick={() => setActive('Applicants')}
              className={` ${
                dash
                  ? 'justify-center p-2'
                  : ' min-w-[160px] w-[170px] justify-start gap-2 '
              } transition-all duration-400 ease-linear cursor-pointer flex items-center   font-sans font-medium text-sm  ${
                active === 'Applicants'
                  ? 'bg-gray-200 text-indigo-400 rounded-md pl-2  py-2'
                  : 'text-gray-400'
              }`}
            >
              {' '}
              <RiContactsBookLine
                className={`${dash ? 'md:w-7 w-5 h-5 md:h-7' : ''}`}
              />
              <div className={`${dash ? 'hidden' : ''}`}>All Applicants</div>
            </div>
            <div
              onClick={() => setActive('Favourites')}
              className={` ${
                dash
                  ? 'justify-center p-2'
                  : ' min-w-[160px] w-[170px] justify-start gap-2 '
              } transition-all duration-400 ease-linear cursor-pointer flex items-center   font-sans font-medium text-sm  ${
                active === 'Favourites'
                  ? 'bg-gray-200 text-indigo-400 rounded-md pl-2  py-2'
                  : 'text-gray-400'
              }`}
            >
              {' '}
              <AiOutlineHeart
                className={`${dash ? 'md:w-7 w-5 h-5 md:h-7' : ''}`}
              />
              <div className={`${dash ? 'hidden' : ''}`}>Liked Resumes</div>
            </div>
            <div
              onClick={() => setActive('Messages')}
              className={` ${
                dash
                  ? 'justify-center p-2'
                  : ' min-w-[160px] w-[170px] justify-start gap-2 '
              } transition-all duration-400 ease-linear cursor-pointer flex items-center   font-sans font-medium text-sm  ${
                active === 'Messages'
                  ? 'bg-gray-200 text-indigo-400 rounded-md pl-2  py-2'
                  : 'text-gray-400'
              }`}
            >
              {' '}
              <TbMessageCircle
                className={`${dash ? 'md:w-7 w-5 h-5 md:h-7' : ''}`}
              />{' '}
              <div className={`${dash ? 'hidden' : ''}`}>Messages</div>
            </div>
            <div
              onClick={() => setActive('Notifications')}
              className={` ${
                dash
                  ? 'justify-center p-2'
                  : ' min-w-[160px] w-[170px] justify-start gap-2 '
              } transition-all duration-400 ease-linear cursor-pointer flex items-center   font-sans font-medium text-sm  ${
                active === 'Notifications'
                  ? 'bg-gray-200 text-indigo-400 rounded-md pl-2  py-2'
                  : 'text-gray-400'
              }`}
            >
              {' '}
              <IoMdNotificationsOutline
                className={`${dash ? 'md:w-7 w-5 h-5 md:h-7' : ''}`}
              />{' '}
              <div className={`${dash ? 'hidden' : ''}`}>Resumes Alerts</div>
            </div>
            <div
              onClick={() => setActive('Logout')}
              className={` ${
                dash
                  ? 'justify-center p-2'
                  : ' min-w-[160px] w-[170px] justify-start gap-2 '
              } transition-all duration-400 ease-linear cursor-pointer flex items-center   font-sans font-medium text-sm  ${
                active === 'Logout'
                  ? 'bg-gray-200 text-indigo-400 rounded-md pl-2  py-2'
                  : 'text-gray-400'
              }`}
            >
              {' '}
              <AiOutlineLogout
                className={`${dash ? 'md:w-7 w-5 h-5 md:h-7' : ''}`}
              />
              <div className={`${dash ? 'hidden' : ''}`}>Logout</div>
            </div>
            <div
              onClick={() => setActive('Delete')}
              className={` ${
                dash
                  ? 'justify-center p-2'
                  : ' min-w-[160px] w-[170px] justify-start gap-2 '
              } transition-all duration-400 ease-linear cursor-pointer flex items-center   font-sans font-medium text-sm  ${
                active === 'Dashboard'
                  ? 'bg-gray-200 text-indigo-400 rounded-md pl-2  py-2'
                  : 'text-gray-400'
              }`}
            >
              <RiDeleteBinLine
                className={`${dash ? 'md:w-7 w-5 h-5 md:h-7' : ''}`}
              />
              <div className={`${dash ? 'hidden' : ''}`}>Delete Profile</div>
            </div>
          </div>
          <div className="col-span-4 bg-gray-200 w-[100vw] h-auto mt-[60px] pt-10 px-4 md:px-12">
            {active === 'Dashboard' ? <Dashboard /> : null}
            {/* {active === 'Profile' ? <Profile /> : null}
            {active === 'Jobs' ? <Jobs /> : null}
            {active === 'Manage' ? <Manage /> : null}
            {active === 'Applicants' ? <Applicants /> : null}
            {active === 'Favourites' ? <Favourites /> : null}
            {active === 'Messages' ? <Messages /> : null}
            {active === 'Notifications' ? <Notifications /> : null}
            {active === 'Logout' ? <Logout /> : null}
            {active === 'Delete' ? <Delete /> : null} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Employer;
