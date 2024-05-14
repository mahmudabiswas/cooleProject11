import React from "react";
import { NavLink } from "react-router-dom";

const SideBar = () => {
  return (
    <div className=" flex gap-5 menu p-4 w-80 min-h-full bg-base-200">
      {/* Navbar menu content here */}
      <NavLink to="/about" className=" active btn btn-sm btn-primary">
        {" "}
        About{" "}
      </NavLink>
      <NavLink to="/contact" className=" active btn btn-sm btn-primary">
        {" "}
        Contact{" "}
      </NavLink>
      <NavLink to="/login" className=" active btn btn-sm btn-primary">
        {" "}
        LogIn{" "}
      </NavLink>
      <NavLink to="/signUp" className=" active btn btn-sm btn-primary">
        {" "}
        Sign Up{" "}
      </NavLink>
    </div>
  );
};

export default SideBar;
