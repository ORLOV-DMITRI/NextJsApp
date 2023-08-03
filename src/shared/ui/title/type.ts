import { ReactNode } from "react";

type TagType = "h1" | "h2" | "h3";

export type TitlePropsType = {
  tag: TagType;
  children: ReactNode;
};
