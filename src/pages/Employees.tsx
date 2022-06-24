import Card from "../components/UI/Card";

/**
 * Employees function
 * @returns Employees page component
 */
const Employees = () => {
  return (
    <main>
      <Card className="max-w-[640px] sm:my-8">
        <h1 className="pb-4 text-center text-4xl font-bold">
          Current Employees
        </h1>
        <p className="text-center">Table Placeholder</p>
      </Card>
    </main>
  );
};

export default Employees;
