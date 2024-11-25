import React from "react";
import { Link, NavLink } from "react-router-dom";

function Nav() {
  function activeStyle() {
    return `text-xl font-bold text-orange-400`;
  }

  return (
    <nav className="bg-gradient-to-r from-indigo-900 via-indigo-800 to-indigo-900 h-[10vh]">
      <ul className="w-5/6 m-auto py-4 flex justify-start items-center gap-10">
        <li>
          <NavLink
            to={"/home"}
            className={({ isActive}) => isActive ? activeStyle() : "text-xl text-white font-semibold hover:text-orange-400"}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/about-me"}
            className={({ isActive}) => isActive ? activeStyle() : "text-xl text-white font-semibold hover:text-orange-400"}
          >
            About Me
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/projects"}
            className={({ isActive}) => isActive ? activeStyle() : "text-xl text-white font-semibold hover:text-orange-400"}
          >
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/home"}
            className={({ isActive}) => isActive ? activeStyle() : "text-xl text-white font-semibold hover:text-orange-400"}
          >
            Resume
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
