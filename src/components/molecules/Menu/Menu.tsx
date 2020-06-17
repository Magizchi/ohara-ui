import React, { useState } from "react";
import { Link } from "react-router-dom";

interface Menus {
  listMenu: Array<{
    menu: string;
    nav: Array<{ link: string; nav: string }>;
  }>;
}

const Menu = (props: Menus) => {
  const [over, setOver] = useState();

  const renderMenu = () => {
    return props.listMenu.map((menu, index) => (
      <div
        key={index}
        onMouseEnter={() => setOver(index)}
        onMouseLeave={() => setOver(null)}
        style={{ maxWidth: "112px" }}
      >
        <div className="flex justify-center items-center w-24 h-8 mr-2 ml-2 pt-2 font-bold text-orange-500 flex-col hover:bg-orange-500 hover:text-indigo-900">
          <p className="cursor-pointer">{menu.menu}</p>
        </div>
        <div
          style={over === index ? { display: "block" } : { display: "none" }}
          className="flex justify-center w-40 mx-2 items-center w-24 flex-col bg-orange-500 z-10 absolute"
        >
          {menu.nav.map((nav, index) => (
            <label
              key={index}
              className="flex items-center justify-around w-full border-2 border-orange-500 hover:border-indigo-900 hover:bg-gray-900 hover:text-orange-500"
            >
              <Link to={nav.link} className="mt-2 mb-2 pr-2 w-32">
                {nav.nav}
              </Link>
              <i className="fas fa-chevron-right w-2"></i>
            </label>
          ))}
        </div>
      </div>
    ));
  };
  return <>{renderMenu()}</>;
};

export default Menu;
