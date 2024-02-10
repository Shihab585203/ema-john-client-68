import { useEffect, useState } from "react";
import Products from "./Products";
// import { useLoaderData } from "react-router-dom";

const ProductsCard = () => {
  // const { products, count } = useLoaderData();
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(10);

  useEffect(()=>{
    fetch(`http://localhost:5000/products?page=${page}&size=${size}`)
    .then(res => res.json())
    .then(data => {
        setProducts(data.products);
        setCount(data.count);
    })
  },[page, size])

  const pages = Math.ceil(count / size);

  return (
    <div className="">
      <div className="grid grid-cols-3 gap-16 w-11/12 mx-auto my-10">
        {products.map((product) => (
          <Products key={product._id} product={product} />
        ))}
      </div>
      <div className="flex flex-col	 justify-center items-center my-5">
        <p className="mb-6 text-xl font-semibold">
          Currently Selected Page: {page} and Size: {size}
        </p>
        <div className="join ">
          {[...Array(pages).keys()].map((number) => (
            <input
              className="join-item btn btn-square"
              type="radio"
              key={number}
              name="options"
              aria-label={number + 1}
              onClick={() => setPage(number)}
            />
          ))}
          <select defaultValue="10" onChange={ event => setSize(event.target.value)} className="select select-info w-full max-w-xs">
            <option disabled >
              Select Size
            </option>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
