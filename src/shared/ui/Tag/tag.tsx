import clsx from "clsx";
import { FC } from "react";
import styles from "./tag.module.css";
import { TagMode, TagType } from "./type";

export const Tag: FC<TagType> = ({
  children,
  mode,
  className,
  href,
  ...props
}) => {
  return (
    <div
      className={clsx(styles.tag, className, {
        [styles.sale]: mode === TagMode.sale,
        [styles.counter]: mode === TagMode.counter,
        [styles.vacancies]: mode === TagMode.vacancies,
        [styles.primary]: mode === TagMode.primary,
        [styles.secondary]: mode === TagMode.secondary,
      })}
      {...props}
    >
      {href ? <a href={href}>{children}</a> : <>{children}</>}
      {mode === TagMode.sale && <span>₽</span>}
    </div>
  );
};
