import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

export type ButtonType = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  mode: "primary" | "ghost";
  children: ReactNode;
  arrow?: "right" | "down" | "none";
};
