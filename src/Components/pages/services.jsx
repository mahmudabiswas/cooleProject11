import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import UseAxious from "../hooks/useAxious";
import Service from "./Service";

const categories = [
  "All-Purpose Cleaner",
  "Disinfectants",
  "Glass Cleaners",
  "Floor Cleaners",
  "Bathroom Cleaners",
  "Carpet Cleaners",
];

const Services = () => {
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [page, setPage] = useState(1);
  const limit = 3;
  const axios = UseAxious();
  const getServices = async () => {
    const res = await axios.get(
      `/services?sortField=price&sortOrder=${price}&category=${category}&page=${page}&limit=${limit}`
    );
    return res;
  };
  const {
    data: services,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["service", price, category, page],
    queryFn: getServices,
  });
  // console.log(services?.data?.result);

  if (isLoading) {
    return <p>loading.....</p>;
  }
  const handlePrevPage = () => {
    let count = 0;
    if (page > 1) {
      setPage(page - count);
      console.log("prev");
    }
  };
  const handleNextPage = () => {
    let count = 0;
    if (page < total) {
      setPage(page + count);
    }
    console.log("click");
  };
  const total = Math.ceil(services?.data?.total / limit);
  console.log(total);

  if (isError) {
    return console.log({ massage: "the text is not defile" });
  }

  // console.log(price);
  return (
    <div>
      {/* dropdown */}

      <div className="flex justify-end mr-20 gap-4 my-5">
        <div>
          <div className="dropdown">
            <label>
              <span className="label-text">category</span>
            </label>
            <select onChange={(e) => setCategory(e.target.value)}>
              <option value="">choose one</option>
              {categories.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
        </div>
        {/* 2 */}
        <div>
          <div className="dropdown">
            <label>
              <span className="label-text">price</span>
            </label>
            <select onChange={(e) => setPrice(e.target.value)}>
              <option value="">choose one</option>
              <option value="asc"> from low to hih</option>
              <option value="desc">from high to low</option>
            </select>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {services?.data?.result.map((service) => (
          <Service key={service._id} service={service} />
        ))}
      </div>

      {/* pagination */}

      <div className="join flex justify-center">
        <button onClick={handlePrevPage} className="join-item btn">
          +
        </button>

        {[...Array(total).fill(0)].map((item, index) => (
          <button
            onClick={() => setPage(index)}
            className={
              index === page
                ? "join-item btn btn-primary"
                : "join-item btn btn-ghost"
            }
          >
            {index}
          </button>
        ))}

        <button onClick={handleNextPage} className="join-item btn">
          -
        </button>
      </div>
    </div>
  );
};

export default Services;

{
  /* <Service key={service._id} service={service} /> */
}
