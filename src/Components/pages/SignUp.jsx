import React, { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const SignUp = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const { createUser } = useContext(AuthContext);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createUser(email, password).then((res) => {
        console.log(res.user);
      });
      console.log("created");
    } catch (error) {
      console.log(error);
    }
    console.log(email, password);
  };
  return (
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
  );
};

export default SignUp;
