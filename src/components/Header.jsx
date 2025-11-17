import React from "react";
import { IoNotificationsOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

function Header() {
  return (
    <section className=" border-b border-gray-300/40 ">
      <div className="flex items-center h-15 justify-between max-w-7xl px-8 mx-auto">
        <div className="flex gap-8 items-center ">
          <Link to="/" className="font-bold text-2xl">
            NewToday
          </Link>
          <ul className="hidden sm:flex space-x-7">
            <li>
              <a href="#">Top Stories </a>
            </li>
            <li>
              <a href="#">World </a>
            </li>
            <li>
              <a href="#">Politics </a>
            </li>
            <li>
              <a href="#">Business </a>
            </li>
            <li>
              <a href="#">Tech </a>
            </li>
            <li>
              <a href="#">Culture </a>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-3">
          <form>
            <input
              type="search"
              placeholder="Search"
              className="border-0 outline-0 bg-gray-200/50 rounded-md p-2"
            />
          </form>
          <IoNotificationsOutline className="text-2xl" />
        </div>
      </div>
    </section>
  );
}

export default Header;
