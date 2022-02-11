import React from "react";
import "./navigation.scss";
import { Link, useLocation } from "react-router-dom";

const Navigation: React.FC = () => {
  const { pathname } = useLocation();
  const links = [
    {
      id: 1,
      selector: "home",
      name: "Home",
      pathname: "/",
    },
    {
      id: 2,
      selector: "works",
      name: "Works",
      pathname: "/works",
    },
    {
      id: 3,
      selector: "about",
      name: "About Me",
      pathname: "/about",
    },
    {
      id: 4,
      selector: "contact",
      name: "Contact",
      pathname: "/contact",
    },
  ];

  return (
    <div className="nav">
      {links.map((link) => (
        <Link
          className={
            pathname === link.pathname ? `nav__links nav__active` : "nav__links"
          }
          key={link.selector}
          id={link.selector}
          to={link.pathname}
        >
          {link.name}
        </Link>
      ))}
    </div>
  );
};

export default Navigation;
