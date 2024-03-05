import { Link, NavLink } from "react-router-dom";
import logo from "../assets/Logo-min.png";

function Header() {
  return (
    <header>
      <nav className="nav-header">
        <Link to="/">
          <img className="logo" src={logo} alt="Logo prime videos" />
        </Link>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
        <NavLink to="/series">Series</NavLink>        
        <NavLink to="/profile">Profile</NavLink>
      </nav>
    </header>
  );
}

export default Header;
