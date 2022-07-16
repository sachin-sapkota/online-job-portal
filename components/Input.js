import React from 'react';
import { useState, createContext, useContext } from 'react';
const InputContext = createContext();
const Input = () => {
  const [search, setsearch] = useState('');
  return (
    <div>
      <InputContext.Provider value={search}>
        <input
          type="text"
          className="border-transparent placeholder:font-bold placeholder-indigo-500 placeholder:text-xl focus:border-transparent border-4 appearance-none focus:ring-transparent dark:bg-gray-800 font-medium  "
          placeholder="Search for any job"
          onChange={(e) => setsearch(e.target.value)}
        />
      </InputContext.Provider>
    </div>
  );
};

export default Input;
