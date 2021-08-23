import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Roster } from "types/rosters";
import { RootState } from "../../app/store";
import { fetchRoster, addRosterMember } from "./rosterAPI";

export interface RosterState {
  value: Roster[];
  status: "idle" | "loading" | "failed";
  errorMessage: string | null;
}

const initialState: RosterState = {
  value: [],
  status: "idle",
  errorMessage: null
};

export const getRoster = createAsyncThunk(
  "roster/getRoster",
  async (): Promise<Roster[]> => {
    // response would be successful post request that returns our newly added roster member **await does nothing here**
    const { data } = await fetchRoster();
    return data;
  }
);

export const createRosterMember = createAsyncThunk(
  "roster/createRosterMember",
  async (data: Roster): Promise<Roster> => {
    // axios.post('url/createRosterMember', data)
    // response would be successful post request that returns our newly added roster member **await does nothing here**
    const { member } = await addRosterMember(data);
    return member;
  }
);

export const rosterSlice = createSlice({
  name: "roster",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getRoster.pending, state => {
      state.status = "loading";
    });
    builder.addCase(getRoster.rejected, (state, action) => {
      state.status = "failed";
      state.errorMessage = "Failed";
      console.log("state", state, "action", action);
    });
    builder.addCase(getRoster.fulfilled, (state, action) => {
      state.status = "idle";
      state.value = action.payload;
    });
    builder.addCase(createRosterMember.rejected, (state, action) => {
      state.status = "failed";
      state.errorMessage = "Failed";
      console.log("state", state, "action", action);
    });
    builder.addCase(createRosterMember.fulfilled, (state, action) => {
      state.status = "idle";
      state.value = [...state.value, action.payload];
    });
  }
});

export const selectRoster = (state: RootState) => state.roster;
export default rosterSlice.reducer;
