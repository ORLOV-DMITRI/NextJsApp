import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export enum PSize {
  small = 14,
  medium = 16,
  lage = 18,
}

export type PType = DetailedHTMLProps<
  HTMLAttributes<HTMLParagraphElement>,
  HTMLParagraphElement
> & {
  children: ReactNode;
  size?: PSize;
};
