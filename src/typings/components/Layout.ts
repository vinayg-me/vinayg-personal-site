import { HTMLAttributes, ReactChild } from "react";

export interface ILayout extends HTMLAttributes<HTMLDivElement> {
  /* custom content, defaults to 'this is a placeholder for Layout component' */
  children?: ReactChild;
}
