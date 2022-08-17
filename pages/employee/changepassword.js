import DashLayout from '../../components/employee/DashLayout';
import api from '../../api/api';
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const changepassword = () => {
  const [pass, setpass] = useState({
    currpass: '',
    newpass: '',
  });
  const handlesubmit = async (e) => {
    e.preventDefault();
    await api
      .post('/api/employee/changepassword', pass)
      .then((res) => {
        if (res?.data?.msg !== undefined) {
          res?.data.success
            ? toast.success(res.data.msg, {
                position: 'bottom-right',
              })
            : toast.error(res?.data?.msg, {
                position: 'bottom-right',
              });
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="w-full h-screen flex flex-col">
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
      <div className=" h-[180px] min-h-[180px] w-full flex items-center justify-center bg-gray-200  dark:bg-darkback ">
        <span className="text-5xl font-black">Change Password</span>
      </div>

      <div className="  min-w-[260px] h-auto w-full   gap-4 p-3 place-items-center ">
        <form
          onSubmit={handlesubmit}
          className="w-full flex flex-col items-center justify-center"
        >
          <div className="w-full lg:w-4/5 px-3  flex-col lg:flex-row flex items-center">
            <span className=" w-full lg:w-1/4 space-x-5 text-lg text-center font-semibold place-self-center">
              Current Password:
            </span>

            <input
              className="appearance-none ring-2 ring-black/30 block w-full md:w-2/4 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="password"
              placeholder=""
              onChange={(e) =>
                setpass((prev) => {
                  return { ...prev, currpass: e.target.value };
                })
              }
            />
          </div>

          <div className="w-full lg:w-4/5 px-3 flex-col lg:flex-row flex items-center">
            <span className=" w-full lg:w-1/4 space-x-5 text-lg text-center font-semibold place-self-center">
              New Password:
            </span>

            <input
              className="appearance-none ring-2 ring-black/30 block w-full md:w-2/4 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="password"
              placeholder=""
              onChange={(e) =>
                setpass((prev) => {
                  return { ...prev, newpass: e.target.value };
                })
              }
            />
          </div>

          <button
            type="submit"
            className="rounded-xl py-3 px-5 text-white dark:text-black bg-black dark:bg-blue-500 shadow-md font-bold  "
          >
            Change Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default changepassword;

changepassword.getLayout = function getLayout(page) {
  return <DashLayout active="changepassword">{page}</DashLayout>;
};
