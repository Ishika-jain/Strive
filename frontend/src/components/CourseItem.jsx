import React from 'react';
import Youtube from '../assets/utube.png'

const CourseItem = ({ key,item, isChecked, onCheck ,link}) => {   
  return (
    <div className="shadow-md p-6 flex justify-between relative  items-center ">
      <div className="flex">
        <span>{key} </span>
      <span className="text-xl font-medium">{item}</span>
      </div>
      <a href={link} target="#"><img alt='' className='h-8 right-64 absolute' src={Youtube}></img></a>
      <input type="checkbox" className="form-checkbox w-6 h-5" checked={isChecked} onChange={onCheck} />
      
    
    </div>
  );
}

export default CourseItem;
