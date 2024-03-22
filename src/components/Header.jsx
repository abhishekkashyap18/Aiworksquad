import React, { useState } from 'react';
import { FaRegUserCircle } from "react-icons/fa";

const Header = ({name , handleDepartmentChange}) => {
  // const [selectedDepartment, setSelectedDepartment] = useState('Marketing');

  // const handleDepartmentChange = (event) => {
  //   setSelectedDepartment(event.target.value);
  // };

  return (
    <header className=" bg-cyan-700  flex justify-between items-center px-4 py-2">
      <div className="text-xl font-bold text-white">
        <img src="/logo.jpg" alt="" className='w-28 h-10 border border-black shadow-sm shadow-gray-400 sm:w-56 sm:h-12' />
      </div>
      <div className="flex items-center space-x-4">
        <div className="relative flex flex-row gap-6 justify-center">
          <select
            value={name}
            onChange={handleDepartmentChange}
            className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-32  sm:w-52 "
          >
            <option value="Marketing">Marketing: marketing</option>
            <option value="Sales">Sales: sales</option>
          </select>
          <div className="text-white flex flex-row py-1">
            <FaRegUserCircle className='my-1 mr-1'/>
            <p>Nithin</p>
          </div>
          </div>
        </div>
        
        
    
    </header>
  );
};

export default Header;

