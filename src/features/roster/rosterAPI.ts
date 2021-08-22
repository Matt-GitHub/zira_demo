//mock function making an async request for roster
import { Roster } from "../../types/rosters";

const initialState: Roster[] = [
  {
    id: 1,
    name: "Matthew Bedard",
    role: "Line Cook",
    scheduled_check_in: "6am",
    scheduled_check_out: "9pm",
    check_in: "6am",
    check_out: null,
    status: "Working"
  }
];

export function fetchRoster(seed = initialState) {
  return new Promise<{ data: Roster[] }>(resolve =>
    setTimeout(() => resolve({ data: seed }), 500)
  );
}

export function addRosterMember(data: Roster) {
  return new Promise<{ member: Roster }>(resolve =>
    setTimeout(() => resolve({ member: data }), 1000)
  );
}
