//mock function making an async request for roster
import { Roster } from "../../types/rosters";
import { rosterInitialState } from "./rosterInitialState";

const initialState: Roster[] = [...rosterInitialState];

export async function fetchRoster(seed = initialState) {
  return new Promise<{ data: Roster[] }>(resolve =>
    setTimeout(() => resolve({ data: seed }), 1000)
  );
}

export function addRosterMember(data: Roster) {
  return new Promise<{ member: Roster }>(resolve =>
    setTimeout(() => resolve({ member: data }), 1000)
  );
}
