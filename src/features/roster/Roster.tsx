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

  // Break down command shell and roster shell into separate components for better readability
  return (
    <div className="Shell">
      <div className="CommandShell">
        <p>11:41 am</p>
        <p>Saturday June, 19</p>
        <div className="filterValues">
          <button
            id={rosterFilter === null ? "AllFilter" : null}
            className="filteredButton"
            onClick={() => setRosterFilter(null)}
          >
            All
          </button>
          <button
            id={rosterFilter === "Working" ? "WorkingFilter" : null}
            className="filteredButton"
            onClick={() => setRosterFilter("Working")}
          >
            Working
          </button>
          <button
            id={rosterFilter === "Late" ? "LateFilter" : null}
            className="filteredButton"
            onClick={() => setRosterFilter("Late")}
          >
            Late
          </button>
          <button
            id={rosterFilter === "On Break" ? "BreakFilter" : null}
            className="filteredButton"
            onClick={() => setRosterFilter("On Break")}
          >
            Break
          </button>
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
          // We should not be filtering here, should be handled in redux store and dispatched as the filtered list
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
