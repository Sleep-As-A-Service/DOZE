import { Link, useHistory } from 'react-router-dom';

import { AiOutlineHome } from 'react-icons/ai'
import { BsMoonStarsFill } from 'react-icons/bs';
import React from 'react';

// nav bar for all pages

const Navigation = () => {
  return (
    <div className='nav'>
        <Link to="/">
            <AiOutlineHome 
                size={'2em'} 
                style={{color: '#F4f5f7'}}
            />
        </Link>
        <h1>DOZE</h1>
        <BsMoonStarsFill size={'2em'}/>
    </div>
  )
}

export default Navigation
