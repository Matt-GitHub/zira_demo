export type Roster = {
  id: number;
  name: string;
  role: string;
  scheduled_check_in: string;
  scheduled_check_out: string;
  check_in: string | null;
  check_out: string | null;
  status: "Working" | "Late" | "On Break" | "Not Started" | "Clocked out";
};
