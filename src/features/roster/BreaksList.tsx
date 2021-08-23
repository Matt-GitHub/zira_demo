import React from "react";
import { Breaks } from "../../types/breaks";

interface BreakProps {
  breakPeriod: Breaks;
}

const BreaksList = ({ breakPeriod }: BreakProps) => {
  const longBreak =
    breakPeriod.scheduled_duration < breakPeriod.used_duration &&
    breakPeriod.used === true
      ? true
      : false;
  const shortBreak =
    breakPeriod.scheduled_duration > breakPeriod.used_duration &&
    breakPeriod.used === true
      ? true
      : false;
  const breakUsedAndBackToWork =
    breakPeriod.used === true && breakPeriod.on_break === false ? true : false;

  return (
    <div
      className={
        longBreak
          ? "break long"
          : null || shortBreak
          ? "break short"
          : null || breakUsedAndBackToWork
          ? "break over"
          : null || "break"
      }
    >
      {breakPeriod.scheduled_duration}
    </div>
  );
};

export default BreaksList;
