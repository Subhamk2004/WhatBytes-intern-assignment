
import React, { useState } from "react";

const ScoreUpdateForm = ({ onClose, updateScoreData, updateGraphData, existingGraphData }) => {
  const [userRank, setUserRank] = useState("");
  const [userPercentile, setUserPercentile] = useState("");
  const [userScore, setUserScore] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const newEntry = {
      id: existingGraphData.length + 1,
      rank: userRank,
      percentile: userPercentile,
    };
    updateGraphData([...existingGraphData, newEntry]);
    // console.log(newEntry);
    updateScoreData({ solved: userScore });

    onClose(false);
  };

  return (
    <div className="overlay fixed inset-0 bg-gray-900  bg-opacity-65 flex items-center justify-center">
      <div className="form-container bg-white p-6 rounded-3xl shadow-black shadow-lg w-[630px]">
        <div className="header flex justify-between mb-3">
          <h2 className="title text-xl font-bold">Update Scores</h2>
          <img
            src="/images/html.jpeg"
            alt="HTML Skill Test"
            className="skill-icon w-12 h-12 object-cover rounded-md"
          />
        </div>
        <form onSubmit={handleSubmit}>
          <div className=" mb-5 flex flex-row items-center justify-between">
            <label className="label text-gray-800 text-sm font-medium mb-2 flex flex-row items-center gap-6">
              <span className="h-6 w-6 flex font-extrabold justify-center items-center bg-blue-800 text-white rounded-full">1</span>
              <p>Update your <span className="font-extrabold text-black" > Rank</span></p>
            </label>
            <input
              type="number"
              value={userRank}
              onChange={(e) => setUserRank(e.target.value)}
              placeholder="Updated rank"
              className="input-field w-2/5 p-2 border border-blue-500 rounded-xl hover:border-2"
            />
          </div>

          <div className=" mb-5 flex flex-row items-center justify-between">
            <label className="label text-gray-800 text-sm font-medium mb-2 flex flex-row items-center gap-6">
              <span className="h-6 w-6 flex font-extrabold justify-center items-center bg-blue-800 text-white rounded-full">2</span>
              <p>Update your <span className="font-extrabold text-black" > Percentile</span></p>
            </label>
            <input
              type="number"
              value={userPercentile}
              onChange={(e) => setUserPercentile(e.target.value)}
              placeholder="Updated percentile"
              className="input-field w-2/5 p-2 border border-blue-500 rounded-xl hover:border-2"
            />
          </div>

          <div className=" mb-5 flex flex-row items-center justify-between">
            <label className="label text-gray-800 text-sm font-medium mb-2 flex flex-row items-center gap-6">
              <span className="h-6 w-6 flex font-extrabold justify-center items-center bg-blue-800 text-white rounded-full">2</span>
              <p>Update your <span className="font-extrabold text-black" > Current score (out of 15)</span></p>
            </label>
            <input
              type="number"
              value={userScore}
              onChange={(e) => setUserScore(e.target.value)}
              placeholder="Updated score"
              className="input-field w-2/5 p-2 border border-blue-500 rounded-xl hover:border-2"
              required
            />
          </div>


          <div className="button-group flex justify-end">
            <button
              type="button"
              onClick={() => {
                onClose(false);
              }}
              className="cancel-btn bg-red-200 text-black py-2 px-4 border border-red-500 rounded-xl mr-2 hover:bg-red-300"
            >
              Discard
            </button>
            <button
              type="submit"
              className="submit-btn flex flex-row items-center group justify-center gap-2 bg-blue-800 text-white py-2 px-4 rounded-xl hover:bg-blue-700"
            >
              Save
              <img
                src="images/next.png"
                className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300 ease-in-out"
              />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ScoreUpdateForm;