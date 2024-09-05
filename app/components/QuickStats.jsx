import React, { useEffect, useState } from "react";
import { VscGraphLine } from "react-icons/vsc";
import Form from "./ScoreForm";
import { Data } from "../Data";
import { Line } from "react-chartjs-2";

const Quick = ({ setScore, score }) => {
  const [show, setShow] = useState(false);

  const handleUpdateClick = () => {
    setShow(!show);
  };
  const [graph, setGraph] = useState(Data);
  let size = graph.length;

  const [chartData, setChartData] = useState({
    labels: graph.map((data) => data.percentile),
    datasets: [
      {
        label: "Your Percentile",
        data: graph.map((data) => data.rank),
      },
    ],
  });

  useEffect(() => {
    setChartData({
      labels: graph.map((data) => data.percentile),
      datasets: [
        {
          label: "Your Percentile",
          data: graph.map((data) => data.rank),
        },
      ],
    });
  }, [graph]);

  return (
    <div className='flex flex-col w-[50%] md:w-[100%] border-gray-300'>
      <div className='p-4 bg-white rounded-2xl  flex gap-5 items-center border border-gray-300 lg:flex-col lg:align-middle'>
        <div className="flex flex-row lg:flex-col md:flex-row gap-2">
          <img
            src='/images/html.jpeg'
            alt='Skill Test'
            className='w-12 h-12 object-cover rounded-md'
          />
          <div className='flex flex-col'>
            <h5 className='text-lg font-bold'>Hyper Text Markup Language</h5>
            <p className='text-[1rem]'>
              Questions: 08 | Duration: 15 mins | Submitted on 5 August
            </p>
          </div>
        </div>


        <button
          onClick={handleUpdateClick}
          className=' bg-blue-800 text-white py-3 px-9 rounded-2xl hover:bg-blue-700 font-bold'
        >
          Update
        </button>
        {show && (
          <Form
            onClose={setShow}
            updateScoreData={setScore}
            updateGraphData={setGraph}
            existingGraphData={graph}
          />
        )}
      </div>
      <div className='p-4 bg-white rounded-2xl  gap-5 mt-8 border border-gray-300 flex flex-col'>
        <h5 className='text-lg font-bold'>Quick Statistics</h5>
        <div className='flex justify-around sm:flex-col lg:flex-col'>
          <div className='flex gap-5 items-center'>
            <img src="images/trophy.png" className='h-12 w-12 bg-gray-100 rounded-full p-2' />

            <div>
              <h5 className="font-semibold">{graph[size - 1].rank}</h5>
              <p className="text-gray-500"> Your Rank</p>
            </div>
            <hr className="h-full w-[1px] bg-gray-300"/>
          </div>
          <div className='flex gap-5 items-center'>
            <img src="images/grades.png" className='h-12 w-12 bg-gray-100  rounded-full p-2' />
            <div>
              <h5 className="font-semibold">{graph[size - 1].percentile}</h5>
              <p className="text-gray-500">Percentile</p>
            </div>
            <hr className="h-full w-[1px] bg-gray-300"/>
          </div>
          <div className='flex gap-5 items-center'>
          <img src="images/tick.png" className='h-12 w-12 bg-gray-100  rounded-full p-2' />
            <div>
              <h5 className="font-semibold">{score}/15</h5>
              <p className="text-gray-500">Correct Answers</p>
            </div>
          </div>
        </div>
      </div>
      <div className='p-4 bg-white rounded-2xl  gap-3 mt-8 border border-gray-300 flex flex-col'>
        <h5 className='text-lg font-bold'>Comparison Graph</h5>
        <div className='flex items-center'>
          <p className='text-xs text-gray-600'>
            <b>You scored {graph[size - 1].percentile} percentile</b> which is
            lower than the average percentile 72% of all the engineers who
            took this assessment
          </p>
          <VscGraphLine className='h-10 w-10 bg-gray-300 text-black rounded-full p-2' />
        </div>
        <Line
          data={chartData}
          options={{
            plugins: {
              title: {
                display: true,
                text: "Your Percentile",
              },
              legend: {
                display: false,
              },
            },
          }}
        />
      </div>
    </div>
  );
};

export default Quick;
