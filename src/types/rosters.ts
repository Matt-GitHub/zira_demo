import { Breaks } from "./breaks";

export type Roster = {
  id: number;
  name: string;
  role: string;
  scheduled_clock_in: string;
  scheduled_clock_out: string;
  clock_in: string | null;
  clock_out: string | null;
  breaks: Breaks[];
  status: "Working" | "Late" | "On Break" | "Not Started" | "Clocked out";
};
