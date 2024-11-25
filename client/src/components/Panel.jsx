import React from "react";
import { NavLink } from "react-router-dom";

const Panel = () => {
  return (
    <div>
      <div className="text-center dashboard-menu">
        <div className="list-group">
          <h4>Dashboard</h4>
          <NavLink
            to="/dashboard/home"
            className="list-group-item list-group-item-action"
          >
            Home
          </NavLink>
          <NavLink
            to="/dashboard/updatetoken"
            className="list-group-item list-group-item-action"
          >
            Bot Setting
          </NavLink>
          <NavLink
            to="/dashboard/usermanagement"
            className="list-group-item list-group-item-action"
          >
            Bot Users
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Panel;
