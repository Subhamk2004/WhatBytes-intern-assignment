import { useState } from "react";

const Sidebar = ({ setActiveComponent }) => {
  const [activeButton, setActiveButton] = useState("Dashboard");

  const handleClick = (component) => {
    setActiveButton(component);
    setActiveComponent(component);
  };

  return (
    <div className='w-64 bg-white-100 p-4 border-r border-gray-300 md:w-full'>
      <ul className="md:flex md:w-full md:justify-around">
        <li className='mb-4'>
          <button
            onClick={() => handleClick("Dashboard")}
            className={`w-full flex items-center sm:p-1 p-3 rounded-lg bg-gray-100 hover:bg-gray-200 font-bold ${
              activeButton === "Dashboard" ? "text-blue-600" : "text-gray-500"
            }`}
          >
            <img
              src='/images/dashboard.png'
              alt='Dashboard'
              className='sm:w-5 sm:h-5 w-6 h-6 sm:mr-1 mr-3'
            />
            <span className="sm:text-xs  ">Dashboard</span>
          </button>
        </li>
        <li className='mb-4'>
          <button
            onClick={() => handleClick("SkillTest")}
            className={`w-full flex items-center sm:p-1 p-3 rounded-lg bg-gray-100 hover:bg-gray-200 font-bold ${
              activeButton === "Dashboard" ? "text-blue-600" : "text-gray-500"
            }`}
          >
            <img
              src='/images/skills.png'
              alt='Skill Test'
              className='sm:w-5 sm:h-5 w-6 h-6 sm:mr-1 mr-3'
            />
            <span className="sm:text-xs ">Skill Test</span>
          </button>
        </li>
        <li className='mb-4'>
          <button
            onClick={() => handleClick("Internship")}
            className={`w-full flex items-center sm:p-1 p-3 rounded-lg bg-gray-100 hover:bg-gray-200 font-bold ${
              activeButton === "Dashboard" ? "text-blue-600" : "text-gray-500"
            }`}
          >
            <img
              src='/images/file-regular.svg'
              alt='Internship'
              className='sm:w-5 sm:h-5 w-6 h-6 sm:mr-1 mr-3'
            />
            <span className="sm:text-xs ">Internship</span>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
