import React from "react";

import "./main.css";
import NabBar from "../layout/NabBar";
import SideBar from "../layout/SideBar";
const MainLaout = ({ children }) => {
  return (
    <div>
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className="w-full navbar bg-base-300 shadow-xl">
            {/* navbar */}
            <NabBar />
          </div>
          {/* Page content here */}
          {children}
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>

          {/* Sidebar content here */}
          <SideBar />
        </div>
      </div>
    </div>
  );
};

export default MainLaout;
