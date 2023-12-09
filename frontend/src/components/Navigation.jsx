import { NavLink } from "react-router-dom";
import Logo from '../assets/Logo.gif'

const Navigation = () => {
    return (
       <div className="Navigation">
        <div className="Logo">
        <img src={Logo} alt="logo" />
        </div>
        <ul>
          <NavLink to="/Home" className={( nav => (nav.isActive ? "nav-active" : ""))}>
            <li>Home</li>
          </NavLink>
          <NavLink to="/Movies" className={( nav => (nav.isActive ? "nav-active" : ""))}>
            <li>Movies</li>
          </NavLink>
        </ul>
       </div>
    );
};

export default Navigation;