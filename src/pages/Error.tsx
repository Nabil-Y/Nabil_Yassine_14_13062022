import { Link } from "react-router-dom";
import Card from "../components/UI/Card";

/**
 * Error function
 * @returns Error page component
 */
const Error = () => {
  return (
    <main>
      <Card className="max-w-[640px] text-center sm:my-8">
        <h1 className="pb-4 text-6xl font-bold">ERROR</h1>
        <p className="pb-4 text-xl">No content found here</p>
        <Link
          to="/"
          className="text-xl font-bold text-secondary underline transition-all hover:text-primary"
        >
          Home
        </Link>
      </Card>
    </main>
  );
};

export default Error;
