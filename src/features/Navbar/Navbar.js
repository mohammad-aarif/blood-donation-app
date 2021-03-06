import React from "react";
// import { useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import "./Navbar.css";

const Navbar = () => {
  const { user, logOut, toggle, toggle2, setToggle, setToggle2, handleClick } =
    useAuth();
  const handleLogOut = () => {
    logOut();
    setToggle(!toggle);
  };
  return (
    <div className="navbar mx-8 sm:mx-16 py-3">
      <div className="navbar-nav flex justify-between items-center">
        <Link to={`/`} onClick={handleClick}>
          <div className="logo">
            <h1 className="font-bold text-2xl">
              B<span className="text-red-500 ml-3">D</span>
            </h1>
            <p className="bd">
              Blood <span className="text-red-500">Donation</span>
            </p>
          </div>
        </Link>
        <div className="hidden sm:flex">
          <ul className="flex justify-end" onClick={handleClick}>
            <li>
              <Link to={"/home"}>Home</Link>
            </li>
            <li>
              <Link to={"/donar"}>Find Donar</Link>
            </li>
            <li>
              <Link to={"/about"}>About</Link>
            </li>
            <li>
              <Link to={"/contact"}>Contact Us</Link>
            </li>
          </ul>
          {user.displayName ? (
            <img
              onClick={() => setToggle(!toggle)}
              className="nav-profile-img"
              src={user.photoURL || "https://i.postimg.cc/FHjjxnrd/images.png"}
              alt=""
            />
          ) : (
            <Link
              to="/login"
              className=" px-4 py-2 my-2 mr-2 rounded-md border-2 border-red-400 hover:bg-red-400 hover:text-white transition-all duration-200"
            >
              <p>
                <i className="far fa-user mr-2"></i>LogIn
              </p>
            </Link>
          )}
        </div>
        <div
          onClick={() => setToggle2(!toggle2)}
          className="menu-bar sm:hidden"
        >
          <button className="m-0">
            <i className="fas fa-bars text-2xl"></i>
          </button>
        </div>
      </div>
      <div className={toggle2 ? "sm-drop-down actives" : "sm-drop-down"}>
        <ul>
          <li>
            <Link to={"/home"}>Home</Link>
          </li>
          <li>
            <Link to={"/donar"}>Donar</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact Us</Link>
          </li>
          {user.displayName ? (
            <>
              <hr />
              <img
                className="nav-profile-img mt-2  mx-auto "
                src={user.photoURL || "https://i.postimg.cc/FHjjxnrd/images.png"}
                alt=""
              />
              <Link to={"/dashboard/profile"}>Dashboard</Link>
              <button
                onClick={handleLogOut}
                className=" px-4 py-2 my-2 mx-auto rounded-md border-2 border-red-400 hover:bg-red-400 hover:text-white transition-all duration-200"
              >
                <i className="far fa-user mr-2"></i>
                LogOut
              </button></>
          ) : (
            <Link
              to="/login"
              className=" px-4 py-2 my-2 mr-2 rounded-md border-2 border-red-400 hover:bg-red-400 hover:text-white transition-all duration-200"
            >
              <p>
                <i className="far fa-user mr-2"></i>LogIn
              </p>
            </Link>
          )}
        </ul>
      </div>

      <div className={toggle ? "lg-drop-down actives" : "lg-drop-down"}>
        <ul>
          <li>
            <Link to={"/dashboard/profile"}>Dashboard</Link>
          </li>
          <Link to="/">
            <button
              onClick={handleLogOut}
              className=" px-4 py-2 my-2 mx-auto rounded-md border-2 border-red-400 hover:bg-red-400 hover:text-white transition-all duration-200"
            >
              <i className="far fa-user mr-2"></i>
              LogOut
            </button>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
