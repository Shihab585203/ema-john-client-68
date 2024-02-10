import React from "react";
import { Link } from "react-router-dom";

const CoursesDetails = ({ course }) => {
  const { _id, fee, img, title, desc } = course;
  console.log(course);
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={img} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{desc.slice(0, 80)}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary"><Link to={`/courses/${_id}`}>Details</Link></button>
        </div>
      </div>
    </div>
  );
};

export default CoursesDetails;
