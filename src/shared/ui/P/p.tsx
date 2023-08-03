import clsx from "clsx";
import { FC } from "react";
import styles from "./p.module.css";
import { PSize, PType } from "./type";

export const P: FC<PType> = ({
  children,
  size = PSize.medium,
  className,
  ...props
}) => {
  return (
    <p
      className={clsx(styles.p, className, {
        [styles.small]: size == PSize.small,
        [styles.medium]: size == PSize.medium,
        [styles.large]: size == PSize.lage,
      })}
      {...props}
    >
      {children}
    </p>
  );
};
