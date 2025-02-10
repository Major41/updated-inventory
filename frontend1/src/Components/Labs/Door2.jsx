import React from 'react';

const Door = ({ title = 'Door 1', borderCount = 15 }) => {
  let num = 6.1;
  const add = () => {
    return num++;
  };
  return (
    <div className="w-[90%] mx-auto flex justify-around mb-8">
      <div className="text-black bg-white mt-10 p-5 rounded-lg">
        <div>
          <h2 className="text-xl font-bold text-gray-700 mb-4">{title}</h2>
          <div className="w-[300px]  border-2 border-green-600 rounded-lg">
            <p className="pl-4 font-bold">{add()}</p>
            <div className="flex flex-col gap-6 mt-6">
              {[...Array(borderCount)].map((_, index) => (
                <div key={index} className="w-[90%] mx-auto border-2"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Door;
