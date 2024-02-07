import { Link } from "react-router-dom";
import './index.css'
const Navbar = () => {
  return (
    <header >
      <ul className="link_container">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/favourites">
          <li>Favourites</li>
        </Link>
      </ul>
    </header>
  );
};

export default Navbar;
