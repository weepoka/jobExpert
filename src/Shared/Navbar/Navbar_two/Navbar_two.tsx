import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../../assets/brandLogo/logo.png";

import { Icon } from "@iconify/react";
import "./Navbar.css";

const Navbar_two = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const [examDropdownOpen, setExamDropdownOpen] = useState(false);

  //for pages
  const toggleExamDropdown = () => setExamDropdownOpen(!examDropdownOpen);
  const examDropdownClose = () => setExamDropdownOpen(false);

  const menuItems = (
    <>
      {/*................ home............*/}
      <li
        className={`font-bold py-7 px-4 ${
          location.pathname === "/hometwo" ? "border-b-2 border-[#EE8419]" : ""
        }`}
      >
        <Link to="/hometwo" className=" hover:text-primary">
          হোম
        </Link>
      </li>

      <li
        className={`font-bold  py-7  ${
          location.pathname === "/success" ? "border-b-2 border-[#EE8419] " : ""
        }`}
      >
        <Link to="/success" className="hover:text-primary">
          সাকসেস স্টোরি
        </Link>
      </li>

      {/*................ Exam dropdown menu start   .............*/}
      <li
        className="font-bold hover:text-primary"
        onMouseEnter={toggleExamDropdown}
        onMouseLeave={examDropdownClose}
      >
        <div
          className="flex group cursor-pointer items-center py-4"
          onClick={toggleExamDropdown}
        >
          <span onClick={() => setExamDropdownOpen(false)}>এক্সাম</span>
          <Icon
            icon="iconamoon:arrow-down-2-bold"
            className="group-hover:translate-y-1 duration-300"
            width="25"
          />
        </div>

        {examDropdownOpen && (
          <ul className="dropdown-menu  py-4 absolute   block z-50 duration-300 ease-in-out divide-y-2">
            {/* Landing pages  */}
            <li onClick={() => setIsMenuOpen(false)}>
              <Link
                title="Landing Page"
                to="/landing"
                className="block pl-4 pr-24 pb-3 text-lg  hover:translate-x-1 duration-300 "
                onClick={() => setExamDropdownOpen(false)}
              ></Link>
            </li>
          </ul>
        )}
      </li>

      {/* my course dropdown start */}
      <li
        className="font-bold hover:text-primary"
        onMouseEnter={toggleExamDropdown}
        onMouseLeave={examDropdownClose}
      >
        <div
          className="flex group cursor-pointer items-center py-4"
          onClick={toggleExamDropdown}
        >
          <span onClick={() => setExamDropdownOpen(false)}>আমার কোর্স</span>
          <Icon
            icon="iconamoon:arrow-down-2-bold"
            className="group-hover:translate-y-1 duration-300"
            width="25"
          />
        </div>

        {examDropdownOpen && (
          <ul className="dropdown-menu  py-4 absolute   block z-50 duration-300 ease-in-out divide-y-2">
            {/* Landing pages  */}
            <li onClick={() => setIsMenuOpen(false)}>
              <Link
                title="Landing Page"
                to="/landing"
                className="block pl-4 pr-24 pb-3 text-lg  hover:translate-x-1 duration-300 "
                onClick={() => setExamDropdownOpen(false)}
              ></Link>
            </li>
          </ul>
        )}
      </li>
    </>
  );

  return (
    <div className="sticky w-full shadow-md  top-0 z-30 px-16 bg-[#EAE9E9]">
      <div className="mx-auto duration-300 ">
        <div className="relative flex items-center justify-between">
          <Link
            to="/"
            aria-label="Company"
            title="Company"
            className="inline-flex items-center"
          >
            <img src={logo} alt="" className="w-28" />
          </Link>

          <div className="lg:flex justify-between space-x-28">
            <ul className="items-center nav-list hidden space-x-8 lg:flex">
              {menuItems}
            </ul>

            <ul className="lg:flex items-center hidden space-x-5">
              <li className="">
                <Icon icon="ic:round-notifications-active" width={25} />
              </li>

              <li>
                <Icon icon="carbon:user-avatar-filled" width={25} />
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="fixed z-50 w-full transition py-3 duration-500 lg:hidden pr-5">
        <div className="flex justify-end mt-3">
          <button
            aria-label="Open Menu"
            title="Open Menu"
            className="p-2 ml-5 transition duration-200 rounded focus:outline-none focus:shadow-outline
               bg-brand"
            onClick={() => setIsMenuOpen(true)}
          >
            <svg className="w-5 text-regular" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
              />
              <path
                fill="currentColor"
                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
              />
              <path
                fill="currentColor"
                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
              />
            </svg>
          </button>
        </div>
        {isMenuOpen && (
          <div className="absolute top-5 left-0 w-full bg-secondary h-screen overflow-y-auto dropdown-menu">
            <div className="p-5 border shadow-sm  hover:text-primary">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <Link
                    to="/"
                    aria-label="Company"
                    title="Company"
                    className="inline-flex items-center"
                  >
                    <img src={logo} alt="" className="w-32" />
                  </Link>
                </div>
                <div>
                  <button
                    aria-label="Close Menu"
                    title="Close Menu"
                    className="p-2 -mt-2 -mr-2 transition duration-200 rounded focus:bg-gray-200 focus:outline-none focus:shadow-outline "
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <svg className="w-5 text-regular" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <nav className="">
                <ul className="space-y-4">{menuItems}</ul>
              </nav>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default Navbar_two;
