import Lottie from "lottie-react";
import React from "react";
import readingbook from "../assets/boy-reading-a-book.json";

const Home = () => {
  return (
    <div className="bg-slate-800 text-white">
      <div className="banner grid w-11/12 mx-auto grid-cols-2 gap-4 py-8 items-center">
        <div className="">
          <h2 className="text-6xl lobster">A Learning Management System</h2>
          <p className="pt-6 pacifico">
            This is a top rated E-learning management website. that we producing
            since last decade with high quality courses.
          </p>
        </div>
        <div className="">
          <Lottie animationData={readingbook} loop={true} />
        </div>
      </div>
    </div>
  );
};

export default Home;
