import { Link } from "react-router";

const Navbar = () => {
  const links = [
    {
      path: "/",
      name: "Home",
    },
    {
      path: "/about",
      name: "About",
    },
    {
      path: "/users",
      name: "Users",
    },
  ];

  return (
    <header className="header">
      <div className="container nav">
        <Link to="/" className="logo">
          LOGO
        </Link>
        <ul className="list">
          {links.map((item) => (
            <li className="item" key={item.name}>
              <Link to={item.path} className="link">{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
