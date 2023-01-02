import { AiOutlineHome } from 'react-icons/ai'
import { BsMoonStarsFill } from 'react-icons/bs';
import React from 'react';
// nav bar for all pages
const Navigation = () => {
  return (
    <div className='nav'>
        <AiOutlineHome  size={'2em'}/>
        <h1>DOZE</h1>
        <BsMoonStarsFill size={'2em'}/>
    </div>
  )
}

export default Navigation
