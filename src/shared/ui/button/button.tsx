import { clsx } from "clsx";
import { FC } from "react";
import ArrowIcon from "../../assets/svg/arrow.svg";
import styles from "./button.module.css";
import { ButtonType } from "./type";

export const Button: FC<ButtonType> = ({
  mode,
  children,
  className,
  arrow = "none",
  ...props
}) => {
  const hasArrow = arrow === "none" ? false : true;

  const displayArrow = () => {
    return (
      <span
        className={clsx(styles.arrow, {
          [styles.down]: arrow === "down",
        })}
      >
        <ArrowIcon />
      </span>
    );
  };

  return (
    <button
      className={clsx(styles.button, className, {
        [styles.primary]: mode === "primary",
        [styles.ghost]: mode === "ghost",
      })}
      {...props}
    >
      {children}
      {hasArrow && displayArrow()}
    </button>
  );
};
