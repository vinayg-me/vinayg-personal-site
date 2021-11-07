import { HTMLAttributes } from 'react';

export interface IBlogs extends HTMLAttributes<HTMLDivElement> {
  data: {
    site: {
      siteMetadata: { title: string; description: string; siteUrl: string };
    };
  };
}
