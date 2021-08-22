import React, { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { Roster } from "../../types/rosters";
import { getRoster, selectRoster, createRosterMember } from "./rosterSlice";
const RosterMembers = () => {
  const { status, errorMessage, value } = useAppSelector(selectRoster);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getRoster());
    console.log("fetching");
  }, [dispatch]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed" || errorMessage !== null) {
    return <div>Problem fetching Data</div>;
  }

  if (status === "idle") {
    return (
      <div>
        {value.map((data: Roster) => {
          return <div key={data.id}>{data.name}</div>;
        })}
        <button
          onClick={() =>
            dispatch(
              createRosterMember({
                id: 2,
                name: "Hannah Graham",
                role: "Line Cook",
                scheduled_check_in: "6am",
                scheduled_check_out: "9pm",
                check_in: "6am",
                check_out: null,
                status: "Working"
              })
            )
          }
        >
          Add Member
        </button>
      </div>
    );
  }
};

export default RosterMembers;
