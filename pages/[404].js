import { useRouter } from 'next/router';
import Image from 'next/image';

const error = () => {
  const router = useRouter();
  return (
    <div className="w-screen h-screen grid grid-cols-1 md:grid-cols-2 place-items-center pt-5 place-content-center">
      <div className="w-[300px] h-[300px] lg:w-[400px] md:h-[400px]">
        <Image
          className="object-contain  w-[100px] h-[100px] lg:w-[400px] md:h-[400px]"
          src={require('../images/Image.png')}
        />
      </div>

      <div className="flex flex-col items-center gap-1 px-4">
        <span className=" text-3xl md:text-6xl font-black text-center  ">
          Oops!
        </span>
        <span className=" text-3xl md:text-6xl font-black text-center   ">
          404 Page Not Found...
        </span>
        <span className="md:text-xl text-lg  font-semibold text-center ">
          We can't seem to find the page you are looking for.
        </span>
        <div className="flex gap-5 mt-8">
          <button
            onClick={() => router.push('/')}
            className="rounded-xl py-3 px-5 text-white dark:text-black bg-black dark:bg-blue-500 shadow-md font-bold  "
          >
            Home
          </button>
          <button
            onClick={() => router.back()}
            className="rounded-xl py-3 px-5 text-white dark:text-black bg-black dark:bg-blue-500 shadow-md font-bold  "
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default error;
