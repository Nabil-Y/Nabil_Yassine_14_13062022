import { Routes, Route } from "react-router-dom";
import Employees from "./pages/Employees";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Footer from "./components/Layout/Footer";
import Header from "./components/Layout/Header";

/**
 * App function
 * @returns App component
 */
const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/employees" element={<Employees />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
