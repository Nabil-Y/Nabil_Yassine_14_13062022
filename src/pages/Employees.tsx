import { Link } from "react-router-dom";
import Card from "../components/UI/Card";

/**
 * Employees function
 * @returns Employees page component
 */
const Employees = () => {
  return (
    <Card>
      <h1 className="pb-4 text-center text-4xl font-bold">Current Employees</h1>
      <p className="text-center">Table Placeholder</p>
      <Link
        to="/"
        className="block py-4 text-center font-bold text-secondary underline transition-all hover:text-primary"
      >
        Home
      </Link>
    </Card>
  );
};

export default Employees;
