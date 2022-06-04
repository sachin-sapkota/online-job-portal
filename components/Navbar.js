import Image from 'next/image';
const Navbar = () => {
  return (
    <div className="flex h-10 bg-slate-500 w-full  ">
      <div className=" flex shrink-0 object-contain ">
        <Image src={require('../images/logo.png')} width={100} height={100} />
      </div>
      <div className="flex-1 flex justify-center items-center gap-4">
        <div className=" text-white ">Find Worker</div>
        <div className=" text-white ">Find Work</div>
        <div className=" text-white ">Explore</div>
      </div>
      <div className="flex gap-3">
        <div>Login</div>
        <div>Sign up</div>
      </div>
    </div>
  );
};
export default Navbar;
