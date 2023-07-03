import React from 'react';

import Menu from './components/Menu/Menu';
import Navbar from './components/Navbar/Navbar';
import WorkoutPage from './components/WorkoutPage/WorkoutPage';

const Wrapper = () => {
  return (
    <div className='h-screen bg-slate-300'>
      <Navbar />
      <Menu />
      <div className='flex justify-center items-center'>
  
        <WorkoutPage />
      </div>
    </div>
  );
};

export default Wrapper;
