import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../asstes/Logo/logo.png'
import { AuthContext } from '../Context/AuthProvider/AuthProvider';
import { FaUserAlt } from "react-icons/fa";

const Nav = () => {

   const { user, logOut } = useContext(AuthContext);
   const handleLogOut = () => {
     logOut().then(() => {
       console.log("User Logged Out");
     });
   };

    return (
      <div className="container mx-auto navbar bg-base-100">
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
                <Link
                  className="btn btn-outline btn-primary btn-md my-2"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="btn btn-outline btn-primary btn-md my-2"
                  to="/services"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  className="btn btn-outline btn-primary btn-md my-2"
                  to="/blogs"
                >
                  Blogs
                </Link>
              </li>
            </ul>
          </div>
          <Link to="/">
            <img className="md:h-32 p-2 ml-4" src={logo} alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li>
              <Link className="btn btn-outline btn-primary btn-md mx-2" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link
                className="btn btn-outline btn-primary btn-md mx-2"
                to="/services"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                className="btn btn-outline btn-primary btn-md mx-2"
                to="/blogs"
              >
                Blogs
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          {user?.uid ? (
            <h2
              onClick={handleLogOut}
              className="btn btn-outline btn-warning btn-md mx-2 cursor-pointer"
            >
              Sign Out
            </h2>
          ) : (
            <>
              <Link
                to="/signin"
                className="btn btn-primary btn-md mx-2"
              >
                Sign in
              </Link>
              <Link
                to="/signup"
                className="btn btn-outline btn-primary btn-md mx-2"
              >
                Sign up
              </Link>
            </>
          )}

          {user?.uid && (
            <div>
              {user?.uid && (
                <div>
                  {user?.photoURL ? (
                    <img
                      className="w-12 h-12 text-white rounded-md"
                      alt="user icon"
                      title={user?.displayName}
                      src={user.photoURL}
                    />
                  ) : (
                    <FaUserAlt
                      title={user?.displayName}
                      className="w-10 h-10 text-white rounded-md"
                    />
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    );
};

export default Nav;