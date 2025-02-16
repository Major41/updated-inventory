import React from 'react';
import BorrowedItems from './BorrowedItems';
import Items from './Items'
import { useAuth } from '../../AuthContext/AuthContext';

function Welcome() {
 const {user} = useAuth()
  return (
    <div className=" mt-10 flex flex-col gap-10 ">
      <div className="flex gap-10 justify-around items-center w-[90%] mx-auto">
        <div className="text-black w-[500px]">
          <h2 className="font-semibold text-2xl mb-4">Hi, {user?.name.split(' ')[0] || Guest}</h2>
          <p>
            Welcome to the next era in robotic inventory management. RoboLend is
            your strategic partner, providing a comprehensive solution for
            tracking, managing, and optimizing your robotic assets.{' '}
          </p>
        </div>
        <div className="hidden md:block">
        <BorrowedItems/>
        </div>
      </div>
      <Items/>
    </div>
  );
}

export default Welcome;
