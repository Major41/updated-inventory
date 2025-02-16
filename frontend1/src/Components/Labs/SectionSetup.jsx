import React from 'react'
import Door from './Door2'
import img from '../../images/inv-img.png'
function SectionSetup() {
  return (
    <div className="flex md:flex-row flex-col">
      <Door title={'Door 1'} borderCount={15} />
      <Door title={'Door 1'} borderCount={15} />
    </div>
  );
}

export default SectionSetup