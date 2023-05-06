import {NavLink} from "react-router-dom";
import * as React from "react";

interface Props {
  to: string,
  children: React.ReactNode
}

export const NavLinkActive = ({to, children}: Props) => {
  return (
    <NavLink
      to={to}
      className={isActive => isActive ? "active" : ""}
      children={children}
    ></NavLink>
  )
}
