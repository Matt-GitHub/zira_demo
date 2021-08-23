import { Roster } from "types/rosters";

// missing hourly rate and potentially total shift pay. Dates are strings currently and do not allow for actual scheduling
export const rosterInitialState: Roster[] = [
  {
    id: 1,
    name: "Tito Goldstein",
    role: "Dishwasher",
    scheduled_clock_in: "9:00 am",
    scheduled_clock_out: "6:00 pm",
    clock_in: "9:11am",
    clock_out: null,
    breaks: [
      {
        id: 1,
        used: false,
        on_break: false,
        scheduled_duration: 10,
        used_duration: 0
      },
      {
        id: 2,
        used: false,
        on_break: false,
        scheduled_duration: 10,
        used_duration: 0
      },
      {
        id: 3,
        used: false,
        on_break: false,
        scheduled_duration: 10,
        used_duration: 0
      }
    ],
    status: "Late"
  },
  {
    id: 2,
    name: "Alfonso Dias",
    role: "Line Cook",
    scheduled_clock_in: "9:03 am",
    scheduled_clock_out: "6:00 pm",
    clock_in: "9:03 am",
    clock_out: null,
    breaks: [
      {
        id: 1,
        used: true,
        on_break: true,
        scheduled_duration: 10,
        used_duration: 15
      },
      {
        id: 2,
        used: false,
        on_break: false,
        scheduled_duration: 10,
        used_duration: 0
      },
      {
        id: 3,
        used: false,
        on_break: false,
        scheduled_duration: 10,
        used_duration: 0
      }
    ],
    status: "On Break"
  },
  {
    id: 3,
    name: "Abram Curtis",
    role: "Front Desk",
    scheduled_clock_in: "9:40 am",
    scheduled_clock_out: "12:00 am",
    clock_in: "9:40 am",
    clock_out: null,
    breaks: [
      {
        id: 1,
        used: true,
        on_break: true,
        scheduled_duration: 10,
        used_duration: 6
      },
      {
        id: 2,
        used: false,
        on_break: false,
        scheduled_duration: 10,
        used_duration: 0
      },
      {
        id: 3,
        used: false,
        on_break: false,
        scheduled_duration: 10,
        used_duration: 0
      }
    ],
    status: "On Break"
  },
  {
    id: 4,
    name: "Marley Mango",
    role: "Lin Cook",
    scheduled_clock_in: "12:00 am",
    scheduled_clock_out: "8:00 pm",
    clock_in: "12:00 am",
    clock_out: null,
    breaks: [
      {
        id: 1,
        used: false,
        on_break: false,
        scheduled_duration: 10,
        used_duration: 0
      },
      {
        id: 2,
        used: false,
        on_break: false,
        scheduled_duration: 10,
        used_duration: 0
      }
    ],
    status: "Working"
  },
  {
    id: 5,
    name: "Alfonso Dias",
    role: "Front Desk",
    scheduled_clock_in: "9:00 am",
    scheduled_clock_out: "6:00 pm",
    clock_in: "9:00 am",
    clock_out: null,
    breaks: [
      {
        id: 1,
        used: false,
        on_break: false,
        scheduled_duration: 10,
        used_duration: 0
      },
      {
        id: 2,
        used: false,
        on_break: false,
        scheduled_duration: 10,
        used_duration: 0
      }
    ],
    status: "Working"
  },
  {
    id: 6,
    name: "Matthew Bedard",
    role: "Frontend Engineer",
    scheduled_clock_in: "9:00 am",
    scheduled_clock_out: "5:30 pm",
    clock_in: "9:00 am",
    clock_out: null,
    breaks: [
      {
        id: 1,
        used: false,
        on_break: false,
        scheduled_duration: 10,
        used_duration: 0
      },
      {
        id: 2,
        used: false,
        on_break: false,
        scheduled_duration: 10,
        used_duration: 0
      }
    ],
    status: "Not Started"
  },
  {
    id: 7,
    name: "Xiaochao Yang",
    role: "CTO",
    scheduled_clock_in: "8:00 am",
    scheduled_clock_out: "8:00 pm",
    clock_in: "8:00 am",
    clock_out: "8:00 pm",
    breaks: [
      {
        id: 1,
        used: false,
        on_break: false,
        scheduled_duration: 10,
        used_duration: 0
      },
      {
        id: 2,
        used: false,
        on_break: false,
        scheduled_duration: 10,
        used_duration: 0
      },
      {
        id: 3,
        used: false,
        on_break: false,
        scheduled_duration: 10,
        used_duration: 0
      }
    ],
    status: "Clocked out"
  }
];
