import { RiLockPasswordLine } from 'react-icons/ri'; // as password change
import { BsBriefcase } from 'react-icons/bs'; //as applied jobs
import { AiOutlineProfile, AiOutlineLogout } from 'react-icons/ai'; //as dashboard and profile and logout
import { AiOutlineIdcard, AiOutlineHeart } from 'react-icons/ai'; //as resume and favourite jobs
import { MdOutlineSpaceDashboard } from 'react-icons/md'; //as applied jobs and dashboard
import { AiOutlineDelete } from 'react-icons/ai'; //as delete profile
import { FaRegBell } from 'react-icons/fa';
import { FiArrowRightCircle } from 'react-icons/fi';
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
    id: 'appliedjob',
    title: 'Applied Jobs',
    links: '/employee/appliedjobs',
    icon: <BsBriefcase className="w-6 h-6 text-gray-600 " />,
  },
  {
    id: 'favoritejob',
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
    id: 'logout',
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

export const employerdashboard = [
  {
    id: 'dashboard',
    title: 'Employer Dashboard',
    links: '/employers/dashboard',
    icon: <MdOutlineSpaceDashboard className="w-6 h-6 text-gray-600" />,
  },
  {
    id: 'profile',
    title: 'Company Profile',
    links: '/employers/profile',
    icon: <AiOutlineProfile className="w-6 h-6 text-gray-600 " />,
  },
  {
    id: 'postjob',
    title: 'Post a New Job',
    links: '/employers/postjobs',
    icon: <FiArrowRightCircle className="w-6 h-6 text-gray-600 " />,
  },
  {
    id: 'managejob',
    title: 'Manage Jobs',
    links: '/employers/managejobs',
    icon: <BsBriefcase className="w-6 h-6 text-gray-600 " />,
  },
  {
    id: 'favoriteresume',
    title: 'Favourite Resumes',
    links: '/employers/favoriteresume',
    icon: <AiOutlineHeart className="w-6 h-6 text-gray-600 " />,
  },
  ,
  {
    id: 'notification',
    title: 'Notification',
    links: '/employers/notification',
    icon: <FaRegBell className="w-6 h-6 text-gray-600 " />,
  },
  {
    id: 'changepassowrd',
    title: 'Change Password',
    links: '/employers/changepassword',
    icon: <RiLockPasswordLine className="w-6 h-6 text-gray-600 " />,
  },
  {
    id: 'Logout',
    title: 'logout',
    links: '/employers/logout',
    icon: <AiOutlineLogout className="w-6 h-6 text-gray-600 " />,
  },
  {
    id: 'deleteprofile',
    title: 'Delete Profile',
    links: '/employers/deleteprofile',
    icon: <AiOutlineDelete className="w-6 h-6 text-gray-600 " />,
  },
];
