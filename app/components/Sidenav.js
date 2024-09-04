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
            className={`w-full flex items-center p-3 bg-gray rounded-lg shadow-md hover:bg-gray-200 font-bold ${
              activeButton === "Dashboard" ? "text-blue-600" : "text-gray-500"
            }`}
          >
            <img
              src='/images/dashboard.png'
              alt='Dashboard'
              className='w-6 h-6 mr-3'
            />
            <span>Dashboard</span>
          </button>
        </li>
        <li className='mb-4'>
          <button
            onClick={() => handleClick("SkillTest")}
            className={`w-full flex items-center p-3 bg-gray rounded-lg shadow-md hover:bg-gray-200 font-bold ${
              activeButton === "SkillTest" ? "text-blue-600" : "text-gray-500"
            }`}
          >
            <img
              src='/images/skills.png'
              alt='Skill Test'
              className='w-6 h-6 mr-3'
            />
            <span>Skill Test</span>
          </button>
        </li>
        <li className='mb-4'>
          <button
            onClick={() => handleClick("Internship")}
            className={`w-full flex items-center p-3 bg-gray rounded-lg shadow-md hover:bg-gray-200 font-bold ${
              activeButton === "Internship" ? "text-blue-600" : "text-gray-500"
            }`}
          >
            <img
              src='/images/file-regular.svg'
              alt='Internship'
              className='w-6 h-6 mr-3'
            />
            <span>Internship</span>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
