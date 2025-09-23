import React from "react";
import SidebarToggle from "./icons/SidebarToggle";

function Sidebar({ sidebarOpen, setSidebarOpen }) {
  if (!sidebarOpen) {
    return (
      <div className="fixed top-0 left-0">
        <div
          className="cursor-pointer hover:bg-slate-200"
          onClick={() => {
            setSidebarOpen(!sidebarOpen);
          }}
        >
          <SidebarToggle />
        </div>
      </div>
    );
  }

  return (
    <div className="w-96 h-screen bg-red-100 absolute md:relative">
      <div
        className="cursor-pointer hover:bg-slate-200"
        onClick={() => {
          setSidebarOpen(!sidebarOpen);
        }}
      >
        <SidebarToggle />
      </div>
    </div>
  );
}

export default Sidebar;
