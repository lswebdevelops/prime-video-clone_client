import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo_prime_video_foto_reproducao.jpg";

function Header() {
  return (
    <header>
      <Link to="/" >
        <img className="logo" src={logo} alt="Logo prime videos" />
      </Link>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
        <NavLink to="/series">Series</NavLink>
        <NavLink to="/about">About</NavLink>
      </nav>
    </header>
  );
}

export default Header;
