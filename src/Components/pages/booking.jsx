import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import UseAxious from "../hooks/useAxious";
import { useParams } from "react-router-dom";

const Booking = () => {
  const [email, setEmail] = useState("nabila@gmail.com");
  const [password, setPassword] = useState("asdfasdf");
  const [date, setDate] = useState(12 / 12 / 12);
  const [address, setAddress] = useState("jhnaidha");
  const axios = UseAxious();
  const { id } = useParams();
  // get axios
  const { data: services } = useQuery({
    queryKey: ["booking"],
    queryFn: async () => {
      const res = await axios.get(`/services/${id}`);
      return res;
    },
  });
  console.log(services?.data);

  // handleSubmit handle with form controler
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email, password, date, address);
  };
  return (
    <div>
      <div className="hero min-h-screen ">
        <div className="hero-content  ">
          <div className="card  w-full max-w-lg shadow-2xl  ">
            <form onSubmit={handleSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  onBlur={(e) => setEmail(e.target.value)}
                  defaultValue={email}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  onBlur={(e) => setPassword(e.target.value)}
                  defaultValue={password}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Date</span>
                </label>
                <input
                  type="date"
                  placeholder="date"
                  className="input input-bordered"
                  onBlur={(e) => setDate(e.target.value)}
                  defaultValue={date}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">addr</span>
                </label>
                <input
                  type="address"
                  placeholder="date"
                  className="input input-bordered"
                  onBlur={(e) => setAddress(e.target.value)}
                  defaultValue={address}
                />
              </div>

              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
