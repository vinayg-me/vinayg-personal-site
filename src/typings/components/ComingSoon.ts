import { HTMLAttributes, ReactChild } from "react";

export interface IComingSoon extends HTMLAttributes<HTMLDivElement> {
  /* custom content, defaults to 'this is a placeholder for ComingSoon component' */
  children?: ReactChild;
}
