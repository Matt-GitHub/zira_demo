import React from "react";
import Status from "../../components/Status";
import { Breaks } from "../../types/breaks";
import { Roster } from "../../types/rosters";
import BreaksList from "./BreaksList";

interface RosterProps {
  data: Roster;
  status: "idle" | "loading" | "failed";
  errorMessage?: string;
}
const RosterList = ({ data }: RosterProps) => {
  return (
    <div className="RosterTableList">
      <div className="RosterName">
        <img
          src="https://images.squarespace-cdn.com/content/v1/51ed71ede4b07c014204a0a8/1611350792838-FP30P2I0AK7S99DT5527/1.png"
          alt="photo"
        />
        <div className="RosterNameData">
          {data.name}
          <br />
          {data.role}
        </div>
      </div>
      <div>{data.scheduled_clock_in}</div>
      <div>{data.scheduled_clock_out}</div>
      <div className="BreakShell">
        {data.breaks.map((breakPeriod: Breaks) => {
          return <BreaksList key={breakPeriod.id} breakPeriod={breakPeriod} />;
        })}
      </div>
      <div className="StatusShell">
        <Status data={data} />
      </div>
    </div>
  );
};

export default RosterList;
