import React from "react";
import * as FaIcons from "react-icons/fa";

export const SidebarData = [
  {
    title: "Students",
    path: "/",
    icon: <FaIcons.FaRegUser />,
    cName: "nav-text",
  },
  {
    title: "Lesson Plan",
    path: "/learn",
    icon: <FaIcons.FaRegListAlt />,
    cName: "nav-text",
  },
  {
    title: "Settings",
    path: "/settings",
    icon: <FaIcons.FaRegSun />,
    cName: "nav-text",
  },
];
