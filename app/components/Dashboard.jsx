import React from "react";

const Dashboard = () => {
  return (
    <div className="p-6 space-y-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">
          Welcome, <span className="text-blue-600">Subham Kumar</span>
        </h1>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Your Progress</h2>
        <p className="text-gray-600">You’ve made great progress! keep going</p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Upcoming Tasks</h2>
        <ul className="list-disc list-inside text-gray-600">
          <li>Project no. 1</li>
          <li>Project no. 2</li>
          <li>Project no. 3</li>
        </ul>
      </div>

    </div>
  );
};

export default Dashboard;
