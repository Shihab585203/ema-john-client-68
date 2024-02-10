import React, { useEffect, useState } from "react";
// import { useLoaderData } from "react-router-dom";
import CoursesDetails from "./CoursesDetails";

const Courses = () => {

    const [courses, setCourses] = useState([]);
    useEffect(() =>{
        fetch('http://localhost:5000/courses')
        .then(res => res.json())
        .then(data => setCourses(data))
    },[]);

    return (
    <div className="grid grid-cols-3 gap-16 w-11/12 mx-auto my-10">
      {courses.map((course) => (
        <CoursesDetails key={course._id} course={course}></CoursesDetails>
        ))}
    </div>
  );
};

export default Courses;
