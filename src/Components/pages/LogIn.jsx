import React, { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const LogIn = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const { logIn, user } = useContext(AuthContext);

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const logId = toast.loading("loading ,,,");
    try {
      await logIn(email, password);
      toast.success("log In success fully ...", { id: logId });
      navigate("/");
    } catch (error) {
      toast.error(error.massage, { id: logId });
    }
    // console.log(email, password);
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

export default LogIn;
