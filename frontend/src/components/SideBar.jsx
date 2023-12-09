import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
        <div className="blocTitle">
<h3>Site</h3>
        </div>
      <ul>
        <li>
          <NavLink to="/connexion" activeClassName="active">    
Connexion
          </NavLink>
          <NavLink to="/about_us" activeClassName="active">
            About Us
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;