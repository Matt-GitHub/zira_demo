import React, { useEffect, useState } from "react";
import "./roster.css";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { Roster } from "../../types/rosters";
import { getRoster, selectRoster, createRosterMember } from "./rosterSlice";
import RosterList from "./RosterList";
import Loading from "../../components/Loading";
import Error from "../../components/Error";

const RosterMembers = () => {
  const { status, errorMessage, value } = useAppSelector(selectRoster);
  const dispatch = useAppDispatch();
  const headers = ["Name", "Clock in", "Clock out", "Breaks", "Status"];
  const [rosterFilter, setRosterFilter] = React.useState<string | null>(null);

  useEffect(() => {
    console.log("fetching", status);
    dispatch(getRoster());
  }, [dispatch]);

  return (
    <div className="Shell">
      <div className="CommandShell">
        <p>11:41 am</p>
        <p>Saturday June, 19</p>
        <div className="filterValues">
          <button onClick={() => setRosterFilter(null)}>All</button>
          <button onClick={() => setRosterFilter("Working")}>Working</button>
          <button onClick={() => setRosterFilter("Late")}>Late</button>
          <button onClick={() => setRosterFilter("On Break")}>Break</button>
        </div>
      </div>
      <div className="RosterTableShell">
        <div className="RosterTableHeaders">
          {headers.map((data, index) => {
            return (
              <div className="RosterTableHeader" key={index}>
                {data}
              </div>
            );
          })}
        </div>
        {status === "loading" ? (
          <Loading />
        ) : status === "failed" ? (
          <Error />
        ) : rosterFilter === null ? (
          value.map((data: Roster) => {
            return (
              <RosterList
                key={data.id}
                data={data}
                status={status}
                errorMessage={errorMessage}
              />
            );
          })
        ) : (
          value
            .filter((data: Roster) => data.status === rosterFilter)
            .map((data: Roster) => {
              return (
                <RosterList
                  key={data.id}
                  data={data}
                  status={status}
                  errorMessage={errorMessage}
                />
              );
            })
        )}
      </div>
    </div>
  );
};

export default RosterMembers;
