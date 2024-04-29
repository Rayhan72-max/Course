import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';
import CourseList from '../CourseList/CourseList';



const Courses = ({handleCourse}) => {
    const [courses, setCourse] = useState([]);

    useEffect(
        () => {
            fetch('course.json')
            .then(res => res.json())
            .then(data => setCourse(data))
        }, []
    )

   

    return (
            <div className='grid grid-cols-3 gap-4 col-span-2'>
                {courses.map(course => <Course key={course.id} course={course} handleCourse={handleCourse}></Course>)}
            </div>
    );
};
 


export default Courses;