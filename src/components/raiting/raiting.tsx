"use client";
import StarIcon from "@/shared/assets/svg/star.svg";
import clsx from "clsx";
import { FC, KeyboardEvent, useEffect, useState } from "react";
import styles from "./raiting.module.css";
import { RaitingType } from "./type";

export const Raiting: FC<RaitingType> = ({
  raiting,
  setRaiting,
  isEditable,
  ...props
}) => {
  const [raitingArray, setRaitingArray] = useState<JSX.Element[]>(
    new Array(5).fill(<></>),
  );

  useEffect(() => {
    constactRaiting(raiting);
  }, [raiting]);

  const constactRaiting = (currentRaiting: number) => {
    const updatedArray = raitingArray.map((r, index) => {
      return (
        <span
          className={clsx(styles.star, {
            [styles.filled]: index < currentRaiting,
            [styles.editable]: isEditable,
          })}
          onMouseEnter={() => handleEditRaiting(index + 1)}
          onMouseLeave={() => handleEditRaiting(raiting)}
          onClick={() => handleSaveRaiting(index + 1)}
        >
          <StarIcon
            tabIndex={isEditable ? 0 : -1}
            onKeyDown={(e: KeyboardEvent<SVGAElement>) =>
              isEditable && handleSpaceDown(index + 1, e)
            }
          />
        </span>
      );
    });
    setRaitingArray(updatedArray);
  };
  const handleSpaceDown = (index: number, e: KeyboardEvent<SVGAElement>) => {
    if (!isEditable || !setRaiting) {
      return;
    }
    if (e.code != "Space") {
      return;
    }
    setRaiting(index);
  };
  const handleEditRaiting = (index: number) => {
    if (!isEditable) {
      return;
    }
    constactRaiting(index);
  };
  const handleSaveRaiting = (index: number) => {
    if (!isEditable || !setRaiting) {
      return;
    }
    setRaiting(index);
  };

  return (
    <div {...props}>
      {raitingArray.map((raiting, index) => (
        <span key={index}>{raiting}</span>
      ))}
    </div>
  );
};
