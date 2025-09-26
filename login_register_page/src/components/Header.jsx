import React from "react";
import './Header.css';
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
      <Link className="navbar-brand" to="/">DEV@Deakin</Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarContent">
          <form className="d-flex me-auto" role="search">
            <div className="searchBar">
              {/* <span className="material-symbols-outlined searchbar">
                search
              </span> */}
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            </div>
          </form>

          <ul className="navbar-nav">
            <li className="nav-item me-3">
              <Link className="nav-link" to="/post">Post</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">Login</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;