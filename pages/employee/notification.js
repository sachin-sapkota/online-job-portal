import DashLayout from '../../components/employee/DashLayout';

const notification = () => {
  return (
    <div className="w-full h-screen flex flex-col">
      <div className=" h-[180px] min-h-[180px] w-full flex items-center justify-center bg-gray-200  dark:bg-darkback ">
        <span className="text-5xl font-black">Notifications</span>
      </div>
      <div className="  min-w-[260px] h-auto  rounded-md grid  grid-cols-1 lg:grid-cols-2 gap-4 p-3 place-items-center">
        <span className="text-xl text-center">Coming soon!</span>
      </div>
    </div>
  );
};

export default notification;

notification.getLayout = function getLayout(page) {
  return <DashLayout active="notification">{page}</DashLayout>;
};
