import React, { useEffect } from "react";
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

  useEffect(() => {
    console.log("fetching", status);
    dispatch(getRoster());
  }, [dispatch]);

  return (
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
      ) : (
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
      )}
    </div>
  );
};

export default RosterMembers;
