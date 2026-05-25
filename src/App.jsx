import { Routes, Route } from "react-router";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import Users from "./pages/Users";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </>
  );
};

export default App;
