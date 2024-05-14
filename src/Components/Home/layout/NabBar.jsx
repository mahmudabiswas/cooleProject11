import React from "react";
import { NavLink } from "react-router-dom";

const NabBar = () => {
  return (
    <div className="w-[1000px] mx-auto">
      <div className="flex-none lg:hidden">
        <label
          htmlFor="my-drawer-3"
          aria-label="open sidebar"
          className="btn btn-square btn-ghost"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-6 h-6 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </label>
      </div>
      <div className="flex-1 px-2 mx-2">Navbar Title</div>
      <div className="flex-none hidden lg:block">
        <div className=" flex gap-5">
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
      </div>
    </div>
  );
};

export default NabBar;
