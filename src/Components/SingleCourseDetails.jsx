import { Link, useLoaderData } from "react-router-dom";

const SingleCourseDetails = () => {
  const courseData = useLoaderData();
  const { _id, title, desc, fee, img } = courseData;
  console.log(courseData);
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl">
      <figure>
        <img
          src={img}
          alt="Album"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{desc}</p>
        <div className="card-actions justify-between">
          <p className="font-bold text-xl">Fee: ${fee}</p>
          <button className="btn btn-primary"><Link to={`/checkout/${_id}`}>Enroll Now</Link></button>
        </div>
      </div>
    </div>
  );
};

export default SingleCourseDetails;
