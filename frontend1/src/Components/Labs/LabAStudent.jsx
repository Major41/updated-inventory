// src/components/LabAStorage.jsx
import { Link } from 'react-router-dom';
import Layout from './Layout';
import Door from './Door';

const cabinetA = [
  '3D Printing',
  'Control System',
  'Robotics & Peripherals',
  'Pneumatics1',
  'Grippers2',
  'Electronics',
];

const cabinetB = ['Power Sources', 'Cameras', 'Staff1', 'Staff2'];

const LabAStorage = () => {
  return (
    <div className="mx-auto my-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Lab A Storage</h1>

      {/* Cabinet A */}
      <div className="flex md:flex-row flex-col gap-3">
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-700 mb-4">Cabinets</h2>

          <div className="flex flex-col w-full">
            <div className="mb-6 bg-green-700 h-full p-1 rounded-lg">
              <h2 className="text-xl font-bold text-gray-700 mb-4">
                Cabinet A
              </h2>
              <div className="md:flex grid grid-cols-2 items-center">
                {cabinetA.map((item) => (
                  <div className="flex flex-col flex-shrink items-center justify-evenly w-full">
                    <h2>{item}</h2>
                    <div className="bg-white m-3 py-16 px-6 rounded-md">
                      <Link
                        to="/student/labs/LabA/door2"
                        className="bg-blue-300 text-gray-900 py-2 px-4 rounded-lg shadow-md text-center hover:bg-blue-400 transition"
                      >
                        View
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-6 bg-green-700 h-full p-1">
              <h2 className="text-xl font-bold text-gray-700 mb-4">
                Cabinet A
              </h2>
              <div className="md:flex grid grid-cols-2 ">
                {cabinetB.map((item) => (
                  <div className="flex flex-col items-center justify-between w-full">
                    <h2>{item}</h2>
                    <div className="bg-white m-3 py-16 px-6 rounded-md">
                      <Link
                        to="/student/labs/LabA/door2"
                        className="bg-blue-300 text-gray-900 py-2 px-4 rounded-lg shadow-md text-center hover:bg-blue-400 transition"
                      >
                        View
                      </Link>
                    </div>
                  </div>
                ))}
                <div className="flex flex-col items-center ">
                  <h2>Trolley</h2>
                  <div className="bg-blue-900 m-3 py-16 px-6 rounded-md">
                    <Link
                      to="/student/labs/LabA/trolley"
                      className="bg-blue-300 text-gray-900 py-2 px-4 rounded-lg shadow-md text-center hover:bg-blue-400 transition"
                    >
                      View
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* shelves */}
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-700 ">Shelves</h2>
          <div className="flex items-center gap-3 text-center ">
            {['Shelf1', 'Shelf2'].map((item) => (
              <div>
                <Door borderCount={10} title={'Shelf'} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-around gap-10 w-full">
        <div className="w-full bg-blue-900 px-5 py-10 rounded-lg">
          <h2 className="text-xl text-white font-bold mb-4">Bin3</h2>
          <div className="md:flex grid grid-cols-2 gap-2">
            {['Component 1', 'Component 2', 'Component 3', 'Component 4'].map(
              (component) => (
                <div className="bg-white px-3 py-6 rounded-lg  ">
                  {component}
                </div>
              )
            )}
          </div>
        </div>

        <div className="w-full border-blue-950 border-2 px-5 py-10 rounded-lg">
          <h2 className="text-xl text-white font-bold bg-blue-900 px-4 w-max rounded-lg py-4 mb-4">
            General Items
          </h2>
        </div>
      </div>
    </div>
  );
};

export default LabAStorage;
