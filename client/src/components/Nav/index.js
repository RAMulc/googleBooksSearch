import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Nav() {
  const [activePage, setActivePage] = useState("/ReactPortfolio");

  useEffect(() => {
    setActivePage(window.location.pathname);
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
        Google Books
      </a>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/searchbooks"
              onClick={() => setActivePage("/searchbooks")}
              className={
                activePage === "/" || activePage === "/searchbooks"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Search
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/savedbooks"
              onClick={() => setActivePage("/savedbooks")}
              className={activePage === "/savedbooks"
                ? "nav-link active"
                : "nav-link"}
            >
              Saved
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
