import AddEmployeeForm from "../components/Forms/AddEmployeeForm";
import Card from "../components/UI/Card";

/**
 * Home function
 * @returns Home page component
 */
const Home = () => {
  return (
    <main>
      <Card className="max-w-[640px] sm:my-8">
        <h1 className="pb-4 text-center text-4xl font-bold">HRnet</h1>
        <AddEmployeeForm />
      </Card>
    </main>
  );
};

export default Home;
