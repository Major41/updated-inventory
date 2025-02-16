// src/components/LabSelection.jsx
import { Link } from 'react-router-dom';

const LabSelection = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen flex flex-col items-center pt-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Select a Lab</h1>
      <div className="flex md:flex-row flex-col justify-around gap-6 w-[90%] mx-auto">
        <div className='flex flex-col gap-4 shadow-2xl py-8 px-5 rounded-lg'>
            <h3 className='font-bold '>LAB A</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Recusandae, laborum eos. Perspiciatis excepturi officiis beatae!
          </p>
          <Link
            to="/Staff/labs/labA"
            className="bg-blue-500 text-white py-4 px-6 rounded-lg text-center shadow-lg hover:bg-blue-600 transition"
          >
            Explore Lab A
          </Link>
        </div>
        <div className='flex flex-col gap-4 shadow-2xl py-8 px-5 rounded-lg'>
            <h3 className='font-bold '>LAB B</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Recusandae, laborum eos. Perspiciatis excepturi officiis beatae!
          </p>
          <Link
            to="/Staff/labs/labB"
            className="bg-green-500 text-white py-4 px-6 rounded-lg text-center shadow-lg hover:bg-green-600 transition"
          >
            Explore Lab B
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LabSelection;
