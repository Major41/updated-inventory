import React from 'react';
import { Link } from 'react-router-dom';

function Bhome() {
  return (
    <div>
      <Link
        to="/"
        className="fixed bg-blue-600 hover:bg-blue-800 rounded-md text-black py-2 px-4 cursor-pointer font-bold text-2xl m-8"
      >
        Back Home
      </Link>
    </div>
  );
}

export default Bhome;
