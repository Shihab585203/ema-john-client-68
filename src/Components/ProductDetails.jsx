import React from "react";
import { useLoaderData } from "react-router-dom";

const ProductDetails = () => {
  const { name, img, category, price } = useLoaderData();
  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure>
        <img
          src={img}
          alt="Movie"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{category}</p>
        <div className="card-actions justify-between">
            <p className="font-bold text-xl">Price: {price}</p>
          <button className="btn btn-primary">Watch</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
