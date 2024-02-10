import React from "react";
import { Link } from "react-router-dom";

const Products = ({ product }) => {
    const {_id, img, name, category} = product;
  // console.log(product);
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={img} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{category}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">
            <Link to={`/products/${_id}`}>Details</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;
