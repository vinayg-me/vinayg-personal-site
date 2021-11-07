import { HTMLAttributes } from 'react';

export interface IContactUs extends HTMLAttributes<HTMLDivElement> {
  data: {
    site: {
      siteMetadata: { title: string; description: string; siteUrl: string };
    };
  };
}
