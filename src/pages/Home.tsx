import { getFromLocalStorage } from "../utils/helperFunctions";

/**
 * Home function
 * @returns Home page component
 */
const Home = () => {
  const test = getFromLocalStorage("employess");
  console.log(test);

  return (
    <>
      <div>Home</div>
      <p>{test}</p>
    </>
  );
};

export default Home;
