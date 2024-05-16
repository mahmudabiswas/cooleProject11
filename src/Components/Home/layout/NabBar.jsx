import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const NabBar = () => {
  const { logOut, user } = useContext(AuthContext);
  const handleSignOut = () => {
    logOut();
  };

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
          <NavLink to="/services" className=" active btn btn-sm btn-primary">
            Services
          </NavLink>
          <NavLink to="/signUp" className=" active btn btn-sm btn-primary">
            Sign Up{" "}
          </NavLink>
          {user?.email ? (
            <>
              <div className="dropdown">
                <div tabIndex={0}>
                  <div className="avatar">
                    <div className="w-8 ">
                      <img
                        className="rounded"
                        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                      />
                    </div>
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <p>{user?.displayName}</p>
                  <li>
                    <p>{user?.email}</p>
                  </li>
                  <button
                    onClick={handleSignOut}
                    className=" active btn btn-sm btn-primary"
                  >
                    Log Out
                  </button>
                </ul>
              </div>
            </>
          ) : (
            <NavLink to="/login" className=" active btn btn-sm btn-primary">
              LogIn{" "}
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default NabBar;
