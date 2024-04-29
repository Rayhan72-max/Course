import React from 'react';
import List from '../List/List';

const CourseList = ({courses}) => {
    return (
        <div>
        <h1 className='text-xl'> Course Name {courses.length}</h1>
        {
            courses.map(course=> <List key={course.id} course={course}></List>)
        }

        </div>
    );
};

export default CourseList;