import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export enum TagColor {
  green,
  ghost,
  primary,
  red,
  gray,
}
export enum TagMode {
  sale,
  counter,
  vacancies,
  primary,
  secondary,
}

export type TagType = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  children: ReactNode;
  color?: TagColor;
  mode: TagMode;
  href?: string;
};
