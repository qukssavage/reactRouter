import { Routes, Route } from "react-router";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import Users from "./pages/Users";
import UsersPage from "./pages/UsersPage";
import NotFound from "./pages/NotFound";
const App = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/:id" element={<UsersPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
