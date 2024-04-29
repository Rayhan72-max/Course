import React from 'react';
import { FaDollarSign } from "react-icons/fa6";
import { IoBookOutline } from "react-icons/io5";
const Course = ({course,handleCourse}) => {
    const {details,credit,image,course_name,price}= course;
    return (
        <div> 
            <div className='flex flex-col text-left bg-white'>
                <img src={image} alt="" />
                <h1>{course_name}</h1>
                <p>{details}</p>

                <div className='flex flex-row justify-between'>
                <FaDollarSign></FaDollarSign> <h1>Price:{price} </h1> 
                <IoBookOutline/><h1>credit: {credit}</h1>             
                </div>  
                <button onClick={()=>handleCourse(course)}  className='bg-indigo-500 rounded'>Select</button>
            </div>
            
        </div>
    );
};

export default Course;