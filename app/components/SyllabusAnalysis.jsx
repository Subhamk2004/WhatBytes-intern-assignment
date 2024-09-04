import React, { useRef } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const Syllabus = ({ score }) => {
  const percentage = (score / 15) * 100;
  const chartRef = useRef(null);
  
  const data = {
    datasets: [{
      data: [percentage, 100 - percentage],
      backgroundColor: ['#5192f5', '#F3F4F6'],
      borderColor: ['#87CEEB', '#F3F4F6'],
      borderWidth: 1,
      circumference: 360,
      rotation: 120,
    }]
  };

  const imageCenter = {
    id: 'imageCenter',
    beforeDatasetsDraw(chart) {
      const { ctx, width, height } = chart;
      const image = new Image();
      image.src = 'images/target.png'; 
      const x = width / 2;
      const y = height / 2;
      ctx.save();
      ctx.drawImage(image, x - 40, y - 40, 80, 80); 
      ctx.restore();
    }
  };

  const hoverText = {
    id: 'hoverText',
    beforeEvent(chart, args) {
      const event = args.event;
      const tooltip = chart.tooltip;
      if (event.type === 'mousemove') {
        const activePoints = chart.getElementsAtEventForMode(event, 'nearest', { intersect: true }, false);
        if (activePoints.length) {
          const index = activePoints[0].index;
          if (index === 0) {
            tooltip.setActiveElements([{ datasetIndex: 0, index: 0 }], { x: event.x, y: event.y });
            tooltip.update();
          } else if (index === 1) {
            tooltip.setActiveElements([{ datasetIndex: 0, index: 1 }], { x: event.x, y: event.y });
            tooltip.update();
          }
        }
      }
    }
  };

  const options = {
    cutout: '80%',
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        enabled: true,
        callbacks: {
          label: (tooltipItem) => {
            const dataset = tooltipItem.dataset;
            const index = tooltipItem.dataIndex;
            return index === 0 ? `${score} correct` : `${15 - score} incorrect`;
          }
        }
      }
    },
    onHover: (event, elements) => {
      if (elements.length) {
        event.native.target.style.cursor = 'pointer';
      } else {
        event.native.target.style.cursor = 'default';
      }
    }
  };

  return (
    <div className='w-[50%] flex flex-col mb-5 gap-5 md:w-[100%]'>
      <div className='bg-white p-4 rounded-2xl w-full border border-gray-300 flex flex-col gap-5'>
        <h2 className='text-lg font-semibold mb-4'>Syllabus Wise Analysis</h2>
        <div className='mb-4 '>
          <div className='flex justify-between mb-1'>
            <span>HTML Tools, Forms, History</span>
            <span className='text-blue-600 font-semibold'>80%</span>
          </div>
          <div className='w-full bg-gray-200 rounded-full h-2.5'>
            <div className='bg-blue-600 h-2.5 rounded-full w-[80%]'></div>
          </div>
        </div>

        <div className='mb-4'>
          <div className='flex justify-between mb-1'>
            <span>Tags & References in HTML</span>
            <span className='text-orange-500 font-semibold'>60%</span>
          </div>
          <div className='w-full bg-gray-200 rounded-full h-2.5'>
            <div className='bg-orange-500 h-2.5 rounded-full w-[60%]'></div>
          </div>
        </div>

        <div className='mb-4'>
          <div className='flex justify-between mb-1'>
            <span>Tables & References in HTML</span>
            <span className='text-red-500 font-semibold'>24%</span>
          </div>
          <div className='w-full bg-gray-200 rounded-full h-2.5'>
            <div className='bg-red-500 h-2.5 rounded-full w-[24%]'></div>
          </div>
        </div>

        <div className='mb-4'>
          <div className='flex justify-between mb-1'>
            <span>Tables & CSS Basics</span>
            <span className='text-green-500 font-semibold'>96%</span>
          </div>
          <div className='w-full bg-gray-200 rounded-full h-2.5 '>
            <div className='bg-green-500 h-2.5 rounded-full w-[96%]'></div>
          </div>
        </div>
      </div>

      <div className='bg-white p-4 rounded-2xl border border-gray-300 flex flex-col gap-1'>
        <div className="flex flex-row justify-between">
          <h2 className='text-lg font-semibold mb-4'>Questions Analysis</h2>
          <p className="text-sm font-semibold">{score}/15</p>
        </div>
        <p className='text-sm text-gray-600'>
          <b>You scored {score} question correct out of 15. </b>
          However, it still needs improvement.
        </p>
        <div className='w-full flex justify-center rounded-lg'>
          <div className='w-[20rem] flex justify-center p-5'>
            <Pie
              data={data}
              options={options}
              plugins={[imageCenter, hoverText]} 
              ref={chartRef}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Syllabus;
