// src/components/LabBStorage.jsx
import { Link } from 'react-router-dom';
import Layout from './Layout';

const LabBStorage = () => {
  return (
    <div className="w-[90%] mx-auto my-8 overflow-hidden">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Lab B Storage</h1>

      <div className="flex gap-10 w-full">
        {/* Work Shelf */}
        <div className="bg-green-600 h-full w-full px-5 rounded-lg py-4">
          <h2 className="text-xl font-bold text-gray-700 mb-4">Work Shelf</h2>
          <div className="flex flex-col gap-5">
            <div className="bg-white w-full h-[90px] rounded-lg flex items-center justify-center">
              Lorem ipsum
            </div>
            <div className="flex gap-4">
              <div className="bg-white px-3 py-6 w-full rounded-md">Bar3</div>
              <div className="bg-white px-3 py-6 w-full rounded-md">Bar3</div>
            </div>
            <div className="flex gap-4">
              <div className="bg-white px-3 py-6 w-full rounded-md">Bar2</div>
              <div className="bg-white px-3 py-6 w-full rounded-md">Bar2</div>
            </div>
            <div className="flex gap-4">
              <div className="bg-white px-3 py-6 w-full rounded-md">Bar1</div>
              <div className="bg-white px-3 py-6 w-full rounded-md">Bar1</div>
            </div>
          </div>
        </div>

        {/* Exercise Project Shelf */}
        <div className="bg-green-600 h-full w-full rounded-lg px-5 py-4">
          <h2 className="text-xl font-bold text-gray-700 mb-4">
            Exercise Project Shelf
          </h2>
          <div className="flex flex-col gap-5">
            <div className="bg-white w-full h-[50px] rounded-lg flex items-center px-6 text-left">
              Bar 5
            </div>
            <div className="bg-white w-full h-[50px] rounded-lg flex items-center px-6 text-left">
              Bar 4
            </div>
            <div className="bg-white w-full h-[50px] rounded-lg flex items-center px-6 text-left">
              Bar 3
            </div>
            <div className="bg-white w-full h-[50px] rounded-lg flex items-center px-6 text-left">
              Bar 2
            </div>
            <div className="bg-white w-full h-[50px] rounded-lg flex items-center px-6 text-left">
              Bar 1
            </div>
          </div>
        </div>

        {/* Project Shelf 1 */}
        <div className="bg-green-600 h-full w-full rounded-lg px-5 py-4">
          <h2 className="text-xl font-bold text-gray-700 mb-4">
            Project Shelf 1
          </h2>
          <div className="flex flex-col gap-5">
            <div className="bg-white w-full h-[50px] rounded-lg flex items-center px-6 text-left">
              Bar 5
            </div>
            <div className="bg-white w-full h-[50px] rounded-lg flex items-center px-6 text-left">
              Bar 4
            </div>
            <div className="bg-white w-full h-[50px] rounded-lg flex items-center px-6 text-left">
              Bar 3
            </div>
            <div className="bg-white w-full h-[50px] rounded-lg flex items-center px-6 text-left">
              Bar 2
            </div>
            <div className="bg-white w-full h-[50px] rounded-lg flex items-center px-6 text-left">
              Bar 1
            </div>
          </div>
        </div>

        {/* Project Shelf 2 */}
        <div className="bg-green-600 h-full w-full rounded-lg px-5 py-4">
          <h2 className="text-xl font-bold text-gray-700 mb-4">
            Project Shelf 2
          </h2>
          <div className="flex flex-col gap-5">
            <div className="bg-white w-full h-[50px] rounded-lg flex items-center px-6 text-left">
              Bar 5
            </div>
            <div className="bg-white w-full h-[50px] rounded-lg flex items-center px-6 text-left">
              Bar 4
            </div>
            <div className="bg-white w-full h-[50px] rounded-lg flex items-center px-6 text-left">
              Bar 3
            </div>
            <div className="bg-white w-full h-[50px] rounded-lg flex items-center px-6 text-left">
              Bar 2
            </div>
            <div className="bg-white w-full h-[50px] rounded-lg flex items-center px-6 text-left">
              Bar 1
            </div>
          </div>
        </div>
      </div>

      {/* Area 3D Printing */}
      <div className="mt-10 bg-blue-500 w-max p-5 rounded-xl right-0 ">
        <h2 className="text-xl font-bold text-gray-700 mb-4">
          Area 3D Printing
        </h2>

        <div className="bg-white p-5 rounded-lg mb-5">
          <h2 className="mb-2">A</h2>
          <div className="bg-orange-500 p-5 rounded-lg mb-5">
            Tulostustyökalut
          </div>
          <div className="bg-orange-500 p-5 rounded-lg mb-5">
            Vetoniitit, o-renkaat, sokat, jouset
          </div>
        </div>

        <div className="bg-white p-5 rounded-lg mb-5">
          <h2 className="mb-2">B</h2>
          <div className="bg-orange-500 p-5 rounded-lg mb-5">
            APICO LIITTIMET
          </div>
          <div className="bg-orange-500 p-5 rounded-lg mb-5">
            JOHTONEN PÄÄTYHOLKKI
          </div>
          <div className="bg-orange-500 p-5 rounded-lg mb-5">SÄHKÖJOHDOT</div>
          <div className="bg-orange-500 p-5 rounded-lg mb-5">
            KUTISTESUKAT JA NIPPUSITEET
          </div>
        </div>
      </div>
    </div>
  );
};

export default LabBStorage;
