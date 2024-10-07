import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="m-4">
      <div className="navbar bg-base-100 p-5">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/" className="default">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/appliedjobs" className="default">
                  Applied Jobs
                </Link>
              </li>
              <li>
                <Link to="/login" className="default">
                  Login
                </Link>
              </li>
              <li>
                <Link to="/register" className="default">
                  Register
                </Link>
              </li>
              <li>
                <Link to="/profile" className="default">
                  Profile
                </Link>
              </li>
            </ul>
          </div>
          <Link to="/" className="normal-case text-5xl custom-text font-bold">
            Job Hunt
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 tracking-wider font-medium">
            <li>
              <Link
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-blue-600" : "default"
                }
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/appliedjobs"
                className={({ isActive }) =>
                  isActive ? "text-blue-600" : "default"
                }
              >
                Applied Jobs
              </Link>
            </li>
            <li>
              <Link
                to="/login"
                className={({ isActive }) =>
                  isActive ? "text-blue-600" : "default"
                }
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                to="/register"
                className={({ isActive }) =>
                  isActive ? "text-blue-600" : "default"
                }
              >
                Register
              </Link>
            </li>
            <li>
              <Link
                to="/profile"
                className={({ isActive }) =>
                  isActive ? "text-blue-600" : "default"
                }
              >
                Profile
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
