import Card from "../components/UI/Card";
import { Table } from "react-table-ny";
import { useAppSelector } from "../store/hooks";

/**
 * Employees function
 * @returns Employees page component
 */
const Employees = () => {
  const Employees = useAppSelector((state) => state.employees.employees);
  return (
    <main>
      <Card className="max-w-[1200px] sm:my-8">
        <h1 className="pb-4 text-center text-4xl font-bold">HRnet</h1>
        <Table data={Employees} skipFirstKey title="Current Employees" />
      </Card>
    </main>
  );
};

export default Employees;
