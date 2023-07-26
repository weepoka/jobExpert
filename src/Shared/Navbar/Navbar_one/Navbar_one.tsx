import { useState } from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import logo from "../../../assets/brandLogo/navloogo.png";
import "./Navbar_one.css";

const Navbar_one = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    <>
      <li>
        <a
          href="/"
          aria-label="Our product"
          title="Our product"
          className="text-base"
        >
          চাকরি প্রস্তুতি
        </a>
      </li>
      <li>
        <a
          href="/"
          aria-label="Our product"
          title="Our product"
          className="text-base"
        >
          ভর্তি পরিক্ষা
        </a>
      </li>
      <li>
        <a
          href="/"
          aria-label="Product pricing"
          title="Product pricing"
          className="text-base"
        >
          আমাদের সম্পর্কে
        </a>
      </li>
      <li>
        <a
          href="/"
          aria-label="About us"
          title="About us"
          className="text-base"
        >
          যোগাযোগ
        </a>
      </li>
    </>,
  ];

  return (
    <div className="bg-[#EAE9E9] ">
      <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="relative flex items-center justify-between">
          {/* company logo goes here */}
          <Link
            to="/"
            aria-label="Company"
            title="Company"
            className="inline-flex items-center w-[100.154px]"
          >
            <img src={logo} alt="" className="" />
          </Link>

          {/* nav items goes here */}
          <ul className=" hidden space-x-8 lg:flex">{navItems}</ul>

          {/* login and phone number goes here */}
          <ul className="items-center hidden space-x-8 lg:flex">
            {/* search form */}
            <form>
              <div className="relative text-gray-600 focus-within:text-gray-400">
                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                  <button
                    type="submit"
                    className="p-1 focus:outline-none focus:shadow-outline text-[#808080]"
                  >
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      className="w-6 h-6"
                    >
                      <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                  </button>
                </span>
                <input
                  type="search"
                  name="search"
                  className="py-2 text-sm text-white bg-gray-900 rounded-md pl-10 focus:outline-none focus:bg-white focus:text-gray-900"
                  placeholder="Search..."
                />
              </div>
            </form>

            {/* phone number */}
            <li className="flex items-center gap-2">
              <Icon icon="ph:phone" width={25} />
              <a href="tel:+880 1700-000000">+880 1700-000000</a>
            </li>

            {/* login button */}
            <li className="transition duration-500 ease-in-out hover:scale-105">
              <Link
                to="/signin"
                className="bg-primary text-[#FFFFFF] px-4 py-3 rounded-lg text-base "
                aria-label="Sign In"
                title="Sign In"
              >
                লগ-ইন করুন
              </Link>
            </li>
          </ul>

          {/* hamburger button */}
          <div className="lg:hidden">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
              onClick={() => setIsMenuOpen(true)}
            >
              <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
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

            {/* mobile responsive */}
            {isMenuOpen && (
              <div className="absolute top-0 left-0 w-full bg-[#FFFFFF] dropdown-menu-open">
                <div className="p-5 bg-white border rounded shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <Link
                        to="/"
                        aria-label="Company"
                        title="Company"
                        className="inline-flex items-center w-[100.154px]"
                      >
                        <img src={logo} alt="" className="" />
                      </Link>
                    </div>

                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline "
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul className="space-y-4">
                      {/* search form */}
                      <form className="">
                        <div className="relative focus-within:text-gray-400 ">
                          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                            <button
                              type="submit"
                              className="p-1 focus:outline-none focus:shadow-outline "
                            >
                              <svg
                                fill="none"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                viewBox="0 0 24 24"
                                className="w-6 h-6"
                              >
                                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                              </svg>
                            </button>
                          </span>
                          <input
                            type="search"
                            name="search"
                            className="py-2 text-sm text-white bg-gray-900 rounded-md pl-10 focus:outline-none focus:bg-white focus:text-gray-900 bg-[#808080]"
                            placeholder="Search..."
                          />
                        </div>
                      </form>
                      {navItems}
                      <li className="transition duration-500 ease-in-out hover:scale-105">
                        <Link
                          to="/signin"
                          className="bg-primary text-[#FFFFFF] px-4 py-3 rounded-lg text-base "
                          aria-label="Sign In"
                          title="Sign In"
                        >
                          লগ-ইন করুন
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar_one;
