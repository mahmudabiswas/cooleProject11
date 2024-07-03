import React from "react";
import { Link } from "react-router-dom";

const Service = ({ service }) => {
  const { _id, name, price, category, description } = service;
  // console.log(service);
  return (
    <div>
      <div className="card w-96 bg-base-100 p-12 bg-red-300 text-black shadow-xl">
        <h1 className="text-2xl "> {name} </h1>
        <div className="card-body">
          <h2 className="card-title">{category}</h2>
          <p>{description}</p>
          <p className="text-2xl text-red font-extrabold">{price}</p>
          <div className="card-actions ">
            <button className="btn btn-primary">
              <Link to={`/booking/${_id}`}>Buy Now</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
