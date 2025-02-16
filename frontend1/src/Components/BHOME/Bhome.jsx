import React from 'react';
import { Link } from 'react-router-dom';

function Bhome() {
  return (
    <div>
      <Link
        to="/"
        className=" absolute top-18 md:top-30 mx-10 p-3 font-bold rounded-md cursor-pointer hover:bg-blue-900  bg-blue-700 text-white"
      >
        Back Home
      </Link>
    </div>
  );
}

export default Bhome;
