import React from 'react';
import Person3Icon from '@mui/icons-material/Person3';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div  className='bg-yellow-400 h-1/10 p-2 flex items-center justify-between text-black text-lg fixed top-0 left-0 right-0 z-10'>
      <Link to='/'>
        Movie App
      </Link>
      <Person3Icon className='cursor-pointer'/>
      </div>
    
  )
}

export default Header