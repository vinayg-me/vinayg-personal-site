import { HTMLAttributes, ReactChild } from "react";

export interface ILanding extends HTMLAttributes<HTMLDivElement> {
  /* custom content, defaults to 'this is a placeholder for Landing component' */
  children?: ReactChild;
}
