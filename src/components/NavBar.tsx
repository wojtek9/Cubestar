import cubestarlogo from "../assets/cubestarlogo3othercolor.png";
import { Link } from "react-router-dom";
import { ROUTES } from "../routes";
import "../css/NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to={ROUTES.HOME}>
          <img src={cubestarlogo} alt="Cubestar" className="logo-image" />
        </Link>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to={ROUTES.SERVICES}>Services</Link>
        </li>
        <li>
          <Link to={ROUTES.CONTACT}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
