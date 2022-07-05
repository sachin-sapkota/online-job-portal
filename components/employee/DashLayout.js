import { useState, useEffect } from 'react';

const DashLayout = ({ children }) => {
  const [lock, setlock] = useState(false);
  return (
    <div className="flex  ">
      <div className="bg-black/50 flex-none relative shadow-2xl w-[300px] h-[100vh]"></div>
      <div className="relative"> {children}</div>
      hello
    </div>
  );
};

export default DashLayout;
