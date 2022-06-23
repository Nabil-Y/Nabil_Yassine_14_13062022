import { Link } from "react-router-dom";
import AddEmployeeForm from "../components/Forms/AddEmployeeForm";
import Card from "../components/UI/Card";

/**
 * Home function
 * @returns Home page component
 */
const Home = () => {
  return (
    <main>
      <Card>
        <h1 className="pb-4 text-center text-4xl font-bold">HRnet</h1>
        <Link
          to="/employees"
          className="block pb-4 text-center font-bold text-secondary underline transition-all hover:text-primary"
        >
          View Current Employees
        </Link>
        <AddEmployeeForm />
      </Card>
    </main>
  );
};

export default Home;
