import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const [selected, setSelected] = useState(location.pathname);

  const handleSelect = (path) => {
    setSelected(path);
  };

  return (
    <div className="flex lg:flex-row flex-row py-4 lg:px-16 px-1 items-center lg:justify-normal justify-around lg:gap-12 gap-1 text-gray-500">
      <NavLink
        exact
        to="/"
        className={`font-medium rounded-lg lg:text-sm text-[10px] lg:px-8 px-2 py-2.5 me-2 mb-2 focus:outline-none ${
          selected === "/" ? "bg-[#BE0CE7] text-white" : "text-gray-700"
        }`}
        onClick={() => handleSelect("/")}
      >
        Home
      </NavLink>
      <NavLink
        to="/ShopPage"
        className={`font-medium rounded-lg lg:text-sm text-[10px] lg:px-8 px-2 py-2.5 me-2 mb-2 focus:outline-none ${
          selected === "/ShopPage" ? "bg-[#BE0CE7] text-white" : "text-gray-700"
        }`}
        onClick={() => handleSelect("/ShopPage")}
      >
        Shop
      </NavLink>
      {/* <NavLink
        to="/subscribe"
        className={`font-medium rounded-lg lg:text-sm text-[10px] lg:px-8 px-2 py-2.5 me-2 mb-2 focus:outline-none ${
          selected === "/subscribe"
            ? "bg-[#BE0CE7] text-white"
            : "text-gray-700"
        }`}
        onClick={() => handleSelect("/subscribe")}
      >
        Subscribe
      </NavLink> */}
      <NavLink
        to="/MyAccount"
        className={`font-medium rounded-lg lg:text-sm text-[10px] lg:px-8 px-2 py-2.5 me-2 mb-2 focus:outline-none ${
          selected === "/MyAccount"
            ? "bg-[#BE0CE7] text-white"
            : "text-gray-700"
        }`}
        onClick={() => handleSelect("/MyAccount")}
      >
        Account
      </NavLink>
    </div>
  );
};

export default Header;
