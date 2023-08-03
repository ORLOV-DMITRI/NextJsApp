import { DetailedHTMLProps, HTMLAttributes } from "react";

export type RaitingType = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  isEditable?: boolean;
  raiting: number;
  setRaiting?: (raiting: number) => void;
};
