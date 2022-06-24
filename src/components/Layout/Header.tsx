import { Link } from "react-router-dom";
import logo from "../../assets/logo-wh.png";

/**
 * Header function
 * @returns Header component
 */
const Header = () => {
  return (
    <header className="bg-white p-4 font-semibold">
      <nav className="flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center text-secondary underline transition-all hover:text-primary"
        >
          <img className="h-8 pr-4" src={logo} alt="Wealth Health Logo" />
          Home
        </Link>
        <Link
          to="/employees"
          className=" text-secondary underline transition-all hover:text-primary"
        >
          Employees
        </Link>
      </nav>
    </header>
  );
};

export default Header;
