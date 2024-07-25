import React, { useState } from "react";
import { Link } from "react-router-dom";
import less from "../assets/less-than.png";
import logo from "../assets/logo.jpg";
import { MdAdminPanelSettings, MdDashboard } from "react-icons/md";
import { FaWallet } from "react-icons/fa6";
import StackTable from "../Pages/Table/StackTable";
import { IoBarChartSharp } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";
import { FaHandsHelping } from "react-icons/fa";
import Grid1 from "../Components/Grid/Grid1";

import Grid3 from "../Components/Grid/Grid3";
import Grid4 from "../Components/Grid/Grid4";
import RegisteredUserChart from "../Pages/Chart/UserChart";


function Navbar() {

  
  const [open, setOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState({});

  const [filter, setFilter] = useState('all');
  const [emailFilter, setEmailFilter] = useState('all');

  const menus = [
    {
      title: "Dashboard",
      src: <MdDashboard />,
      url: "/",
      submenu: [
        {
          title: "User Management",
          url: "",
          submenu: [
            { title: "Ticket Management", url: "" },
            { title: "Blog Management", url: "" },
            { title: "CMS Management", url: "" },
            { title: "Email Management", url: "" },
            { title: "Admin Banks Management", url: "" },
            { title: "Career Management", url: "" },
            { title: "P2P Order", url: "" },
            { title: "P2P Payments", url: "" },
          ],
        },
        { title: "Assets Management", url: "" },
        { title: "Assets Transactions", url: "" },
        { title: "Orders Management", url: "" },
        { title: "Bank Management", url: "" },
        { title: "Block Management", url: "" },
      ],
    },
    { title: "Chart", url: "/chart", src: <IoBarChartSharp /> },

    { title: "Master Wallet", url: "", src: <FaWallet /> },
    { title: "Sub Admin", url: "", src: <MdAdminPanelSettings /> },
    { title: "Settings", url: "", src: <IoMdSettings /> },
    { title: "Help", url: "", src: <FaHandsHelping /> },
  ];

  const toggleSubMenu = (index) => {
    setOpenSubMenu((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const renderSubMenu = (submenus, parentIndex) => {
    return (
      <ul className={`pl-4 ${!open && "hidden"}`}>
        {submenus.map((submenu, subIndex) => {
          const currentIndex = `${parentIndex}-${subIndex}`;
          return (
            <React.Fragment key={currentIndex}>
              <li
                className="text-gray-300 text-sm flex gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md items-center"
                onClick={() => submenu.submenu && toggleSubMenu(currentIndex)}
              >
                <p>{submenu.title}</p>
                {submenu.submenu && open && (
                  <span className="ml-auto">
                    {openSubMenu[currentIndex] ? "-" : "+"}
                  </span>
                )}
              </li>
              {submenu.submenu &&
                openSubMenu[currentIndex] &&
                renderSubMenu(submenu.submenu, currentIndex)}
            </React.Fragment>
          );
        })}
      </ul>
    );
  };

  return (
    <div className="flex">
      <div
        className={` ${
          open ? "w-72" : "w-20"
        } h-auto duration-300 bg-dark-purple relative p-5 pt-8`}
      >
        <img
          src={less}
          className={`absolute cursor-pointer -right-3 top-9 w-7 rounded-full border-2 bg-white border-dark-purple ${
            !open && "rotate-180"
          }`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <img
            src={logo}
            alt=""
            className={`w-16 cursor-pointer duration-500 rounded-xl ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-white origin-left text-xl font-bold duration-300 ${
              !open && "scale-0"
            }`}
          >
            Exchange
          </h1>
        </div>
        <ul className="pt-6">
          {menus.map((menu, index) => (
            <React.Fragment key={index}>
              <Link to={menu.url || "#"} className="menu-link">
                <li
                  className={`text-gray-300 text-lg flex gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md items-center ${
                    index === 0 && "bg-light-white"
                  }`}
                  onClick={() => menu.submenu && toggleSubMenu(index)}
                >
                  <span
                    className={`origin-left duration-200 ${
                      !open ? "display" : ""
                    }`}
                  >
                    {menu.src}
                  </span>
                  <p className={`${!open ? "hidden" : ""}`}>{menu.title}</p>
                  {menu.submenu && open && (
                    <span className="ml-auto">
                      {openSubMenu[index] ? "-" : "+"}
                    </span>
                  )}
                </li>
              </Link>
              {menu.submenu &&
                openSubMenu[index] &&
                renderSubMenu(menu.submenu, index)}
            </React.Fragment>
          ))}
        </ul>
      </div>
      <div className="p-7  flex-1">
        <div className="grid grid-cols-1 xs:grid-cols-4 md:grid-cols-4 gap-4 ">
          <Grid1 filter={filter} setFilter={setFilter} emailFilter={emailFilter} setEmailFilter={setEmailFilter} />
          {/* <Grid2 />  */}
          <Grid3 />
          <Grid4 />
        </div>
        <div className="overflow-x-clip">
          <RegisteredUserChart /> 
          <StackTable  filter={filter} emailFilter={emailFilter} />
        </div> 
      </div>
    </div>
  );
}

export default Navbar;
