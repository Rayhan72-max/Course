import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Courses from './assets/components/courses/Courses'
import Course from './assets/components/Course/Course'
import CourseList from './assets/components/CourseList/CourseList'
import './App.css'

function App() {

  const [courses, setCourse] = useState([]);

  const handleCourse = (course) => {
    const newCourse = [...courses,course];
    setCourse(newCourse);
  }
  console.log(courses)
  return (
    <div>
      <h1 className='text-3xl justify-center'>Course Registration</h1>

      <div className='grid grid-cols-3 gap-4'>
        <div className='col-span-2'><Courses handleCourse={handleCourse}></Courses></div>
        <div><CourseList courses={courses}></CourseList></div>

      </div>
    </div>
  )
}

export default App
