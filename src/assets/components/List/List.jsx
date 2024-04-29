import React from 'react';

const List = ({course}) => {
    const {course_name}= course;
    return (
        <div>
            <h1>course: {course_name}</h1>
        </div>
    );
};

export default List;