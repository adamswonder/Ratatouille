import React from 'react';
import Example1 from '../components/Example1';
import Search from '../components/Search';


function Homepage() {
  return (
   <div className='homepage'>
    <Search/>
     <Example1/>
     <Example1/>
   </div>
  )
}

export default Homepage