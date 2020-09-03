import React from "react";
import "./navigation.scss";
import { SideBar } from "./sidebar";
import { TopBar } from "./topBar";

export const Navigation = () => {
  const width = window.innerWidth;

  const menuDecide = () => {
    if (width <= 1050) return <SideBar />;
    return <TopBar />;
  };
  return <div className="nav">{menuDecide()}</div>;
}
