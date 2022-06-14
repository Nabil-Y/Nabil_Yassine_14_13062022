import { Routes, Route } from "react-router-dom";
import Employees from "./pages/Employees";
import Error from "./pages/Error";
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <div className="">
        <h1 className="text-2xl text-primary">Hello World</h1>
      </div>
      <Routes>
        <Route path="/employees" element={<Employees />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
};

export default App;
