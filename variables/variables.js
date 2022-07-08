import { RiLockPasswordLine } from 'react-icons/ri'; // as password change
import { BsBriefcase } from 'react-icons/bs'; //as applied jobs
import { AiOutlineProfile, AiOutlineLogout } from 'react-icons/ai'; //as dashboard and profile and logout
import { AiOutlineIdcard, AiOutlineHeart } from 'react-icons/ai'; //as resume and favourite jobs
import { MdOutlineSpaceDashboard } from 'react-icons/md'; //as applied jobs and dashboard
import { AiOutlineDelete } from 'react-icons/ai'; //as delete profile
import { FaRegBell } from 'react-icons/fa';
export const dashboard = [
  {
    id: 'dashboard',
    title: 'Dashboard',
    links: '/employee/dashboard',
    icon: <MdOutlineSpaceDashboard className="w-6 h-6 text-gray-600" />,
  },
  {
    id: 'profile',
    title: 'My Profile',
    links: '/employee/profile',
    icon: <AiOutlineProfile className="w-6 h-6 text-gray-600 " />,
  },
  {
    id: 'resume',
    title: 'My Resume',
    links: '/employee/resume',
    icon: <AiOutlineIdcard className="w-6 h-6 text-gray-600 " />,
  },
  {
    id: 'appliedjobs',
    title: 'Applied Jobs',
    links: '/employee/appliedjobs',
    icon: <BsBriefcase className="w-6 h-6 text-gray-600 " />,
  },
  {
    id: 'favoritejobs',
    title: 'Favourite Jobs',
    links: '/employee/favoritejobs',
    icon: <AiOutlineHeart className="w-6 h-6 text-gray-600 " />,
  },
  ,
  {
    id: 'notification',
    title: 'Job Alerts',
    links: '/employee/notification',
    icon: <FaRegBell className="w-6 h-6 text-gray-600 " />,
  },
  {
    id: 'changepassowrd',
    title: 'Change Password',
    links: '/employee/changepassword',
    icon: <RiLockPasswordLine className="w-6 h-6 text-gray-600 " />,
  },
  {
    id: 'Logout',
    title: 'logout',
    links: '/employee/logout',
    icon: <AiOutlineLogout className="w-6 h-6 text-gray-600 " />,
  },
  {
    id: 'deleteprofile',
    title: 'Delete Profile',
    links: '/employee/deleteprofile',
    icon: <AiOutlineDelete className="w-6 h-6 text-gray-600 " />,
  },
];
