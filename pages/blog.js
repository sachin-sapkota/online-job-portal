import Image from 'next/image';
const blog = () => {
  return (
    <div className="w-full h-screen flex flex-col">
      <div className=" h-[180px] min-h-[180px] w-full flex items-center justify-center   dark:bg-darkback ">
        <span className="text-5xl font-black">Blogs</span>
      </div>
      <div className="grid grid-cols-10 w-full h-full ">
        <div className="px-5 col-start-2 col-end-10 bg-indigo-00 w-full h-full grid-cols-1 place-items-center grid lg:grid-cols-2 xl:grid-cols-3 gap-6 mt-5">
          {/* card start */}

          <div className="max-w-lg group    text-gray-800">
            <div className="h-[14rem]  xl:h-[13rem] overflow-hidden rounded-xl">
              <Image
                className=" group-hover:scale-110 transition-all ease-linear duration-200  w-[120px] sm:w-[90vw] md:w-[120px] lg:w-[153px]   rounded-xl"
                src={require('../images/blog1.jpg')}
              />
            </div>
            <div className="space-y-2 mt-2 ">
              <div className="flex items-center font-semibold space-y-1 capitalize text-gray-600 dark:text-gray-300">
                <span>Informative</span>
              </div>
              <a rel="noopener noreferrer" href="#" className="block">
                <h3 className="text-2xl font-bold dark:text-gray-200">
                  Working From The Road as a Freelancer: Is It Right For You?
                </h3>
              </a>
              <p className="leading-snug  text-gray-600 dark:text-gray-300 text-lg font-sembold">
                If you’re considering working from and living on the road as a
                freelancer then you are on aright....
              </p>
            </div>
          </div>

          <div className="group max-w-lg group  text-gray-800">
            <div className="h-[14rem]  xl:h-[13rem] overflow-hidden rounded-xl">
              <Image
                className=" group-hover:scale-110 transition-all ease-linear duration-200  w-[120px] sm:w-[90vw] md:w-[120px] lg:w-[153px]   rounded-xl"
                src={require('../images/blog2.jpg')}
              />
            </div>

            <div className="space-y-2 mt-2 ">
              <div className="flex items-center font-semibold space-y-1 capitalize text-gray-600 dark:text-gray-300">
                <span>Job</span>
              </div>
              <a rel="noopener noreferrer" href="#" className="block">
                <h3 className="text-2xl font-bold dark:text-gray-200">
                  4 ways to reboot your business model
                </h3>
              </a>
              <p className="leading-snug  text-gray-600 dark:text-gray-300 text-lg font-sembold">
                It's easy to get stuck in a freelancing rut. Try these four
                ideas to rethink your business and enjoy what you do every day.
              </p>
            </div>
          </div>

          <div className="max-w-lg group  text-gray-800">
            <div className="h-[14rem]  xl:h-[13rem] overflow-hidden rounded-xl">
              <Image
                className=" group-hover:scale-110 transition-all ease-linear duration-200  w-[120px] sm:w-[90vw] md:w-[120px] lg:w-[153px]   rounded-xl"
                src={require('../images/blog3.jpg')}
              />
            </div>
            <div className="space-y-2 mt-2 ">
              <div className="flex items-center font-semibold space-y-1 capitalize text-gray-600 dark:text-gray-300">
                <span>Informative</span>
              </div>
              <a rel="noopener noreferrer" href="#" className="block">
                <h3 className="text-2xl font-bold dark:text-gray-200">
                  How to apply to full-time jobs with a freelance resume
                </h3>
              </a>
              <p className="leading-snug  text-gray-600 dark:text-gray-300 text-lg font-sembold">
                Being a freelancer has prepared you to work through just about
                anything. But how do you show that to a full-time hiring
                manager?
              </p>
            </div>
          </div>

          <div className="max-w-lg group  text-gray-800">
            <div className="h-[14rem]  xl:h-[13rem] overflow-hidden rounded-xl">
              <Image
                className=" group-hover:scale-110 transition-all ease-linear duration-200  w-[120px] sm:w-[90vw] md:w-[120px] lg:w-[153px]   rounded-xl"
                src={require('../images/blog4.jpg')}
              />
            </div>
            <div className="space-y-2 mt-2 ">
              <div className="flex items-center font-semibold space-y-1 capitalize text-gray-600 dark:text-gray-300">
                <span>Informative</span>
              </div>
              <a rel="noopener noreferrer" href="#" className="block">
                <h3 className="text-2xl font-bold dark:text-gray-200">
                  How to Grow Your Business with Email Marketing
                </h3>
              </a>
              <p className="leading-snug  text-gray-600 dark:text-gray-300 text-lg font-sembold">
                Developing an engaged email marketing list can take your
                business to the next level.…
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default blog;
