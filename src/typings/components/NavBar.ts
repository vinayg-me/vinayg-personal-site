import { HTMLAttributes, ReactChild } from "react";

export interface INavBar extends HTMLAttributes<HTMLDivElement> {
  /* custom content, defaults to 'this is a placeholder for NavBar component' */
  children?: ReactChild;
}
