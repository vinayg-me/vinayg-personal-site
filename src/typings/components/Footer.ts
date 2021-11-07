import { HTMLAttributes, ReactChild } from "react";

export interface IFooter extends HTMLAttributes<HTMLDivElement> {
  /* custom content, defaults to 'this is a placeholder for Footer component' */
  children?: ReactChild;
}
