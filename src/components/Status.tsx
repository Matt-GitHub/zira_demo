import React from "react";
import { Roster } from "../types/rosters";

interface StatusProps {
  data: Roster;
}

const Status = ({ data }: StatusProps) => {
  let statusCheck: string | null;
  if (data.status === "On Break") {
    data.breaks.forEach(breakStatus => {
      if (
        breakStatus.on_break === true &&
        breakStatus.used_duration > breakStatus.scheduled_duration
      ) {
        statusCheck = "onBreakLong";
      } else if (
        breakStatus.on_break === true &&
        breakStatus.used_duration < breakStatus.scheduled_duration
      ) {
        statusCheck = "onBreakShort";
      }
    });
  } else if (data.status === "Working") {
    statusCheck = "Working";
  } else if (data.status === "Clocked out") {
    statusCheck = "ClockedOut";
  } else if (data.status === "Late") {
    statusCheck = "Late";
  } else {
    statusCheck = "NotStarted";
  }

  return <div className={`status ${statusCheck}`}>{data.status}</div>;
};

export default Status;
